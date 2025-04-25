import Button2 from "../ui/Buttons/Button.styles";

function Hero() {
  return (
    <section className="md:px-20 flex min-h-[calc(100dvh-70px)] pt-10 justify-center items-center ">
      {/* *Visual* Esquina medio círculo */}
      <div className="hidden md:block absolute -z-20 -left-28 -top-20 w-64 h-64 rounded-full bg-[#085b69] opacity-100"></div>
      {/* Container principal */}
      <div className="container md:px-4 mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        {/* Contenedor texto (izq) */}
        <div className="flex w-4/5 md:w-3/5 flex-col justify-center gap-y-8">
          <div className="space-y-3">
            <h2 className="font-bold text-5xl">Comienza a invertir hoy</h2>
            <h3 className="font-semibold text-3xl">
              Empieza a gestionar tus inversiones
            </h3>
          </div>
          <span className="text-lg">
            Demuestra de lo que eres capaz con nuestra plataforma de inversión
            intuitiva y potente. Toma el control de tus finanzas, sigue el
            crecimiento de tu portafolio en tiempo real y accede a herramientas
            diseñadas para maximizar tu rentabilidad. Empieza hoy y construye el
            futuro financiero que mereces.
          </span>
          <div className="self-start pt-10 pl-2 relative">
            {/* *Visual cuadrado* */}
            <div className="absolute -z-20 md:top-[9.5rem] left-9 w-40 h-40 rotate-45 bg-[#085b69] opacity-10 -translate-y-10"></div>
            <Button2 variant={"primary"}>Empezar</Button2>
          </div>
        </div>
        {/* Contenedor imagen (der) */}
        <div className="flex w-4/5 md:w-2/5 justify-center items-center">
          <div className="w-full h-full relative">
            {/* *Visual círculo* */}
            <div className="hidden sm:block absolute -z-20 top-3 left-60 w-24 h-32 rounded-full bg-[#085b69] opacity-80 animate-float"></div>
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
