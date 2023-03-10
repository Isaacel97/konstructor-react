import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

import Logo from '../../assets/images/logos/Icono_Konstruktor.png';
export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavCollapse = () => {
      setExpanded(!expanded);
    };
    return (
    <>      
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={expanded}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <Image src={Logo} alt="Logo" height={70}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact activeClassName="active">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/nosotros" activeClassName="active">Nosotros</Nav.Link>
                        <Nav.Link as={NavLink} to="/constructoras" activeClassName="active">Constructoras</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/cotizador" activeClassName="active">Cotizador</Nav.Link>
                        <Nav.Link as={NavLink} to="/contacto" activeClassName="active">Contacto</Nav.Link>
                        <Nav.Link as={NavLink} to="/login" activeClassName="active">Login</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </>
    );
}