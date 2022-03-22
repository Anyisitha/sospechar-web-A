import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

import $ from 'jquery';

import './politics.css';

const PoliticsComponent = ({ location }) => {

    useEffect(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }, []);

    return (
        <div id='politics'>

            <div className='politics-content animated fadeIn'>
                <h2>TÉRMINOS Y CONDICIONES</h2>
                <p>
                    Boehringer Ingelheim S.A. (“Boehringer-Ingelheim” o “BI”) es una empresa que se dedica a la producción, fabricación, distribución y comercialización de productos farmacéuticos, que requieren los pacientes, desde el inicio de la terapia y durante todo su proceso hasta lograr la recuperación. <br /><br />
                    Boehringer Ingelheim, desarrollador técnico de la herramienta, le da la bienvenida a la plataforma Sospechar No Falla. Al acceder o usar el servicio prestado a través de esta plataforma usted está manifestando su consentimiento y aceptación de los términos y condiciones de uso e-learning (los “Términos y Condiciones”) contenidos en este documento. Si su voluntad es no aceptar estos Términos y Condiciones, absténgase de continuar con el ingreso y uso a la plataforma. El acceso a los Términos y Condiciones no está sujeto a un previo registro en la plataforma Sospechar no Falla; el documento es de libre acceso y deberá ser revisado por los usuarios con antelación al uso de la misma. Los Términos y Condiciones podrán ser modificados por Boehringer Ingelheim de tiempo en tiempo y entrarán en vigor con su publicación en la plataforma, por lo que el uso de la plataforma posterior a la publicación de las posibles modificaciones será manifestación clara de su aceptación de la última versión de los Términos y Condiciones.<br /><br />
                    Sospechar no falla es una plataforma cien por ciento (100%) virtual desarrollada por Boehringer Ingelheim y avalado por la Sociedad Colombiana de Cardiología, con el fin de brindar información sobre los signos y síntomas de la falla cardiaca para lograr un diagnóstico y tratamiento oportuno y minimizar las tasas de mortalidad de esta patología.<br /><br />
                    La información contenida en la plataforma Sospechar No Falla, tiene un carácter netamente informativo, y bajo ninguna circunstancia puede sustituir una consulta médica.

                </p>

                <h4>CONDICIONES DE USO</h4>
                <p>
                    El uso de la plataforma Sospechar No Falla estará sujeto a las siguientes condiciones:<br /><br />
                    <strong>1. Alcance de la licencia Sujeto a estos Términos y Condiciones:</strong> Boehringer Ingelheim le concede a acceso gratuito a la página web, la cual será exclusivamente para uso personal y no comercial. Por lo tanto, se restringe su uso para los fines, propósitos o personas distintas a los usuarios, de tal manera que el contenido de la plataforma y los materiales ofrecidos en la misma no podrán ser copiados, reproducidos, capturados a través de imágenes fotográficas o a través de cualquier otra tecnología conocida o por conocerse, salvo autorización previa y expresa de Boehringer Ingelheim.<br /><br />
                    <strong>2. Información de registro y usuario para acceder a contenido dirigido a personal médico:</strong> Para acceder y usar los servicios de nuestra plataforma destinados al personal médico, usted deberá crear un usuario ingresando los siguientes datos: (a) Nombres (b) Apellidos (c) Tipo de identificación (d) Número de identificación (e) Contraseña (f) Email (g) País (h) Departamento (i) Ciudad(j) Ente Territorial (k) IPS donde trabaja (l) Celular.<br /><br />
                    <strong>3. Recolección, propiedad y transferencia de los datos:</strong> Los usuarios a través de estos Términos y Condiciones autorizan a Boehringer Ingelheim a recolectar y administrar únicamente los datos antes mencionados. La propiedad de estos datos será transferida a Boehringer Ingelheim en su calidad de patrocinador de la plataforma; una vez estos datos estén bajo la propiedad de Boehringer Ingelheim estarán sujetos a las Políticas de Tratamiento y Protección de Datos la cual puede ser consultada en: politica-proteccion-de-datos-bico.pdf (boehringer-ingelheim.com)<br /><br />
                    <strong>4. Notificaciones:</strong> Boehringer Ingelheim podrá hacer uso de los datos de contacto otorgados por usted al momento de la creación del usuario para el envío de notificaciones informativas o relacionadas con la plataforma. A través de estas notificaciones, se podrá informar sobre, pero sin limitarse: (a) Recordatorios a los usuarios sobre los procesos que tiene en curso y el estado de los mismos, (b) Los cursos relacionados, afines o recientes en la plataforma (c) Vencimientos o caducidades (d) Conflictos con la actualización, modificación o, en general, aspectos relacionados con la licencia del usuario.<br /><br />
                    <strong>5. Contenido de la plataforma:</strong> La plataforma que Boehringer Ingelheim en su calidad de desarrollador, pone a disposición de los usuarios contiene información sobre patología cuyo contenido es responsabilidad de los autores de cada uno. En este sentido, Boehringer Ingelheim no se hace responsable por la veracidad del contenido presentado en cada curso.<br /><br />
                    <strong>6. Restricciones de uso:</strong> El alcance de la licencia de los usuarios excluye y prohíbe que usted realice acciones como, por ejemplo: (a) Divulgue o reproduzca contenidos de la plataforma o de los cursos. (b) Desarrollar actos que afecten la funcionalidad, integridad y confidencialidad de la infraestructura de la plataforma, incluidos temas como la creación o propagación de virus informáticos. (c) Comercializar, explotar o utilizar el contenido o información de la plataforma con fines ilícitos, ilegítimos o no autorizados.<br /><br />
                    <strong>7. Enlaces o vínculos a sitios de terceros:</strong> Boehringer Ingelheim se reserva la facultad para publicar en la plataforma contenidos o información relativa a terceros, de manera directa o a través de vínculos, sin asumir responsabilidad alguna por el contenido o consecuencias de ingreso a los contenidos o vínculo, ya que Boehringer Ingelheim no controla, gestiona o mantiene dichos sitios. Los vínculos contenidos en la plataforma hacia otros sitios se ofrecen como una utilidad para el usuario.<br /><br />
                    <strong>8. Responsabilidad del usuario frente al uso de su cuenta:</strong> El uso de los servicios ofrecidos a través de nuestra plataforma implica que el usuario es el directo responsable de conservar la confidencialidad de su cuenta y contraseña y de restringir el acceso a su computador. Por ende, el usuario es responsable de todas las actividades que se lleven a cabo bajo su cuenta y contraseña.
                </p>

                <h4>REQUISITOS TÉCNICOS</h4>
                <p>
                    Para un óptimo funcionamiento de plataforma, Boehringer Ingelheim recomienda que usted disponga de: (a) navegadores como Google Chrome, Mozilla Firefox o Microsoft Edge para una óptima visualización e interacción del micro-sitio y página web. Si se accede desde dispositivos móviles o tabletas, tener sus respectivos navegadores actualizados con el mismo fin.
                </p>

                <h4>PROPIEDAD INDUSTRIAL E INTELECTUAL</h4>
                <p>
                    El uso de nuestros servicios no les concede a los usuarios la titularidad de ningún derecho de propiedad intelectual de nuestros servicios o del contenido al que tenga acceso mediante nuestra plataforma. Los derechos de autor de los contenidos de la plataforma, incluyendo su diseño, texto y gráficos, así como su selección y disposición, son propiedad de Boehringer Ingelheim o de los proveedores de los mismos. Boehringer Ingelheim es consciente de la importancia del respeto y protección de los derechos de propiedad intelectual de nuestras instituciones colaboradoras, instructores y otras terceras partes, y tiene la expectativa legítima de que los usuarios respeten los derechos de propiedad intelectual de Boehringer Ingelheim y de terceros cuando usen nuestros servicios. Por estas razones, Boehringer Ingelheim tendrá el derecho de suspender, deshabilitar o eliminar las cuentas de usuarios que infrinjan las marcas registradas, los derechos de autor y demás derechos de la propiedad intelectual de Boehringer Ingelheim y de sus proveedores o terceras partes.
                </p>

                <h4>TRATAMIENTO DE DATOS PERSONALES</h4>
                <p>
                    Boehringer Ingelheim se compromete a dar un adecuado uso a los datos personales que con ocasión al registro y acceso a la plataforma le sean conocidos. Con la aceptación de estos Términos y Condiciones usted está manifestando su autorización expresa a Boehringer Ingelheim para recolectar, utilizar, almacenar, transferir, trasmitir, suprimir y, en general, tratar sus Datos Personales para las finalidades contempladas en la Política de Tratamiento de Datos Personales de Boehringer Ingelheim y disponibles en: politica-proteccion-de-datos-bico.pdf (boehringer-ingelheim.com) Usted, como titular de datos personales, tiene derecho a conocer, actualizar, rectificar y suprimir su información personal en cualquier momento, comunicándose vía e-mail a legales.co@boehringer-ingelheim.com Así mismo, tiene derecho a negarse a entregar información cuando se le soliciten datos catalogados por la normatividad vigente como sensibles o de niños, niñas o adolescentes. Considerando lo anterior, usted está autorizando de manera voluntaria, previa, explícita, informada e inequívoca el tratamiento de sus datos personales según las finalidades informadas por Boehringer Ingelheim y declara que la información suministrada de manera voluntaria es veraz, completa, exacta y corresponde a la realidad vigente para el momento en que es suministrada.
                </p>

                <h4>TERMINACIÓN</h4>
                <p>
                    Boehringer Ingelheim podrá suspender, deshabilitar o eliminar las cuentas de usuarios que infrinjan cualquiera de las disposiciones de estos Términos y Condiciones, sin que el usuario subsane su incumplimiento o infracción en un término de quince (15) días contados a partir del recibo de la notificación al usuario por parte de Boehringer Ingelheim de dicha situación. Lo anterior, sin perjuicio de las medidas cautelares o acciones judiciales que procedan conforme a la normativa aplicable y que se requieran para evitar o mitigar perjuicios a Boehringer Ingelheim.
                </p>

                <h4>INDEMNIDAD</h4>
                <p>
                    El usuario acepta mantener indemne, defender y librar de toda responsabilidad a Boehringer Ingelheim  y sus proveedores de cualquier reclamación, responsabilidad, gasto y/o daño, incluyendo los honorarios y costos de abogados, elevados y/o causados por terceras partes relacionados con: (a) el uso o intento de uso de los servicios en contravención de estos Términos y Condiciones; (b) la violación, por su parte, de cualquier ley o derechos de cualquier proveedor o tercero; o (c) cualquier reclamación de infracción o de apropiación indebida de la propiedad intelectual o de otros derechos de propiedad de Boehringer Ingelheim o de terceros.
                </p>

                <h4>LEGISLACIÓN APLICABLE</h4>
                <p>
                    Los servicios son gestionados por Boehringer Ingelheim cuya operación está basada en la República de Colombia. Por ende, los usuarios aceptan que el uso de los servicios y estos Términos y Condiciones sean regidos e interpretados con base en las leyes de la República de Colombia.
                </p>

                <h4>RENUNCIAS Y DIVISIBILIDAD</h4>
                <p>
                    Ninguna omisión o demora por Boehringer Ingelheim en el ejercicio de cualquier derecho, facultad, acción o recurso bajo estos Términos y Condiciones podrá ser considerada como una renuncia al mismo, ni el ejercicio particular o parcial de cualquiera de dichos derechos, facultades, acciones o recursos, o impedirá el ulterior ejercicio del mismo o de cualquier otro derecho, facultad, acción o recurso, cuando ello corresponda de acuerdo con estos Términos y Condiciones o la normativa aplicable. Si alguna disposición específica de estos Términos y Condiciones es considerada por cualquier operador judicial (Ej. Juez, Magistrado u Árbitro) como jurídicamente ineficaz, esto no afectará a ninguna otra disposición
                </p>

                <h4>RESOLUCIÓN DE CONFLICTOS</h4>
                <p>
                    Toda controversia o diferencia relativa, derivada, producto o con ocasión de estos Términos y Condiciones será sometida a la decisión de un Tribunal de Arbitramento, que se sujetará a lo dispuesto en la Ley 1563 del 2012 y a las normas que lo reglamenten, adicionen o modifiquen, y especialmente de acuerdo a las siguientes reglas:(i) La sede del Arbitramento será la ciudad de Bogotá, Colombia. (ii) El idioma para el desarrollo del Tribunal será el castellano. (iii) Si la controversia no es de mayor cuantía según lo estipulado en el art. 25 del Código General del Proceso, el Tribunal de Arbitramento estará conformado por un (1) árbitro designado por mutuo acuerdo entre las partes, conforme con las reglas del Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá y si no fuere posible llegar a un acuerdo para la designación del árbitro, su designación corresponderá a dicho Centro. Si es de mayor cuantía, el Tribunal de Arbitramento estará conformado por tres (3) árbitros; cada una de las partes designará un (1) árbitro y el restante será designado por mutuo acuerdo entre ellas, o a falta de acuerdo, por el Centro de Arbitraje y Conciliación mencionado. (iv) El (los) árbitro(s) decidirá(n) en derecho y su fallo será final y obligatorio para las partes. (v) Los costos de funcionamiento del Tribunal de Arbitramento, serán asumidos por las partes por mitades y la parte cuyas pretensiones hayan sido desestimadas por el Tribunal de Arbitramento, estará en la obligación de devolver a la otra parte lo aportado para el funcionamiento del tribunal.
                </p>

                <h4>CONTACTO</h4>
                <p>
                    Para realizar cualquier sugerencia, observación o inquietud, referente a cualquiera de los aspectos mencionados en estos Términos y Condiciones, se puede establecer contacto con nosotros en la siguiente dirección: medfora.co@boehringer-ingelheim.com.
                </p>

                <h4>MODALIDAD DE INGRESO</h4>
                <p>
                    Los participantes de Sospechar no Falla deben registrarse en la plataforma www.sospecharnofalla.com, diligenciar sus datos y navegar en la plataforma.
                </p>
            </div>

            {/* FOOTER */}
            <Footer location={location} />

        </div>
    );
};

export default PoliticsComponent;
