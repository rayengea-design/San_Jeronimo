import './TestimonialCard.css';

export default function TestimonialCard({ name, permit, text, rating = 5 }) {
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
    return (
        <div className="testimonial-card animate-fade-in-up">
            <div className="testimonial-stars">
                {Array.from({ length: rating }, (_, i) => (
                    <span key={i}>★</span>
                ))}
            </div>
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-author">
                <div className="testimonial-avatar">{initials}</div>
                <div className="testimonial-info">
                    <strong>{name}</strong>
                    {permit && <span>Permiso {permit}</span>}
                </div>
            </div>
        </div>
    );
}
