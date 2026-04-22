import { useState } from 'react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import CentrosMap from '../components/MapContainer';
import LocationSearch from '../components/LocationSearch';
import { centros } from '../data/centros';
import './Centros.css';

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);

const PinIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);

export default function Centros() {
    const [activeId, setActiveId] = useState(null);
    const [selectedCentro, setSelectedCentro] = useState(null);
    const [nearestId, setNearestId] = useState(null);
    const [mobileView, setMobileView] = useState('list');

    const handleSelectCentro = (id) => {
        setActiveId(id);
        if (window.innerWidth < 1024) setMobileView('map');
    };

    const handleLocationSearch = (searchCoords) => {
        let minDistance = Infinity;
        let closestId = null;
        centros.forEach(centro => {
            const dist = calculateDistance(searchCoords.lat, searchCoords.lon, centro.coords[0], centro.coords[1]);
            if (dist < minDistance) { minDistance = dist; closestId = centro.id; }
        });
        if (closestId) { setNearestId(closestId); handleSelectCentro(closestId); }
    };

    return (
        <div className="centros-page">
            <SEO title="Nuestros Centros — Autoescuela San Jerónimo" description="11 centros en Almería y Murcia. Encuentra tu autoescuela más cercana." />

            {/* HERO COMPACTO */}
            <section className="centros-hero-compact">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <span className="centros-hero__label">Red de centros</span>
                        <h1>Encuentra tu centro más cercano</h1>
                        <p>11 ubicaciones en Almería y Murcia para que te formes cerca de casa.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* MOBILE TABS */}
            <div className="centros-mobile-tabs">
                <button className={mobileView === 'list' ? 'active' : ''} onClick={() => setMobileView('list')}>Lista</button>
                <button className={mobileView === 'map' ? 'active' : ''} onClick={() => setMobileView('map')}>Mapa</button>
            </div>

            {/* EXPLORER */}
            <section className="centros-explorer">
                <div className={`explorer-grid ${mobileView === 'map' ? 'show-map' : 'show-list'}`}>
                    {/* SIDEBAR */}
                    <div className="explorer-sidebar">
                        <div className="sidebar-sticky-content">
                            <div className="search-wrap">
                                <LocationSearch onSearch={handleLocationSearch} />
                            </div>
                            <div className="centers-scroll-area">
                                {centros.map((centro) => (
                                    <div
                                        key={centro.id}
                                        className={`center-card-compact ${activeId === centro.id ? 'is-active' : ''} ${nearestId === centro.id ? 'is-nearest' : ''}`}
                                        onClick={() => handleSelectCentro(centro.id)}
                                    >
                                        <div className="card-compact__header">
                                            <div className="card-compact__info">
                                                <h3>{centro.nombre}</h3>
                                                <p className="card-compact__address">
                                                    <PinIcon /> {centro.direccion}
                                                </p>
                                                {centro.telefono && (
                                                    <a href={`tel:${centro.telefono.replace(/\s/g, '')}`} className="card-compact__phone" onClick={(e) => e.stopPropagation()}>
                                                        <PhoneIcon /> {centro.telefono}
                                                    </a>
                                                )}
                                            </div>
                                            <button
                                                className="btn-circle-action"
                                                onClick={(e) => { e.stopPropagation(); setSelectedCentro(centro); }}
                                                aria-label="Ver detalles"
                                            >→</button>
                                        </div>
                                        {centro.destacado && <span className="badge-sede">Sede Principal</span>}
                                        {nearestId === centro.id && <span className="badge-nearest">Más cercano a ti</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MAP */}
                    <div className="explorer-map">
                        <div className="map-absolute-container">
                            <CentrosMap
                                centers={centros}
                                activeId={activeId}
                                onMarkerClick={(c) => setSelectedCentro(c)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT BAR */}
            <section className="centros-contact-bar">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="contact-bar__inner">
                            <div className="contact-bar__text">
                                <h3>¿No encuentras tu centro?</h3>
                                <p>Llámanos y te orientamos al centro más adecuado para tu formación.</p>
                            </div>
                            <div className="contact-bar__actions">
                                <a href="tel:+34629245406" className="contact-bar__btn contact-bar__btn--primary">
                                    <PhoneIcon /> 629 245 406
                                </a>
                                <a href="https://wa.me/34629245406" target="_blank" rel="noopener noreferrer" className="contact-bar__btn contact-bar__btn--whatsapp">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* MODAL */}
            {selectedCentro && (
                <div className="elite-modal-overlay" onClick={() => setSelectedCentro(null)}>
                    <div className="elite-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="elite-close-btn" onClick={() => setSelectedCentro(null)}>&times;</button>
                        <div className="elite-modal-content">
                            <div className="elite-modal-left">
                                <div className="main-image-wrap">
                                    <img src={selectedCentro.photos[1] || selectedCentro.photos[0]} alt={selectedCentro.nombre} />
                                </div>
                                <div className="thumb-gallery">
                                    {selectedCentro.photos.map((p, idx) => (
                                        <img key={idx} src={p} alt="Instalación" className="mini-thumb" />
                                    ))}
                                </div>
                            </div>
                            <div className="elite-modal-right">
                                <div className="header-box">
                                    <span className="tag">{selectedCentro.destacado ? 'Sede Principal' : 'Centro Asociado'}</span>
                                    <h2>{selectedCentro.nombre}</h2>
                                    <p className="loc">{selectedCentro.poblacion}</p>
                                </div>
                                <div className="info-grid">
                                    <div className="info-box">
                                        <label>Dirección</label>
                                        <p>{selectedCentro.direccion}</p>
                                    </div>
                                    {selectedCentro.telefono && (
                                        <div className="info-box">
                                            <label>Contacto Directo</label>
                                            <p className="phone-high">{selectedCentro.telefono}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="modal-cta-group">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${selectedCentro.coords[0]},${selectedCentro.coords[1]}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="btn-premium-action"
                                    >
                                        <PinIcon /> Cómo llegar
                                    </a>
                                    {selectedCentro.telefono && (
                                        <a href={`tel:${selectedCentro.telefono.replace(/\s/g, '')}`} className="btn-outline-action">
                                            Llamar ahora
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
