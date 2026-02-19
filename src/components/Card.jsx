import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ icon, title, children, bullets, cta, ctaLink }) {
    return (
        <div className="card animate-fade-in-up">
            {icon && <div className="card-icon">{icon}</div>}
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
    );
}
