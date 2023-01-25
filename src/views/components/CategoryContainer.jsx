import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/templatemo-plot-listing.css";

export const CategoryContainer = (props) => {
    return (
        <div className="category-post container">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <div className="description">
              {props.contenido}
            </div>
          </div>
        </div>
      </div>
    
    );
};