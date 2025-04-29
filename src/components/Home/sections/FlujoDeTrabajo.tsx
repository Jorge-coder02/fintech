import {
  IconRightArrow,
  IconConfig,
  IconAutomatic,
  IconResults,
  IconRegister,
} from "../../ui/Icons";
import ItemFlujo from "../ui/ItemFlujo";

function FlujoDeTrabajo() {
  const aos_duration = 1000;
  const aos_delay = 200;
  return (
    <section
      className="min-h-[45dvh] flex flex-col justify-center items-center mt-20 mb-40 lg:px-20 p-4 
    bg-tertiary text-text_primary"
    >
      {/* Contenedor principal */}
      <div
        className="container flex lg:p-12 p-6 lg:flex-row flex-col justify-center items-center
        gap-x-16 gap-y-14 max-w-screen-xl"
      >
        {/* Contenedor (izq) */}
        <div
          data-aos="fade-right"
          data-aos-duration={aos_duration}
          className="flex flex-[1] flex-col justify-center items-center gap-y-2"
        >
          <h2 className="text-3xl text-center font-semibold">
            ¿CÓMO FUNCIONA GROWBIT?
          </h2>
          <span className="text-2xl text-center font-medium">
            Explicación en sencillos pasos:
          </span>
        </div>
        {/* Contenedor (der) */}
        <div className="flex flex-[2] lg:flex-row flex-col gap-y-7 gap-x-2 justify-center w-full">
          <ItemFlujo
            delay={aos_delay + 400}
            icono={<IconRegister tamano="64" />}
            titulo="Registro"
            texto1="Seguro"
            texto2="Encriptado crypto"
          ></ItemFlujo>
          <ItemFlujo
            delay={aos_delay + 800}
            icono={<IconConfig tamano="64" />}
            titulo="Configuración"
            texto1="Personaliza"
            texto2="Conectas tus cuentas"
          ></ItemFlujo>
          {/* Flecha ➡ */}
          <div
            data-aos="fade-right"
            data-aos-delay={aos_delay + 1200}
            className="flex justify-center items-center"
          >
            <IconRightArrow clases="rotate-90 lg:rotate-0 transform origin-center"></IconRightArrow>
          </div>
          <ItemFlujo
            delay={aos_delay + 1600}
            icono={<IconAutomatic tamano="64" />}
            titulo="Automatización"
            texto1="Sencillo e instantáneo"
            texto2="Sin gestiones manuales"
          ></ItemFlujo>
          <ItemFlujo
            delay={aos_delay + 2000}
            icono={<IconResults tamano="64" />}
            titulo="Resultados"
            texto1="Rendimiento"
            texto2="Actualizaciones en tiempo real"
          ></ItemFlujo>
        </div>
      </div>
    </section>
  );
}

export default FlujoDeTrabajo;
