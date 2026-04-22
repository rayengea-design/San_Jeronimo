import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import './Contacto.css';

export default function Contacto() {
    return (
        <div className="contacto-page">
            <SEO 
                title="Solicitar Información - Contacto" 
                description="Ponte en contacto con Autoescuela San Jerónimo. Solicita información sobre nuestros permisos de conducir, cursos CAP, ADR e intensivos."
            />

            <section className="page-hero-elite" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80)' }}>
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Atención Directa</span>
                        <h1>Estamos <span className="text-gradient">contigo</span></h1>
                        <p>Estamos aquí para ayudarte a conseguir tu permiso de la forma más rápida y eficaz.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container small">
                    <div className="contacto-grid">
                        <AnimatedSection animation="fade-right">
                            <div className="contacto-info">
                                <h2>Habla con nosotros</h2>
                                <p>Déjanos tus datos y un asesor se pondrá en contacto contigo en menos de 24 horas para resolver tus dudas.</p>
                                
                                <div className="info-list">
                                    <div className="info-item">
                                        <span className="icon">📞</span>
                                        <div>
                                            <strong>Llámanos directamente</strong>
                                            <p><a href="tel:+34629245406">629 245 406</a></p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <span className="icon">✉️</span>
                                        <div>
                                            <strong>Correo electrónico</strong>
                                            <p><a href="mailto:sanjeronimo@hotmail.es">sanjeronimo@hotmail.es</a></p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <span className="icon">📍</span>
                                        <div>
                                            <strong>Sede principal</strong>
                                            <p>Huércal-Overa (Polígono)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
