import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/templatemo-plot-listing.css';
import { AiFillCheckCircle } from "react-icons/ai";

export const ListGroup = (props) => {
  return (
    <div className={props.className}>
        <ul className="list-group">
          <li className="list-group-item active bg-dark">
            <div className="fw-bold">{props.titulo}</div> 
          </li>
          <li className="list-group-item">{props.descripcion}</li>
        </ul>
      </div>
  )
}

export const ItemListGroup = (props) => {
  return(
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.valor}</div>
        {props.descripcion}
        <AiFillCheckCircle />
      </div>
    </li>
  )
}