import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import './Legal.css';

export default function PoliticaCookies() {
    return (
        <div className="legal-page">
            <SEO 
                title="Política de Cookies - Autoescuela San Jerónimo" 
                description="Información sobre el uso de cookies en el sitio web de Autoescuela San Jerónimo."
            />

            <section className="legal-hero">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>Política de <span className="text-gradient">Cookies</span></h1>
                        <p>Transparencia sobre el uso de tecnologías de seguimiento en nuestra web.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="legal-content">
                <div className="container small">
                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="legal-card">
                            <h2>1. ¿Qué son las cookies?</h2>
                            <p>
                                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                            </p>

                            <h2>2. Tipos de cookies utilizadas</h2>
                            <p>Este sitio web utiliza los siguientes tipos de cookies:</p>
                            <ul>
                                <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.</li>
                                <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (ej: idioma).</li>
                                <li><strong>Cookies de análisis:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
                            </ul>

                            <h2>3. Desactivación de cookies</h2>
                            <p>
                                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
                            </p>
                            <p>
                                A continuación puede acceder a la configuración de los navegadores web más frecuentes para aceptar, instalar o desactivar las cookies:
                            </p>
                            <ul>
                                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947792d2" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                            </ul>

                            <h2>4. Cookies de terceros</h2>
                            <p>
                                Este sitio web puede utilizar servicios de terceros que, por cuenta de Autoescuela San Jerónimo, recopilarán información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.
                            </p>

                            <h2>5. Aceptación de la Política de Cookies</h2>
                            <p>
                                Autoescuela San Jerónimo asume que usted acepta el uso de cookies. No obstante, muestra información sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
