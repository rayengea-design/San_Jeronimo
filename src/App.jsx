import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Permisos = lazy(() => import('./pages/Permisos'));
const Profesionales = lazy(() => import('./pages/Profesionales'));
const RecuperacionPuntos = lazy(() => import('./pages/RecuperacionPuntos'));
const Empresa = lazy(() => import('./pages/Empresa'));
const Centros = lazy(() => import('./pages/Centros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'));
const PoliticaPrivacidad = lazy(() => import('./pages/PoliticaPrivacidad'));
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies'));
const TablonAnuncios = lazy(() => import('./pages/TablonAnuncios'));

const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 40, height: 40, border: '3px solid #eee', borderTopColor: '#0d0d0d', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/permisos" element={<Suspense fallback={<PageFallback />}><Permisos /></Suspense>} />
          <Route path="/profesionales" element={<Suspense fallback={<PageFallback />}><Profesionales /></Suspense>} />
          <Route path="/recuperacion-puntos" element={<Suspense fallback={<PageFallback />}><RecuperacionPuntos /></Suspense>} />
          <Route path="/empresa" element={<Suspense fallback={<PageFallback />}><Empresa /></Suspense>} />
          <Route path="/centros" element={<Suspense fallback={<PageFallback />}><Centros /></Suspense>} />
          <Route path="/contacto" element={<Suspense fallback={<PageFallback />}><Contacto /></Suspense>} />
          <Route path="/tablon" element={<Suspense fallback={<PageFallback />}><TablonAnuncios /></Suspense>} />
          <Route path="/aviso-legal" element={<Suspense fallback={<PageFallback />}><AvisoLegal /></Suspense>} />
          <Route path="/politica-privacidad" element={<Suspense fallback={<PageFallback />}><PoliticaPrivacidad /></Suspense>} />
          <Route path="/politica-cookies" element={<Suspense fallback={<PageFallback />}><PoliticaCookies /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
