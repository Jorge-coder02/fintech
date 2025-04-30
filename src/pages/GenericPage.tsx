import Layout from "../components/layout/Layout";

type Props = {
  titulo?: string;
  subtitulo: string;
  texto?: string;
  texto2: string;
  imagen?: React.ReactNode;
  children?: React.ReactNode;
};

function GenericPage({
  titulo,
  subtitulo,
  texto,
  texto2,
  imagen,
  children,
}: Props) {
  return (
    <Layout>
      <section className="flex flex-col justify-center min-h-[100dvh] items-center lg:gap-y-10 px-6 pt-10 lg:py-0">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="min-h-[100dvh] flex flex-col justify-center items-center pb-40 gap-y-10 lg:gap-y-28">
          {/* Contenedor títulos  */}
          <div className="flex flex-col justify-center items-center gap-y-2">
            {/* Títulos  */}
            <h2
              data-aos="fade-right"
              data-aos-duration="600"
              className="font-bold text-4xl text-center"
            >
              {titulo}
            </h2>
            <span
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-lg text-center"
            >
              {subtitulo}
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
              <h2 className="text-2xl font-semibold">{texto}</h2>
              <span className="text-lg">{texto2}</span>
            </div>

            {/* Contenedor img (der.) */}
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="600"
              className="flex-1 flex flex-col justify-center items-center"
            >
              <div className="w-full h-full max-w-sm lg:max-w-md shadow-lg">
                {imagen}
              </div>
            </div>
          </div>
        </div>

        {/* CONTENEDOR ADICIONAL */}
        <div data-aos="fade-right" className="">
          {children}
        </div>
      </section>
    </Layout>
  );
}

export default GenericPage;
