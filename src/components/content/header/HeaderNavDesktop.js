import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showUserPop } from '../../../actions/ui';

import Logo from '../../../assets/images/sospechar-no-falla_logo.png';
import UserIcon from '../../../assets/images/icono-perfil.png';
import HiIcon from '../../../assets/images/hi-icon.png';
import UpdateIcon from '../../../assets/images/update-icon.png';
import StarIcon from '../../../assets/images/star-icon.png';
import LogOutIcon from '../../../assets/images//logOut-icon.png';

import './headerdesktop.css';
import { logOut } from '../../../actions/auth';

import $ from 'jquery';

const HeaderNavDesktop = ({ location }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [showOptions, setShowOptions] = useState(false);
    const { data } = useSelector(state => state.auth);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    const handleScroll = (section) => {
        if (
            location.pathname.includes('diagnostico') ||
            location.pathname.includes('seguimiento') ||
            location.pathname.includes('compartido') ||
            location.pathname.includes('favoritos') ||
            location.pathname.includes('terminos-y-condiciones') ||
            location.pathname.includes('politicas-de-cookies') ||
            location.pathname.includes('privacidad-de-datos')
        ) history.push('/contenido-para-profesionales');

        if (section === 'inicio') {
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            }, 400);
        } else {
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: $(`#section-${section}`).offset().top
                }, 1000);
            }, 400);
        }
    }

    return (
        <div className='contentheaderdesktop'>
            <div className='contetnheader_logo-section'>
                <div className='contentheaderdesktop_logo-wrapper'>
                    <img src={Logo} alt='sospechar no falla - logo' />
                </div>
                <h4>Contenido para todos</h4>
            </div>
            <div className='contentheaderdesktop_nav-wrapper'>
                <ul>
                    <li className='contentheaderdesktop_active-item' onClick={() => handleScroll('inicio')}>
                        <span>Inicio</span>
                    </li>
                    <li>
                        <span>Generalidades</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div onClick={() => handleScroll(1)}>
                                ¿Que es <br />la falla cardíaca?
                            </div>
                            <div onClick={() => handleScroll(2)}>
                                Datos curiosos <br />sobre la falla cardíaca
                            </div>
                        </div>
                    </li>
                    <li>
                        <span onClick={() => handleScroll(3)}>Síntomas <br /> y signos</span>

                        <div className='contentheaderdesktop_subsection'>
                            {/* <div onClick={() => handleScroll(3)}>
                                Mini serie - Casos clínicos
                            </div> */}
                        </div>
                    </li>
                    <li>
                        <span>Diagnóstico</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div onClick={() => handleScroll(4)}>
                                ¿Cómo se clasifica <br /> la falla cardíaca?
                            </div>
                            <div onClick={() => handleScroll(4)}>
                                ¿Cuáles son los criterios<br /> de diagnóstico <br />  de la falla cardíaca?
                            </div>
                            <div onClick={() => handleScroll(4)}>
                                ¿Qué herramientas<br />diagnósticas son útiles <br /> para detectar la falla cardíaca?
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>Seguimiento</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div onClick={() => handleScroll(5)}>
                                Para paciente
                            </div>
                            <div onClick={() => handleScroll(5)}>
                                Para familiares <br /> y cuidadores
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>Conciencia <br /> y prevención</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div onClick={() => handleScroll(6)}>
                                Otras enfermedades<br />comunes en el paciente<br />con la falla cardíaca
                            </div>
                            <div onClick={() => handleScroll(6)}>
                                Prevención de <br /> la falla cardíaca
                            </div>
                            <div onClick={() => handleScroll(6)}>
                               Seamos conscientes
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNavDesktop;