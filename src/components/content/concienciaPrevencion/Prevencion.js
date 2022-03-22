import React from 'react';

import PrevencionCards from './PrevencionCards';
import PrevencionContent from './PrevencionContent';

import './prevencion.css';

const ConcienciaPrevencion = ({ location }) => {
    return (
        <div className='conciencia-prevencion' id='section-6'>
            <h2>CONCIENCIA Y PREVENCION</h2>

            <div className='prevencion_main-wrapper'>

                {
                    location.pathname.includes('diagnostico')
                        ?
                        <PrevencionContent />
                        :
                        (
                            <React.Fragment>
                                <PrevencionCards />

                            </React.Fragment>
                        )

                }
            </div>
            <h2>CONCIENCIA Y PREVENCION</h2>
            <div class="prevencion_main-wrapper">
                <PrevencionContent/>
            </div>
        </div>
    );
}

export default ConcienciaPrevencion;