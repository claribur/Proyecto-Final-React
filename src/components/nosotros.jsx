import React from "react";
import "../styles/nosotros.css";
import "../styles/header-footer.css";
import veronicaImg from "../assets/veronica.png";


const Nosotros = () => {
  return (
    <main className="index">
      <div className="historia">
        <div className="columna-name">
          <ul>
            <li className="minombre">VERONICA LINARES</li>
            <li>Abogada</li>
          </ul>
        </div>

        <div className="columna-p">
          <p>
            El arte ha sido parte de mi vida. Visitar museos, colecciones y
            exposiciones me despertó una curiosidad y un entusiasmo que no me
            han abandonado nunca.
          </p>

          <p>
            Con el tiempo, esta pasión se convirtió en un motor que me llevó a
            formarme profesionalmente en el mundo del arte, aprendiendo no solo
            sobre su valor y mercado, sino también sobre las historias y
            personas que lo hacen posible. Cada experiencia ha sido un
            aprendizaje que ha marcado mi camino y mi forma de ver el arte hoy.
          </p>
        </div>

        <div className="columna-img">
        <img src={veronicaImg} alt="Veronica Linares" />

        </div>
      </div>
    </main>
  );
};

export default Nosotros;
