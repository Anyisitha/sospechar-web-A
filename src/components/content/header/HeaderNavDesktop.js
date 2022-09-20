import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../../assets/images/sospechar-no-falla_logo.png';

import './headerdesktop.css';

import $ from 'jquery';

const HeaderNavDesktop = ({ location }) => {

    const history = useHistory();

    /** States */
    const [beforeHover, setBeforeHover] = useState("");

    const handleScroll = (section) => {
        if (
            location.pathname.includes('diagnostico') ||
            location.pathname.includes('seguimiento') ||
            location.pathname.includes('compartido') ||  
            location.pathname.includes('favoritos') ||
            location.pathname.includes('terminos-y-condiciones') ||
            location.pathname.includes('politicas-de-cookies') ||
            location.pathname.includes('privacidad-de-datos') ||
            location.pathname.includes('conciencia')
        ) return history.push('/contenido-para-profesionales');

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

    const addHover = (label) => {
        let before = document.getElementById(beforeHover);
        if(before){
            before.classList.remove("contentheaderdesktop_active-item")
        }

        let newHover = document.getElementById(label);

        newHover.classList.add("contentheaderdesktop_active-item");

        setBeforeHover(label);
    }

    useEffect(() => {
      let location = window.location.pathname;
      if(location.includes('/diagnostico')){
        document.getElementById('inicio').classList.remove("contentheaderdesktop_active-item")
        document.getElementById('diagnostico').classList.add("contentheaderdesktop_active-item")
      } else if(location.includes('/seguimiento')){
        document.getElementById('inicio').classList.remove("contentheaderdesktop_active-item")
        document.getElementById('seguimiento').classList.add("contentheaderdesktop_active-item")
      } else if(location.includes('/conciencia')){
        document.getElementById('inicio').classList.remove("contentheaderdesktop_active-item")
        document.getElementById('conciencia').classList.add("contentheaderdesktop_active-item")
      }
    }, [])
    

    return (
        <div className='contentheaderdesktop'>
            <div className='contetnheader_logo-section'>
                <div className='contentheaderdesktop_logo-wrapper'>
                    <a href='https://sospecharnofalla.com/bienvenido-sospechar-no-falla'>
                        <img src={Logo} alt='sospechar no falla - logo' />
                    </a>
                </div>
                <h4>Contenido para todos</h4>
            </div>
            <div className='contentheaderdesktop_nav-wrapper'>
                <ul>
                    <li 
                        id="inicio" 
                        className='contentheaderdesktop_active-item' 
                        onClick={() => handleScroll('inicio')}
                        onMouseOver={() => addHover("inicio")}
                    >
                        <span>Inicio</span>
                    </li>
                    <li 
                        id="generalidades"
                        onMouseOver={() => addHover("generalidades")}
                    >
                        <span>Generalidades</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div onClick={() => handleScroll(1)}>
                            ¿Qué es <br />la falla cardíaca?
                            </div>
                            <div onClick={() => handleScroll(2)}>
                                Datos<br />sobre la falla cardíaca
                            </div>
                        </div>
                    </li>
                    <li
                        id="sintomas"
                        onMouseOver={() => addHover("sintomas")}
                    >
                        <span onClick={() => handleScroll(3)}>Signos <br /> y síntomas</span>

                        <div className='contentheaderdesktop_subsection'>
                            {/* <div onClick={() => handleScroll(3)}>
                                Mini serie - Casos clínicos
                            </div> */}
                        </div>
                    </li>
                    <li
                        id="diagnostico"
                        onMouseOver={() => addHover("diagnostico")}
                    >
                        <span>Diagnóstico</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div>
                                <a href='/contenido-para-todos/diagnostico#section-clasificacion'>
                                    ¿Cómo se clasifica <br /> la falla cardíaca?
                                </a>
                            </div>
                            <div>
                                <a href='/contenido-para-todos/diagnostico#section-criterios'>
                                ¿Cómo se diagnostica<br /> la falla cardíaca?
                                </a>
                            </div>
                            <div>
                                <a href='/contenido-para-todos/diagnostico#section-herramientas'>
                                    ¿Herramientas<br />de detección de la falla cardíaca?
                                </a>
                            </div>
                        </div>
                    </li>
                    <li
                        id="seguimiento"
                        onMouseOver={() => addHover("seguimiento")}
                    >
                        <span>Seguimiento</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div>
                                <a href='/contenido-para-todos/seguimiento#section-pacientes'>
                                    Para paciente
                                </a>
                            </div>
                            <div>
                                <a href='/contenido-para-todos/seguimiento#section-cuidadores'>
                                    Para familiares <br /> y cuidadores
                                </a>
                            </div>

                        </div>
                    </li>
                    <li
                        id="conciencia"
                        onMouseOver={() => addHover("conciencia")}
                    >
                        <span>Conciencia <br /> y prevención</span>

                        <div className='contentheaderdesktop_subsection'>
                            <div>
                                <a href='/contenido-para-todos/conciencia#section-concientes'>
                                    Enfermedades<br />relacionadas con la falla cardíaca
                                </a>
                            </div>
                            <div>
                                <a href='/contenido-para-todos/conciencia#section-others'>
                                    Prevención de <br /> la falla cardíaca
                                </a>
                            </div>
                            <div>
                                <a href='/contenido-para-todos/conciencia#section-prevencion'>
                                    Seamos conscientes
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNavDesktop;