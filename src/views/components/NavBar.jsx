import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../../assets/images/logos/Icono_Konstruktor.png"
import { useAuthUser, useSignOut, useAuthHeader } from "react-auth-kit"
import { baseUrl } from "../../api/ws";

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false)
  const [admin, setAdmin] = useState(false)
  const handleNavCollapse = () => {
    setExpanded(!expanded)
  }
  const authHeader = useAuthHeader()
  const auth = useAuthUser()
  const signOut = useSignOut()

  useEffect(() => {
    if (auth()) {
      validateToken()
    }
  }, [])

  const validateToken = async () => {
    const token = authHeader().split(" ")[1]
    if (token) {
      console.log("realizando auth")
      const res = await fetch(baseUrl + "user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      console.log(data);
      if (data.status === 401) signOut()

      if (data.type === 1) setAdmin(true)
    }
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
          >
            <Image
              src={Logo}
              alt="Logo"
              height={70}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavCollapse}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                exact="true"
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/nosotros"
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/constructoras"
              >
                Constructoras
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/cotizador"
              >
                Cotizador
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contacto"
              >
                Contacto
              </Nav.Link>
              {admin && (
                <Nav.Link
                  as={NavLink}
                  to="/admin"
                >
                  {" "}
                  Admin
                </Nav.Link>
              )}
              {auth() ? (
                <Nav.Link
                  as={NavLink}
                  to="/"
                  onClick={() => signOut()}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
