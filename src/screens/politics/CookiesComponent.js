import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

import $ from 'jquery';

import './politics.css';

const CookiesComponent = ({ location }) => {

    useEffect(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }, []);

    return (
        <div id="politics">

            <div className="politics-content animated fadeIn">
                <h2>POLÍTICA DE COOKIES DEL PORTAL WEB</h2>

                <h4>Tabla de contenido</h4>
                <p>
                    1. Información general. <br /><br />
                    2. ¿Qué Cookies recolectamos? <br /><br />
                    3. ¿Para qué recolectamos esas Cookies? <br /><br />
                    4. ¿De qué forma acepta el Usuario a la instalación de las Cookies? <br /><br />
                    5. ¿A quién se le pueden enviar las Cookies? <br /><br />
                    6. ¿Cómo puedo bloquear, eliminar y/o desactivar las Cookies?
                </p>

                <h4>1. Información general</h4>
                <p>
                    En Boehringer Ingelheim S.A. (en adelante “BI”) utilizamos Cookies propias y de terceros para facilitar el uso y la navegación en nuestro portal web para Colombia (o el “Portal Web”) y mejorar la calidad del mismo para ajustarse a sus hábitos y preferencias en la navegación del sitio. Al ingresar en nuestro Portal Web, los usuarios de nuestros productos o servicios ofrecidos por este medio (el “Usuario”)  acepta que utilicemos los datos almacenados en los mismos mediante la ejecución de Cookies en el ordenador o dispositivos móviles de acuerdo con lo que se indica en la ventana emergente del navegador del Usuario cuando accede por primera vez a al Portal Web y en los demás términos y condiciones que se indican en la Política de Cookies (o la “Política)” descrita de forma pública a continuación. Por tal razón, con el fin de que el Usuario otorgue su consentimiento informado e inequívoco y en cumplimiento de la normativa aplicable, a continuación, ponemos a su disposición nuestra Política de Cookies que no debe confundirse con nuestra Política de Tratamiento de Datos Personales.
                    <br /><br />
                    En BI nos reservamos la facultad de efectuar, en cualquier momento, modificaciones o actualizaciones a esta Política para la atención de novedades legislativas, políticas internas o nuevos requerimientos relativos a nuestros productos o servicios. Por lo tanto, se recomienda a los Usuarios revisar la Política cada vez que accedan al Portal Web, con el objetivo de estar adecuadamente informados sobre cómo y para qué utilizamos las Cookies.
                    <br /><br />
                    Para continuar, es importante tener claro el concepto de Cookies:
                </p>

                <h4>¿Qué es una cookie?</h4>
                <p>
                    Las Cookies son el término comúnmente asociado a archivos con datos que se generan en el explorador y en el disco duro de los computadores, teléfonos inteligentes, tabletas o cualquier otro dispositivo electrónico que permita una conexión a Internet. Por medio de esos archivos, es posible obtener información relativa a las preferencias y transacciones de los Usuarios. De esa forma, con estos datos, personalizamos la experiencia del Usuario en los Portal Web, agilizando y mejorando su visita al Portal Web.
                    <br /><br />
                    De forma general, las cookies no capturan los datos personales almacenados en los dispositivos móviles o computadores de los Usuarios. Por el contrario, son archivos que se crean mediante la navegación en Internet que permiten que el Usuario navegue, por ejemplo, en el Portal Web Sospechar No Falla. Dependiendo de su configuración del Usuario, las cookies pueden almacenar información en el navegador y/o en el equipo.
                    <br /><br />
                    Es posible que cuando el Usuario navegue o haga uso del Portal Web Sospechar No Falla, reciba cookies de parte nuestra y de terceros. En nuestro caso, utilizaremos esas Cookies para recoger información, entender su comportamiento en línea y mejorar su experiencia de navegación. También, para garantizar una excelente experiencia con nuestros servicios y herramientas, de forma más ágil y personalizada.
                    <br /><br />
                    Las cookies pueden ser,
                    <br /><br />
                    De acuerdo con su titular:
                    <br /><br />
                    <strong>Propias:</strong> las que pertenecen a BI.<br />
                    <strong>De terceros:</strong> las que pertenecen a un tercero.
                    <br /><br />
                    De acuerdo con su permanencia:
                    <br /><br />
                    <strong>De sesión:</strong> Las que son eliminadas de forma automática una vez culmina la sesión de navegación.<br />
                    <strong>Persistentes:</strong> Las que incluso después de que acaba la sesión, permanecen en una subcarpeta de tu navegador hasta que son eliminadas.
                    <br /><br />
                    De acuerdo con su finalidad:
                    <br /><br />
                    <strong>Técnicas:</strong> que son necesarias para que el Usuario pueda hacer uso de la página.<br />
                    <strong>De personalización:</strong> que permiten al Usuario configurar la experiencia dentro del Portal Web, (p. ej. El idioma)<br />
                    <strong>De análisis:</strong> que se relacionan al comportamiento del Usuario con su uso del Portal<br />
                    <strong>Publicitarias:</strong> usadas para la gestión de los espacios publicitarios que encuentra el Usuario en el Portal Web<br />
                    <strong>De publicidad comportamental:</strong> que almacenan información del comportamiento de los usuarios a través de sus sesiones de navegación.
                </p>

                <h4>2. ¿Qué tipo de cookies usamos?</h4>
                <p>
                    Cookies de análisis
                </p>

                <h4>3. ¿Para qué recolectamos esas cookies?</h4>
                <p>
                    Para recolectar datos estadísticos sobre las visitas realizadas por los usuarios, tendencias en tiempo de sesión, contenidos más visitados, clics                	    y demás interacciones que puedan ser registradas en el sitio web.
                    Esto se hará por medio de herramientas terceras, haciendo uso de servicios como Google Tag Manager y Google Analytics.
                </p>

                <h4>4. ¿De qué forma acepta el Usuario a la instalación de las Cookies?</h4>
                <p>
                    De acuerdo con la legislación colombiana de protección de datos personales, en lo que respecta al consentimiento por parte de los Usuarios, se destaca que no se precisa contar con su autorización para la instalación de cookies de categoría técnica o de aquellas que son estrictamente necesarias para proveer servicios de la sociedad de la información solicitado de forma expresa por el Usuario, salvo que a través de la mismas se recolecte información asociada a una persona natural identificada o identificable. Si el Usuario permanece en el Portal Web y/o no deshabilita en su navegador el uso de Cookies o si ha manifestado mediante el botón de [Aceptar] entendemos que ha consentido su uso por parte de BI cuando visita nuestro Portal Web. No obstante, en cualquier momento, podrá revocarlo y desactivar las Cookies, eliminando las almacenadas en su equipo, a través de los ajustes y configuraciones de su navegador.
                </p>

                <h4>
                    5. ¿A quién se le pueden enviar las Cookies?
                </h4>
                <p>
                    Las Cookies serán compartidas con BI para los efectos descritos anteriormente. Dichas cookies solo se generan en cada visita.
                </p>

                <h4>6. ¿Cómo puedo bloquear, eliminar y/o desactivar las cookies?</h4>
                <p>
                    El Usuario puede modificar su configuración de navegación para deshabilitar o eliminar las Cookies así como para bloquear la instalación de nuevas cookies. Esto, en principio, no afectará el acceso a los contenidos incluidos en el Portal Web Sospechar No Falla. Es posible que su navegador (p. ej. Chrome, Mozilla, Internet Explorer u Opera) le permita seleccionar específicamente las Cookies que desea instalar. Generalmente, es posible dentro de la configuración de los navegadores:
                    <br/><br/>
                    • Rechazar ciertas las cookies de páginas web específicas.<br/>
                    • Rechazar cookies de terceros.<br/>
                    • Consentir el uso cookies pero únicamente cookies de sesión.<br/>
                    • Admitir al servidor crear cookies para un tercero.<br/>
                    • Los navegadores más populares pueden incluso contar con la opción de impedir la instalación de cookies en el equipo, para ello remítase a la    	    configuración de su navegador.
                </p>
            </div>

            {/* FOOTER */}
            <Footer location={location} />

        </div>
    );
};

export default CookiesComponent;
