import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom Marker Icon (Modern & Corporate)
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

// Helper component to handle map centering and zoom
function MapController({ coords, zoom }) {
    const map = useMap();
    
    useEffect(() => {
        // Standard Leaflet fix for rendering in layouts with dynamic transitions
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    }, [map]);

    useEffect(() => {
        if (coords) {
            map.flyTo(coords, zoom || 15, {
                duration: 1.5,
                easeLinearity: 0.25
            });
        }
    }, [coords, zoom, map]);
    return null;
}

export default function CentrosMap({ centers, activeId, onMarkerClick }) {
    const defaultPosition = [37.3, -2.0]; // Centered around Huercal-Overa / Vera area
    const defaultZoom = 10;

    // Map style (CartoDB Positron) - Clean, light, corporate
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    return (
        <div className="map-wrapper corporate-map">
            <MapContainer 
                center={defaultPosition} 
                zoom={defaultZoom} 
                scrollWheelZoom={true} 
                style={{ height: '100%', width: '100%', background: '#f8fafc' }}
                zoomControl={false} // We will add it custom or just leave it
            >
                <TileLayer attribution={attribution} url={tileUrl} />
                
                <MapController 
                    coords={activeId ? centers.find(c => c.id === activeId)?.coords : null} 
                    zoom={activeId ? 14 : 10} 
                />

                {centers.map((centro) => (
                    centro.coords && (
                        <Marker 
                            key={centro.id} 
                            position={centro.coords}
                            icon={activeId === centro.id ? activeIcon : defaultIcon}
                            eventHandlers={{
                                click: () => {
                                    if (onMarkerClick) onMarkerClick(centro);
                                }
                            }}
                        >
                            <Popup className="premium-popup">
                                <div className="map-popup-content">
                                    <h4>{centro.nombre}</h4>
                                    <p>{centro.poblacion}</p>
                                    <button 
                                        className="btn-popup"
                                        onClick={() => onMarkerClick(centro)}
                                    >
                                        Ver detalles →
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
