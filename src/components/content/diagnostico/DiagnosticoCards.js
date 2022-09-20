import React from 'react';
import { useHistory } from 'react-router-dom';

import PlusIcon from '../../../assets/images/plus-icon.png';
import Calsificacion from '../../../assets/images/diagnostico.png';
import Criterios from '../../../assets/images/diagnostico1.png';
import Herramientas from '../../../assets/images/diagnostico2.png';

import $ from 'jquery';

const DiagnosticoCards = () => {

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
            <div onClick={() => handleScroll('clasificacion')} className='diagnostico_card relative'>
                <a href='/contenido-para-todos/diagnostico#section-clasificacion'>
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
                <a href='/contenido-para-todos/diagnostico#section-criterios'>
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

            <div className='diagnostico_card relative'>
                <a href='/contenido-para-todos/diagnostico#section-herramientas'>
                    <img src={Herramientas} alt='' />

                    {/* <h3>
                        Herramientas diagnósticas <br />
                        de la falla cardíaca
                    </h3>

                    <img
                        className='diagnostico_card-icon'
                        src={PlusIcon}
                        alt='icono de mas'
                        onClick={() => handleScroll('herramientas')}
                    /> */}
                </a>
            </div>
        </>
    );
}

export default DiagnosticoCards;