import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, Text, Box } from "native-base";
import Inicio from './views/public/Inicio'
import QuienesSomos from './views/public/QuienesSomos'
import IngCivil from './views/public/IngCivil'
import Cotizador from './views/private/Cotizador';
import Contacto from './views/public/Contacto';
import Login from './views/public/Login';

function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<QuienesSomos />} />
          <Route path="/cotizador" element={<Cotizador />} />
          <Route path="/constructoras" element={<IngCivil />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;
