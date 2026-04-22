import { useState } from 'react';
import './LocationSearch.css';

export default function LocationSearch({ onSearch }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        try {
            // Geocoding with Nominatim (OSM)
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}, Almería, Murcia, Spain&limit=1`);
            const data = await response.json();

            if (data && data.length > 0) {
                const { lat, lon, display_name } = data[0];
                onSearch({
                    lat: parseFloat(lat),
                    lon: parseFloat(lon),
                    name: display_name
                });
            } else {
                alert('No hemos podido encontrar esa localidad. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error in geocoding:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="location-search">
            <form onSubmit={handleSearch} className="search-box">
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Busca tu localidad (ej: Vera, Huércal...)"
                    className="search-input"
                />
                <button type="submit" className="search-btn" disabled={loading}>
                    {loading ? <div className="spinner-small"></div> : '🔍'}
                </button>
            </form>
            <p className="search-tip">Encontraremos el centro más cercano a ti</p>
        </div>
    );
}
