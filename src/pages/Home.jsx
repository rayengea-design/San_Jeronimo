import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const whyUs = [
    { icon: '🏆', title: 'Más de 40 años de experiencia', text: 'Cuatro décadas formando conductores con los mejores resultados en Huércal‑Overa y toda la comarca.' },
    { icon: '🏫', title: 'Centro autorizado CAP y ADR', text: 'Somos centro oficial para la formación en transporte profesional: CAP inicial, renovación y ADR.' },
    { icon: '🚛', title: 'Vehículos nuevos y modernos', text: 'Incluido camión automático para los permisos C y C+E. Aprendes con la mejor tecnología.' },
    { icon: '📅', title: 'Flexibilidad de horarios', text: 'Clases personalizadas que se adaptan a tu ritmo de vida. Tú eliges cuándo practicar.' },
];

const services = [
    { icon: '🚗', title: 'Permisos de conducir', text: 'Carné B, A2, A, B+E… Aprueba a la primera con nuestras clases personalizadas y vehículos de última generación.', link: '/permisos', cta: 'Ver permisos', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80' },
    { icon: '🚚', title: 'Cursos profesionales', text: 'Permisos C, C+E, D, B+E, CAP y ADR. Formación completa para trabajar como conductor profesional.', link: '/profesionales', cta: 'Ver cursos', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80' },
    { icon: '📋', title: 'Recuperación de puntos', text: 'Recupera los puntos de tu carnet con nuestro curso presencial en Huércal‑Overa. Rápido y eficaz.', link: '/recuperacion-puntos', cta: 'Más información', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80' },
];

const testimonials = [
    { name: 'María López', permit: 'B', text: 'Aprobé a la primera gracias a los profesores de San Jerónimo. Las clases prácticas son geniales y el coche está muy nuevo. ¡Totalmente recomendable!' },
    { name: 'Carlos Ruiz', permit: 'C+E', text: 'Necesitaba el carnet de camión para trabajar y aquí me lo sacaron muy rápido. El camión automático es una pasada. Grandes profesionales.' },
    { name: 'Ana Martínez', permit: 'A2', text: 'Tenía mucho miedo de la moto pero los profesores me dieron mucha confianza. Aprobé sin problemas y ahora disfruto cada kilómetro.' },
    { name: 'Pedro García', permit: 'CAP', text: 'Hice el CAP de renovación y todo fue perfecto. Muy bien organizado, temario claro y las instalaciones están geniales.' },
];

const stats = [
    { num: '40+', label: 'Años de experiencia' },
    { num: '5000+', label: 'Alumnos formados' },
    { num: '95%', label: 'Aprobados' },
    { num: '100%', label: 'Compromiso' },
];

export default function Home() {
    return (
        <>
            <SEO
                title="Inicio"
                description="Autoescuela San Jerónimo en Huércal-Overa. Más de 40 años formando conductores. Permisos B, A, C, D, CAP, ADR y recuperación de puntos con vehículos nuevos."
            />

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80" alt="" />
                </div>
                <div className="hero-overlay" />
                <div className="hero-particles">
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="hero-content container">
                    <div className="hero-badge-top animate-fade-in">Centro autorizado CAP y ADR</div>
                    <h1 className="animate-fade-in-up">
                        Autoescuela San Jerónimo
                        <span>Más de 40 años formando conductores en Huércal‑Overa</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Permisos B, A, C, D, CAP, ADR y recuperación de puntos con vehículos nuevos y modernos.
                    </p>
                    <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/contacto" className="btn btn-primary btn-glow">Quiero información</Link>
                        <a href="tel:+34629245426" className="btn btn-white">📞 Llamar ahora</a>
                    </div>
                    <div className="hero-badges animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <span className="badge">✓ Centro autorizado CAP</span>
                        <span className="badge">✓ Camión automático</span>
                        <span className="badge">✓ +40 años de experiencia</span>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((s, i) => (
                            <AnimatedSection key={i} animation="zoom-in" delay={i * 100}>
                                <div className="stat-item">
                                    <span className="stat-number">{s.num}</span>
                                    <span className="stat-text">{s.label}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>¿Por qué elegirnos?</h2>
                            <p>Confía en la autoescuela con más experiencia de la comarca</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-4">
                        {whyUs.map((item, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <Card icon={item.icon} title={item.title}>
                                    {item.text}
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES WITH IMAGES */}
            <section className="section section-light">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Nuestros servicios</h2>
                            <p>Todo lo que necesitas para obtener tu permiso o formarte como profesional</p>
                        </div>
                    </AnimatedSection>
                    <div className="services-showcase">
                        {services.map((s, i) => (
                            <AnimatedSection key={i} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 150}>
                                <div className={`service-row ${i % 2 !== 0 ? 'reverse' : ''}`}>
                                    <div className="service-image">
                                        <img src={s.img} alt={s.title} loading="lazy" />
                                        <div className="service-image-badge">{s.icon}</div>
                                    </div>
                                    <div className="service-content">
                                        <h3>{s.title}</h3>
                                        <p>{s.text}</p>
                                        <Link to={s.link} className="btn btn-outline btn-sm">{s.cta}</Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Lo que dicen nuestros alumnos</h2>
                            <p>Miles de conductores ya confían en nosotros</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-4">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <TestimonialCard {...t} />
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fade-up" delay={400}>
                        <div className="text-center mt-4">
                            <Link to="/opiniones" className="btn btn-outline">Ver más opiniones</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="cta-bg">
                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80" alt="" />
                </div>
                <div className="cta-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="cta-grid">
                        <AnimatedSection animation="fade-right">
                            <div className="cta-text">
                                <h2>¿Listo para aprender a conducir?</h2>
                                <p>
                                    Da el primer paso hacia tu libertad al volante. Déjanos tus datos y uno de
                                    nuestros asesores te contactará sin compromiso.
                                </p>
                                <div className="cta-features">
                                    <span>✓ Sin compromiso</span>
                                    <span>✓ Respuesta en 24h</span>
                                    <span>✓ Te llamamos gratis</span>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={200}>
                            <ContactForm compact />
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
