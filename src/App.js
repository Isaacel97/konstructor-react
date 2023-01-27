import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './views/public/Inicio'
import QuienesSomos from './views/public/QuienesSomos'
import IngCivil from './views/public/IngCivil'
import Cotizador from './views/public/Cotizador';
import Contacto from './views/public/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/constructoras-de-casas-en-queretaro" element={<QuienesSomos />} />
        <Route path="/arquitectos-en-queretaro" element={<IngCivil />} />
        <Route path="/albaniles-en-queretaro" element={<Cotizador />} />
        <Route path="/presupuesto-construccion-casa-qro" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
