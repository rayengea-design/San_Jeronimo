import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import './Contacto.css';

const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.4 2 2 0 0 1 3.92 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);
const IconPin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconClock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);

const contactCards = [
    {
        icon: <IconPhone />,
        label: 'Llámanos',
        value: '629 245 406',
        sub: '652 598 193',
        href: 'tel:+34629245406',
        color: 'blue',
    },
    {
        icon: <IconMail />,
        label: 'Email',
        value: 'sanjeronimo@hotmail.es',
        sub: 'Respuesta en menos de 24h',
        href: 'mailto:sanjeronimo@hotmail.es',
        color: 'indigo',
    },
    {
        icon: <IconPin />,
        label: 'Sede principal',
        value: 'Huércal-Overa',
        sub: 'C. Gabriel Martínez Belzunces, 5',
        href: null,
        color: 'emerald',
    },
    {
        icon: <IconClock />,
        label: 'Horario',
        value: 'Lun – Vie 9:00–14:00',
        sub: '17:00 – 20:00',
        href: null,
        color: 'amber',
    },
];

export default function Contacto() {
    return (
        <div className="contacto-page">
            <SEO
                title="Contacto - Autoescuela San Jerónimo"
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

            {/* CONTACT CARDS */}
            <section className="contact-cards-section">
                <div className="container">
                    <div className="contact-cards-grid">
                        {contactCards.map((card, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                                {card.href ? (
                                    <a href={card.href} className={`contact-card contact-card--${card.color}`}>
                                        <div className="contact-card__icon">{card.icon}</div>
                                        <div className="contact-card__body">
                                            <span className="contact-card__label">{card.label}</span>
                                            <strong className="contact-card__value">{card.value}</strong>
                                            <span className="contact-card__sub">{card.sub}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <div className={`contact-card contact-card--${card.color}`}>
                                        <div className="contact-card__icon">{card.icon}</div>
                                        <div className="contact-card__body">
                                            <span className="contact-card__label">{card.label}</span>
                                            <strong className="contact-card__value">{card.value}</strong>
                                            <span className="contact-card__sub">{card.sub}</span>
                                        </div>
                                    </div>
                                )}
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORM + MAP */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-main-grid">
                        <div className="contact-form-card">
                            <div className="contact-form-header">
                                <span className="section-label">Formulario</span>
                                <h2>Escríbenos</h2>
                                <p>Un asesor se pondrá en contacto contigo en menos de 24 horas.</p>
                            </div>
                            <ContactForm />
                        </div>

                        <div className="contact-side">
                                <div className="contact-map-card">
                                    <iframe
                                        title="Sede principal Autoescuela San Jerónimo"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d-1.9417!3d37.3889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6311f3b7c1f5e3%3A0x0!2sC.%20Gabriel%20Mart%C3%ADnez%20Belzunces%2C%205%2C%2004600%20Hu%C3%A9rcal-Overa%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1"
                                        width="100%"
                                        height="280"
                                        style={{ border: 0, borderRadius: '16px 16px 0 0', display: 'block' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                    <div className="contact-map-footer">
                                        <IconPin />
                                        <div>
                                            <strong>Sede principal</strong>
                                            <span>C. Gabriel Martínez Belzunces, 5 · 04600 Huércal-Overa</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-trust-card">
                                    <div className="trust-item">
                                        <span className="trust-num">+40</span>
                                        <span className="trust-desc">años de experiencia</span>
                                    </div>
                                    <div className="trust-divider"></div>
                                    <div className="trust-item">
                                        <span className="trust-num">11</span>
                                        <span className="trust-desc">centros en la provincia</span>
                                    </div>
                                    <div className="trust-divider"></div>
                                    <div className="trust-item">
                                        <span className="trust-num">24h</span>
                                        <span className="trust-desc">tiempo de respuesta</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
