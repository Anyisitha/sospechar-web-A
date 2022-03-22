import React from 'react';
import { useHistory } from 'react-router-dom';

import PlusIcon from '../../../assets/images/plus-icon.png';
import Calsificacion from '../../../assets/images/SEGUIR.png';
import Criterios from '../../../assets/images/SEGUIR1.png';

import $ from 'jquery';

const SeguimientoCards = () => {

    const history = useHistory();

    const handleScroll = (section) => {
        history.push('/contenido-para-profesionales/diagnostico');

        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $(`#section-${section}`).offset().top - 50
            }, 700);
        }, 400);
    }

    return (
        <>
            <div className='diagnostico_card relative'>
                <a href='/contenido-para-todos/seguimiento#section-pacientes'>
                <img src={Calsificacion} alt='' />

                    {/* <h3>
                        Clasificación <br />
                        de la falla cardíaca
                    </h3>

                    <img
                        className='diagnostico_card-icon'
                        src={PlusIcon}
                        alt='icono de mas'
                        onClick={() => handleScroll('clasificacion')}
                    /> */}
                </a>
            </div>

            <div className='diagnostico_card relative'>
                <a href='/contenido-para-todos/seguimiento#section-cuidadores'>
                    <img src={Criterios} alt='' />

                    {/* <h3>
                            Criterios de diagnóstico <br />
                            de la falla cardíaca
                        </h3>

                        <img
                            className='diagnostico_card-icon'
                            src={PlusIcon}
                            alt='icono de mas'
                            onClick={() => handleScroll('criterios')}
                        /> */}
                </a>
            </div>
        </>
    );
}

export default SeguimientoCards;