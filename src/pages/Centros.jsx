import { useState, useRef, useCallback } from 'react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema } from '../utils/seoSchemas';
import AnimatedSection from '../components/AnimatedSection';
import CentrosMap from '../components/MapContainer';
import { centros } from '../data/centros';
import './Centros.css';

const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.4 2 2 0 0 1 3.92 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const IconPin = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
);

const IconNav = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
);

export default function Centros() {
    const [activeId, setActiveId] = useState(null);
    const [selectedCentro, setSelectedCentro] = useState(null);
    const cardRefs = useRef({});
    const cardsSection = useRef(null);

    const handlePinClick = useCallback((centro) => {
        setActiveId(centro.id);
    }, []);

    const handleOpenModal = useCallback((centro) => {
        setSelectedCentro(centro);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedCentro(null);
    }, []);

    const handleCardClick = useCallback((centro) => {
        setActiveId(centro.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleReset = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <>
            <div className="centros-page">
            <SEO
                title="Nuestros Centros — Autoescuela San Jerónimo"
                description="11 centros en Almería y Murcia. Encuentra tu autoescuela más cercana con mapa interactivo."
                url="https://autoescuelasanjeronimo.es/centros"
                schema={generateLocalBusinessSchema()}
            />

            {/* HERO */}
            <section className="page-hero-elite">
                <div className="hero-mesh-overlay"></div>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="hero-tag">Red de centros</span>
                        <h1>Encuentra tu centro <span className="text-gradient">más cercano</span></h1>
                        <p>11 ubicaciones en Almería y Murcia para que te formes cerca de casa.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* STATS STRIP */}
            <div className="centros-stats-strip">
                <div className="container">
                    <div className="stats-strip-inner">
                        <div className="strip-stat">
                            <span className="strip-num">11</span>
                            <span className="strip-label">Centros</span>
                        </div>
                        <div className="strip-divider" />
                        <div className="strip-stat">
                            <span className="strip-num">2</span>
                            <span className="strip-label">Provincias</span>
                        </div>
                        <div className="strip-divider" />
                        <div className="strip-stat">
                            <span className="strip-num">40+</span>
                            <span className="strip-label">Años de experiencia</span>
                        </div>
                        <div className="strip-divider" />
                        <div className="strip-stat strip-hint">
                            <IconPin />
                            <span className="strip-label">Haz clic en un pin o tarjeta para explorar</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FULL-WIDTH MAP */}
            <section className="centros-map-section">
                <CentrosMap
                    centers={centros}
                    activeId={activeId}
                    onMarkerClick={handlePinClick}
                    onOpenModal={handleOpenModal}
                    onReset={handleReset}
                />
            </section>

            {/* CARDS GRID */}
            <section className="centros-cards-section" ref={cardsSection}>
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="centered-header">
                            <span className="section-label">Directorio completo</span>
                            <h2>Todos nuestros centros</h2>
                        </div>
                    </AnimatedSection>

                    <div className="centros-cards-grid">
                        {centros.map((centro, i) => (
                            <AnimatedSection key={centro.id} animation="fade-up" delay={i * 60}>
                                <div
                                    ref={el => { cardRefs.current[centro.id] = el; }}
                                    className={`centro-card ${activeId === centro.id ? 'centro-card--active' : ''}`}
                                    onClick={() => handleCardClick(centro)}
                                >
                                    {centro.destacado && (
                                        <span className="centro-card__badge">Sede principal</span>
                                    )}
                                    <div className="centro-card__header">
                                        <div className="centro-card__dot"></div>
                                        <h3>{centro.nombre}</h3>
                                    </div>

                                    <div className="centro-card__details">
                                        <p className="centro-card__address">
                                            <IconPin />
                                            <span>{centro.direccion}<br />{centro.poblacion}</span>
                                        </p>
                                        {centro.telefono ? (
                                            <a
                                                href={`tel:${centro.telefono.replace(/\s/g, '')}`}
                                                className="centro-card__phone"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <IconPhone />
                                                {centro.telefono}
                                            </a>
                                        ) : (
                                            <span className="centro-card__no-phone">Sin teléfono directo</span>
                                        )}
                                    </div>

                                    <div className="centro-card__footer">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${centro.coords[0]},${centro.coords[1]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="centro-card__nav-btn"
                                            onClick={e => e.stopPropagation()}
                                        >
                                            <IconNav /> Cómo llegar
                                        </a>
                                        <button className="centro-card__map-btn" aria-label="Ver en mapa">
                                            Ver en mapa
                                        </button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="centros-contact-bar">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="contact-bar__inner">
                            <div className="contact-bar__text">
                                <h3>¿Tienes alguna duda?</h3>
                                <p>Llámanos y te orientamos al centro más adecuado para tu formación.</p>
                            </div>
                            <div className="contact-bar__actions">
                                <a href="tel:+34629245406" className="contact-bar__btn contact-bar__btn--primary">
                                    <IconPhone /> 629 245 406
                                </a>
                                <a href="https://wa.me/34629245406" target="_blank" rel="noopener noreferrer" className="contact-bar__btn contact-bar__btn--whatsapp">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>

        {/* MODAL */}
        {selectedCentro && (
            <div className="centro-modal-overlay" onClick={handleCloseModal}>
                <div className="centro-modal" onClick={e => e.stopPropagation()}>
                    <button className="centro-modal__close" onClick={handleCloseModal} aria-label="Cerrar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Photo gallery */}
                    <div className="centro-modal__gallery">
                        {selectedCentro.photos.map((p, i) => (
                            <img key={i} src={p} alt={`${selectedCentro.nombre} ${i + 1}`} className={i === 0 ? 'main-photo' : 'thumb-photo'} />
                        ))}
                    </div>

                    {/* Info */}
                    <div className="centro-modal__body">
                        <div className="centro-modal__header">
                            {selectedCentro.destacado && <span className="modal-badge">Sede principal</span>}
                            <h2>{selectedCentro.nombre}</h2>
                            <p className="modal-city">{selectedCentro.poblacion}</p>
                        </div>

                        <div className="centro-modal__info">
                            <div className="modal-info-row">
                                <IconPin />
                                <div>
                                    <strong>Dirección</strong>
                                    <span>{selectedCentro.direccion}</span>
                                </div>
                            </div>
                            {selectedCentro.telefono && (
                                <div className="modal-info-row">
                                    <IconPhone />
                                    <div>
                                        <strong>Teléfono</strong>
                                        <a href={`tel:${selectedCentro.telefono.replace(/\s/g, '')}`}>{selectedCentro.telefono}</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="centro-modal__actions">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${selectedCentro.coords[0]},${selectedCentro.coords[1]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn-primary"
                            >
                                <IconNav /> Cómo llegar
                            </a>
                            {selectedCentro.telefono && (
                                <a href={`tel:${selectedCentro.telefono.replace(/\s/g, '')}`} className="modal-btn-outline">
                                    <IconPhone /> Llamar ahora
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}
