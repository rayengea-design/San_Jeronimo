import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedSection from '../components/AnimatedSection';
import logo from '../assets/logo_blanco.png';
import { centros } from '../data/centros';
import './Home.css';

const stats = [
    { num: '40+', label: 'Años formando' },
    { num: '11', label: 'Centros propios' },
    { num: '15k+', label: 'Alumnos titulados' },
    { num: '95%', label: 'Tasa de aprobados' },
];

const marqueeItems = [
    'Permiso B', 'Permiso A2', 'Camión C', 'Tráiler C+E', 'Autobús D',
    'CAP Inicial', 'CAP Continuo', 'ADR Básico', 'ADR Cisternas',
    'Recuperación de Puntos', 'Cursos Intensivos', 'FUNDAE',
    'Permiso B', 'Permiso A2', 'Camión C', 'Tráiler C+E', 'Autobús D',
    'CAP Inicial', 'CAP Continuo', 'ADR Básico', 'ADR Cisternas',
    'Recuperación de Puntos', 'Cursos Intensivos', 'FUNDAE',
];

const permisosShowcase = [
    {
        tag: 'Lo más demandado',
        title: 'Permiso B — Coche',
        desc: 'Aprende con vehículos de última generación y sistemas ADAS',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80',
        link: '/permisos#turismos',
        tall: true,
    },
    {
        tag: 'Motos',
        title: 'AM · A1 · A2 · A',
        desc: 'Desde ciclomotor hasta gran cilindrada',
        image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80',
        link: '/permisos#motos',
    },
    {
        tag: 'Transporte',
        title: 'Camión y Autobús',
        desc: 'C, C+E, D — con camión automático',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
        link: '/permisos#pesados',
    },
    {
        tag: 'CAP y ADR',
        title: 'Logística Profesional',
        desc: 'Certificaciones obligatorias para el sector',
        image: 'https://images.unsplash.com/photo-1586191582151-f73770701041?w=800&q=80',
        link: '/profesionales',
    },
    {
        tag: 'Remolques',
        title: 'B96 y B+E',
        desc: 'Conjuntos y caravanas pesadas',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=800&q=80',
        link: '/permisos#turismos',
    },
];

