import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom";
import { 
    createBrowserRouter,
    RouterProvider,
 } from "react-router-dom";
import Inicio from './views/public/Inicio'
import QuienesSomos from './views/public/QuienesSomos'
import IngCivil from './views/public/IngCivil'
import Cotizador from './views/public/Cotizador';
import Contacto from './views/public/Contacto';

function App() {
  const Router = createBrowserRouter([
    { path: "/", element: <Inicio /> },
    { path: "/constructoras-de-casas-en-queretaro", element: <QuienesSomos /> },
    { path: "/arquitectos-en-queretaro", element: <IngCivil /> },
    { path: "/albaniles-en-queretaro", element: <Cotizador /> },
    { path: "/presupuesto-construccion-casa-qro", element: <Contacto /> },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={Router}/>
);
  return (
    <Inicio />
  );
}

export default App;
