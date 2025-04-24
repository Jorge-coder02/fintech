/* eslint-disable @typescript-eslint/no-unused-vars */
// import Button from "../ui/Buttons/Button";
import Button2 from "../ui/Buttons/Button2.styles";
import ItemHerramienta from "../ui/ItemHerramienta";
import IconSetting from "../ui/Icons/IconSetting";
import IconChart from "../ui/Icons/IconChart";
import IconMoney from "../ui/Icons/IconMoney";

function Herramientas() {
  return (
    <section className="relative bg-[#000000db] text-[#fff] md:px-20 flex min-h-[100dvh] py-20 md:py-40 justify-center items-center ">
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
      npm ru
      {/* Contenedor principal */}
      <div className="container md:px-4 mx-auto flex flex-col justify-center items-center gap-16">
        {/* Contenedor texto arriba */}
        <div className="flex w-4/5 md:w-3/5 flex-col justify-center items-center gap-y-8">
          <h2
            data-aos="fade-right"
            data-aos-duration="600"
            className="font-bold text-4xl text-center"
          >
            Aprovecha nuestras herramientas más{" "}
            <strong className="text-[#056573]">avanzadas</strong>
          </h2>
          <span
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-lg text-center"
          >
            Demuestra de lo que eres capaz con nuestra plataforma de inversión
            intuitiva y potente. Toma el control de tus finanzas, sigue el
            crecimiento de tu portafolio en tiempo real
          </span>
          <div data-aos="fade-up" data-aos-delay="650">
            <Button2 variant="secondary">Empezar</Button2>
          </div>
        </div>
        {/* Contenedor blanco abajo */}
        <div className="w-[90%] bg-[#fff] text-gray-700 py-20 xl:pb-36">
          {/* Contenedor herramientas */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-y-20">
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
