import Button from "../../ui/Buttons/Button.styles";

function Hero() {
  return (
    <section className="md:px-20 flex min-h-[calc(100dvh-70px)] pt-10 justify-center items-center ">
      {/* *Visual* Esquina medio círculo */}
      <div className="hidden md:block absolute -z-20 -left-28 -top-20 w-64 h-64 rounded-full bg-primary opacity-100"></div>
      {/* Container principal */}
      <div className="container md:px-4 mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        {/* Contenedor texto (izq) */}
        <div className="flex w-4/5 md:w-3/5 flex-col justify-center gap-y-8">
          <div className="space-y-3">
            <h2
              data-aos="fade-right"
              data-aos-duration={"600"}
              className="font-bold text-5xl"
            >
              Comienza a invertir hoy
            </h2>
            <h3
              data-aos="fade-right"
              data-aos-delay={"300"}
              data-aos-duration={"500"}
              className="font-semibold text-3xl"
            >
              Empieza a gestionar tus inversiones
            </h3>
          </div>
          <span
            data-aos="fade-right"
            data-aos-delay={"500"}
            className="text-lg"
          >
            Demuestra de lo que eres capaz con nuestra plataforma de inversión
            intuitiva y potente. Toma el control de tus finanzas, sigue el
            crecimiento de tu portafolio en tiempo real y accede a herramientas
            diseñadas para maximizar tu rentabilidad.
          </span>
          <div
            data-aos="fade-right"
            data-aos-delay={"700"}
            className="self-start pt-10 pl-2 relative"
          >
            {/* *Visual cuadrado* */}
            <div className="absolute -z-20 md:top-[9.5rem] left-9 w-40 h-40 rotate-45 bg-primary opacity-10 -translate-y-10"></div>
            <Button variant={"primary"}>Empezar</Button>
          </div>
        </div>
        {/* Contenedor imagen (der) */}
        <div
          data-aos="fade-down"
          data-aos-delay={"900"}
          className="flex w-4/5 md:w-2/5 justify-center items-center"
        >
          <div className="w-full h-full relative">
            {/* *Visual círculo* */}
            <div className="hidden lg:block absolute -z-20 top-3 left-60 w-24 h-32 rounded-full bg-primary opacity-80 animate-float"></div>
            <img
              className="w-full h-full"
              src="/img/movil_app.png"
              alt="vite"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
