function Configuracion() {
  return (
    <section
      className="flex flex-col justify-center min-h-[100dvh] py-48 pb-80 items-center
    gap-y-12 lg:gap-y-24 px-6"
    >
      {/* Contenedor títulos  */}
      <div className="flex flex-col justify-center items-center gap-y-2">
        {/* Títulos  */}
        <h2
          data-aos="fade-right"
          data-aos-duration="600"
          className="font-bold text-4xl text-center"
        >
          Configura tu <strong className="text-secondary">perfil</strong> y{" "}
          <strong className="font-bold">preferencias</strong>
        </h2>
        <span
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-lg text-center"
        >
          Administra tus configuraciones de forma sencilla con esta potente
          herramienta
        </span>
      </div>
      {/* Contenedor info  */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center lg:px-20 gap-x-32 gap-y-16 
       max-w-screen-xl"
      >
        {/* Contenedor texto (izq.) */}
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex-1 flex flex-col justify-center lg:items-baseline lg:pr-10 gap-y-2"
        >
          <h2 className="text-2xl font-semibold">
            <strong className="font-bold">Personaliza</strong> a tu gusto
          </h2>
          <span className="text-lg">
            Todo lo que necesitas para comenzar a invertir en un{" "}
            <strong className="font-extbold"> mismo sitio</strong>. Accede desde
            cualquier parte del mundo a tu cuenta y{" "}
            <strong className="text-secondary">gestiona flexiblemente.</strong>
          </span>
        </div>

        {/* Contenedor img (der.) */}
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="600"
          className="flex-1 flex flex-col justify-center items-center"
        >
          <div className="w-full h-full max-w-sm lg:max-w-md shadow-lg">
            <img
              className="rounded-lg "
              loading="lazy"
              src="/img/configurar.webp"
              alt="configurar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Configuracion;
