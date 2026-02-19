import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

const courses = [
    {
        icon: '🚛',
        title: 'Permiso C – Camión',
        bullets: [
            'Vehículos de más de 3.500 kg',
            'Camión automático nuevo',
            'Clases prácticas intensivas',
            'Preparación para empresa',
            'Profesores con experiencia profesional',
        ],
        cta: 'Solicitar presupuesto',
    },
    {
        icon: '🚛',
        title: 'Permiso C+E – Camión articulado',
        bullets: [
            'Camión con remolque / tráiler',
            'Camión automático de última generación',
            'Formación integral teórica y práctica',
            'Maniobras especializadas',
            'Alta tasa de aprobados',
        ],
        cta: 'Solicitar presupuesto',
    },
    {
        icon: '🚌',
        title: 'Permiso D – Autobús',
        bullets: [
            'Transporte de pasajeros (>9 plazas)',
            'Formación completa y segura',
            'Prácticas con autobús real',
            'Requisito para transporte público',
            'Horarios adaptados a tu disponibilidad',
        ],
        cta: 'Solicitar presupuesto',
    },
    {
        icon: '🚐',
        title: 'Permiso B+E – Remolque',
        bullets: [
            'Remolque de más de 750 kg',
            'Ideal para profesionales del transporte',
            'Maniobras de acoplamiento',
            'Curso intensivo disponible',
            'Prácticas especializadas',
        ],
        cta: 'Solicitar presupuesto',
    },
    {
        icon: '📜',
        title: 'CAP – Certificado de Aptitud Profesional',
        bullets: [
            'CAP inicial y CAP de renovación',
            'Centro autorizado oficial',
            'Formación flexible y adaptada',
            'Obligatorio para transporte profesional',
            'Material didáctico incluido',
        ],
        cta: 'Más información',
    },
    {
        icon: '⚠️',
        title: 'ADR – Mercancías peligrosas',
        bullets: [
            'Obtención y renovación',
            'Centro autorizado para ADR',
            'Formación especializada en seguridad',
            'Todas las especializaciones',
            'Certificación oficial',
        ],
        cta: 'Más información',
    },
    {
        icon: '🏗️',
        title: 'Formación adicional',
        bullets: [
            'Carretillas elevadoras',
            'Formación vial laboral',
            'Cursos para empresas',
            'Seguridad vial profesional',
            'Consulta disponibilidad',
        ],
        cta: 'Consultar',
    },
];

export default function Profesionales() {
    return (
        <>
            <SEO
                title="Cursos profesionales y transporte"
                description="Cursos profesionales en Autoescuela San Jerónimo: permisos C, C+E, D, CAP, ADR. Camión automático nuevo. Centro autorizado en Huércal-Overa."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Cursos profesionales y transporte</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Si quieres trabajar como conductor profesional, en Autoescuela San Jerónimo te formamos
                        en camiones, autobuses, CAP y ADR con vehículos nuevos y modernos.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Nuestros cursos profesionales</h2>
                            <p>Formación completa para tu carrera como conductor profesional</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-3">
                        {courses.map((c, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <Card icon={c.icon} title={c.title} bullets={c.bullets} cta={c.cta} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container text-center">
                    <AnimatedSection animation="zoom-in">
                        <h2>Fórmate con los mejores</h2>
                        <p style={{ maxWidth: 600, margin: '1rem auto 2rem', opacity: 0.85 }}>
                            Nuestro camión automático nuevo y nuestros profesores con experiencia profesional
                            te garantizan la mejor formación del mercado. Solicita presupuesto sin compromiso.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contacto" className="btn btn-primary">Solicitar presupuesto</Link>
                            <a href="tel:+34629245426" className="btn btn-white">📞 629 24 54 26</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
