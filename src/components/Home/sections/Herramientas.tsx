import Button from "../../ui/Buttons/Button.styles";
import { IconSetting, IconChart, IconMoney } from "../../ui/Icons";
import ItemHerramienta from "../ui/ItemHerramienta";

function Herramientas() {
  return (
    <section className="relative bg-[#000000d3] lg:bg-[#000000db] text-text_primary md:px-20 flex min-h-[100dvh] py-20 md:py-40 justify-center items-center ">
      {/* Imagen fondo */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center !opacity-30 
        transition-opacity duration-500 -z-10"
        data-aos="fade"
        data-aos-duration="700"
        style={{
          backgroundImage: `url('/img/tech.webp')`,
        }}
      />

      {/* Contenedor principal */}
      <div className="container md:px-4 mx-auto flex flex-col justify-center items-center gap-16">
        {/* Contenedor texto arriba */}
        <div className="flex w-4/5 md:w-3/5 flex-col justify-center items-center gap-y-8">
          <h2
            data-aos="fade-right"
            data-aos-duration="600"
            className="font-bold text-4xl text-center"
          >
            Aprovecha nuestras{" "}
            <strong className="font-extrabold">herramientas</strong> más{" "}
            <strong className="text-[#05a69f]">avanzadas</strong>
          </h2>
          <span
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-lg text-center"
          >
            Demuestra de lo que eres capaz con nuestra plataforma de inversión{" "}
            <strong className="text-[#05a69f]">intuitiva y potente.</strong>{" "}
            Toma el control de tus finanzas, sigue el crecimiento de tu
            portafolio{" "}
            <strong className="text-[#05a69f]">en tiempo real</strong>.
          </span>
          <div data-aos="fade-up" data-aos-delay="650">
            <Button enlace="/" variant="secondary">
              Empezar
            </Button>
          </div>
        </div>
        {/* Contenedor blanco abajo */}
        <div className="w-[90%] bg-[#fff] text-gray-700 py-20 xl:pb-36">
          {/* Contenedor herramientas */}
          <div
            data-aos="fade-right"
            data-aos-delay="900"
            className="flex flex-col xl:flex-row items-center justify-center gap-y-20"
          >
            <ItemHerramienta
              icono={<IconSetting tamano="36" />}
              herr_texto="Administra tus configuraciones de forma sencilla con esta herramienta potente y fácil de usar."
              cuad_texto="Ir a Configuración"
              cuad_enlace="#"
              color="bg-[#1c3c55]"
            ></ItemHerramienta>
            <ItemHerramienta
              icono={<IconChart tamano="36" />}
              herr_texto="Accede a gráficos y métricas para seguir el rendimiento de tus inversiones al detalle."
              cuad_texto="Ver estadísticas"
              cuad_enlace="#"
              color="bg-[#6ba3a4]"
            ></ItemHerramienta>
            <ItemHerramienta
              icono={<IconMoney tamano="36" />}
              herr_texto="Gestiona tus fondos y transacciones con total seguridad desde tu billetera digital."
              cuad_texto="Ir a Billetera"
              cuad_enlace="#"
              color="bg-[#085b69]"
            ></ItemHerramienta>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herramientas;
