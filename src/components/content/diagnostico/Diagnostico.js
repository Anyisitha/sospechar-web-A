import React from 'react';

import DiagnosticoCards from './DiagnosticoCards';
import DiagnosticoContent from './DiagnosticoContent';

import './diagnostico.css';

const Diagnostico = ({ location }) => {
    return (
            <div className='diagnostico' id='section-4'>
                <h2>DIAGNÓSTICO</h2>

                <div className='diagnostico_main-wrapper'>

                    {
                        location.pathname.includes('diagnostico')
                            ?
                            <DiagnosticoContent />
                            :
                            <DiagnosticoCards />
                    }
                </div>
            </div>

    );
}

export default Diagnostico;