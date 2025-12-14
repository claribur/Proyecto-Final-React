import React from "react";
import "../styles/navbar.css";
import "../styles/header-footer.css";


const Footer = () => {
  return (
    <footer>
      <div>
        <h1 className="title">Veronica Linares | ART</h1>

        <ul>
          <li>INFORMACIÓN</li>
          <li><a href="/">Home</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/Venta">Shop Galery</a></li>
          <li><a href="/nosotros">Quienes Somos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        <ul>
          <li>CONTACTO</li>
          <li><i className="fa-brands fa-whatsapp"></i> +54 9 11 6677-8899</li>
          <li><i className="fa-regular fa-envelope"></i> Veronicalinaresarte@gmail.com</li>
          <li><i className="fa-brands fa-instagram"></i> @veronicalinares.arte</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;