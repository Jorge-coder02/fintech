import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos de AOS
import { useEffect } from "react";

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
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
}

export default App;
