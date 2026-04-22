import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url = 'https://autoescuelasanjeronimo.es', type = 'website', image = '/src/assets/logo_blanco.png', schema }) {
    const defaultTitle = 'Autoescuela San Jerónimo – Huércal-Overa';
    const defaultDesc = 'Autoescuela San Jerónimo en Huércal-Overa. Más de 40 años formando conductores. Permisos B, A, C, D, CAP, ADR y recuperación de puntos.';
    
    const metaTitle = title ? `${title} | Autoescuela San Jerónimo` : defaultTitle;
    const metaDesc = description || defaultDesc;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDesc} />
            
            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDesc} />
            <meta property="twitter:image" content={image} />

            {/* Canonical Link */}
            <link rel="canonical" href={url} />

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
