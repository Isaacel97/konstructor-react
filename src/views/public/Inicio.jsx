import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/templatemo-plot-listing.css';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Carrusel } from '../components/ImagensSlides';
import { CategoryContainer } from '../components/CategoryContainer';
import SlideCotizador from '../../assets/images/slides/KONSTRUCTOR WEB_1.jpg';
import SlideColegio from '../../assets/images/slides/KONSTRUCTOR WEB_2.jpg';
import SlidePortafolio from '../../assets/images/slides/KONSTRUCTOR WEB_3.jpg';
import Slidecontact from "../../assets/images/slides/KONSTRUCTOR WEB_8.jpg";
import { url } from '../../api/ws';

function Inicio() {
  useEffect(() => {
    document.title = "Si vas a construir una casa en Querétaro, cotiza Ws 4424499749";
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", "Obtén un presupuesto en línea y conoce los permisos que necesitas para construir casa, local o residencia en Querétaro; ingenieros civiles y arquitectos experimentados");
    }
  }, []);
  const contenido1 = <div><h1>Si vas a construir una casa en Querétaro, primero entérate de los permisos que necesitarás:</h1><br/><p>Para tramitar tu <strong>licencia de construcción</strong> lo primero que tienes que buscar es la empresa constructora que disponga de arquitectos e ingenieros que realicen el estudio del proyecto y elaboren los planos, los cuales deberán ser entregados en la Oficina de <strong>Desarrollo Urbano</strong> de cada municipio de Querétaro para la solicitud de construcción y pago de permisos y licencias, presentando además de los planos el Certificado de uso del suelo y el Registro de Manifestación de la construcción. Posteriormente sigue estos <a href={url + 'arquitectos-en-queretaro/'}>11 pasos</a> que te indicamos para construir tu casa en Querétaro</p></div>;

  const contenido2 = 
    <div className="row">
      <div className="col-lg-8">
        <a href="contact.html">
          <img src={Slidecontact} alt="Contacto" className="img-fluid" />
        </a>
      </div>
      <div className="col-lg-4 text-justify">
        <h2>Colegio de ingenieros civiles en Querétaro</h2>
        <br/>
        <p>Somos miembros del Colegio de Ingenieros Civiles de Querétaro además de contar con la acreditacion como DRO's, un sólido equipo de ingenieros civiles, arquitectos, maestros de obras, albañiles y ayudantes generales en Querétaro.</p>
      </div>
    </div>;
  
  return (
    <>
      <div>        
        <NavBar />
        <Carrusel imgSlide1={SlideCotizador} descripcion1="Imagen Ingresar a cotizador en línea" imgSlide2={SlideColegio} descripcion2="Imagen Ing's y Arq's" imgSlide3={SlidePortafolio} descripcion3="Imagen Ingresar a cotizador en línea"/>
        <CategoryContainer contenido={contenido1}/>
        <CategoryContainer contenido={contenido2}/>
        <Footer/>
      </div>
    </>
  );
}

export default Inicio;
