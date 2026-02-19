import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedSection from '../components/AnimatedSection';

const testimonials = [
    { name: 'María López García', permit: 'B', text: 'Aprobé a la primera el teórico y el práctico gracias a la paciencia y profesionalidad de los profesores. Las clases prácticas son geniales y el coche está impecable. ¡100% recomendable!' },
    { name: 'Carlos Ruiz Fernández', permit: 'C+E', text: 'Necesitaba el carnet de camión articulado para trabajar en logística y aquí me lo prepararon muy bien. El camión automático facilita mucho el aprendizaje. Grandes profesionales.' },
    { name: 'Ana Martínez Sánchez', permit: 'A2', text: 'Tenía mucho respeto a la moto pero los profesores de San Jerónimo me dieron una confianza increíble. Aprobé sin problemas y ahora disfruto cada kilómetro sobre dos ruedas.' },
    { name: 'Pedro García Navarro', permit: 'CAP', text: 'Hice el CAP de renovación y todo fue perfecto. Muy bien organizado, temario actualizado y claro, y las instalaciones están geniales. Sin duda repetiré para el ADR.' },
    { name: 'Laura Jiménez Torres', permit: 'B', text: 'Llevaba años sin atreverme a sacarme el carnet y al final me animé con San Jerónimo. El trato humano es excepcional, se adaptan a tu ritmo y te motivan mucho.' },
    { name: 'Miguel Ángel Pérez', permit: 'ADR', text: 'Necesitaba el ADR para mi empresa de transporte. El curso fue muy completo y bien explicado. Aprobé todo a la primera. Lo recomiendo sin dudarlo.' },
    { name: 'Rocío Gutiérrez Díaz', permit: 'B+E', text: 'Me saqué el B+E para poder llevar la caravana. Las clases de maniobras fueron geniales y muy prácticas. En pocas semanas ya tenía mi permiso. ¡Gracias!' },
    { name: 'Francisco López Ruiz', permit: 'D', text: 'Me preparé el permiso de autobús aquí y quedé encantado. Profesores con mucha experiencia en conducción profesional. Sin duda la mejor autoescuela de la zona.' },
];

export default function Opiniones() {
    return (
        <>
            <SEO
                title="Opiniones de nuestros alumnos"
                description="Lee las opiniones de los alumnos de Autoescuela San Jerónimo en Huércal-Overa. Más de 40 años de experiencia con excelentes valoraciones."
            />

            <section className="page-hero page-hero-img">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80" alt="" className="page-hero-bg" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up">Opiniones de nuestros alumnos</h1>
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        Miles de conductores ya confían en nosotros. Descubre lo que dicen
                        nuestros alumnos sobre su experiencia en Autoescuela San Jerónimo.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <h2>Valoraciones reales</h2>
                            <p>La mejor carta de presentación son nuestros alumnos</p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-2">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                                <TestimonialCard {...t} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container text-center">
                    <AnimatedSection animation="zoom-in">
                        <h2>¿Quieres compartir tu experiencia?</h2>
                        <p style={{ maxWidth: 550, margin: '1rem auto 2rem', opacity: 0.85 }}>
                            Si has sido alumno de Autoescuela San Jerónimo, nos encantaría conocer tu opinión.
                            ¡Tu experiencia ayuda a otros conductores a dar el paso!
                        </p>
                        <Link to="/contacto" className="btn btn-primary">Cuéntanos tu experiencia</Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
