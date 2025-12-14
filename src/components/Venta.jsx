import React, { useState } from "react";
import "../styles/venta.css";
import "../styles/header-footer.css";


import Card from "./card";


import cuadro1 from "../assets/IMG_3565.jpg";
import cuadro2 from "../assets/IMG_3566.jpg";
import cuadro3 from "../assets/IMG_3557.jpg";
import cuadro4 from "../assets/IMG_3563.jpg";

const Venta = () => {
 
  const [soloCaras, setSoloCaras] = useState(false);


  const obras = [
    { img: cuadro1, title: "Navidad", price: 400000 },
    { img: cuadro2, title: "La Bella Durmiente", price: 100000 },
    { img: cuadro3, title: "Casino", price: 700000 },
    { img: cuadro4, title: "Fashion-Chic", price: 600000 },
  ];

  return (
    <main className="venta-container">

      <h2 className="titulo">Obras Disponibles</h2>

    
      <div className="filtro-container">
        <button
          className="filtro-btn"
          onClick={() => setSoloCaras(!soloCaras)}
        >
          {soloCaras ? "Mostrar todas las obras" : "Solo obras + $100.000"}
        </button>
      </div>

      <div className="cards">
        {obras
          .filter((obra) => !soloCaras || obra.price > 100000)
          .map((obra, index) => (
            <Card
              key={index}
              img={obra.img}
              title={obra.title}
              price={obra.price}
            />
          ))}
      </div>
    </main>
  );
};

export default Venta;
