import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import './Contacto.css';

export default function Contacto() {
    return (
        <>
            <SEO
                title="Contacto"
                description="Contacta con Autoescuela San Jerónimo en Huércal-Overa. Teléfono 629 24 54 26, email sanjeronimo@hotmail.es. Formulario de contacto y mapa."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Contacta con nosotros</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Estamos aquí para ayudarte. Escríbenos, llámanos o visítanos
                        en nuestras instalaciones de Huércal‑Overa.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contacto-grid">
                        <AnimatedSection animation="fade-right">
                            <div className="contacto-info">
                                <h2>Datos de contacto</h2>

                                <div className="contacto-item">
                                    <div className="contacto-icon">📍</div>
                                    <div>
                                        <strong>Dirección</strong>
                                        <p>C/ Gabriel Martínez Belzunces, 5<br />04600 Huércal‑Overa, Almería, España</p>
                                    </div>
                                </div>

                                <div className="contacto-item">
                                    <div className="contacto-icon">📞</div>
                                    <div>
                                        <strong>Teléfono</strong>
                                        <p><a href="tel:+34629245426">629 24 54 26</a></p>
                                    </div>
                                </div>

                                <div className="contacto-item">
                                    <div className="contacto-icon">✉️</div>
                                    <div>
                                        <strong>Email</strong>
                                        <p><a href="mailto:sanjeronimo@hotmail.es">sanjeronimo@hotmail.es</a></p>
                                    </div>
                                </div>

                                <div className="contacto-item">
                                    <div className="contacto-icon">🕐</div>
                                    <div>
                                        <strong>Horario</strong>
                                        <p>Lunes a Viernes: 10:00 – 13:00 y 17:00 – 21:00<br />Sábados: Consultar</p>
                                    </div>
                                </div>

                                <div className="contacto-highlights">
                                    <div className="highlight">
                                        <span>⚡</span>
                                        <p>Te responderemos en menos de 24 horas</p>
                                    </div>
                                    <div className="highlight">
                                        <span>📞</span>
                                        <p>¿Prefieres que te llamemos? Déjanos tu teléfono y te llamamos gratis</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="contacto-form-wrapper">
                                <ContactForm />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="contacto-mapa">
                <iframe
                    title="Ubicación Autoescuela San Jerónimo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d-1.9417!3d37.3889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6311f3b7c1f5e3%3A0x0!2sC.%20Gabriel%20Mart%C3%ADnez%20Belzunces%2C%205%2C%2004600%20Hu%C3%A9rcal-Overa%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    );
}
