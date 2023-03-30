import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NativeBaseProvider } from "native-base"
import Inicio from "./views/public/Inicio"
import QuienesSomos from "./views/public/QuienesSomos"
import IngCivil from "./views/public/IngCivil"
import Cotizador from "./views/private/Cotizador"
import Contacto from "./views/public/Contacto"
import Login from "./views/public/Login"
import MenuDrawer from "./views/components/MenuDrawer"
import { AuthProvider, RequireAuth } from "react-auth-kit"
import Register from "./views/public/Register"

function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <NativeBaseProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Inicio />}
            />
            <Route
              path="/nosotros"
              element={<QuienesSomos />}
            />
            <Route
              path="/cotizador"
              element={
                <RequireAuth loginPath="/login">
                  <Cotizador />
                </RequireAuth>
              }
            />
            <Route
              path="/constructoras"
              element={<IngCivil />}
            />
            <Route
              path="/contacto"
              element={<Contacto />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/registro"
              element={<Register />}
            />

            <Route
              path="/admin"
              element={<MenuDrawer />}
            />
          </Routes>
        </BrowserRouter>
      </NativeBaseProvider>
    </AuthProvider>
  )
}

export default App
