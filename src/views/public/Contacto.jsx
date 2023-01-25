import React, {useEffect} from "react";
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
      <div className="contact-page">
        <div className="container">
          <h2 className="text-center">Formulario</h2>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div id="map">
                      <img src={imgSala} alt="Foto sala" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <form id="contact" action="" method="get">
                      <div className="row">
                        <div className="col-lg-12">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Nombre completo"
                              autoComplete="on"
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="direccion"
                              id="direccion"
                              placeholder="Dirección"
                              autoComplete="on"
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="number"
                              name="phone"
                              id="phone"
                              placeholder="Whatsapp"
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <label htmlFor="motivo">Motivo:</label>
                            <select
                              className="form-select"
                              id="motivo"
                              aria-label="Motivo"
                            >
                              <option selected="" disabled="">
                                -- Selecciona una opción --
                              </option>
                              <option value={1}>Obra nueva Casa-habitación</option>
                              <option value={2}>Licencia de construcción</option>
                              <option value={3}>Ampliación habitacional</option>
                              <option value={4}>Local comercial</option>
                              <option value={5}>Plaza comercial</option>
                              <option value={6}>Regularización de obra</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-lg-12 mt-4">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button">
                              <FiSend />
                              Confirmar
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
}

export default Contacto;
