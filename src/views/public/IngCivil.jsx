import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/templatemo-plot-listing.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Carrusel } from '../components/ImagensSlides';
import SlideColegio from "../../assets/images/slides/KONSTRUCTOR WEB_2.jpg";
import SlideExp from "../../assets/images/slides/KONSTRUCTOR WEB_5.jpg";
import SlideCotizador from "../../assets/images/slides/KONSTRUCTOR WEB_1.jpg";
import { CategoryContainer } from "../components/CategoryContainer";
import { ImagenesSlides } from "../components/ImagensSlides";
import Slidecontact from "../../assets/images/slides/KONSTRUCTOR WEB_8.jpg";

function IngCivil() {
    useEffect(() => {
        document.title = "Encuentra a experimentados ingenieros civiles y arquitectos de Querétaro";
        document.querySelector('meta[name="description"]').setAttribute("content", "Nuestra amplia experiencia como DRO, ingenieros civiles y arquitectos construyendo en Querétaro, generará ahorros en la construcción de tu casa o local");
      }, []);
    const contenido = 
    <>
        <h1>
        Como ingenieros civiles, directores responsables de obra y arquitectos en
        Querétaro
        </h1>
        <br />
        <h6>
        Te compartimos nuestra experiencia en la construcción de residencias,
        locales, plazas comerciales y casas en Querétaro, respecto a los permisos
        que necesitarás
        </h6>
        <br />
        <h6>
        Los documentos que se requieren para obtener una licencia de construcción en
        el Estado de Querétaro son:
        </h6>
        <br />
        <h5>Requsitos de licencia de construcción para Casa Habitación</h5>
        <i>Aplicable en el municipio de <a href="https://tramitesqro.municipiodequeretaro.gob.mx">Querétaro</a></i>
        <ol>
        <li>Solicitud (Firma DRO y Propietario)</li>
        <li>Carta responsiva DRO (Firma DRO) Anverso y Reverso</li>
        <li>Escrituras</li>
        <li>Certificado de número oficial</li>
        <li>Contrato de Agua (Factibilidad de Agua Desarrollador)</li>
        <li>Bitácora (Firma DRO y Propietario)</li>
        <li>Credencial DRO</li>
        <li>Predial pagado</li>
        <li>Proyecto Arquitectónico PDF, DWG, DXF (Firma DRO y Propietario)</li>
        <li>Proyecto Hidro-Sanitario PDF, DWG, DXF (Firma DRO y Propietario)</li>
        <li>Proyecto Estructural PDF, DWG, DXF (Firma DRO y Propietario)</li>
        </ol>
        <br />
        <p>
        Lo anterior pueden demorar desde 25 hasta <strong>45 días</strong> en su
        estudio y aprobación, nuestro experimentado equipo de arquitectos, dro's o
        ingenieros civiles pueden apoyarte en el trámite; tanto en Querétaro, San
        Juan del Río, Colón, Tesquisquiapan, Huimilpan, Ezequiel Montes, El Marquez
        y Corregidora (El Pueblito).
        </p>
        <br />
        <p>
        Estos se tramitan en la oficina de<strong> desarrollo urbano</strong> de
        cada municipio de Querétaro en la cual se entrega una solicitud de
        construcción, estudio de proyecto, planos de la construcción, certificado de
        uso del suelo y el registro de manifestación de la construcción.
        </p>
        <br />
        <h5>Requisitos de licencias para locales comerciales</h5>
        <i>Aplicable en el municipio de Querétaro</i>
        <ol>
        <li>Solicitud (Firma DRO y Propietario)</li>
        <li>Carta responsiva DRO (Firma DRO) Anverso y Reverso</li>
        <li>Escrituras</li>
        <li>Certificado de número oficial</li>
        <li>Contrato de Agua (Factibilidad de Agua Desarrollador)</li>
        <li>Dictamen de Uso de Suelo</li>
        <li>Bitácora (Firma DRO y Propietario)</li>
        <li>Credencial DRO</li>
        <li>Predial pagado</li>
        <li>Proyecto Arquitectónico PDF, DWG, DXF (Firma DRO y Propietario)</li>
        <li>Proyecto Hidro-Sanitario PDF, DWG, DXF (Firma DRO y Propietario)</li>
        <li>Proyecto Estructural PDF, DWG, DXF (Firma DRO y Propietario)</li>
        <li>Vo. Bo. de Protección Civil (DPO)</li>
        </ol>
    </>
  return (
    <div>
        <NavBar />
        <Carrusel imgSlide1={SlideColegio} descripcion1="Imagen Ing's y Arq's" imgSlide2={SlideExp} descripcion2="Imagen 20 años de experiencia" imgSlide3={SlideCotizador} descripcion3="Imagen Ingresar a cotizador en línea"/>
        <CategoryContainer contenido={contenido}/>
        <div className="container">
            <ImagenesSlides img={Slidecontact} descripcion="Imagen Contacto"/>
        </div>
        <Footer />
    </div>
    );
}

export default IngCivil;
