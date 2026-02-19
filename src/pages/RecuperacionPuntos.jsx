import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './RecuperacionPuntos.css';

const features = [
    { icon: '📋', title: 'Curso oficial', text: 'Curso presencial homologado por la DGT para la recuperación parcial o total de puntos.' },
    { icon: '⏱️', title: 'Duración', text: '12 horas lectivas distribuidas en un fin de semana. Cómodo, rápido y compatible con tu trabajo.' },
    { icon: '📍', title: 'En Huércal-Overa', text: 'Se imparte presencialmente en nuestras instalaciones de Huércal‑Overa. Sin desplazamientos largos.' },
    { icon: '📖', title: 'Todo incluido', text: 'Derecho a examen, material didáctico, seguimiento personalizado y certificado de aprovechamiento.' },
];

const steps = [
    { num: '01', text: 'Contacta con nosotros por teléfono o formulario web.' },
    { num: '02', text: 'Te informamos de las próximas fechas disponibles.' },
    { num: '03', text: 'Reserva tu plaza con matrícula anticipada.' },
    { num: '04', text: 'Realiza el curso presencial en fin de semana.' },
    { num: '05', text: 'Recupera tus puntos y vuelve a conducir con tranquilidad.' },
];

export default function RecuperacionPuntos() {
    return (
        <>
            <SEO
                title="Recuperación de puntos"
                description="Curso de recuperación de puntos del carnet en Huércal-Overa. Curso presencial homologado, 12 horas, todo incluido. Autoescuela San Jerónimo."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Recuperación de puntos en el carnet</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Recupera tus puntos con nuestro curso presencial homologado.
                        Rápido, eficaz y sin desplazamientos.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>¿Qué incluye el curso?</h2>
                            <p>Todo lo que necesitas para recuperar tus puntos en un solo fin de semana</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-2">
                        {features.map((f, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="feature-card">
                                    <div className="feature-icon">{f.icon}</div>
                                    <div>
                                        <h3>{f.title}</h3>
                                        <p>{f.text}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>¿Cómo funciona?</h2>
                            <p>5 pasos sencillos para recuperar tus puntos</p>
                        </div>
                    </AnimatedSection>
                    <div className="steps">
                        {steps.map((s, i) => (
                            <AnimatedSection key={i} animation="fade-right" delay={i * 120}>
                                <div className="step">
                                    <div className="step-num">{s.num}</div>
                                    <p>{s.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container text-center">
                    <AnimatedSection animation="zoom-in">
                        <h2>¿Necesitas recuperar puntos?</h2>
                        <p style={{ maxWidth: 550, margin: '1rem auto 2rem', opacity: 0.85 }}>
                            No esperes más. Reserva tu plaza en el próximo curso y vuelve a conducir
                            con total tranquilidad.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contacto" className="btn btn-primary">Reserva tu plaza</Link>
                            <a href="tel:+34629245426" className="btn btn-white">📞 Infórmate ahora</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
