import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/header-footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1 className="title">Veronica Linares | ART</h1>

        <ul>
          <li>INFORMACIÓN</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/Venta">Shop Gallery</Link></li>
          <li><Link to="/nosotros">Quienes Somos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

        <ul>
          <li>CONTACTO</li>
          <li>
            <i className="fa-brands fa-whatsapp"></i> +54 9 11 6677-8899
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i> Veronicalinaresarte@gmail.com
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i> @veronicalinares.arte
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
