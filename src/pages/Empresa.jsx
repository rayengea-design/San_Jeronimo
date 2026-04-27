import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import logo from '../assets/logo_blanco.png';
import './Empresa.css';

const IconDiamond = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M2 9h20" /><path d="m12 22-5-13" /><path d="m12 22 5-13" />
    </svg>
);
const IconTruck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
        <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
    </svg>
);
const IconGraduation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);
const IconStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
);

const differentials = [
    { icon: <IconDiamond />, title: 'Excelencia en la Formación', text: 'Más de 40 años perfeccionando el método para que aprendas no solo a aprobar, sino a conducir con total seguridad.' },
    { icon: <IconTruck />, title: 'Flota Superior', text: 'Vehículos nuevos y camiones automáticos de última generación. La mejor tecnología para tu aprendizaje.' },
    { icon: <IconGraduation />, title: 'Centro Multidisciplinar', text: 'Autorización oficial para CAP, ADR y todos los permisos de conducción en un solo lugar.' },
    { icon: <IconStar />, title: 'Trato Personalizado', text: 'No eres un número. Adaptamos cada fase de tu formación a tus necesidades específicas.' },
];

const testimonials = [
    { name: 'María López García', permit: 'B', text: 'Aprobé a la primera el teórico y el práctico gracias a la paciencia y profesionalidad de los profesores. ¡100% recomendable!' },
    { name: 'Carlos Ruiz Fernández', permit: 'C+E', text: 'Necesitaba el carnet de camión articulado y aquí me lo prepararon muy bien. El camión automático facilita mucho el aprendizaje.' },
    { name: 'Ana Martínez Sánchez', permit: 'A2', text: 'Tenía mucho respeto a la moto pero los profesores me dieron una confianza increíble. Aprobé sin problemas.' },
    { name: 'Pedro García Navarro', permit: 'CAP', text: 'Hice el CAP de renovación y todo fue perfecto. Muy bien organizado y las instalaciones están geniales.' },
    { name: 'Laura Jiménez Torres', permit: 'B', text: 'El trato humano es excepcional, se adaptan a tu ritmo y te motivan mucho para conseguir tu objetivo.' },
    { name: 'Miguel Ángel Pérez', permit: 'ADR', text: 'Necesitaba el ADR para mi empresa de transporte. El curso fue muy completo y bien explicado.' },
];

export default function Empresa() {
    return (
        <div className="sobre-nosotros">
            <SEO
                title="Sobre Nosotros - Autoescuela San Jerónimo"
                description="Conoce nuestra historia de más de 40 años formando conductores. Valores, equipo y opiniones de nuestros alumnos."
            />

            {/* NEW PREMIUM HERO */}
            <section className="page-hero-elite">
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Nuestra Identidad</span>
                        <h1>Comprometidos con tu <span className="text-gradient">seguridad</span></h1>
                        <p>Descubre la trayectoria de una de las autoescuelas con mayor tradición y resultados del Levante Almeriense.</p>
                        <div className="hero-certifications" style={{ justifyContent: 'center' }}>
                            <div className="iso-badge">
                                <span className="iso-text">ISO 9001</span>
                                <span className="iso-desc">Calidad</span>
                            </div>
                            <div className="iso-badge">
                                <span className="iso-text">ISO 14001</span>
                                <span className="iso-desc">Ambiental</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* HISTORY SECTION */}
            <section className="empresa-history">
                <div className="container">
                    <div className="history-grid">
                        <div className="history-content">
                            <AnimatedSection animation="fade-right">
                                <div className="brand-badge-circle">
                                    <img src={logo} alt="San Jerónimo" />
                                </div>
                                <span className="section-label">40 Años de Legado</span>
                                <h2>Donde la experiencia se une con la innovación</h2>
                                <p>
                                    Autoescuela San Jerónimo nació con un propósito claro: elevar los estándares de la formación vial en Huércal-Overa. 
                                    A lo largo de cuatro décadas, hemos evolucionado de ser una pequeña escuela local a convertirnos en un referente multidisciplinar.
                                </p>
                                <div className="stats-row">
                                    <div className="stat-card">
                                        <h4>40+</h4>
                                        <span>Años</span>
                                    </div>
                                    <div className="stat-card">
                                        <h4>11</h4>
                                        <span>Centros</span>
                                    </div>
                                    <div className="stat-card">
                                        <h4>10k+</h4>
                                        <span>Alumnos</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        <div className="history-visual">
                            <AnimatedSection animation="fade-left">
                                <div className="main-visual-card">
                                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000&q=80" alt="Instalaciones" />
                                    <div className="experience-badge">Est. 1984</div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATORS GRID */}
            <section className="differentials-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="centered-header">
                            <h2>¿Por qué San Jerónimo?</h2>
                            <p>Valores que definen nuestra forma de trabajar cada día.</p>
                        </div>
                    </AnimatedSection>
                    
                    <div className="differentials-grid">
                        {differentials.map((item, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="diff-card-modern">
                                    <div className="diff-icon-wrap">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS INTEGRATED */}
            <section className="testimonials-section-unif">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="centered-header">
                            <span className="section-label">Prueba Social</span>
                            <h2>Nuestros alumnos hablan</h2>
                            <p>La mayor garantía de calidad es el éxito de quienes ya se han formado con nosotros.</p>
                        </div>
                    </AnimatedSection>

                    <div className="testimonials-grid-modern">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                                <TestimonialCard {...t} />
                            </AnimatedSection>
                        ))}
                    </div>
                    
                    <div className="testimonials-cta">
                        <Link to="/contacto" className="btn-modern-primary">Únete a ellos</Link>
                    </div>
                </div>
            </section>

            {/* FINAL LOCATION */}
            <section className="final-location">
                <div className="container">
                    <div className="location-unif-grid">
                        <div className="loc-info">
                            <h3>Sede Central</h3>
                            <p>Visita nuestras oficinas centrales en Huércal-Overa para cualquier gestión administrativa.</p>
                            <div className="loc-details">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{display:'inline',marginRight:'6px',verticalAlign:'middle'}}>
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                    C. Gabriel Martínez Belzunces, 5 (Polígono)
                                </p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{display:'inline',marginRight:'6px',verticalAlign:'middle'}}>
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.4 2 2 0 0 1 3.92 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    652 598 193 / 629 245 406
                                </p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{display:'inline',marginRight:'6px',verticalAlign:'middle'}}>
                                        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    sanjeronimo@hotmail.es
                                </p>
                            </div>
                        </div>
                        <div className="loc-map-wrap">
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d-1.9417!3d37.3889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6311f3b7c1f5e3%3A0x0!2sC.%20Gabriel%20Mart%C3%ADnez%20Belzunces%2C%205%2C%2004600%20Hu%C3%A9rcal-Overa%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1"
                                width="100%" height="250" style={{ border: 0, borderRadius: '24px' }}
                                allowFullScreen="" loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
