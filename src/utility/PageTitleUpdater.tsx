// Este componente se encarga de actualizar el título de la página según la ruta actual.
// Utiliza el hook useLocation de react-router-dom para obtener la ruta actual y useEffect
// para actualizar el título del documento.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Inicio",
      "/about": "Sobre nosotros",
      "/servicios": "Servicios",
      "/inversiones": "Inversiones",
      "/compras": "Compras",
      "/blog": "Blog",
      "/contact": "Contacto",
    };
    document.title = `${
      titles[location.pathname as keyof typeof titles] || "Página no encontrada"
    } - Growbit`;
  }, [location.pathname]);

  return null; // Este componente no renderiza nada
}
export default PageTitleUpdater;
