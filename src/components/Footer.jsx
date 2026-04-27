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
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                            </span>
                            <span>C. Gabriel Martínez Belzunces, 5<br />04600 Huércal‑Overa, Almería</span>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.4 2 2 0 0 1 3.92 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <a href="tel:+34629245406" style={{ color: 'rgba(255,255,255,0.7)' }}>629 245 406</a>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </span>
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
