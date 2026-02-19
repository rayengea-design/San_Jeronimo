import { useEffect } from 'react';

export default function SEO({ title, description }) {
    useEffect(() => {
        document.title = title ? `${title} | Autoescuela San Jerónimo` : 'Autoescuela San Jerónimo – Huércal-Overa';

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.content = description || 'Autoescuela San Jerónimo en Huércal-Overa. Más de 40 años formando conductores. Permisos B, A, C, D, CAP, ADR y recuperación de puntos.';
    }, [title, description]);

    return null;
}
