import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './Legal.css';

export default function PoliticaPrivacidad() {
    return (
        <div className="legal-page">
            <SEO
                title="Política de Privacidad - Autoescuela San Jerónimo"
                description="Información detallada sobre el tratamiento de tus datos personales conforme al RGPD y la LOPDGDD."
            />

            <section className="legal-hero">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>Política de <span className="text-gradient">Privacidad</span></h1>
                        <p>Protección de datos y transparencia según el Reglamento General de Protección de Datos (RGPD).</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="legal-content">
                <div className="container small">
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="legal-card">
                            <div className="privacy-summary-box">
                                <h3>Información Básica sobre Protección de Datos</h3>
                                <table className="legal-table">
                                    <tbody>
                                        <tr>
                                            <th>Responsable</th>
                                            <td>Centro de Formación Cosmos, SLU.</td>
                                        </tr>
                                        <tr>
                                            <th>Finalidad</th>
                                            <td>Gestión de alumnos, resolución de consultas y envío de información comercial autorizada.</td>
                                        </tr>
                                        <tr>
                                            <th>Legitimación</th>
                                            <td>Consentimiento del interesado y ejecución de contrato de formación.</td>
                                        </tr>
                                        <tr>
                                            <th>Destinatarios</th>
                                            <td>Organismos oficiales (DGT) y proveedores de servicios tecnológicos bajo contrato. No se ceden a otros terceros salvo obligación legal.</td>
                                        </tr>
                                        <tr>
                                            <th>Derechos</th>
                                            <td>Acceso, rectificación, supresión, limitación, oposición y portabilidad.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>1. ¿Quién es el responsable del tratamiento de sus datos?</h2>
                            <p>
                                El titular responsable del tratamiento de los datos es Centro de Formación Cosmos, SLU, con domicilio en C. Gabriel Martínez Belzunces, 5, 04600 Huércal‑Overa, Almería. Email de contacto: sanjeronimo@hotmail.es.
                            </p>

                            <h2>2. ¿Con qué finalidad tratamos sus datos personales?</h2>
                            <p>
                                En Autoescuela San Jerónimo tratamos la información que nos facilitan las personas interesadas con el fin de gestionar la prestación de servicios de formación vial, la tramitación de expedientes ante la DGT, y el envío de comunicaciones relacionadas con su formación. En el caso de que nos contacte vía web, la finalidad es gestionar su consulta o presupuesto.
                            </p>

                            <h2>3. ¿Por cuánto tiempo conservaremos sus datos?</h2>
                            <p>
                                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o académica y, una vez finalizada ésta, durante los plazos legalmente exigidos por la normativa fiscal, de formación vial y de consumo (generalmente un mínimo de 5 años para registros académicos y fiscales).
                            </p>

                            <h2>4. ¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
                            <p>
                                La base legal para el tratamiento de sus datos es:
                            </p>
                            <ul>
                                <li><strong>Ejecución de contrato:</strong> Para la gestión de la matrícula y clases de conducir.</li>
                                <li><strong>Consentimiento del interesado:</strong> Para el envío de formularios web y comunicaciones comerciales.</li>
                                <li><strong>Interés legítimo:</strong> Para la seguridad de las instalaciones (en caso de videovigilancia) y gestión administrativa interna.</li>
                            </ul>

                            <h2>5. ¿A qué destinatarios se comunicarán sus datos?</h2>
                            <p>
                                Los datos podrán ser comunicados a:
                            </p>
                            <ul>
                                <li>Dirección General de Tráfico (DGT) para la tramitación de exámenes y licencias.</li>
                                <li>Entidades bancarias para la gestión de cobros y pagos.</li>
                                <li>Asesoría fiscal y contable para el cumplimiento de obligaciones legales.</li>
                            </ul>

                            <h2>6. Derechos de los interesados</h2>
                            <p>
                                Cualquier persona tiene derecho a obtener confirmación sobre si en Autoescuela San Jerónimo estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
                            </p>
                            <ul>
                                <li>Acceder a sus datos personales.</li>
                                <li>Solicitar la rectificación de los datos inexactos.</li>
                                <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                                <li>Solicitar la limitación de su tratamiento, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
                                <li>Oponerse al tratamiento de sus datos.</li>
                            </ul>
                            <p>
                                Para ejercer estos derechos, puede enviar un email a <strong>sanjeronimo@hotmail.es</strong> adjuntando copia de su DNI. Asimismo, le informamos de su derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
