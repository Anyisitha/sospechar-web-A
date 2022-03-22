import React from 'react';

import ProfImg from '../../assets/images/profesionales-de-salud.png';
import EveryBodyImg from '../../assets/images/contenido-para-todos.png';

import './authwelcome.css';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
    return (
        <div className='authwelcome animated fadeIn'>
            <div className='authwelcome_text-section'>
                <h1>
                    <span>Bienvenido a</span> <br />
                    <span>Sospechar no Falla.</span>
                </h1>
                <p>
                    En este sitio web encontrará información detallada acerca de la falla cardíaca. Le invitamos a conocer la información personalizada que tenemos para usted. Si usted es profesional de la salud, por favor haga clic en la ventana de "profesionales de la salud", de lo contrario, diríjase a la pestaña de "contenido para todos".
                </p>
            </div>
            <div className='authwelcome_images-section'>
                <Link to='/bienvenido-sospechar-no-falla/inicia-sesion' className='authwelcome_img-wrapper authwelcome_professionals-img'>
                    <img src={ProfImg} alt='contenido para profesionales de la salud' />
                </Link>
                <a href='https://web-sospechar-para-todos.sospecharnofalla.com/' className='authwelcome_img-wrapper authwelcome_everybody-img'>
                    <img src={EveryBodyImg} alt='contenido para todos' />
                </a>
            </div>
        </div>
    );
};

export default WelcomeScreen;