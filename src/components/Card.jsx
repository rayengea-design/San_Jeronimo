import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ image, icon, title, children, bullets, cta, ctaLink, minAge }) {
    return (
        <div className={`card ${image ? 'card-has-image' : ''} animate-fade-in-up`}>
            {image && (
                <div className="card-image-wrapper">
                    <img src={image} alt={title} className="card-image" />
                    {minAge && <span className="card-age-badge">{minAge} años</span>}
                </div>
            )}
            <div className="card-content">
                {!image && icon && <div className="card-icon">{icon}</div>}
                <h3>{title}</h3>
                {children && <p>{children}</p>}
                {bullets && (
                    <ul>
                        {bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                )}
                {cta && (
                    <Link to={ctaLink || '/contacto'} className="btn btn-outline btn-sm">
                        {cta}
                    </Link>
                )}
            </div>
        </div>
    );
}
