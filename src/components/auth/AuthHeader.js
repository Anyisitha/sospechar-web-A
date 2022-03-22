import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/images/sospechar-no-falla_logo.png';
import Facebook from '../../assets/images/icon-facebook.png';
import Instagram from '../../assets/images/icon-instagram.png';
import Lupa from '../../assets/images/lupa-sigue-la-pista.png';

import './auth.css';

const AuthHeader = () => {

    const history = useHistory();

    return (
        <div className='authheader'>
            <div className='authheader_logo-box'>
                <div onClick={() => history.push('/bienvenido-sospechar-no-falla')} className='authheader_logo-wrapper'>
                    <img src={ Logo } alt='sospechar no falla - logo' />
                </div>
            </div>
            <div className='authheader_middle-header'>
                <div className='authheader_middle-wrapper'>
                    <div className='authheader_lupa-wrapper'>
                        <img src={Lupa} alt='revive las pistas' />
                    </div>
                    <div className='authheader_middle-header-text'>
                        <p>
                            <a href='https://sospecharnofalla.com' target='_blank' rel='noreferrer'>
                                <strong>Reviva aquí las pistas</strong> <br/>
                                del caso más esperado
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='authheader_media-box'>
                <a href='https://www.facebook.com/sospecharnofalla' target='_blank' rel='noreferrer' className='authheader_facebook-wrapper authheader_media-icon'>
                    <img src={Facebook} alt="siguenos en facebook" />
                </a>
                <a href='https://www.instagram.com/sospechar_nofalla/' target='_blank' rel='noreferrer' className='authheader_instagram-wrapper authheader_media-icon'>
                    <img src={Instagram} alt="siguenos en instagram" />
                </a>
            </div>
        </div>
    );
}

export default AuthHeader;