import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/templatemo-plot-listing.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Carrusel, ImagenesSlides } from '../components/ImagensSlides';
import SlideExp from "../../assets/images/slides/KONSTRUCTOR WEB_4.jpg";
import SlidePermisos from "../../assets/images/slides/KONSTRUCTOR WEB_6.jpg";
import SliceHonestidad from "../../assets/images/slides/KONSTRUCTOR WEB_7.jpg";
import Slidecontact from "../../assets/images/slides/KONSTRUCTOR WEB_8.jpg";
import Imagenporta from "../../assets/images/slides/KONSTRUCTOR_WEB_9.jpg";
import { ListGroup, ItemListGroup } from '../components/ListGroup';

function QuienesSomos() {
    useEffect(() => {
        document.title = "Conoce a la honesta constructora de casas en Querétaro, Konstruktor";
        document.querySelector('meta[name="description"]').setAttribute("content", "Ofrecemos transparencia en la compra de materiales durante el proceso de construcción de tu casa, garantizandote honestidad, profesionalismo y capacidad");
      }, []);
  return (
    <div>
      <NavBar />
      <Carrusel imgSlide1={SlideExp} descripcion1="Imagen 20 años de experiencia" imgSlide2={SlidePermisos} descripcion="Imagen Licencias de construcción" imgSlide3={SliceHonestidad} descripcion3="Nuestro valor: Honestidad"/>
      <div className="container mt-4">
        <div className="row">
          <h1>Como constructora de casas en Querétaro, nuestra  filosofía organizacional es:</h1>
          <ListGroup className="col-5 mt-4" titulo="Misión" descripcion="Vinculamos a la sociedad con el medio ambiente, a través de la aplicación de tecnologías en la construcción de viviendas."/>
          <ListGroup className="col-7 mt-4" titulo="Visión" descripcion="Consolidarnos como una empresa rentable en tecnología y proyectos sustentables, construyendo viviendas del nivel medio y residencial en México."/>
        </div>
      
        <ImagenesSlides img={Slidecontact} descripcion="Banner Contactanod"/>

        <h2 className="text-center">Nuestra cimentación profesional: HONESTIDAD</h2>
        <div className="col mt-3">
          <ul className="list-group">
            <li className="list-group-item active bg-dark">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Valores organizacionales</div>
              </div>
            </li>
            <ItemListGroup valor="Trabajo en equipo" descripcion="Estamos para servir " />
            <ItemListGroup valor="Actitud de servicio" descripcion="En conjunto logramos los objetivos " />
            <ItemListGroup valor="Honestidad" descripcion="No tiene precio " />
            <ItemListGroup valor="Profesionalismo" descripcion="Ocupamos adecuadamente nuestras habilidades y herramientas de trabajo " />
            <ItemListGroup valor="Confianza" descripcion="La obtenemos al realizar nuestro trabajo adecuadamente " />
          </ul>
        </div>

        <ImagenesSlides img={Imagenporta} descripcion="Banner Portafolio"/>
      </div>

      <Footer />
    </div>
  );
}

export default QuienesSomos;