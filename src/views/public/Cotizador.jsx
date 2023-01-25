import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Carrusel } from '../components/ImagensSlides';
import { FiSend } from "react-icons/fi";
import SlideColegio from "../../assets/images/slides/KONSTRUCTOR WEB_2.jpg";
import SlideExp from "../../assets/images/slides/KONSTRUCTOR WEB_5.jpg";
import SlideCotizador from "../../assets/images/slides/KONSTRUCTOR WEB_1.jpg";
import { CategoryContainer } from "../components/CategoryContainer";
import Slidecontact from "../../assets/images/slides/KONSTRUCTOR WEB_8.jpg";
import {InputComp, CheckboxComp} from "../components/InputComp";

function Cotizador() {
  useEffect(() => {
    document.title = "Calcula online el presupuesto para construir 1 casa; incluye mano de obra, albañiles en Querétaro";
    document.querySelector('meta[name="description"]').setAttribute("content", "¿Deseas construir una casa, local comercial, residencia, casa pequeña en Querétaro? Obtén en línea un presupuesto con precios actuales del costo de materiales, albañiles, licencia de construccíón, plano arquitectónico y permisos en el estado de queretaro");
  }, []);
  
  const [metros, setMetros] = useState('');
  const [condicion, setCondicion] = useState('');

  const metrosChange = event => {
    const value = event.target.value;
    setMetros(value);
    if (value > 60 && value <= 100 ) {
      setCondicion('De linea');
    } else if (value > 100 && value <= 250) {
      setCondicion('Interes medio');
    } else if (value > 250) {
      setCondicion('Campestre');
    } else {
      setCondicion('');
    }
  };

  const handleCheckboxValue = (value) => {
    console.log('check:', value);
  };


  const contenido = 
    <>
      <h2>Agenda una cita con uno de nuestros arquitectos o ingenieros civiles en Querétaro</h2>
          <br/>
          <a href="contact.html"><img src={Slidecontact} alt="Contactanos"/></a> 
    </>
  return (
    <div>
        <NavBar />
        <Carrusel imgSlide1={SlideColegio} descripcion1="Imagen Ing's y Arq's" imgSlide2={SlideExp} descripcion2="Imagen 20 años de experiencia" imgSlide3={SlideCotizador} descripcion3="Imagen Ingresar a cotizador en línea"/>
        {/* inicio vista */}
        <Container>
          <div className="description mt-4">
            <h1>
              Obtén un presupuesto que incluye: mano de obra de maestro de obra,
              albañiles, materiales, acabados en Querétaro en función a tus necesidades
            </h1>
          </div>          
          <div className="contact-page">
            <h2 className="text-center">Cotizador</h2>
            <br />
            <Row>
              <Col lg="12">
                <div className="inner-content">                                            
                  <Form style={{padding: "2rem"}}>
                    {/* m2 */}
                    <Row style={{justifyContent: "center"}}>
                      <Col md={4}>
                        <Form.Group controlId="forM2">
                          <Form.Label>¿Cúal es el área de tu terreno?</Form.Label>
                          <Form.Control type="number" placeholder="Ingresa los m2" value={metros} onChange={metrosChange} min={60}/>
                          <Form.Text className="text-muted mb-2">
                            text avisos
                          </Form.Text>
                          <CheckboxComp col="12" text="No se el área de mi terreno" onCheckboxChange={handleCheckboxValue}/>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* check m2 */}
                    <h6 className="mt-4 text-center"><strong>Condición: {condicion}</strong></h6>
                    {metros > 60 }
                    {/* check */}
                    {metros > 100 &&
                    <>
                      <Row>
                        <CheckboxComp col="4" text="Estudio"/>
                        <CheckboxComp col="4" text="Cuarto lavado"/>
                        <CheckboxComp col="4" text="Cuarto de servicio"/>
                      </Row>
                      <Row>
                        <CheckboxComp col="4" text="Sala de TV"/>
                        <CheckboxComp col="4" text="Vestidor"/>
                        <CheckboxComp col="4" text="Portico"/>
                      </Row>
                      <Row style={{justifyContent: "center"}}>
                        <InputComp col="4" controlId="otro" type="text" placeholder="Otro"/>
                      </Row>
                    </>}

                    <Row style={{justifyContent: "flex-end"}}>
                      <Col md={2} className="mt-2">
                        <Button
                          type="submit"
                          id="form-submit"
                          size="lg"
                          variant="secondary">
                          <FiSend />
                          Cotizar
                        </Button>
                      </Col>
                    </Row>
                  </Form>                     
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        {/* fin vista */}
        <CategoryContainer contenido={contenido}/>
        <Footer />
    </div>
    );
}

export default Cotizador;
