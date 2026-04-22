import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './Legal.css';

export default function AvisoLegal() {
    return (
        <div className="legal-page">
            <SEO
                title="Aviso Legal - Autoescuela San Jerónimo"
                description="Términos y condiciones legales de Autoescuela San Jerónimo. Información sobre el titular y normativa aplicable."
            />

            <section className="legal-hero">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>Aviso <span className="text-gradient">Legal</span></h1>
                        <p>Transparencia y cumplimiento normativo conforme a la LSSI-CE.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="legal-content">
                <div className="container small">
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="legal-card">
                            <h2>1. Información Identificativa</h2>
                            <p>
                                En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa que el titular del sitio web es:
                            </p>
                            <div className="legal-info-box">
                                <ul>
                                    <li><strong>Razón Social:</strong> Centro de Formación Cosmos, SLU.</li>
                                    <li><strong>CIF/NIF:</strong> B04803003</li>
                                    <li><strong>Domicilio Social:</strong> C. Gabriel Martínez Belzunces, 5, 04600 Huércal‑Overa, Almería</li>
                                    <li><strong>Teléfono:</strong> 629 245 406</li>
                                    <li><strong>Email:</strong> sanjeronimo@hotmail.es</li>
                                </ul>
                            </div>

                            <h2>2. Objeto y Ámbito de Aplicación</h2>
                            <p>
                                El presente Aviso Legal regula el acceso, navegación y uso del sitio web oficial de Autoescuela San Jerónimo. El acceso al mismo implica la aceptación de todas las condiciones incluidas en este documento.
                            </p>

                            <h2>3. Condiciones de Uso y Responsabilidad del Usuario</h2>
                            <p>
                                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios de la web. Queda prohibido el uso de la web para:
                            </p>
                            <ul>
                                <li>Difundir contenidos o propaganda de carácter racista, xenófobo o ilegal.</li>
                                <li>Provocar daños en los sistemas físicos y lógicos de Autoescuela San Jerónimo o de terceras personas.</li>
                                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios.</li>
                            </ul>

                            <h2>4. Propiedad Intelectual e Industrial</h2>
                            <p>
                                Autoescuela San Jerónimo es titular de todos los derechos de propiedad intelectual e industrial de su sitio web. Queda prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales sin autorización expresa. El diseño, logotipos, tipografías y material multimedia son propiedad exclusiva de la empresa o cuentan con las licencias correspondientes.
                            </p>

                            <h2>5. Exclusión de Garantías y Responsabilidad</h2>
                            <p>
                                Autoescuela San Jerónimo no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                            </p>

                            <h2>6. Enlaces de Terceros</h2>
                            <p>
                                En el caso de que se dispusiesen enlaces hacia otros sitios de Internet, Autoescuela San Jerónimo no ejercerá ningún tipo de control sobre dichos sitios. En ningún caso asumirá responsabilidad alguna por los contenidos de enlaces ajenos, ni garantizará la disponibilidad técnica, calidad o veracidad de cualquier material o información contenida en dichos hipervínculos.
                            </p>

                            <h2>7. Derecho de Exclusión</h2>
                            <p>
                                La empresa se reserva el derecho a denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso a aquellos usuarios que incumplan las presentes condiciones generales de uso.
                            </p>

                            <h2>8. Legislación Aplicable y Jurisdicción</h2>
                            <p>
                                La relación entre Autoescuela San Jerónimo y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Huércal-Overa / Almería.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
