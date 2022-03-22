import React from 'react';

import SeguimientoCards from './SeguimientoCards';
import DiagnosticoContent from './SeguimientoContent';

import './seguimiento.css';
import SeguimientoContent from './SeguimientoContent';

const Seguimiento = ({ location }) => {
    return (
        <div className='seguimiento' id='section-5'>
            <h2>SEGUIMIENTO</h2>

            <div className='seguimiento_main-wrapper'>

                {
                    location.pathname.includes('seguimiento') 
                    ?
                        <SeguimientoContent />    
                    :
                        <SeguimientoCards />    
                }
            </div>
        </div>
    );
}

export default Seguimiento;