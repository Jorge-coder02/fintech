import ItemFooterLinks from "../ui/ItemFooterLinks";
import ItemFooterSocials from "../ui/ItemFooterSocials";
import { XIcon, FacebookIcon, InstagramIcon, LinkednIcon } from "../ui/Icons";
function Footer() {
  // Enlaces columna 1 *Compañía*
  const enlaces1 = {
    "Sobre nosotros": "/sobre_nosotros",
    Servicios: "/servicios",
    Compras: "/compras",
    Blog: "/blog",
  };
  // Enlaces columna 2 *Ayuda*
  const enlaces2 = {
    Preguntas: "/preguntas",
    Contáctanos: "/contacto",
    "Política de cookies": "/politica_cookies",
    "Términos de uso": "/terminos_uso",
    "Preguntas frecuentes": "/preguntas_frecuentes",
  };
  // Enlaces columna 3 *Educación*
  const enlaces3 = {
    "Educación financiera": "/educacion_financiera",
    "Inversiones inteligentes": "/inversiones_inteligentes",
    "Ahorro y presupuesto": "/ahorro_y_presupuesto",
    "Criptomonedas y blockchain": "/criptomonedas_y_blockchain",
  };

  return (
    <footer className="flex flex-col lg:flex-row lg:justify-evenly justify-center items-center py-8 bg-[#101a1c] text-[#fff]">
      <ItemFooterLinks titulo="Compañía" enlaces={enlaces1}></ItemFooterLinks>
      <ItemFooterLinks titulo="Ayuda" enlaces={enlaces2}></ItemFooterLinks>
      <ItemFooterLinks titulo="Educación" enlaces={enlaces3}></ItemFooterLinks>
      <nav className="flex flex-col justify-center items-center py-4 gap-y-4">
        <h2 className="text-xl font-bold underline decoration-[#05a69f] decoration-2 underline-offset-8">
          Síguenos
        </h2>
        <div className="flex justify-center gap-x-4">
          <ItemFooterSocials
            clases="bg-[#05a69f] hover:bg-[#0a7b7d]"
            icono={<XIcon />}
          ></ItemFooterSocials>
          <ItemFooterSocials
            clases="bg-[#05a69f] hover:bg-[#0a7b7d]"
            icono={<FacebookIcon />}
          ></ItemFooterSocials>
          <ItemFooterSocials
            clases="bg-[#05a69f] hover:bg-[#0a7b7d]"
            icono={<InstagramIcon />}
          ></ItemFooterSocials>
          <ItemFooterSocials
            clases="bg-[#05a69f] hover:bg-[#0a7b7d]"
            icono={<LinkednIcon />}
          ></ItemFooterSocials>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
