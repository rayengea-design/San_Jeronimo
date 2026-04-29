import { useState } from 'react';
import { centros } from '../data/centros';
import './ContactForm.css';

const courses = [
    'Permiso B (Coche)',
    'Permiso A2 / A (Moto)',
    'Permiso B+E (Remolque)',
    'Permiso C / C+E (Camión)',
    'Permiso D (Autobús)',
    'CAP (Certificado de Aptitud Profesional)',
    'ADR (Mercancías peligrosas)',
    'Recuperación de puntos',
    'Otro',
];

export default function ContactForm({ compact = false }) {
    const [form, setForm] = useState({
        nombre: '', telefono: '', email: '', centro: '', curso: '', mensaje: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas.');
        setForm({ nombre: '', telefono: '', email: '', centro: '', curso: '', mensaje: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {compact && (
                <>
                    <h3>Solicita información</h3>
                    <p className="form-subtitle">
                        Déjanos tus datos y te llamamos gratis.
                    </p>
                </>
            )}

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre *</label>
                    <input
                        type="text" id="nombre" name="nombre"
                        value={form.nombre} onChange={handleChange}
                        placeholder="Tu nombre" required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono *</label>
                    <input
                        type="tel" id="telefono" name="telefono"
                        value={form.telefono} onChange={handleChange}
                        placeholder="Tu teléfono" required
                    />
                </div>
            </div>

            {!compact && (
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" id="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="tu@email.com"
                    />
                </div>
            )}

            <div className="form-group">
                <label htmlFor="centro">Centro de interés *</label>
                <select id="centro" name="centro" value={form.centro} onChange={handleChange} required>
                    <option value="">Selecciona un centro</option>
                    {centros.map((c) => (
                        <option key={c.id} value={c.nombre}>{c.nombre}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="curso">Permiso / Curso de interés</label>
                <select id="curso" name="curso" value={form.curso} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    {courses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            {!compact && (
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje" name="mensaje"
                        value={form.mensaje} onChange={handleChange}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                </div>
            )}

            <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                    {compact ? 'Solicitar información' : 'Enviar mensaje'}
                </button>
            </div>

            <p className="form-note">
                ¿Prefieres que te llamemos? Déjanos tu teléfono y te llamamos gratis.
            </p>
        </form>
    );
}
