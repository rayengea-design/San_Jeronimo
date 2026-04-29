import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from '../utils/seoSchemas';
import AnimatedSection from '../components/AnimatedSection';
import Accordion from '../components/Accordion';
import logo from '../assets/logo_blanco.png';
import './RecuperacionPuntos.css';

const courses = [
    {
        title: 'Recuperación Parcial',
        subtitle: 'Para no perder el permiso',
        points: 'Hasta 6 puntos',
        duration: '12 horas lectivas',
        frequency: 'Cada 2 años (1 año para profesionales)',
        description: 'Indicado para conductores que aún conservan el carnet pero quieren recuperar puntos perdidos por infracciones.',
        highlights: [
            'Sin examen en Tráfico',
            'Curso de un fin de semana',
            'Material didáctico incluido',
            'Certificado inmediato'
        ],
        cta: 'Consultar próximas fechas',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
    },
    {
        title: 'Recuperación Total',
        subtitle: 'Pérdida de vigencia / Sentencia',
        points: 'Saldo de 8 puntos',
        duration: '24 horas lectivas',
        frequency: 'Tras cumplir el periodo de sanción',
        description: 'Obligatorio para conductores que han perdido todos los puntos o tienen una sentencia judicial superior a 2 años.',
        highlights: [
            'Incluye curso de reeducación',
            'Requiere examen teórico en DGT',
            'Recupera saldo inicial de 8 puntos',
            'Asesoramiento administrativo'
        ],
        cta: 'Ver proceso de examen',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
    }
];

const timelineSteps = [
    { title: 'Inscripción', text: 'Contacta con nosotros y reserva tu plaza en el próximo curso disponible. Te informaremos de toda la documentación necesaria.' },
    { title: 'Asistencia al Curso', text: 'Realiza la formación presencial en nuestras instalaciones. Horarios intensivos pensados para tu comodidad.' },
    { title: 'Certificación', text: 'Al finalizar el curso, emitimos el certificado oficial de aprovechamiento. En cursos parciales, los puntos se cargan automáticamente.' },
    { title: 'Examen (Solo Total)', text: 'En caso de recuperación total, te ayudamos a gestionar la cita para el examen en la Jefatura de Tráfico.' },
];

const documents = [
    { icon: '🪪', title: 'DNI / NIE', text: 'En vigor o fotocopia legible.' },
    { icon: '🚗', title: 'Permiso de Conducir', text: 'Si aún lo conservas física o digitalmente.' },
    { icon: '📩', title: 'Notificación DGT', text: 'En caso de pérdida de vigencia (si la tienes).' },
];

const faqs = [
    {
        question: '¿Cuántos puntos recupero en el curso parcial?',
        answer: 'Con el curso de 12 horas recuperas un máximo de 6 puntos, sin superar nunca el saldo inicial de tu permiso.'
    },
    {
        question: '¿Puedo conducir mientras realizo el curso?',
        answer: 'Si el curso es parcial, sí puedes seguir conduciendo. Si es por pérdida de vigencia (total), no puedes conducir hasta haber aprobado el examen en la DGT.'
    },
    {
        question: '¿Hay que hacer examen para la recuperación parcial?',
        answer: 'No. En la recuperación parcial solo es necesaria la asistencia y el aprovechamiento del curso. No hay examen en la DGT.'
    },
    {
        question: '¿Cuándo puedo volver a hacer un curso de recuperación?',
        answer: 'Como norma general, una vez cada 2 años. Los conductores profesionales pueden realizarlo una vez al año.'
    }
];

