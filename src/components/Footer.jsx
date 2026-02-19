import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/permisos', label: 'Permisos' },
    { to: '/profesionales', label: 'Profesionales' },
    { to: '/recuperacion-puntos', label: 'Recuperación de puntos' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/opiniones', label: 'Opiniones' },
    { to: '/contacto', label: 'Contacto' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Autoescuela San Jerónimo</h3>
                        <p>
                            Más de 40 años formando conductores en Huércal‑Overa.
                            Centro autorizado para cursos de CAP y ADR, con vehículos nuevos y modernos.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Enlaces rápidos</h4>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>→ {link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <div className="footer-contact-item">
                            <span className="icon">📍</span>
                            <span>C/ Gabriel Martínez Belzunces, 5<br />04600 Huércal‑Overa, Almería</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">📞</span>
                            <a href="tel:+34629245426" style={{ color: 'rgba(255,255,255,0.7)' }}>629 24 54 26</a>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">✉️</span>
                            <a href="mailto:sanjeronimo@hotmail.es" style={{ color: 'rgba(255,255,255,0.7)' }}>sanjeronimo@hotmail.es</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Autoescuela San Jerónimo. Todos los derechos reservados.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Aviso legal</a>
                        <a href="#">Política de privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
