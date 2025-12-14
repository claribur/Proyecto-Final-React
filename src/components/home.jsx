import React from "react";
import "../styles/home.css";
import fotoUnida from "../assets/FOTO-UNIDA.png";
import useTitulo from "../hook/usetitulo";

const Home = () => {
    useTitulo("Inicio | Veronica Linares ART");
  return (
    <main>
      <div className="img-container">
        <img className="main-image" src={fotoUnida} alt="Galería" />
</div>

      <div className="container-middle">
        <h2>Galería Virtual</h2>
        <h2>Te presentamos tu galería de arte online</h2>
        <p>Arte inspirador, atípico y arriesgado.</p>
        <p>Arte para los que están y arte para los que empiezan.</p>
      </div>
    </main>
       
  );
};



export default Home;