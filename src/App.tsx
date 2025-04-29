import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos de AOS
import LoadingSpinner from "./components/ui/Icons/Tools/LoadingSpinner";

// Loading lazy
import { Suspense, lazy } from "react";
const About = lazy(() => import("./pages/pageData/About"));
const Servicios = lazy(() => import("./pages/pageData/Servicios"));

// Pages
import Home from "./pages/Home";
// import { About } from "./pages/pageData/About";
// import { Servicios } from "./pages/pageData/Servicios";
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
      <Route
        path="/about"
        element={
          <Suspense fallback={<LoadingSpinner delay={200} />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/servicios"
        element={
          <Suspense fallback={<LoadingSpinner delay={200} />}>
            <Servicios />
          </Suspense>
        }
      />
      {/* <Route path="/about" element={<About />} />
      <Route path="/servicios" element={<Servicios />} /> */}
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
}

export default App;