export default function RecuperacionPuntos() {
    return (
        <>
            <SEO
                title="Recuperación de Puntos DGT en Almería | Cursos Rápidos"
                description="Centro concertado DGT en Huércal-Overa para recuperar puntos del carnet. Cursos de recuperación total o parcial. ¡Consulta fechas y plazas disponibles!"
                url="https://autoescuelasanjeronimo.es/recuperacion-puntos"
                schema={[
                    generateCourseSchema({
                        name: 'Cursos de Recuperación de Puntos',
                        description: 'Cursos de recuperación parcial y total de puntos del permiso de conducir.',
                        url: 'https://autoescuelasanjeronimo.es/recuperacion-puntos'
                    }),
                    generateFAQSchema(faqs),
                    generateBreadcrumbSchema([
                        { name: 'Inicio', url: '/' },
                        { name: 'Recuperación de Puntos', url: '/recuperacion-puntos' }
                    ])
                ]}
            />

            {/* HERO */}
            <section className="page-hero-elite" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=1600&q=80)' }}>
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Seguridad Vial</span>
                        <h1><span className="text-gradient">Recupera</span> tu tranquilidad</h1>
                        <p>Centro Oficial Autorizado en Huércal‑Overa. Te ayudamos a volver a la carretera con seguridad y responsabilidad.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* MODALIDADES */}
            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Modalidades del Curso</h2>
                            <p>Elige el curso que necesitas según tu situación actual</p>
                        </div>
                    </AnimatedSection>

                    <div className="points-grid">
                        {courses.map((c, i) => (
                            <AnimatedSection key={i} animation={i === 0 ? 'fade-right' : 'fade-left'} delay={200}>
                                <div className="puntos-card">
                                    <div className="puntos-card-img">
                                        <img src={c.image} alt={c.title} />
                                        <div className="puntos-badge">{c.points}</div>
                                    </div>
                                    <div className="puntos-card-content">
                                        <div className="puntos-header">
                                            <h3>{c.title}</h3>
                                            <span>{c.subtitle}</span>
                                        </div>
                                        <div className="puntos-info">
                                            <div className="info-item">
                                                <strong>Duración:</strong> {c.duration}
                                            </div>
                                            <div className="info-item">
                                                <strong>Frecuencia:</strong> {c.frequency}
                                            </div>
                                        </div>
                                        <p>{c.description}</p>
                                        <ul className="puntos-highlights">
                                            {c.highlights.map((h, idx) => (
                                                <li key={idx}>✓ {h}</li>
                                            ))}
                                        </ul>
                                        <Link to="/contacto" className={`btn ${i === 0 ? 'btn-outline' : 'btn-primary'} btn-full`}>
                                            {c.cta}
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESO */}
            <section className="section section-light">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Tu Camino a la Recuperación</h2>
                            <p>Un proceso sencillo y profesional acompañado por expertos</p>
                        </div>
                    </AnimatedSection>

                    <div className="puntos-timeline">
                        {timelineSteps.map((s, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="timeline-item">
                                    <div className="timeline-dot">{i + 1}</div>
                                    <h4>{s.title}</h4>
                                    <p>{s.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTACIÓN */}
            <section className="section">
                <div className="container">
                    <div className="docs-layout">
                        <AnimatedSection animation="fade-right">
                            <div className="docs-text">
                                <h2>¿Qué necesitas traer?</h2>
                                <p>
                                    Para formalizar tu inscripción y asegurar la validez del curso ante la DGT,
                                    necesitaremos que nos facilites la siguiente documentación original o copia:
                                </p>
                                <div className="docs-list">
                                    {documents.map((d, i) => (
                                        <div key={i} className="doc-item">
                                            <span className="doc-icon">{d.icon}</span>
                                            <div>
                                                <strong>{d.title}</strong>
                                                <p>{d.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="docs-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80" 
                                    alt="Documentación oficial" 
                                />
                                <div className="docs-badge">Centro Homologado</div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Dudas Frecuentes</h2>
                            <p>Resolvemos las preguntas más comunes sobre el sistema de puntos</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={200}>
                        <Accordion items={faqs} />
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="section section-dark text-center">
                <div className="container">
                    <AnimatedSection animation="zoom-in">
                        <h2>¿Te quedan pocos puntos?</h2>
                        <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', opacity: 0.9 }}>
                            No pongas en riesgo tu carnet de conducir. Infórmate sobre nuestras
                            próximas fechas y recupera tu tranquilidad al volante hoy mismo.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contacto" className="btn btn-primary btn-glow">Solicitar Plaza</Link>
                            <a href="tel:+34629245406" className="btn btn-white">Llamar Ahora</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
