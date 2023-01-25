import React from "react"
import { NavLink } from "react-router-dom";

import Logo from '../../assets/images/logos/Icono_Konstruktor.png';

export const NavBar = () => {
    return (
    <>      
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html">
                                <img src={Logo} alt="Logo" className="icono-nav" />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><NavLink to="/">Inicio</NavLink></li>
                                <li><NavLink to="/constructoras-de-casas-en-queretaro">Quienes somos</NavLink></li>
                                <li><NavLink to="/arquitectos-en-queretaro">ING CIVILES Y ARQ</NavLink></li>
                                <li><NavLink to="/albañiles-en-queretaro">Cotizador</NavLink></li>
                                <li><NavLink to="/presupuesto-construccion-casa-qro">Contacto</NavLink></li>
                                <li></li>
                            </ul>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
}