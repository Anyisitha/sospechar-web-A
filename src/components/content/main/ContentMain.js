import React from 'react';

import Carrusel from '../carrusel/Carrusel';
import Conciencia from '../conciencia/Conciencia';
import ConcienciaPrevencion from '../concienciaPrevencion/Prevencion';
import PrevencionContent from '../concienciaPrevencion/PrevencionContent';
import Diagnostico from '../diagnostico/Diagnostico';
import Generalidades from '../generalidades/Generalidades';
import Seguimiento from '../seguimiento/Seguimiento';
import SignosSintomas from '../signosSintomas/SignosSintomas';

import './main.css';

const ContentMain = ({ location }) => {

    return (
        <div className='content_main-wrapper'>
            {/* CARRUSEL */}
            <Carrusel />

            {/* GENERALIDADES */}
            <Generalidades />

            {/* SIGNOS Y SINTOMAS */}
            <SignosSintomas />

            {/* DIASGNOSTICO */}
            <Diagnostico location={location} />

            {/* Seguimiento */}
            <Seguimiento location={location} />

            {/* Seguimiento */}
            <ConcienciaPrevencion location={location} />

            {/* CONCIENCIA Y PREVENCION */}
            {/* <PrevencionContent/> */}


            {/* REPRODUCTORES */}
            {/* <VideoPopUp /> */}
        </div>
    );
}

export default ContentMain;