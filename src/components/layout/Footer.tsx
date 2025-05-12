// ItemFooterLinks.tsx: Componente que renderiza una lista de enlaces con un título.
// ItemFooterNavSocials.tsx: Componente que renderiza exclusivamente los enlaces de redes sociales en el footer.
import ItemFooterLinks from "../Home/ui/ItemFooterLinks";
import ItemFooterNavSocials from "../Home/ui/ItemFooterNavSocials";
function Footer() {
  // Enlaces columna 1 *Compañía*
  const enlaces1 = {
    "Sobre nosotros": "/about",
    Servicios: "/servicios",
    Compras: "/compras",
    Blog: "/blog",
  };
  // Enlaces columna 2 *Ayuda*
  const enlaces2 = {
    Contáctanos: "/contacto",
    "Política de cookies": "/cookies",
    "Preguntas frecuentes": "/preguntas",
  };
  // Enlaces columna 3 *Educación*
  const enlaces3 = {
    "Educación financiera": "/educacion",
    "Inversiones inteligentes": "/inversiones",
    "Ahorro y presupuesto": "/ahorro",
    "Criptomonedas y blockchain": "/criptomonedas",
  };

  return (
    <footer
      className="flex flex-col lg:flex-row lg:justify-evenly justify-center items-center py-8 gap-y-4 
      bg-[#101a1c] text-[#fff]"
    >
      <ItemFooterLinks titulo="Compañía" enlaces={enlaces1}></ItemFooterLinks>
      <ItemFooterLinks titulo="Ayuda" enlaces={enlaces2}></ItemFooterLinks>
      <ItemFooterLinks titulo="Educación" enlaces={enlaces3}></ItemFooterLinks>
      <ItemFooterNavSocials></ItemFooterNavSocials>
    </footer>
  );
}

export default Footer;
