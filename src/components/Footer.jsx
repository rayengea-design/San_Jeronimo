import { Link } from 'react-router-dom';
import logo from '../assets/logo_blanco.png';
import './Footer.css';

const quickLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/permisos', label: 'Permisos' },
    { to: '/profesionales', label: 'Profesionales' },
    { to: '/recuperacion-puntos', label: 'Recuperación' },
    { to: '/empresa', label: 'Sobre Nosotros' },
    { to: '/centros', label: 'Centros' },
    { to: '/contacto', label: 'Contacto' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src={logo} alt="Logo Autoescuela San Jerónimo" className="footer-logo" />
                        <p>
                            Más de 40 años formando conductores en Huércal‑Overa.
                            Centro autorizado para cursos de CAP y ADR, con vehículos nuevos y modernos.
                        </p>
                        <div className="footer-certifications">
                            <div className="iso-badge">
                                <span className="iso-text">ISO 9001</span>
                                <span className="iso-desc">Gestión de Calidad</span>
                            </div>
                            <div className="iso-badge">
                                <span className="iso-text">ISO 14001</span>
                                <span className="iso-desc">Gestión Ambiental</span>
                            </div>
                        </div>
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
                            <span>C. Gabriel Martínez Belzunces, 5<br />04600 Huércal‑Overa, Almería</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">📞</span>
                            <a href="tel:+34629245406" style={{ color: 'rgba(255,255,255,0.7)' }}>629 245 406</a>
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
                        <Link to="/aviso-legal">Aviso legal</Link>
                        <Link to="/politica-privacidad">Política de privacidad</Link>
                        <Link to="/politica-cookies">Política de cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
