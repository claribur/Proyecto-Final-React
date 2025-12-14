import React, { useState } from "react";
import "../styles/contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!formData.nombre.trim()) {
      alert("Por favor escribí tu nombre.");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Por favor escribí un email válido.");
      return;
    }
    if (!formData.mensaje.trim()) {
      alert("Por favor escribí un mensaje.");
      return;
    }

    console.log("Formulario enviado:");
    console.log(formData);

    alert("Formulario enviado correctamente 🙌");

    // Resetear formulario
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    
    <main >
      <h2>Contacto</h2>
      <div className="contact-container">
      <form onSubmit={handleSubmit} className="form">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@example.com"
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribí tu mensaje aquí"
        ></textarea>

        <div className="botones">
          <button type="submit" className="mandar">Enviar</button>
          <button type="button" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      </div>
    </main>
    
  );
};

export default Contacto;
