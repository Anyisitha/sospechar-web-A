import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CompanyLogo from '../../assets/images/boehringer-ingelheim.png';
import Cardiology from '../../assets/images/sociedad-cardiologia.png';

import './footer.css';

const Footer = ({ location }) => {

    const [changeLegalText, setChangeLegalText] = useState(false);

    useEffect(() => {
        const pathArray = location.pathname.split('/');

        if (pathArray.length === 3 || pathArray[1].includes('contenido-para-profesionales')) {
            setChangeLegalText(true);
        } else {
            setChangeLegalText(false);
        }

    }, [location]);

    return (
        <div className='footer'>
            <div className="down-footer">
                <div className="footer-info">
                    <div>
                        <h5>
                            Aviso legal
                        </h5>
                        {
                            changeLegalText
                                ?
                                <p className="legal-text">
                                    Material dirigido al profesional de la salud. Lo invitamos a disfrutar del contenido a continuación teniendo en cuenta que está sujeto a derechos de propiedad intelectual. Este material podría contener conceptos u opiniones que son responsabilidad de los autores y no comprometen las opiniones del laboratorio auspiciante.
                                    Boehringer Ingelheim S.A. Teléfono: (+57 1) 319 91 00, e-mail: medfora.co@boehringer-ingelheim.com Dirección: Carrera 11 No. 84A-09 Piso 5, Bogotá D.C. Colombia. PC-CO-102644.
                                </p>
                                :
                                <p className="legal-text">
                                    Lo invitamos a disfrutar del contenido a continuación teniendo en cuenta que está sujeto a derechos de propiedad intelectual. Este material podría contener conceptos u opiniones que son responsabilidad de los autores y no comprometen las opiniones del laboratorio auspiciante. Boehringer Ingelheim S.A. Teléfono: (+57 1) 319 91 00, e-mail: medfora.co@boehringer-ingelheim.com Dirección: Carrera 11 No. 84A-09 Piso 5, Bogotá D.C. Colombia. PC-CO-102644.
                                </p>
                        }
                    </div>
                    <div>
                        <h5>
                            Contacto
                        </h5>
                        <p>
                            Teléfono: (+601) 319 91 00 <br />
                            e-mail: medfora.co@boehringer-ingelheim.com <br />
                            Dirección: Carrera 11 No. 84A-09 Piso 5 <br />
                            Bogotá D.C. Colombia <br />
                            Boehringer Ingelheim S.A.
                        </p>
                    </div>
                    <div>
                        {/* <h5>
                            <Link to="/terminos-y-condiciones">Declaración de accesibilidad</Link>
                        </h5> */}
                        <h5>
                            <Link to='/terminos-y-condiciones'>Términos y condiciones</Link>
                        </h5>
                        <h5>
                            <Link to='/politicas-de-cookies'>Política de cookies</Link>
                        </h5>
                        <h5>
                            <Link to='/privacidad-de-datos'>Privacidad de datos</Link>
                        </h5>
                    </div>
                </div>
                <div className="footer-logos">
                    <div className="left-wrapper">
                        <div className="company">
                            <img src={CompanyLogo} alt="boheringer logo" />
                        </div>
                        <div className="society">
                            <img src={Cardiology} alt="cardiologia logo" />
                        </div>
                    </div>
                    <div className="middle-wrapper">
                        <p>
                            © 2010-2022 Boehringer Ingelheim GmbH Todos los derechos Reservados
                        </p>
                    </div>
                    <div className="right-wrapper">
                        <a href='https://www.facebook.com/sospecharnofalla'>
                            <img src={require("../../assets/images/icon-facebook.png")} width="50"/>
                        </a>
                        <a href='https://www.instagram.com/sospechar_nofalla/'>
                            <img src={require("../../assets/images/icon-instagram.png")} width="50" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;