import React, { useEffect } from 'react';

import Historia from '../../assets/images/historia.png';
import Footer from '../../components/footer/Footer';

import $ from 'jquery';

import './politics.css';

const PrivacityComponent = ({ location }) => {

    useEffect(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }, []);

    return (
        <div id="politics">

            <div className="politics-content animated fadeIn">
                <h2>POLÍTICA DE PRIVACIDAD EN COLOMBIA</h2>

                <h4>1. Objetivo</h4>
                <p>
                    El Código de Conducta global de Boehringer Ingelheim consagra el pleno respeto hacia la privacidad y los datos personales de todos los interesados, entre ellos, los colaboradores de Boehringer Ingelheim en Colombia (en adelante, “BICO”), los pacientes, los médicos, socios de negocio, y cualesquiera otros interesados. Además, BICO sólo gestiona datos personales en aquellos casos en los que existe una necesidad empresarial específica y definida, y siempre lo hace cumpliendo con las leyes y regulaciones aplicables.
                    <br /><br />
                    En este contexto, este procedimiento define el compromiso de BICO de cumplir con las leyes y con la normativa interna en materia de protección de datos de carácter personal, y para ello define principios de actuación de cumplimiento obligatorio para todos los colaboradores, a efectos de gestionar adecuadamente los datos personales.
                    <br /><br />
                    Es importante tener en cuenta que este procedimiento no regula la protección de la información. Aunque todo dato personal constituye siempre “información”, esta última categoría es más amplia, y existen normas internas que regulan cómo ésta se protege en BICO.
                </p>

                <h4>2. Alcance</h4>
                <p>
                    Este procedimiento se aplica a todas las empresas de Boehringer Ingelheim en Colombia, y a todos sus colaboradores, en sentido amplio, tanto internos como externos.
                </p>

                <h4>3. Responsabilidades</h4>
                <ul>
                    <li>
                        <p>
                            <strong>3.1. Dirección:</strong> <br /><br />
                            Es responsabilidad de la Dirección de BICO:
                            <br /><br />
                            a) poner a disposición los medios organizativos y materiales necesarios que permitan asegurar el cumplimiento de la legislación y las normas internas de aplicación en esta materia y velar por el cumplimiento de este procedimiento.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>3.2. Comité de Compliance </strong> <br /><br />
                            El Comité de Compliance es responsable de:
                            <br /><br />
                            a) Aprobar las normas internas, en materia de protección de datos personales.<br />
                            b) Designar a la persona que ocupa la posición del Data Protection Officer.<br />
                            c) Decidir sobre el resultado de las investigaciones iniciadas en materia de posibles incumplimientos en esta materia.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>3.3. Data Protection Officer</strong> <br /><br />
                            Es el responsable de la protección de datos y lidera la implementación del Programa de Compliance para el ámbito normativo de la “protección de datos personales”. Para este fin, impulsará el ciclo de vida del cumplimiento normativo:
                            <br /><br />
                            a) Análisis de riesgos y controles:<br />
                            • Procurar que, periódicamente, los riesgos de cumplimiento en esta materia sean identificados, evaluados y gestionados de acuerdo con los    		  procedimientos de BI a nivel global, regional y local.<br />
                            b) Generación de normas internas:<br />
                            • Redactar los instructivos en la materia para la implementación de este procedimiento que contendrán los controles adecuados y asegurar
                            que este procedimiento esté debidamente comunicado, publicado y actualizado.<br />
                            c) Comunicación y formación:<br />
                            • Diseñar y ejecutar las acciones de formación y concienciación sobre esta materia y brindar asesoramiento.<br />
                            d) Rendición de cuentas periódica y reporting a grupos de interés:<br />
                            • Rendir cuentas al Comité de Compliance sobre la implementación del Programa de Compliance en los aspectos de protección de datos 				  personales.<br />
                            e) Monitoreo y auditoría:<br />
                            • Monitorear el cumplimiento de lo dispuesto en este procedimiento y las normas de BI globales, regionales, y locales aplicables.
                            Liderar las auditorías e inspecciones focalizadas en protección de datos personales.<br />
                            f) Gestión de incumplimientos:<br />
                            • Liderar las investigaciones internas sobre presuntos incumplimientos en materia de protección de datos personales;
                            Proponer al Comité de Compliance las acciones correctivas y preventivas que considere adecuadas.<br />
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>3.4 Departamento de Tecnología de la Información</strong> <br /><br />
                            Es responsabilidad del Departamento de Tecnología de la Información, entre otras:<br />
                            a) asegurar el establecimiento de medidas de seguridad necesarias y suficientes, aplicables a los sistemas de información y comunicación que den soporte a bases de datos o sistemas de tratamiento automatizados de datos personales;<br />
                            b) listar y mantener actualizados los sistemas de aplicaciones, infraestructuras y equipos que contengan, transporten o accedan a datos de carácter personal.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>3.5 Gerencia de Departamento </strong> <br /><br />
                            Es responsabilidad de la Gerencia de cada Departamento de BIAR:<br />
                            a) asegurar el cumplimiento de las obligaciones establecidas en esta materia por parte de todos los colaboradores en su ámbito de responsabilidad;<br />
                            b) asegurar que cualquier actividad del tratamiento en su ámbito de responsabilidad se<br />
                            c) gestiona de forma adecuada, siguiendo el procedimiento de desarrollo de este procedimiento;<br />
                            d) asegurar que se revisa de forma periódica el registro de actividades del tratamiento de su Departamento, con arreglo a la norma(s) de desarrollo de este procedimiento.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>3.6 Colaboradores</strong> <br /><br />
                            Es obligación de todo el personal, interno y/o externo, que acceda o de cualquier modo trate datos de carácter personal en soporte informático, en papel o en cualquier otro soporte:<br />
                            a) cumplir con este procedimiento e instrucciones impartidas al respecto;<br />
                            b) mantener la confidencialidad sobre cualquier dato de carácter personal que conozca,<br />
                            c) aplicando las medidas de seguridad, técnicas y organizativas establecidas;<br />
                            d) Comunicar de acuerdo con las instrucciones relativas a este procedimiento, toda brecha de seguridad sobre datos personales de la que conozca, con independencia de quién sea el Responsable Interno de los datos personales objeto de la brecha;<br />
                            e) notificar el inicio de cualquier inspección de la Autoridad de Control que le sea comunicado accidentalmente, al Data Protection Officer.
                        </p>
                    </li>
                </ul>

                <h4>4. Procedimiento</h4>
                <p>
                    BICO y todos y cada uno de sus colaboradores (en adelante, también referidos como “nosotros”) que traten datos personales tienen que cumplir estas reglas.
                    <br /><br />
                    Estas reglas sólo proporcionan pautas obligatorias básicas para el tratamiento de los datos personales. BICO como entidad respetuosa de la privacidad de las personas reconoce que el Titular de los datos personales tiene derecho a contar con elementos adecuados que garanticen la misma, teniendo en todo caso para ello en cuenta sus responsabilidades, derechos y obligaciones.
                    <br /><br />
                    Si surgen dudas durante la consulta de este procedimiento, deberá dirigirlas al Data Protection Officer.
                </p>

                <h5>4.1 Cumplir las leyes de protección de datos personales.</h5>
                <p>
                    Nosotros debemos respetar todas las leyes vigentes sobre protección de datos. De acuerdo con el capítulo 25 del Decreto 1074 de 2015, BICO  como Responsable del Tratamiento ha elaborado un formato de “Autorización para el Tratamiento de Datos Personales”  y ha adoptado procedimientos para solicitarle, a más tardar en el momento de la recolección de sus Datos Personales, su autorización para el Tratamiento de los mismos e informarle cuáles son los Datos Personales que serán recolectados así como todas las finalidades específicas del Tratamiento para las cuales se obtiene su consentimiento.
                    <br /><br />
                    Los Datos Personales que se encuentren en fuentes de acceso público, con independencia del medio por el cual se tenga acceso, pueden ser tratados por BICO sin haber obtenido previamente el consentimiento del Titular, siempre y cuando, por su naturaleza, sean Datos Públicos.
                </p>

                <h5>4.2 La finalidad del Tratamiento de datos.</h5>
                <p>
                    Debemos estar en condiciones de comunicar con certeza y claridad el propósito que tenemos al tratar datos personales. Que esa finalidad debe ser legitima de acuerdo con la constitución y la ley, la cual debe ser informada al titular. La recolección de datos deberá limitarse a aquellos datos que son pertinentes y adecuados para la finalidad por la cual fueron recolectados o requeridos conforme a la normatividad vigente.
                    <br /><br />
                    En virtud de la relación que se ha establecido o se establezca entre el Titular de los Datos Personales y BICO, es importante que éste conozca que BICO recolecta, registra, almacena, usa los Datos Personales de los Titulares, para su propio uso con los propósitos que fueron solicitados o por requerimientos de las entidades públicas.
                </p>

                <h5>4.3 Recoger y procesar los datos necesarios para el propósito específico que motivó la obtención de la información.</h5>
                <p>
                    El tratamiento de los datos solo podrá recolectar, almacenar, usar o circular los datos personales durante el tiempo que sea razonable y necesario, de acuerdo con las finalidades que justificaron el tratamiento de dichos datos. Una vez cumplida las finalidades del tratamiento se deberá a proceder a la suspensión de los datos personales en su posesión, sin perjuicio de lo anterior los datos deberán ser conservados cuando así se requiera para el cumplimiento de una obligación legal o contractual.
                </p>

                <h5>4.4 El acceso y circulación restringida de los datos:</h5>
                <p>
                    El manejo de los datos está sujeta a limites que se derivan de la naturaleza de los datos personales y en disposiciones en las normas colombianas. Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la presente ley.
                </p>

                <h5>4.5 En el caso de postulaciones laborales, debemos respetar los requisitos exigidos por la ley de protección de datos personales argentina. Por favor manténganse en contacto con el Departamento de Recursos Humanos durante el tratamiento de la solicitud, incluso para buscar respuesta a las preguntas sobre protección de datos. </h5>
                <p>
                    Es necesario obtener el consentimiento del solicitante para guardar sus datos personales en esta circunstancia.
                    <br /><br />
                    En caso de que haya datos personales protegidos por el secreto médico sólo deberían ser conservados por el personal obligado por este secreto y guardarse separadamente de todos los demás datos personales.
                    <br /><br />
                    Por favor manténganse en contacto con el Departamento de Recursos Humanos durante el tratamiento de la solicitud de trabajo para buscar respuesta sobre la ley de protección de datos.
                </p>

                <h5>4.6 Como debemos procesar datos personales sensibles</h5>
                <p>
                    Se debe dar mayor protección a los datos personales sensibles que a los “comunes” (datos personales no sensibles), los datos sensibles son aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación. Al igual que con los datos personales “comunes” es necesario obtener el consentimiento por escrito del sujeto antes de procesar esos datos sensibles. A su vez, el consentimiento es válido si se otorga discrecionalmente y basándose en información suficiente.
                    <br /><br />
                    Para procesar datos personales sensibles, se debe estar en las excepciones que menciona le ley, por ejemplo, como cuando esto tenga una finalidad histórica, estadística o científica.
                    <br /><br />
                    En el Tratamiento de datos personales sensibles, cuando dicho Tratamiento sea posible conforme a lo establecido en el Artículo 6 de la Ley 1581 de 2012, BICO cumplirá con las siguientes obligaciones:<br />
                    • Informar al Titular que por tratarse de Datos Sensibles no está obligado a autorizar su Tratamiento.<br />
                    • Informar al Titular de forma explícita y previa, además de los requisitos generales de la autorización para la recolección de cualquier tipo de dato       	   personal, cuáles de los datos que serán objeto de Tratamiento son sensibles y la finalidad de su Tratamiento, y además obtener su consentimiento   	   expreso.<br />
                    <br /><br />
                    Ninguna de las actividades que realiza BICO está ni estará condicionada a que el titular suministre sus datos personales sensibles.
                </p>

                <h5>4.7 Los deberes de quien obtiene los datos personales de las personas empiezan a ser responsable del tratamiento y deberá cumplir los deberes sin perjuicio a las demás disposiciones de la ley.</h5>
                <p>
                    Para garantizar un buen tratamiento de datos el responsable deberá garantizar al titular en todo el tiempo el derecho de habeas data, informarle al titularla finalidad de la recolección y los derechos que tiene por la autorización que otorgue, conservar la información bajo condiciones de seguridad necesarias e impedir de adulteración, perdida, consulta, o uso no autorizado; e informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y la existencia de riesgos en la administración de los datos.
                    <br /><br />
                    En su calidad de responsable del tratamiento de Datos Personales, BICO comprende la importancia de dar cumplimiento al principio de responsabilidad demostrada desarrollado en el capítulo 25 Decreto 1074 de 2015 y por la Guía de Responsabilidad Demostrada publicada por la Superintendencia de Industria y Comercio en el año 2015. En razón a lo anterior, BOEHRINGER ha implementado medidas y/o políticas internas apropiadas y efectivas para dar cumplimiento a la normativa aplicable en materia de protección de datos personales:<br />
                    • La existencia de una estructura administrativa proporcional a la estructura y tamaño empresarial del responsable para la adopción e   			    implementación de políticas consistentes con la normativa aplicable.<br />
                    • La adopción de mecanismos internos para poner en práctica estas políticas incluyendo herramientas de implementación, entrenamiento y 		    programas de educación.<br />
                    • La adopción de procesos para la atención y respuesta a consultas, peticiones y reclamos de los Titulares, con respecto a cualquier aspecto del 		    tratamiento de sus Datos Personales.<br />
                    <br /><br />
                    Así las cosas, en consideración a su estructura administrativa, BICO ha procedido con la implementación de medidas efectivas a fin de poder poner en conocimiento de su Personal, la protección preventiva -más no reactiva- de Datos Personales.
                    <br /><br />
                    BICO ha desarrollado mecanismos internos que incluyen el entrenamiento en cuanto al cumplimiento de la norma de protección de Datos Personales, así como la puesta a disposición del material que sirva para la correcta recolección y tratamiento de Datos Personales.
                </p>

                <h5>4.8 Siempre debemos guardar datos personales correcto, actualizados y bajo la seguridad necesaria.</h5>
                <p>
                    Para la actividad comercial de la compañía es importante que los datos personales sean correctos y estén siempre actualizados. Esto se puede lograr pidiendo a los empleados, clientes y otros terceros, cuyos datos personales se hayan recogido, que nos informen cada vez que se produce una modificación en sus datos. Una vez recibida la información, es nuestra tarea actualizarlos.
                    <br /><br />
                    Bajo este entendido se establecen algunos lineamientos y recomendaciones para implementar internamente los mecanismos para rendir informes y realizar los reportes de los eventuales incidentes de seguridad que comprometan datos personales de cualquier grupo de interés de BICO, tanto a la Superintendencia de Industria y Comercio como a los Titulares de información personal, según corresponda.
                    <br /><br />
                    El equipo de TI de BICO ha desarrollado la Política General de Tecnología Informática (TI), cuyo contenido y mandatos deben ser estrictamente observados por el Personal de BICO.
                </p>

                <h5>4.9 Debemos observar las disposiciones legales en materia de investigación y desarrollo farmacéutico.</h5>
                <p>
                    Antes de procesar y usar datos personales con fines de investigación y desarrollo farmacéutico, por ejemplo, cuando se trate con tejido humano, ensayos clínicos, datos clínicos o del paciente, bases de datos y datos personales compartidos con otras instituciones, por favor comuníquese con la Persona de Contacto Local para Protección de Datos porque puede haber otras disposiciones legales obligatorias en el marco de este tipo de actividad.
                </p>

                <h5>4.10 Proceso para informar a la SIC de incidentes o violaciones de seguridad.</h5>
                <p>
                    Esta funciona a través de una delegatura para la protección de datos personales, ejercerá vigilancia para garantizar que el tratamiento de los datos sea bajo los principio, derechos y garantías que brinda la ley colombiana.
                    <br /><br />
                    Cuando se genere un incumplimiento la Superintendencia de Industria y Comercio adoptará las medidas que considere necesarias o impondrá sanciones según sea el caso. Las sanciones varían despendiendo el incumplimiento en el que incurrió.
                    <br /><br />
                    Las violaciones a los códigos de seguridad de las organizaciones generan un riesgo para los Titulares de la información y son causantes en muchos casos de impactos significativos a la reputación corporativa y, en el peor de los casos, pueden afectar directamente a los Titulares de información personal. Para que sea más claro, se deberá entender como incidente de seguridad cualquier evento que atente contra la seguridad de los datos personales que se almacenen en los sistemas de información o bases de datos manuales o automatizadas de BICO.
                    <br /><br />
                    Considerando que en la Ley 1581 de 2012 no se precisan qué tipo de incidentes deben ser reportados en la plataforma del RNBD que administra la SIC, en principio, deben reportarse todos los incidentes, independiente de su impacto. Por esta razón, es necesario que la persona y el área encargada de gestionar los datos personales cuenten con un procedimiento para manejar los incidentes o vulneraciones a los sistemas de información o a los archivos físicos, dentro del cual se incluyan asuntos para notificar a las partes interesadas, es decir, a la autoridad competente y a los titulares de Datos Personales que posiblemente puedan verse afectados.
                    <br /><br />
                    Dentro de su gestión, se encuentra aquella consistente en emitir informes internos y reportar los incidentes ocurridos a la SIC y mecanismos que permitan comunicarse efectivamente con los titulares que posiblemente puedan verse afectados para informarles sobre el incidente ocurrido, sus posibles consecuencias y, en la medida de lo posible, proporcionar las herramientas a dichos terceros afectados para minimizar el daño potencial o efectivamente causado.
                </p>

                <h5>4.11 La transferencia de los datos personales a terceros países.</h5>
                <p>
                    Es importante administrar los datos personales en forma segura, y está prohibido realizar transferencia de los datos a cualquier país que no proporcione los niveles adecuados de protección de datos. Se entiende que cumple con los estándares de seguridad cuando cumple por lo que están fijados por la Superintendencia de Industria y Comercio. Aunque no podemos dejar atrás las excepciones a esta norma como cuando el titular de los datos lo haya prohibido de manera expresa.
                </p>

                <h5>4.12 Siempre debemos guardar datos personales correctos y actualizados.</h5>
                <p>
                    Para la actividad comercial de la compañía es importante que los datos personales sean correctos y estén siempre actualizados. Esto se puede lograr pidiendo a los empleados, clientes y otros terceros, cuyos datos personales se hayan recogido, que nos informen cada vez que se produce una modificación en sus datos. Una vez recibida la información, es nuestra tarea actualizarlos.
                </p>

                <h5>4.13 Debemos cerciorarnos de que los clientes y contactos tengan la posibilidad de optar por ser retirados de la base de datos.</h5>
                <p>
                    De acuerdo con el capítulo 25 del Decreto 1074 de 2015, BICO ha dispuesto un mecanismo gratuito y ágil a través del cual el Titular puede en todo momento, y siempre que no medie un deber legal o contractual que así lo impida, solicitar a BICO la supresión de los Datos Personales y/o revocar la autorización que ha otorgado para el Tratamiento de estos, mediante la presentación de una solicitud.
                    <br /><br />
                    Si vencido el término legal respectivo, BICO no elimina de las Bases de Datos los Datos Personales del Titular que lo solicitó, el Titular tendrá derecho a solicitar a la Superintendencia de Industria y Comercio que ordene la revocatoria de la autorización y/o la supresión de los datos personales.
                </p>

                <h5>4.14 Parámetros de Conducta y Prohibiciones del personal de BICO.</h5>
                <p>
                    Como parte del compromiso de la gerencia de BICO se han adoptado ciertas reglas en cuanto al uso de Datos Personales y bases de datos de propiedad de la empresa por parte de sus empleados y contratistas. Así las cosas, y con el interés principal de transmitir un mensaje claro e integral bajo el cual se compromete BICO a garantizar una cultura de privacidad, se han diseñado y puesto en marcha los siguientes parámetros que deben observarse respecto del tratamiento de Datos Personales.
                    <br /><br />
                    Estos parámetros deben ser seguidos por todos los empleados y contratistas de BICO sin importar su rango o la labor que desempeñen en la empresa. El incumplimiento de cualquiera de las reglas aquí planteadas puede dar lugar a la terminación del vínculo laboral/contractual o de otra naturaleza con BICO con justa causa, razón por la cual invitamos a todo el Personal de BICO a leer detenidamente la siguiente información:
                    <br /><br />
                    a) Los Datos Personales y bases de datos constituidas por los mismos sean de clientes, empleados, contratistas, entre otros, son propiedad exclusiva de BOEHRINGER.<br />
                    b) El Personal sólo está autorizado al acceso y uso de los mismos en la medida en que sea necesario para el cumplimiento de la labor para la cual fue contratado.<br />
                    c) La Información de clientes (dirección electrónica, física, teléfono, nombre, hábitos de consumo, intereses que hagan identificable al cliente) o cualquier otra información que haga identificable a esa persona natural es propiedad de BICO, por lo cual el empleado sólo está autorizado para usarla bajo las instrucciones que previamente le imparta la empresa.<br />
                    d) El Personal no está autorizado para usar Datos Personales de clientes de BICO para el ofrecimiento de servicios o productos que sean ajenos al giro ordinario de las actividades de la empresa o a los asuntos inherentes a la misma.<br />
                    e) Los Datos Personales y bases de datos de la empresa deben ser protegidos por el Personal de BICO bajo medidas de confidencialidad, por lo cual deben abstenerse de compartirlos con terceros ajenos a labores de la empresa o ajenos a gestiones para los cuales el Titular haya autorizado su tratamiento.<br />
                    f) El área de TI ha procedido con la organización del acceso permitido a los Datos Personales y bases de datos compuestas por los mismos, por lo cual el Personal debe acceder a las Bases de Datos de acuerdo con lo establecido al respecto.<br />
                    <br /><br />
                    Si usted como Empleado de BICO tiene preguntas o no está seguro de cual Tratamiento debe darle a ciertos Datos Personales o bases de datos, le solicitamos enviar su consulta al Oficial de Protección de Datos quien deberá dar instrucciones al respecto con el apoyo del Comité de Privacidad y Seguridad de la Informació0
                </p>

                <h4>5. Definiciones</h4>
                <p>
                    <strong>5.1 Autorización:</strong> es el consentimiento previo, expreso e informado del titular para llevar acabo el tratamiento de datos personales.
                    <br /><br />
                    <strong>5.2 Base de datos:</strong> es el conjunto organizado de datos personales referentes a una persona identificada o identificable, el cual va a hacer objeto de tratamiento.
                    <br /><br />
                    <strong>5.3 Datos personales:</strong> se refiere a cualquier información sobre persona física o jurídica identificada o susceptible de identificación, por ejemplo, datos de empleados, socios, clientes, pacientes, etc., tales como nombre, dirección, teléfono, correo electrónico, fotos, currículum vitae (CV), número de cuenta bancaria, etc.
                    <br /><br />
                    <strong>5.4 Datos personales sensibles:</strong> son aquellos que refieren a los datos que revelan la raza o etnia, la tendencia política, las creencias religiosas y filosóficas, la pertenencia a sindicatos, el estado de salud y la elección sexual.
                    <br /><br />
                    <strong>5.5 Encargado del Tratamiento:</strong> La persona natural o jurídica, pública o privada que por sí misma o en asociación con otros, realice el tratamiento de datos personales por cuenta de BICO.
                    <br /><br />
                    <strong>5.6 Titular o Interesado:</strong> es la persona física titular de los datos personales que sean objeto de la actividad de tratamiento.
                    <br /><br />
                    <strong>5.7 Transferencia:</strong> Comunicación de datos por parte del responsable y/o encargado del tratamiento, quienes se encuentren ubicados en Colombia, a un receptor que a su vez es responsable del tratamiento y que se encuentre dentro o fuera del país.
                    <br /><br />
                    <strong>5.8 Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, y datos sensibles, tales como la recolección, transferencia, almacenamiento, uso, circulación o supresión.
                    <br /><br />
                    <strong>5.9 Transmisión:</strong> Tratamiento de datos personales que implica la comunicación de estos dentro o fuera del territorio de Colombia, cuando tenga por objeto la realización de un Tratamiento por el encargado por su cuenta del responsable.
                </p>

                <h4>6. Consideraciones generales</h4>
                <p>
                    No aplica.
                </p>

                <h4>7. Historia</h4>
                <div className="historia-wrapper">
                    <img src={Historia} alt="historia" />
                </div>

                <h4>8. SOPs RELACIONADOS</h4>
                <p>
                    No aplica.
                </p>

                <h4>9. REFERENCIAS</h4>
                <p>
                    No aplica.
                </p>

                <h4>10. DOCUMENTOS DE REFERENCIA (RD)</h4>
                <p>
                    No aplica.
                </p>
            </div>

            {/* FOOTER */}
            <Footer location={location} />

        </div>
    )
};

export default PrivacityComponent;
