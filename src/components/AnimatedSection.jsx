import useScrollAnimation from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

export default function AnimatedSection({ children, className = '', animation = 'fade-up', delay = 0, ...props }) {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    );
}
