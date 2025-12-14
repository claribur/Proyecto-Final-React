import React from "react";
import "../styles/venta.css";
import "../styles/header-footer.css";

// Importo el componente Card
import Card from "./card";

// Importo las imágenes reales
import cuadro1 from "../assets/IMG_3565.jpg";
import cuadro2 from "../assets/IMG_3566.jpg";
import cuadro3 from "../assets/IMG_3557.jpg";
import cuadro4 from "../assets/IMG_3563.jpg";

const Venta = () => {
  return (
    <main className="venta-container">

      <h2 className="titulo">Obras Disponibles</h2>

      <div className="cards">
        <Card img={cuadro1} title="Navidad" price={400.000} />
        <Card img={cuadro2} title="La Bella Durmiente" price={100.000} />
        <Card img={cuadro3} title="Casino" price={700.000} />
        <Card img={cuadro4} title="Fashion-Chic" price={600.000} />
      </div>

    </main>
  );
};

export default Venta;

