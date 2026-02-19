import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

const permits = [
    {
        icon: '🚗',
        title: 'Permiso B – Coche',
        bullets: [
            'Edad mínima: 18 años',
            'Teórico + prácticas + simulación',
            'Evaluación continua personalizada',
            'Vehículo nuevo de última generación',
            'Flexibilidad total de horarios',
        ],
        cta: 'Solicitar información',
    },
    {
        icon: '🏍️',
        title: 'Permiso A2 – Moto',
        bullets: [
            'Edad mínima: 18 años',
            'Formación en seguridad vial',
            'Conducción preventiva y defensiva',
            'Moto adaptada para el aprendizaje',
            'Prácticas en circuito y vía pública',
        ],
        cta: 'Solicitar información',
    },
    {
        icon: '🏍️',
        title: 'Permiso A – Moto sin limitación',
        bullets: [
            'Edad mínima: 20 años (o 2 años con A2)',
            'Ampliación de A2 a A',
            'Formación avanzada en moto',
            'Preparación completa para examen',
            'Profesores especializados',
        ],
        cta: 'Solicitar información',
    },
    {
        icon: '🚐',
        title: 'Permiso B+E – Remolque',
        bullets: [
            'Remolque de más de 750 kg',
            'Prácticas especializadas',
            'Maniobras de acoplamiento',
            'Ideal para caravanas y trabajo',
            'Formación rápida e intensiva',
        ],
        cta: 'Solicitar información',
    },
    {
        icon: '🛵',
        title: 'Permiso AM – Ciclomotor',
        bullets: [
            'Edad mínima: 15 años',
            'Ciclomotores hasta 50cc',
            'Teórico + práctico',
            'Ideal para jóvenes',
            'Máxima seguridad',
        ],
        cta: 'Solicitar información',
    },
];

export default function Permisos() {
    return (
        <>
            <SEO
                title="Permisos de conducir"
                description="Obtén tu permiso de conducir en Autoescuela San Jerónimo. Carné B, A2, A, B+E y AM. Vehículos nuevos, horarios flexibles y profesores expertos en Huércal-Overa."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Permisos de conducir</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Fórmate con los mejores profesionales y con vehículos de última generación.
                        En Autoescuela San Jerónimo te preparamos para aprobar a la primera.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Elige tu permiso</h2>
                            <p>Todos nuestros cursos incluyen teórico, prácticas y seguimiento personalizado</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-3">
                        {permits.map((p, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <Card icon={p.icon} title={p.title} bullets={p.bullets} cta={p.cta} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container text-center">
                    <AnimatedSection animation="zoom-in">
                        <h2>¿No sabes qué permiso necesitas?</h2>
                        <p style={{ maxWidth: 600, margin: '1rem auto 2rem', opacity: 0.85 }}>
                            Llámanos o escríbenos y te asesoramos sin compromiso.
                            Te ayudamos a elegir el permiso que mejor se adapta a tus necesidades.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contacto" className="btn btn-primary">Solicitar información</Link>
                            <a href="tel:+34629245426" className="btn btn-white">📞 629 24 54 26</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
