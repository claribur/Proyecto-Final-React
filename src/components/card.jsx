import React from "react";
import "../styles/venta.css"; 

const Card = ({ img, title, price }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>

      <div className="card-name">
        <h2>{title}</h2>
      </div>

      <div className="card-price">
        <p>${price}</p>
      </div>

      <div className="card-boton">
        <button className="mandar">
          <a href="/Contacto">Contactanos</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
