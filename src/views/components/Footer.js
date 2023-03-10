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
                <p>Con gusto te atenderemos</p>
                <div className="row">
                  <div className="col-lg-6">
                    <p>442-449-9749</p>
                  </div>
                  <div className="col-lg-6">
                    <p>contacto@konstruktor.com.mx</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>Desarrollado por <a rel="nofollow" href="https://icandelario-dev.com/" title="CSS Templates">DEVDO</a></p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}