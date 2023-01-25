import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/templatemo-plot-listing.css';
import Logo from '../../assets/images/logos/Konstruktor Fonts.png';

export const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about">
                <div>
                  <img src={Logo} alt="Logo" className="logoimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us">
                <h4>Contactanos</h4>
                <p>27th Street of New Town, Digital Villa</p>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">010-020-0340</a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#">090-080-0760</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>Desarrollado por <a rel="nofollow" href="https://impactosdigitales.com/" title="CSS Templates">Impactos Digitales</a></p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}