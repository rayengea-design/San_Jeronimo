import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import AnimatedSection from '../components/AnimatedSection';
import './Permisos.css';

const categories = [
    {
        id: 'motos',
        title: 'Motos y Ciclomotores',
        icon: '🏍️',
        description: 'Desde ciclomotores hasta las motocicletas más potentes. Tu libertad sobre dos ruedas empieza aquí con instructores expertos.',
        permits: [
            {
                image: 'https://images.unsplash.com/photo-1558981403-c5f91ebca638?w=800&q=80',
                title: 'Permiso AM – Ciclomotor',
                minAge: 15,
                bullets: [
                    'Ciclomotores hasta 50cm³',
                    'Coches sin carné (cuadriciclos)',
                    'Examen teórico específico',
                    'Maniobras en circuito cerrado',
                ],
                tag: 'Iniciación'
            },
            {
                image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso A1 – Motos 125',
                minAge: 16,
                bullets: [
                    'Motos hasta 125cm³ y 11kW',
                    'Triciclos de motor hasta 15kW',
                    '2 exámenes teóricos y 2 prácticos',
                    'Válido para llevar pasajeros',
                ],
                tag: 'Juvenil'
            },
            {
                image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso A2 – Moto Media',
                minAge: 18,
                bullets: [
                    'Motos hasta 35kW (aprox. 47CV)',
                    'Potencia/peso máx. 0,2kW/kg',
                    'Circuito cerrado y vía pública',
                    'Paso previo al carnet A',
                ],
                featured: true,
                tag: 'Más popular'
            },
            {
                image: 'https://images.unsplash.com/photo-1558981403-c5f91ebca638?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso A – Moto Total',
                minAge: 20,
                bullets: [
                    'Sin límite de cilindrada',
                    'Motos de gran potencia',
                    '2 años de antigüedad del A2',
                    'Curso de 9h (Sin examen DGT)',
                ],
                tag: 'Experto'
            },
        ]
    },
    {
        id: 'turismos',
        title: 'Turismos y Remolques',
        icon: '🚗',
        description: 'El carné esencial. Te formamos con coches modernos y las mejores técnicas de conducción eficiente.',
        permits: [
            {
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso B – Coche',
                minAge: 18,
                bullets: [
                    'Vehículos hasta 3.500kg',
                    'Hasta 9 plazas conductor incluido',
                    'Teórico común y circulación',
                    '¡Aprende con coches nuevos!',
                ],
                featured: true,
                tag: 'Imprescindible'
            },
            {
                image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso B96 – Conjuntos',
                minAge: 18,
                bullets: [
                    'Mma conjunto hasta 4.250kg',
                    'Sin examen teórico adicional',
                    'Prueba de maniobras y ciudad',
                    'Ideal para caravanas medias',
                ],
                tag: 'Especializado'
            },
            {
                image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso B+E – Remolque',
                minAge: 18,
                bullets: [
                    'Mma conjunto hasta 7.000kg',
                    'Examen teórico específico',
                    'Maniobras y circulación',
                    'Transporte pesado de remolque',
                ],
                tag: 'Profesional'
            },
        ]
    },
    {
        id: 'pesados',
        title: 'Transporte Profesional',
        icon: '🚛',
        description: 'Convierte tu pasión por la conducción en tu profesión. Somos especialistas en camión y autobús.',
        permits: [
            {
                image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso C1 – Camión Ligero',
                minAge: 18,
                bullets: [
                    'Mma entre 3.500kg y 7.500kg',
                    'Hasta 9 plazas totales',
                    'Teórico específico y prácticos',
                    'Salida laboral en reparto',
                ],
                tag: 'Logística'
            },
            {
                image: 'https://images.unsplash.com/photo-1586191582151-f73770701041?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso C – Camión Rígido',
                minAge: 21,
                bullets: [
                    'Mma superior a 3.500kg',
                    'Camión Automático moderno',
                    'Alta demanda laboral',
                    '18 años con CAP inicial',
                ],
                featured: true,
                tag: 'Profesional'
            },
            {
                image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso C+E – Tráiler',
                minAge: 21,
                bullets: [
                    'Nivel máximo de transporte',
                    'Remolques y semirremolques',
                    'Examen en pista y ciudad',
                    'Expertos en logística real',
                ],
                tag: 'Máster'
            },
            {
                image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
                title: 'Permiso D – Autobús',
                minAge: 24,
                bullets: [
                    'Transporte de viajeros',
                    'Más de 9 pasajeros',
                    'Compromiso con la seguridad',
                    '21 años con CAP inicial',
                ],
                tag: 'Viajeros'
            },
        ]
    }
];

