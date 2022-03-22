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

import './headerMobile.css';
import { logOut } from '../../../actions/auth';

import $ from 'jquery';

const HeaderNavMobile = ({ location }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleScroll = (section) => {

        if (
            location.pathname.includes('diagnostico') ||
            location.pathname.includes('compartido') ||
            location.pathname.includes('seguimiento') ||
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


    const [openedMenu, setOpenedMenu] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const { data } = useSelector(state => state.auth);

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <>
            <div className='contentheadermobile'>
                <div className='contetnheader_logo-section'>
                    <div className='contentheadermobile_logo-wrapper'>
                        <img src={Logo} alt='sospechar no falla - logo' />
                    </div>
                    <h4>Profesionales de la salud</h4>
                </div>
                {/* <div className='contentheadermobile_right-section'>
                    <div className={showOptions ? 'contentheadermobile_profile-pic triangleMobile' : 'contentheadermobile_profile-pic'}>
                        <img
                            src={UserIcon} alt='foto perfil de usuario'
                            onClick={() => setShowOptions(!showOptions)}
                        />
                    </div>

                    {
                        showOptions &&
                        <div className='contentheadermobile_profile-dropdown'>
                            <ul>
                                <li>
                                    <img src={HiIcon} alt='icon' />
                                    <span>Hola, {data.name} {data.last_name}</span>
                                </li>
                                <li onClick={() => dispatch(showUserPop())}>
                                    <img src={UpdateIcon} alt='icon' />
                                    <span>Actualizar datos personales</span>
                                </li>
                                <li
                                    onClick={() => {
                                        history.push('/contenido-para-profesionales/mis-favoritos');
                                        handleScroll('favoritos');
                                    }}
                                >
                                    <img src={StarIcon} alt='icon' />
                                    <span>Mis favoritos</span>
                                </li>
                                <li
                                    onClick={handleLogOut}
                                >
                                    <img src={LogOutIcon} alt='icon' />
                                    <span>Cerrar sesión</span>
                                </li>
                            </ul>
                        </div>
                    }
                </div> */}
                <button
                    className='contentheadermobile_open-menu'
                    onClick={() => setOpenedMenu(true)}
                >
                    MENÚ
                </button>
            </div>

            <div
                className='contentheadermobile_nav-wrapper'
                onClick={() => setOpenedMenu(false)}
                style={openedMenu ? { display: 'block' } : { display: 'none' }}
            >
                <ul>
                    <li className='contenthedermobile_active-item' onClick={() => handleScroll('inicio')}>
                        <span>Inicio</span>
                    </li>
                    <li onClick={() => handleScroll(1)}>
                        <span>Generalidades</span>
                    </li>
                    <li onClick={() => handleScroll(3)}>
                        <span>Síntomas <br /> y signos</span>
                    </li>
                    <li onClick={() => handleScroll(4)}>
                        <span>Diagnóstico</span>
                    </li>
                    <li onClick={() => handleScroll(5)}>
                        <span>Seguimiento</span>
                    </li>
                    <li onClick={() => handleScroll(6)}>
                        <span>Conciencia <br /> y prevención</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HeaderNavMobile;