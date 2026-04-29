import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://autoescuelasanjeronimo.es';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_TITLE = 'Autoescuela San Jerónimo – Huércal-Overa';
const DEFAULT_DESC = 'Autoescuela San Jerónimo en Huércal-Overa. Más de 40 años formando conductores. Permisos B, A, C, D, CAP, ADR y recuperación de puntos.';

export default function SEO({
    title,
    description,
    url = SITE_URL,
    type = 'website',
    image,
    schema,
    noindex = false,
}) {
    const metaTitle = title ? `${title} | Autoescuela San Jerónimo` : DEFAULT_TITLE;
    const metaDesc = description || DEFAULT_DESC;
    const ogImage = image
        ? (image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`)
        : DEFAULT_IMAGE;
    const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    const robotsContent = noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    const schemas = Array.isArray(schema) ? schema : (schema ? [schema] : []);

    return (
        <Helmet>
            <html lang="es" />
            <title>{metaTitle}</title>
            <meta name="description" content={metaDesc} />
            <meta name="robots" content={robotsContent} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:site_name" content="Autoescuela San Jerónimo" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={metaTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDesc} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD */}
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
}
