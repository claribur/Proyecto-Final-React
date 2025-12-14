import React from "react";
import "../styles/proyectos.css";

// Importar imágenes
import img1 from "../assets/IMG_3561.jpg";
import img2 from "../assets/IMG_3557.jpg";
import img3 from "../assets/IMG_444596BA213C-1.jpeg";
import img4 from "../assets/IMG_94BFBE9240C3-1.jpeg";
import img5 from "../assets/IMG_3562.jpg";
import img6 from "../assets/IMG_3563.jpg";
import img7 from "../assets/IMG_3565.jpg";
import img8 from "../assets/IMG_3566.jpg";
import img9 from "../assets/IMG_3567.jpg";

const Proyectos = () => {
  return (
    <main className="container-proyectos">
      <h2>Un recorrido visual por mis obras</h2>

      <p className="introduction">
        Cada obra representa un proceso de exploración, donde las formas y los
        materiales dialogan hasta encontrar un equilibrio propio.
      </p>

      <div className="container-img-gproyecto container-tamaños">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>

      <p className="introduction">
        En el detalle se esconde la esencia de mi trabajo: la búsqueda de
        emociones a través de la armonía entre espacio, luz y textura.
      </p>

      <div className="container-img-gproyecto container-alone">
        <img src={img5} alt="" />
      </div>

      <p className="introduction">
        Este recorrido visual es también un reflejo de mi manera de entender el
        arte y el diseño, como un puente entre lo cotidiano y lo
        extraordinario.
      </p>

      <div className="container-img-gproyecto container-tamaños">
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
      </div>
    </main>
  );
};

export default Proyectos;
