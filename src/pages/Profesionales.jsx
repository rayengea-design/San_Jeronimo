import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateCourseSchema } from '../utils/seoSchemas';
import AnimatedSection from '../components/AnimatedSection';
import './Profesionales.css';

const capRoadmap = [
    { step: '01', title: 'Matrícula', desc: 'Inscripción en centro oficial homologado.' },
    { step: '02', title: 'Carga Lectiva', desc: 'Formación presencial técnica (140h / 35h).' },
    { step: '03', title: 'Examen DGT', desc: 'Prueba oficial según la convocatoria.' },
    { step: '04', title: 'Tarjeta CAP', desc: 'Emisión de la tarjeta de cualificación profesional.' }
];

const capDetails = [
    { 
        type: 'CAP Inicial', 
        subtitle: 'Cualificación para el acceso',
        desc: 'Necesario para nuevos conductores de vehículos de las categorías C (camión) o D (autobús) que obtuvieron su carné con posterioridad a 2008/2009.',
        specs: ['140 horas (130 teóricas + 10 prácticas)', 'Examen oficial teórico de 100 preguntas', 'Vigencia de 5 años', 'Curso presencial obligatorio']
    },
    { 
        type: 'CAP Continuo', 
        subtitle: 'Actualización y reciclaje',
        desc: 'Ciclo de formación periódica obligatorio para todos los conductores profesionales en activo. Debe realizarse antes de que expire la tarjeta.',
        specs: ['35 horas de formación presencial', 'Sin examen oficial de la DGT', 'Válido por otros 5 años', 'Solo asistencia obligatoria']
    }
];

const capFeatures = [
    { title: 'Ampliación de Modalidad', desc: 'Si ya tienes el CAP de mercancías y quieres el de viajeros (o viceversa), solo necesitas un curso puente de 35h y un examen reducido de 25 preguntas.' },
    { title: 'Exenciones de Ley', desc: 'No requieren CAP los vehículos de bomberos, fuerzas armadas, protección civil, vehículos de uso privado o los que circulen en pruebas.' },
    { title: 'Doble Cualificación', desc: 'Preparamos programas integrales para obtener simultáneamente el CAP de mercancías y viajeros para máxima empleabilidad.' }
];

const adrProgram = [
    { title: 'Obtención', label: 'Autorización Base', desc: 'Curso inicial para el transporte de mercancías peligrosas en vehículos no cisterna. Requisito: 1 año de antigüedad en carné B.' },
    { title: 'Ampliación', label: 'Módulos Especiales', desc: 'Añade la capacitación para camiones cisterna, productos explosivos o materiales radiactivos a tu carnet ADR base.' },
    { title: 'Renovación', label: 'Efecto Retroactivo', desc: 'Se debe renovar cada 5 años. Si lo haces en el último año de vigencia, la nueva fecha cuenta desde la caducidad original.' }
];

const adrStats = [
    { label: 'Antigüedad B', value: '1 Año', desc: 'Requisito mínimo' },
    { label: 'Examen Inicial', value: '30 Preg.', desc: 'En Jefatura DGT' },
    { label: 'Examen Renovación', value: '20 Preg.', desc: 'Tasa reducida' },
    { label: 'Vigencia Card', value: '5 Años', desc: 'Ciclo europeo' }
];

const adrCards = [
    { code: '33', codeSecondary: '1203', label: 'Líquidos Inflamables', title: 'ADR Básico', desc: 'Exigido para cualquier transporte de mercancías peligrosas.' },
    { code: '80', codeSecondary: '1824', label: 'Materias Corrosivas', title: 'ADR Cisternas', desc: 'Especialización para transporte en tanques y contenedores.' },
    { code: '1.1', codeSecondary: '0012', label: 'Materias Explosivas', title: 'ADR Explosivos', desc: 'Formación de Clase 1 para productos explosivos y pirotecnia.' },
    { code: '7', codeSecondary: '2910', label: 'Radioactivos', title: 'ADR Radiactivos', desc: 'Formación de Clase 7 para transporte de isótopos y material médico.' }
];

