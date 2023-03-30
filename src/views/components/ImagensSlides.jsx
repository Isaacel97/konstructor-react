import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/templatemo-plot-listing.css';
import Carousel from 'react-bootstrap/Carousel';
import { url } from '../../api/ws';

export const Carrusel = (props) => {
    return (
        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={props.imgSlide1} alt={props.descripcion1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={props.imgSlide2} alt={props.descripcion2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={props.imgSlide3} alt={props.descripcion3} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ImagenesSlides = (props) => {
    return (
        <div className="col-lg-12 my-4">
            <div className="description">
                <div className="row">
                    <a href={url + '/login'}>
                        <img src={props.img} alt={props.descripcion} className="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    )
}