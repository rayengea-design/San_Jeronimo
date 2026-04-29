import { centros } from '../data/centros';

const SITE_URL = 'https://autoescuelasanjeronimo.es';
const LOGO_URL = `${SITE_URL}/og-image.png`;

const SAME_AS = [
    'https://www.facebook.com/autoescuelasanje',
    'https://www.instagram.com/autoescuelasanjeronimo/'
];

const OPENING_HOURS = [
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "13:30"
    },
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "16:30",
        "closes": "20:30"
    }
];

export const generateLocalBusinessSchema = () => {
    return centros.filter(c => c.id !== 'pista').map(centro => {
        const cpMatch = centro.poblacion.match(/[0-9]{5}/);
        const postalCode = cpMatch ? cpMatch[0] : "04600";
        const parts = centro.poblacion.split(',').map(p => p.trim());
        const locality = parts[1] || parts[0];
        const region = parts[2] || 'Almería';

        return {
            "@context": "https://schema.org",
            "@type": "AutoDrivingSchool",
            "@id": `${SITE_URL}/#${centro.id}`,
            "name": `Autoescuela San Jerónimo - ${centro.nombre}`,
            "image": LOGO_URL,
            "logo": LOGO_URL,
            "url": SITE_URL,
            "telephone": centro.telefono ? `+34${centro.telefono.replace(/\s/g, '')}` : "+34629245406",
            "email": "sanjeronimo@hotmail.es",
            "priceRange": "€€",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": centro.direccion,
                "addressLocality": locality,
                "addressRegion": region,
                "postalCode": postalCode,
                "addressCountry": "ES"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": centro.coords[0],
                "longitude": centro.coords[1]
            },
            "areaServed": [
                { "@type": "AdministrativeArea", "name": "Almería" },
                { "@type": "AdministrativeArea", "name": "Murcia" }
            ],
            "openingHoursSpecification": OPENING_HOURS,
            "sameAs": SAME_AS
        };
    });
};

export const generateCourseSchema = ({ name, description, url }) => {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": name,
        "description": description,
        "url": url,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Autoescuela San Jerónimo",
            "sameAs": SITE_URL,
            "url": SITE_URL
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Blended",
            "inLanguage": "es-ES",
            "location": {
                "@type": "Place",
                "name": "Autoescuela San Jerónimo - Huércal-Overa",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Huércal-Overa",
                    "addressRegion": "Almería",
                    "postalCode": "04600",
                    "addressCountry": "ES"
                }
            }
        }
    };
};

export const generateFAQSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
        }
    }))
});

export const generateBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`
    }))
});