const fleet = [
    { name: 'Coche de Prácticas', type: 'Turismo Manual', desc: 'Turismos de última generación equipados con toda la seguridad ADAS.', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80' },
    { name: 'El Gigante', type: 'Camión Automático', desc: '¡Nuestra estrella! Aprenderás con un camión automático nuevo, más fácil y eficiente.', img: 'https://images.unsplash.com/photo-1586191582151-f73770701041?w=800&q=80' },
    { name: 'Flota Moto', type: 'Varias cilindradas', desc: 'Motos adaptadas perfectamente a cada examen: AM, A1, A2 y A.', img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&q=80' },
];

const faqs = [
    {
        question: '¿Qué documentación necesito para inscribirme?',
        answer: 'Solo tu DNI/NIE en vigor y tus ganas de aprender. Nosotros nos encargamos de toda la tramitación con Tráfico.'
    },
    {
        question: '¿Tengo que esperar a los 18 para el teórico de coche?',
        answer: 'No. Puedes examinarte del teórico común del Permiso B hasta 3 meses antes de cumplir los 18 años.'
    },
    {
        question: '¿Ofrecéis cursos intensivos?',
        answer: '¡SÍ! Tenemos programas intensivos de teórica para que apruebes en tiempo récord. Pregúntanos por las próximas fechas.'
    }
];

export default function Permisos() {
    return (
        <div className="permisos-page">
            <SEO
                title="Permisos de conducir - Showroom Profesional"
                description="Consigue tu carnet de coche, moto, camión o autobús con los mejores profesionales. Vehículos modernos y camión automático único en la zona."
            />

            {/* HERO */}
            <section className="page-hero-elite" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80)' }}>
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Formación de Calidad</span>
                        <h1>Tu Libertad al <span className="text-gradient">Volante</span></h1>
                        <p>Descubre nuestra gama de formación líder en la comarca. Tecnología, experiencia y resultados garantizados.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* QUICK NAV */}
            <nav className="permisos-subnav">
                <div className="container">
                    <a href="#motos">Motos</a>
                    <a href="#turismos">Coches</a>
                    <a href="#pesados">Camión / Bus</a>
                    <a href="#flota">Nuestra Flota</a>
                </div>
            </nav>

            {/* INTENSIVE CALLOUT */}
            <section className="intensive-bar">
                <div className="container">
                    <div className="intensive-content">
                        <span className="flash-badge">NUEVO</span>
                        <p><strong>Cursos Teóricos Intensivos:</strong> Aprueba tu teórica en solo una semana. ¡Plazas limitadas!</p>
                        <Link to="/contacto" className="btn btn-sm btn-white">Informarme</Link>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            {categories.map((cat, idx) => (
                <section key={cat.id} id={cat.id} className={`section ${idx % 2 === 0 ? '' : 'section-light'}`}>
                    <div className="container">
                        <AnimatedSection animation="fade-up">
                            <div className="section-header align-left">
                                <span className="cat-accent">{cat.icon} {cat.title}</span>
                                <h2>Explora tu próximo carnet</h2>
                                <p>{cat.description}</p>
                            </div>
                        </AnimatedSection>

                        <div className={`permisos-grid-premium grid-cols-${cat.permits.length}`}>
                            {cat.permits.map((p, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                    <div className={`permit-card ${p.featured ? 'featured' : ''}`}>
                                        <div className="permit-card-image">
                                            <img src={p.image} alt={p.title} />
                                            {p.tag && <span className="permit-tag">{p.tag}</span>}
                                            <div className="permit-age">{p.minAge}<span>años</span></div>
                                        </div>
                                        <div className="permit-card-body">
                                            <h3>{p.title}</h3>
                                            <ul className="permit-list">
                                                {p.bullets.map((b, bi) => (
                                                    <li key={bi}>{b}</li>
                                                ))}
                                            </ul>
                                            <Link to="/contacto" className="btn btn-full btn-outline btn-sm">Consulta Disponibilidad</Link>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* FLEET SECTION */}
            <section id="flota" className="section section-dark fleet-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header text-center">
                            <h2>Vehículos de Última Generación</h2>
                            <p>No escatimamos en tu aprendizaje. Formamos con lo mejor.</p>
                        </div>
                    </AnimatedSection>

                    <div className="fleet-grid">
                        {fleet.map((v, i) => (
                            <AnimatedSection key={i} animation="zoom-in" delay={i * 150}>
                                <div className="fleet-card">
                                    <div className="fleet-img">
                                        <img src={v.img} alt={v.name} />
                                    </div>
                                    <div className="fleet-info">
                                        <span className="v-type">{v.type}</span>
                                        <h4>{v.name}</h4>
                                        <p>{v.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL TRUST */}
            <section className="section bg-dots">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="premium-box">
                        <AnimatedSection animation="fade-in">
                            <div className="premium-header">
                                <span className="p-badge">40 Años Contigo</span>
                                <h3>¿Por qué somos diferentes?</h3>
                            </div>
                            <div className="premium-grid">
                                <div className="p-item">
                                    <strong>Trato Personalizado</strong>
                                    <p>No eres un número, eres un futuro conductor.</p>
                                </div>
                                <div className="p-item">
                                    <strong>Camión Automático</strong>
                                    <p>Única autoescuela en la zona con esta facilidad.</p>
                                </div>
                                <div className="p-item">
                                    <strong>Horarios Flexibles</strong>
                                    <p>Nos adaptamos a tu trabajo o estudios.</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <AnimatedSection animation="fade-up">
                        <div className="section-header text-center">
                            <h2>Dudas Rápidas</h2>
                        </div>
                        <Accordion items={faqs} />
                    </AnimatedSection>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="section section-primary text-center">
                <div className="container">
                    <AnimatedSection animation="zoom-in">
                        <h2>¿Damos el primer paso?</h2>
                        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Reserva tu matrícula hoy y aprovecha nuestras ofertas de temporada.</p>
                        <Link to="/contacto" className="btn btn-white btn-glow">Empezar Inscripción</Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
