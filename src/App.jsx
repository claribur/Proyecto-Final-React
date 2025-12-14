
import { Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Contacto from "./components/Contacto.jsx";
import Nosotros from "./components/nosotros";
import Venta from "./components/Venta";
import Navbar from "./components/navbar.jsx";



function App() {
   return ( 
   <> 
 <Navbar />
   <Routes>
   <Route path="/" element={<Home />} />

   <Route path="/Proyectos" element={<Proyectos />} />
   <Route path="/Contacto" element={<Contacto />} />
   <Route path="/Nosotros" element={<Nosotros />} />
   <Route path="/Venta" element={<Venta />} />

  
   </Routes>
   <Footer />
 
    </> 
    ); 
  }

export default App;
