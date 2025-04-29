import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos de AOS

// Pages
import Home from "./pages/Home";
import { About } from "./pages/pageData/About";
import { Servicios } from "./pages/pageData/Servicios";
// import NotFound from "./pages/NotFound";

function App() {
  // Animation
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-quad",
      once: true,
      mirror: false,
      // mejorar rendimiento:
      debounceDelay: 50,
      throttleDelay: 99,
      disableMutationObserver: false,
      startEvent: "DOMContentLoaded",
    });

    // Opcional: Si hay contenido dinámico que se carga después
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicios" element={<Servicios />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
}

export default App;
