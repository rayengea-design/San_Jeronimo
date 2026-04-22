export const generateLocalBusinessSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "AutoDrivingSchool",
        "name": "Autoescuela San Jerónimo",
        "image": "https://autoescuelasanjeronimo.es/src/assets/logo_blanco.png",
        "@id": "https://autoescuelasanjeronimo.es",
        "url": "https://autoescuelasanjeronimo.es",
        "telephone": "+34629245406",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ctra. Estación, 50",
            "addressLocality": "Huércal-Overa",
            "postalCode": "04600",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.388889,
            "longitude": -1.944444
        },
        "sameAs": [
            "https://www.facebook.com/autoescuelasanje",
            "https://www.instagram.com/autoescuelasanjeronimo/"
        ]
    };
};

export const generateCourseSchema = ({ name, description, url }) => {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": name,
        "description": description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Autoescuela San Jerónimo",
            "url": "https://autoescuelasanjeronimo.es"
        }
    };
};
