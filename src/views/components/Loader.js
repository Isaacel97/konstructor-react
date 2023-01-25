import React from "react"
import '../../assets/css/templatemo-plot-listing.css';

export const Loader = () => {
    return (
        <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
            <span className="dot" />
            <div className="dots">
                <span />
                <span />
                <span />
            </div>
            </div>
        </div>
    );
}