const fundaeSteps = [
    { title: 'Empresa', desc: 'Contacta con nuestro departamento de formación.' },
    { title: 'Gestión', desc: 'Nosotros tramitamos la bonificación ante FUNDAE.' },
    { title: 'Ahorro', desc: 'Recupera el coste en los seguros sociales de la empresa.' }
];

export default function Profesionales() {
    return (
        <div className="profesionales-page">
            <SEO
                title="CAP y ADR Especialistas - Centro de Formación Profesional"
                description="Expertos en formación CAP y ADR en Huércal-Overa. Consulta próximas fechas y gestiona la formación bonificada para tu empresa."
                url="https://autoescuelasanjeronimo.es/profesionales"
                schema={generateCourseSchema({
                    name: 'Cursos CAP y ADR',
                    description: 'Formación profesional CAP inicial y continuo, y mercancías peligrosas ADR.',
                    url: 'https://autoescuelasanjeronimo.es/profesionales'
                })}
            />

            {/* HERO */}
            <section className="page-hero-elite" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591768793355-74d7ca736056?w=1600&q=80)' }}>
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Sector Logístico</span>
                        <h1>Logística Profesional: <span className="text-gradient">CAP & ADR</span></h1>
                        <p>Lideramos la formación del transporte profesional con metodología experta y gestión integral para empresas.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION CAP - BENTO REDESIGN */}
            <section className="section cap-bento-section bg-white">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header text-center max-800">
                            <h2>Certificado de Aptitud <span className="text-gradient">CAP</span></h2>
                            <p>Estructura técnica modular para la capacitación profesional por carretera.</p>
                        </div>
                    </AnimatedSection>

                    <div className="cap-bento-grid">
                        {/* MAIN TILE: INITIAL */}
                        <div className="bento-tile tile-main inicial">
                            <div className="bento-badge">Obligatorio</div>
                            <div className="bento-content">
                                <h3>{capDetails[0].type}</h3>
                                <p>{capDetails[0].desc}</p>
                                <div className="bento-stats-row">
                                    {capDetails[0].specs.map((spec, i) => (
                                        <span key={i} className="bento-pill">{spec}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bento-icon">🚛</div>
                        </div>

                        {/* TILE: CONTINUO */}
                        <div className="bento-tile tile-secondary continuo">
                            <div className="bento-content">
                                <h3>{capDetails[1].type}</h3>
                                <p>{capDetails[1].desc}</p>
                                <div className="bento-list-compact">
                                    {capDetails[1].specs.map((spec, i) => (
                                        <div key={i} className="li-item">✓ {spec}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TILE: QUICK STATS */}
                        <div className="bento-tile tile-accent stats">
                            <h4>Resumen Técnico</h4>
                            <div className="bento-stats-list">
                                <div className="bs-item"><span>Periodicidad</span><strong>5 Años</strong></div>
                                <div className="bs-item"><span>Validez</span><strong>UE</strong></div>
                                <div className="bs-item"><span>Autoridad</span><strong>MTMS</strong></div>
                            </div>
                        </div>

                        {/* EXTRA FEATURES TILE */}
                        <div className="bento-tile tile-wide features">
                            <div className="bento-features-row">
                                {capFeatures.map((f, i) => (
                                    <div key={i} className="bento-feature-item">
                                        <h5>{f.title}</h5>
                                        <p>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="roadmap-section mt-5">
                        <div className="roadmap-title text-center mb-5">
                            <h4>Hoja de Ruta del Conductor</h4>
                        </div>
                        <div className="roadmap-timeline">
                            <div className="timeline-line"></div>
                            {capRoadmap.map((item, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                    <div className={`timeline-step ${i % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="step-num-bubble">{item.step}</div>
                                        <div className="step-card">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEPARATOR / TRANSITION */}
            <div className="dark-transition-divider"></div>

            {/* SECTION ADR - DARK */}
            <section className="section section-dark adr-technical-area">
                <div className="container">
                    <div className="technical-layout reverse">
                        <div className="tech-main">
                            <AnimatedSection animation="fade-up">
                                <div className="section-header align-left">
                                    <span className="tech-badge">Acuerdo Internacional ADR</span>
                                    <h2>Mercancías Peligrosas <span className="text-gradient">ADR</span></h2>
                                    <p>Capacitación especial para el transporte por carretera de materias tóxicas, inflamables o peligrosas.</p>
                                </div>
                            </AnimatedSection>

                            <div className="adr-program-grid">
                                {adrProgram.map((item, i) => (
                                    <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                        <div className="adr-program-card">
                                            <span className="p-label">{item.label}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>

                        <div className="tech-sidebar">
                            <div className="adr-stats-box">
                                <h3>Checkpoint Técnico</h3>
                                {adrStats.map((s, i) => (
                                    <div key={i} className="adr-stat-row">
                                        <div className="as-val">{s.value}</div>
                                        <div className="as-text">
                                            <strong>{s.label}</strong>
                                            <span>{s.desc}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="as-footer">
                                    Requiere certificado médico de clase C (Psicotécnico)
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="adr-placas-header mt-5">
                        <h4>Módulos y Especialidades</h4>
                    </div>

                    <div className="adr-placas-grid mt-4">
                        {adrCards.map((card, i) => (
                            <AnimatedSection key={i} animation="zoom-in" delay={i * 100}>
                                <div className="adr-placa-wrapper">
                                    <div className="adr-placa-visual">
                                        <div className="placa-top">{card.code}</div>
                                        <div className="placa-bottom">{card.codeSecondary}</div>
                                        <span className="placa-reflect"></span>
                                    </div>
                                    <div className="adr-placa-info">
                                        <span className="placa-label">{card.label}</span>
                                        <h3>{card.title}</h3>
                                        <p>{card.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FUNDAE COMPANY SECTION */}
            <section className="section fundae-area">
                <div className="container">
                    <div className="fundae-wrap">
                        <div className="fundae-content">
                            <AnimatedSection animation="fade-right">
                                <h2>¿Empresa de Transporte?</h2>
                                <p>
                                    La formación de tus conductores no tiene por qué ser un coste. 
                                    Como <strong>centro organizador de FUNDAE</strong>, gestionamos 
                                    toda la bonificación para que el curso te salga <strong>totalmente gratuito</strong>.
                                </p>
                                <div className="fundae-steps">
                                    {fundaeSteps.map((s, i) => (
                                        <div key={i} className="f-step">
                                            <div className="f-step-icon">{i + 1}</div>
                                            <div className="f-step-text">
                                                <strong>{s.title}</strong>
                                                <span>{s.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contacto" className="btn btn-primary mt-3">Gestionar Bonificación</Link>
                            </AnimatedSection>
                        </div>
                        <div className="fundae-image">
                            <img src="https://images.unsplash.com/photo-1586191582151-f73770701041?auto=format&fit=crop&q=80&w=800" alt="Gestión de flotas profesional" />
                            <div className="image-overlay-text">
                                <strong>+40 años</strong>
                                <span>de confianza empresarial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL TRUST BAR */}
            <section className="section bg-dots text-center">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <AnimatedSection animation="fade-in">
                        <div className="trust-professional-pill">Centro Homologado por DGT y Fomento</div>
                        <h2 style={{ marginTop: '2rem' }}>Especialistas en Formación de Conductores</h2>
                        <p style={{ color: 'var(--gray)', marginBottom: '3rem' }}>
                            Nuestro compromiso es con la seguridad y la profesionalidad. 
                            Contamos con los mejores resultados de aprobados en Huércal-Overa y provincia.
                        </p>
                        <div className="btn-group">
                            <Link to="/contacto" className="btn btn-dark">Pedir Presupuesto</Link>
                            <a href="tel:+34629245406" className="btn btn-outline">Llamar Ahora</a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
