import React, {useEffect} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/templatemo-plot-listing.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { FiSend } from "react-icons/fi";
import imgSala from "../../assets/images/listing-01.jpg";

function Contacto() {
    useEffect(() => {
        document.title = "Contáctanos y te entregamos un presupuesto de construcción de casa en Qro";
        document.querySelector('meta[name="description"]').setAttribute("content", "Presupuestos urgentes de construcciones: locales comerciales, plazas o casas habitación en Qro. Contáctanos vía whatsapp al 4424499749 o usa cotizador");
      }, []);

  return (
    <div>
      <NavBar />
      {/* text inicio */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="top-text header-text">
                <h1>
                  Si quieres hacer una remodelación, un local comercial o la
                  construcción de una casa, contáctanos y te entregamos un presupuesto
                  detallado
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* formulario */}
      <Container style={{paddingTop: 24}}>
        <h2 className="text-center">Formulario</h2>
        <br />
        <Row>
          <Col lg={6}>
            <div id="map">
              <img src={imgSala} alt="Foto sala" />
            </div>
          </Col>
          <Col lg={6} className="align-self-center">
            <Form id="contact" action="" method="get">
              <Row>
                <Col lg={12}>
                  <Form.Group>
                    <Form.Control type="name" name="name" id="name" placeholder="Nombre completo" autoComplete="on" required="" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Control type="text" name="direccion" id="direccion" placeholder="Dirección" autoComplete="on" required="" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Control type="number" name="phone" id="phone" placeholder="Whatsapp" required="" />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group>
                    <Form.Label htmlFor="motivo">Motivo:</Form.Label>
                    <Form.Control as="select" className="form-select" id="motivo" aria-label="Motivo" defaultValue={0}>
                      <option disabled value={0}>-- Selecciona una opción --</option>
                      <option value={1}>Obra nueva Casa-habitación</option>
                      <option value={2}>Licencia de construcción</option>
                      <option value={3}>Ampliación habitacional</option>
                      <option value={4}>Local comercial</option>
                      <option value={5}>Plaza comercial</option>
                      <option value={6}>Regularización de obra</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={12} className="mt-4">
                  <Button type="submit" id="form-submit" className="main-button">
                    <FiSend />
                    Confirmar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* Footer */}
      <Footer />
    </div>
    );
}

export default Contacto;
