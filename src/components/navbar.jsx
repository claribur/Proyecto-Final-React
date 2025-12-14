import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header-footer.css";

import "../styles/navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR FIJO ARRIBA */}
      <header className="navbar-fixed">
        <h1 className="title">Veronica Linares | ART</h1>

        {/* MENÚ DESKTOP */}
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

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="side-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MENÚ LATERAL */}
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
          <li><Link to="/Venta" onClick={() => setMenuOpen(false)}>Shop Galery</Link></li>
          <li><Link to="/Nosotros" onClick={() => setMenuOpen(false)}>Quienes Somos</Link></li>
          <li><Link to="/Contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
