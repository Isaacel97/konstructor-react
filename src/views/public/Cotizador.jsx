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
  const [checked, setChecked] = useState(false);

  const metrosChange = event => {
    const value = event.target.value;
    setMetros(value);
    catCondicion(value);
  };

  const handleCheckboxValue = (value) => {
    console.log(value);
    if(value) {
      setChecked('checked');
    } else {     
      setChecked('');
    }
  };

  const handleArea = (value) => {
    console.log('Area:', value);
    setMetros(value);
    catCondicion(value);
  };

  const catCondicion = (value) => {
    if (value > 60 && value <= 100 ) {
      setCondicion('De linea');
    } else if (value > 100 && value <= 250) {
      setCondicion('Interes medio');
    } else if (value > 250) {
      setCondicion('Campestre');
    } else {
      setCondicion('');
    }
  }

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
                      <Col md={9}>
                        <Form.Group controlId="forM2">
                          <Form.Label>¿Cúal es el área de tu terreno?</Form.Label>
                          {checked === 'checked' ? <Form.Control disabled type="number" placeholder="Calculando..." value={metros} onChange={metrosChange} min={60}/> :
                          <Form.Control type="number" placeholder="Ingresa los m2" value={metros} onChange={metrosChange} min={60}/>}
                          <CheckboxComp col="12" text="No se el área de mi terreno" onCheckboxChange={handleCheckboxValue} onAreaChange={handleArea}/>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* check m2 */}
                    <h6 className="mt-4 text-center"><strong>Condición: {condicion}</strong></h6>
                    {metros > 60 &&
                    <>
                      <Row className="justify-content-md-center mt-3">
                        <Col md={3} className="mb-2">
                          <Form.Select arial-label="Recamaras">
                            <option>Recamaras</option>
                            {condicion === 'De linea' && 
                            <>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </>}
                            {condicion === 'Interes medio' && 
                            <>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </>}
                            {condicion === 'Campestre' && 
                            <>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                            </>}
                          </Form.Select>
                        </Col>
                        <Col md={3} className="mb-2">
                          <Form.Select arial-label="Banos">
                            <option>Baños</option>
                            {condicion === 'De linea' && 
                            <>
                              <option value="1">1</option>
                              <option value="1.5">1.5</option>
                            </>}
                            {condicion === 'Interes medio' && 
                            <>
                              <option value="2">2</option>
                              <option value="2.5">2.5</option>
                              <option value="3">3</option>
                            </>}
                            {condicion === 'Campestre' && 
                            <>
                              <option value="2.5">2.5</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                            </>}
                          </Form.Select>
                        </Col>
                        <Col md={3}>
                          <Form.Select arial-label="Cocheras">
                            <option>Cocheras</option>
                            {condicion === 'De linea' && 
                            <>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </>}
                            {condicion === 'Interes medio' && 
                            <>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </>}
                            {condicion === 'Campestre' && 
                            <>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </>}
                          </Form.Select>
                        </Col>
                      </Row>
                      {/* checks */}
                      {metros > 100 &&
                      <>
                        <Row className="justify-content-md-center mt-3">
                          <CheckboxComp col="auto" text="Estudio"/>
                          <CheckboxComp col="auto" text="Cuarto lavado"/>
                          <CheckboxComp col="auto" text="Cuarto de servicio"/>
                          <CheckboxComp col="auto" text="Sala de TV"/>
                        </Row>
                        <Row className="justify-content-md-center mt-1">
                          <CheckboxComp col="auto" text="Vestidor"/>
                          {metros > 250 &&
                          <>
                            <CheckboxComp col="auto" text="Portico"/>
                            <CheckboxComp col="auto" text="Sala de juegos"/>
                          </>}
                        </Row>
                        <Row className="justify-content-md-center">
                          <InputComp col="3" controlId="otro" type="text" placeholder="Otro"/>
                        </Row>
                      </>}
                      {/* construccion estatica */} 
                      <Row className="justify-content-md-center mt-2">
                        <Col md={9} className="mt-2">
                          <h6>Para tu casa tambien se contempla:</h6>
                          {condicion === 'De linea' && <p>Sala, comedor y cocina.</p>}
                          {condicion === 'Interes medio' && <p>Sala, comedor, cocina, desayunador y vestidor.</p>}
                          {condicion === 'Campestre' && <p>Sala, comedor, cocina, desayunador, vestidor y con Isla.</p>}
                        </Col>   
                      </Row>
                    </> 
                    }
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
