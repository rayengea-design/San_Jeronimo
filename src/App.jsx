import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Permisos from './pages/Permisos';
import Profesionales from './pages/Profesionales';
import RecuperacionPuntos from './pages/RecuperacionPuntos';
import Empresa from './pages/Empresa';
import Centros from './pages/Centros';
import Contacto from './pages/Contacto';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import TablonAnuncios from './pages/TablonAnuncios';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/permisos" element={<Permisos />} />
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/recuperacion-puntos" element={<RecuperacionPuntos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/centros" element={<Centros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tablon" element={<TablonAnuncios />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
