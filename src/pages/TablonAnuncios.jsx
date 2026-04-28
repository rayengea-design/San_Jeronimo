import { useState } from 'react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './TablonAnuncios.css';

const IconDocument = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
);

const IconDownload = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const IconEye = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const IconShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const documentos = [
    {
        id: 'politica-calidad',
        titulo: 'Política de Calidad',
        descripcion: 'Compromiso de Centro de Formación Cosmos con la excelencia en la formación vial, la satisfacción del cliente y la mejora continua conforme a la norma ISO 9001.',
        archivo: '/politica-calidad-cosmos.pdf',
        categoria: 'Calidad',
        icon: <IconShield />,
        fecha: 'Vigente',
    },
];

export default function TablonAnuncios() {
    const [visorAbierto, setVisorAbierto] = useState(null);

    return (
        <div className="tablon-page">
            <SEO
                title="Tablón de Anuncios - Autoescuela San Jerónimo"
                description="Tablón de anuncios oficial de Autoescuela San Jerónimo. Consulta nuestra política de calidad, certificaciones y documentación pública."
            />

            {/* HERO */}
            <section className="page-hero-elite">
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Transparencia</span>
                        <h1>Tablón de <span className="text-gradient">Anuncios</span></h1>
                        <p>Documentación oficial de obligado cumplimiento a disposición del público, conforme a la normativa vigente.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* DOCUMENTOS */}
            <section className="tablon-content">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="tablon-intro">
                            <div className="tablon-intro__icon"><IconDocument /></div>
                            <div>
                                <h2>Documentación Pública</h2>
                                <p>A continuación se exponen los documentos de obligada publicación y los compromisos de calidad de nuestro centro de formación.</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="tablon-grid">
                        {documentos.map((doc, i) => (
                            <AnimatedSection key={doc.id} animation="fade-up" delay={i * 100}>
                                <div className={`tablon-card ${visorAbierto === doc.id ? 'tablon-card--expanded' : ''}`}>
                                    <div className="tablon-card__header">
                                        <div className="tablon-card__icon">{doc.icon}</div>
                                        <span className="tablon-card__cat">{doc.categoria}</span>
                                    </div>
                                    <h3 className="tablon-card__title">{doc.titulo}</h3>
                                    <p className="tablon-card__desc">{doc.descripcion}</p>
                                    <div className="tablon-card__meta">
                                        <span className="tablon-card__estado">{doc.fecha}</span>
                                    </div>
                                    <div className="tablon-card__actions">
                                        <button
                                            className="tablon-btn tablon-btn--view"
                                            onClick={() => setVisorAbierto(visorAbierto === doc.id ? null : doc.id)}
                                        >
                                            <IconEye />
                                            {visorAbierto === doc.id ? 'Cerrar visor' : 'Ver documento'}
                                        </button>
                                        <a
                                            href={doc.archivo}
                                            download
                                            className="tablon-btn tablon-btn--download"
                                        >
                                            <IconDownload />
                                            Descargar PDF
                                        </a>
                                    </div>
                                    {visorAbierto === doc.id && (
                                        <div className="tablon-card__visor">
                                            <iframe
                                                src={doc.archivo}
                                                title={doc.titulo}
                                                width="100%"
                                                height="600"
                                            />
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
