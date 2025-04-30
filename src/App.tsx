import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Estilos de AOS
import LoadingSpinner from "./components/ui/Icons/Tools/LoadingSpinner";

import CustomScrollRestoration from "./utility/CustomScrollRestoration";

// Pages
import PageTitleUpdater from "./utility/PageTitleUpdater";
import Home from "./pages/Home";
// Generic pages (lazy loading)
const About = lazy(() => import("./pages/pageData/About"));
const Servicios = lazy(() => import("./pages/pageData/Servicios"));
const Inversiones = lazy(() => import("./pages/pageData/Inversiones"));
const Compras = lazy(() => import("./pages/pageData/Compras"));
const Blog = lazy(() => import("./pages/pageData/Blog"));

function App() {
  // Animations
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
    <>
      <CustomScrollRestoration /> {/*  Resetear scroll al cambiar ruta */}
      <PageTitleUpdater />
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
        <Route
          path="/inversiones"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <Inversiones />
            </Suspense>
          }
        />
        <Route
          path="/compras"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <Compras />
            </Suspense>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingSpinner delay={200} />}>
              <Blog />
            </Suspense>
          }
        />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </>
  );
}

export default App;
