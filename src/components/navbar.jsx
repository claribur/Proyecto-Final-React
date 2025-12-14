import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header-footer.css";

import "../styles/navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <header className="navbar-fixed">
        <h1 className="title">Veronica Linares | ART</h1>

        
        <nav className="nav-desktop">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Proyectos">Proyectos</Link></li>
            <li><Link to="/Venta">Shop Galery</Link></li>
            <li><Link to="/Nosotros">Quienes Somos</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

    
    </>
  );
};

export default Navbar;
