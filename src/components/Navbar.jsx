import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/permisos', label: 'Permisos' },
    { to: '/profesionales', label: 'Profesionales' },
    { to: '/recuperacion-puntos', label: 'Recuperación' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/opiniones', label: 'Opiniones' },
    { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="navbar-inner">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <span className="logo-icon">SJ</span>
                        Autoescuela San Jerónimo
                    </Link>

                    <div className="navbar-links">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="navbar-cta">
                        <Link to="/contacto" className="btn btn-primary btn-sm">
                            Solicitar información
                        </Link>
                    </div>

                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </NavLink>
                ))}
                <Link to="/contacto" className="btn btn-primary" onClick={closeMenu}>
                    Solicitar información
                </Link>
            </div>
        </>
    );
}
