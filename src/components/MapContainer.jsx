import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createCustomIcon = (isActive) => {
    return L.divIcon({
        className: 'custom-marker-wrapper',
        html: `
            <div class="marker-container ${isActive ? 'active' : ''}">
                <div class="marker-pin"></div>
            </div>
        `,
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        popupAnchor: [0, -45]
    });
};

const defaultIcon = createCustomIcon(false);
const activeIcon = createCustomIcon(true);

function MapController({ coords, zoom, onReset, defaultPosition, defaultZoom }) {
    const map = useMap();

    useEffect(() => {
        setTimeout(() => { map.invalidateSize(); }, 100);
        setTimeout(() => { map.invalidateSize(); }, 600);
    }, [map]);

    useEffect(() => {
        if (coords) {
            map.flyTo(coords, zoom || 14, { duration: 1.2, easeLinearity: 0.25 });
        }
    }, [coords, zoom, map]);

    useMapEvents({
        popupclose: () => {
            if (onReset) {
                onReset();
                map.flyTo(defaultPosition, defaultZoom, { duration: 1.2, easeLinearity: 0.25 });
            }
        }
    });

    return null;
}

export default function CentrosMap({ centers, activeId, onMarkerClick, onOpenModal, onReset }) {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const defaultPosition = isMobile ? [37.5, -1.95] : [37.35, -1.95];
    const defaultZoom = isMobile ? 8.2 : 9.5;

    const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    return (
        <div className="map-wrapper corporate-map" style={{ height: '100%', width: '100%', minHeight: '400px' }}>
            <MapContainer
                center={defaultPosition}
                zoom={defaultZoom}
                style={{ height: '100%', width: '100%' }}
                zoomSnap={0.5}
                zoomDelta={0.5}
                dragging={true}
                scrollWheelZoom={false}
                touchZoom={true}
                doubleClickZoom={true}
                boxZoom={false}
                keyboard={false}
                zoomControl={true}
            >
                <TileLayer attribution={attribution} url={tileUrl} />

                <MapController
                    coords={activeId ? centers.find(c => c.id === activeId)?.coords : null}
                    zoom={activeId ? 14 : defaultZoom}
                    onReset={onReset}
                    defaultPosition={defaultPosition}
                    defaultZoom={defaultZoom}
                />

                {centers.map((centro) => (
                    centro.coords && (
                        <Marker
                            key={centro.id}
                            position={centro.coords}
                            icon={activeId === centro.id ? activeIcon : defaultIcon}
                            eventHandlers={{
                                click: () => { if (onMarkerClick) onMarkerClick(centro); }
                            }}
                        >
                            <Popup className="premium-popup">
                                <div className="map-popup-content">
                                    <h4>{centro.nombre}</h4>
                                    <p>{centro.poblacion}</p>
                                    {centro.telefono && (
                                        <a href={`tel:${centro.telefono.replace(/\s/g, '')}`} className="popup-phone">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" style={{display:'inline',marginRight:'5px',verticalAlign:'middle'}}>
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.4 2 2 0 0 1 3.92 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            {centro.telefono}
                                        </a>
                                    )}
                                    <button
                                        className="btn-popup"
                                        onClick={() => onOpenModal && onOpenModal(centro)}
                                    >
                                        Ver tarjeta ↓
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    )
                ))}
            </MapContainer>
        </div>
    );
}