const fleet = [
    { name: 'Turismo de Prácticas', type: 'Última generación', desc: 'Equipados con ADAS y doble mando digital.', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
    { name: 'Camión Automático', type: 'Exclusivo en la zona', desc: 'Aprendizaje más fácil y eficiente.', img: 'https://images.unsplash.com/photo-1586191582151-f73770701041?w=400&q=80' },
    { name: 'Motos Adaptadas', type: 'Para cada examen', desc: 'Flota específica para AM, A1, A2 y A.', img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=400&q=80' },
];

const profesionalFeatures = [
    { title: 'CAP Inicial y Continuo', desc: 'Formación obligatoria para conductores profesionales de mercancías y viajeros.' },
    { title: 'Mercancías Peligrosas ADR', desc: 'Básico, cisternas, explosivos y radiactivos. Centro oficial autorizado.' },
    { title: 'Bonificación FUNDAE', desc: 'Gestionamos la bonificación para que la formación de tu empresa sea gratuita.' },
];

const empresaCards = [
    { title: 'Pista de Prácticas', desc: 'Instalaciones privadas para un aprendizaje seguro antes de salir a la vía pública.' },
    { title: 'Tests Online 24/7', desc: 'Plataforma con tests DGT actualizados, accesible desde cualquier dispositivo.' },
    { title: 'Profesores Titulados', desc: 'Equipo con décadas de experiencia y vocación por la enseñanza vial.' },
    { title: 'Gestión Integral', desc: 'Nos encargamos de toda la tramitación con Tráfico. Tú solo conduces.' },
];

const testimonials = [
    { name: 'María López', permit: 'B', text: 'Aprobé a la primera gracias a la paciencia de los profesores y los intensivos de teórica. Trato cercano y profesional.' },
    { name: 'Carlos Ruiz', permit: 'C+E', text: 'El camión automático marca la diferencia. Aprender con tecnología moderna te prepara de verdad para el mundo laboral.' },
    { name: 'Ana Martínez', permit: 'A2', text: 'Tenía mucho respeto a la moto, pero los instructores me transmitieron una confianza enorme. Lo recomiendo al 100%.' },
];

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const cardIcons = [
    <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4"/><path d="M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4"/><line x1="6" y1="12" x2="18" y2="12"/></svg>,
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
];

export default function Home() {
    return (
        <div className="home-page">
            <SEO
                title="Líderes en Formación Vial en Almería"
                description="Autoescuela San Jerónimo: 40 años de excelencia. 11 centros en Almería, formación profesional CAP/ADR y permisos de conducir de todo tipo."
            />

            {/* ═══ HERO ═══ */}
            <section className="home-hero">
                <div className="home-hero__bg">
                    <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80">
                        <source src="https://videos.pexels.com/video-files/2053100/2053100-sd_640_360_30fps.mp4" type="video/mp4" />
                    </video>
                    <div className="home-hero__gradient" />
                </div>
                <div className="home-hero__inner">
                    <div className="home-hero__content">
                        <AnimatedSection animation="fade-up">
                            <img src={logo} alt="Autoescuela San Jerónimo" className="home-hero__logo" />
                            <h1 className="home-hero__title">
                                Tu carnet de conducir,
                                <span>con quien mejor te prepara.</span>
                            </h1>
                            <p className="home-hero__subtitle">
                                Más de 40 años formando conductores en Almería. 
                                11 centros, todos los permisos y la mejor tasa de aprobados de la comarca.
                            </p>
                            <div className="home-hero__actions">
                                <Link to="/permisos" className="home-hero__btn home-hero__btn--primary">Ver permisos disponibles</Link>
                                <Link to="/centros" className="home-hero__btn home-hero__btn--outline">Encontrar mi centro</Link>
                            </div>
                            <div className="hero-certifications">
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
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="home-hero__stats">
                            {stats.map((s, i) => (
                                <div key={i} className="home-hero__stat">
                                    <span className="home-hero__stat-num">{s.num}</span>
                                    <span className="home-hero__stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══ MARQUEE ═══ */}
            <div className="home-marquee">
                <div className="marquee-track">
                    {marqueeItems.map((item, i) => (
                        <span key={i}>
                            <span className="marquee-item">{item}</span>
                            {i < marqueeItems.length - 1 && <span className="marquee-dot"> · </span>}
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══ PERMISOS SHOWCASE ═══ */}
            <section className="home-permisos">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="home-section-header">
                            <span className="home-section-label">Formación completa</span>
                            <h2>Todos los permisos de conducir<br />en un solo lugar</h2>
                            <p>Desde el ciclomotor hasta el tráiler. Vehículos nuevos, camión automático y profesores con décadas de experiencia.</p>
                        </div>
                    </AnimatedSection>
                    <div className="permisos-showcase">
                        {permisosShowcase.map((p, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                                <Link to={p.link} className={`permiso-card ${p.tall ? 'permiso-card--tall' : ''}`}>
                                    <img src={p.image} alt={p.title} loading={i > 1 ? 'lazy' : undefined} />
                                    <div className="permiso-card__overlay">
                                        <span className="permiso-card__tag">{p.tag}</span>
                                        <h3 className="permiso-card__title">{p.title}</h3>
                                        <p className="permiso-card__desc">{p.desc}</p>
                                    </div>
                                    <span className="permiso-card__arrow">→</span>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FLEET STRIP ═══ */}
            <section className="home-fleet">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="home-section-header" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 3rem' }}>
                            <span className="home-section-label">Nuestra flota</span>
                            <h2>Vehículos de última generación</h2>
                        </div>
                    </AnimatedSection>
                    <div className="fleet-strip">
                        {fleet.map((v, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                                <div className="fleet-item">
                                    <img src={v.img} alt={v.name} loading="lazy" />
                                    <div>
                                        <span>{v.type}</span>
                                        <h4>{v.name}</h4>
                                        <p>{v.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROFESIONAL SPLIT ═══ */}
            <section className="home-profesional">
                <div className="container">
                    <div className="profesional-split">
                        <AnimatedSection animation="fade-right">
                            <div className="profesional-image">
                                <img src="https://images.unsplash.com/photo-1591768793355-74d7ca736056?w=1000&q=80" alt="Formación profesional camión" />
                                <div className="profesional-image__badge">
                                    <span className="profesional-image__badge-num">95%</span>
                                    <span className="profesional-image__badge-text">aprobados en<br />primer examen</span>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={150}>
                            <div className="profesional-content">
                                <span className="home-section-label" style={{ color: '#64c8e8' }}>División profesional</span>
                                <h2>Referentes en formación<br />logística y transporte</h2>
                                <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: 0 }}>
                                    Única autoescuela de la zona con flota propia de última generación 
                                    y centro autorizado para CAP, ADR y todos los permisos profesionales.
                                </p>
                                <div className="profesional-features">
                                    {profesionalFeatures.map((f, i) => (
                                        <div key={i} className="profesional-feature">
                                            <div className="profesional-feature__icon"><CheckIcon /></div>
                                            <div className="profesional-feature__text">
                                                <strong>{f.title}</strong>
                                                <span>{f.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/profesionales" className="home-hero__btn home-hero__btn--primary">Ver cursos profesionales</Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══ RECUPERACIÓN DE PUNTOS ═══ */}
            <section className="home-puntos">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="puntos-banner">
                            <div className="puntos-banner__image">
                                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" alt="Recuperación de puntos" />
                            </div>
                            <div className="puntos-banner__content">
                                <span className="puntos-banner__tag">Centro homologado DGT</span>
                                <h3>¿Necesitas recuperar puntos del carnet?</h3>
                                <p>Centro oficial autorizado para cursos de recuperación parcial y total. Cursos mensuales con horarios pensados para tu comodidad.</p>
                                <div className="puntos-banner__list">
                                    <span className="puntos-banner__list-item">Recuperación parcial (6 puntos)</span>
                                    <span className="puntos-banner__list-item">Recuperación total</span>
                                    <span className="puntos-banner__list-item">Cursos de fin de semana</span>
                                    <span className="puntos-banner__list-item">Certificado inmediato</span>
                                </div>
                                <Link to="/recuperacion-puntos" className="home-hero__btn home-hero__btn--primary">Ver próximas fechas</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══ CENTROS ═══ */}
            <section className="home-centros">
                <div className="container">
                    <div className="centros-grid">
                        <AnimatedSection animation="fade-right">
                            <div className="centros-content">
                                <span className="home-section-label">Presencia local</span>
                                <h2>11 centros en<br />Almería y Murcia</h2>
                                <p>Estamos donde tú estás. Encuentra tu autoescuela más cercana y empieza tu formación sin desplazarte lejos de casa.</p>
                                <div className="centros-list">
                                    {centros.map(c => (
                                        <span key={c.id} className="centros-list__item">
                                            {c.nombre.split('(')[0].trim()}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/centros" className="home-hero__btn home-hero__btn--primary">Ver mapa y contacto</Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={150}>
                            <div className="centros-mosaic">
                                <div className="centros-mosaic__main">
                                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Centro San Jerónimo" />
                                </div>
                                <div className="centros-mosaic__small">
                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Aula de formación" />
                                </div>
                                <div className="centros-mosaic__card">
                                    <strong>Sede Central</strong>
                                    <span>Huércal-Overa · 629 245 426</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══ POR QUÉ ELEGIRNOS ═══ */}
            <section className="home-empresa">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="home-section-header" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
                            <span className="home-section-label">Desde 1984</span>
                            <h2>Por qué miles de alumnos confían en nosotros</h2>
                        </div>
                    </AnimatedSection>
                    <div className="empresa-grid">
                        {empresaCards.map((card, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="empresa-card">
                                    <div className="empresa-card__icon">{cardIcons[i]}</div>
                                    <h4>{card.title}</h4>
                                    <p>{card.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ TESTIMONIOS ═══ */}
            <section className="home-testimonials">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="home-section-header" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 4rem' }}>
                            <span className="home-section-label">Opiniones reales</span>
                            <h2>Lo que dicen nuestros alumnos</h2>
                        </div>
                    </AnimatedSection>
                    <div className="testimonials-scroll">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <TestimonialCard {...t} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA FINAL ═══ */}
            <section className="home-cta">
                <div className="home-cta__bg">
                    <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80" alt="" />
                </div>
                <div className="container home-cta__inner">
                    <AnimatedSection animation="fade-up">
                        <h2>Tu carnet, más cerca que nunca</h2>
                        <p>Únete a los más de 15.000 alumnos que ya confían en nuestra metodología. Información sin compromiso.</p>
                        <div className="home-cta__actions">
                            <Link to="/contacto" className="home-cta__btn home-cta__btn--white">Solicitar información</Link>
                            <a href="tel:+34629245406" className="home-cta__btn home-cta__btn--ghost">Llamar: 629 245 406</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
