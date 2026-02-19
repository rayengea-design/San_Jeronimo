import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Permisos from './pages/Permisos';
import Profesionales from './pages/Profesionales';
import RecuperacionPuntos from './pages/RecuperacionPuntos';
import Empresa from './pages/Empresa';
import Opiniones from './pages/Opiniones';
import Contacto from './pages/Contacto';

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
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
