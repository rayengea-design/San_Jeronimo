import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './Empresa.css';

const differentials = [
    { icon: '🚗', title: 'Vehículos nuevos y modernos', text: 'Todos nuestros vehículos, incluido camión automático, son de última generación para tu máxima comodidad y seguridad.' },
    { icon: '👨‍🏫', title: 'Profesores cualificados', text: 'Nuestro equipo de formadores cuenta con décadas de experiencia y titulaciones oficiales para la enseñanza de la conducción.' },
    { icon: '🤝', title: 'Trato cercano y personalizado', text: 'Cada alumno es único. Adaptamos las clases a tu ritmo, a tus necesidades y a tu disponibilidad horaria.' },
    { icon: '🏫', title: 'Centro autorizado', text: 'Somos centro oficial autorizado para la impartición de cursos de CAP y ADR, con todas las garantías legales.' },
];

export default function Empresa() {
    return (
        <>
            <SEO
                title="Quiénes somos"
                description="Conoce Autoescuela San Jerónimo. Más de 40 años en Huércal-Overa formando conductores. Centro autorizado CAP y ADR, vehículos nuevos y trato personalizado."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1562774053-701939e5c57c?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Quiénes somos</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Más de 40 años de experiencia nos avalan como la autoescuela
                        de referencia en Huércal‑Overa y toda la comarca.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="empresa-intro">
                        <AnimatedSection animation="fade-right">
                            <div className="empresa-text">
                                <h2>Nuestra historia</h2>
                                <p>
                                    Desde hace más de <strong>40 años</strong>, Autoescuela San Jerónimo viene formando
                                    a conductores en Huércal‑Overa y toda la comarca del Levante Almeriense.
                                    Con una filosofía basada en la <strong>calidad de la enseñanza</strong>, la
                                    <strong> seguridad vial</strong> y el <strong>trato cercano</strong>, hemos
                                    conseguido que miles de alumnos obtengan sus permisos de conducir con éxito.
                                </p>
                                <p>
                                    Hoy somos <strong>centro autorizado</strong> para la impartición de cursos de
                                    <strong> CAP</strong> (Certificado de Aptitud Profesional) y <strong>ADR</strong>
                                    (mercancías peligrosas), y contamos con una flota de <strong>vehículos nuevos y
                                        modernos</strong>, incluyendo un <strong>camión automático</strong> para los permisos
                                    C y C+E.
                                </p>
                                <p>
                                    Nuestro compromiso es claro: ofrecer la <strong>mejor formación</strong> para que
                                    cada alumno conduzca con confianza, seguridad y responsabilidad.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="empresa-image-block">
                                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" alt="Autoescuela San Jerónimo" className="empresa-img" />
                                <div className="empresa-stats">
                                    <div className="stat">
                                        <span className="stat-num">40+</span>
                                        <span className="stat-label">Años de experiencia</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-num">1000+</span>
                                        <span className="stat-label">Alumnos formados</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-num">100%</span>
                                        <span className="stat-label">Compromiso</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>¿Qué nos diferencia?</h2>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-2">
                        {differentials.map((d, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="feature-card">
                                    <div className="feature-icon">{d.icon}</div>
                                    <div>
                                        <h3>{d.title}</h3>
                                        <p>{d.text}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Dónde encontrarnos</h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="empresa-ubicacion">
                            <div className="ubicacion-info">
                                <div className="ubicacion-item">
                                    <span className="ubicacion-icon">📍</span>
                                    <div>
                                        <strong>Dirección</strong>
                                        <p>C/ Gabriel Martínez Belzunces, 5<br />04600 Huércal‑Overa, Almería</p>
                                    </div>
                                </div>
                                <div className="ubicacion-item">
                                    <span className="ubicacion-icon">📞</span>
                                    <div>
                                        <strong>Teléfono</strong>
                                        <p><a href="tel:+34629245426">629 24 54 26</a></p>
                                    </div>
                                </div>
                                <div className="ubicacion-item">
                                    <span className="ubicacion-icon">✉️</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p><a href="mailto:sanjeronimo@hotmail.es">sanjeronimo@hotmail.es</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ubicacion-mapa">
                                <iframe
                                    title="Ubicación Autoescuela San Jerónimo"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d-1.9417!3d37.3889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6311f3b7c1f5e3%3A0x0!2sC.%20Gabriel%20Mart%C3%ADnez%20Belzunces%2C%205%2C%2004600%20Hu%C3%A9rcal-Overa%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0, borderRadius: 'var(--radius)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
