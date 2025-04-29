import LineaGrafico from "../ui/LineaGrafico";
function Resultados() {
  return (
    <section className="relative min-h-[100dvh] lg:px-20 p-4 pt-10 flex justify-center items-center">
      <LineaGrafico></LineaGrafico>
      <div
        className="container flex lg:p-12 p-6 lg:flex-row flex-col justify-center items-center 
        gap-x-16 gap-y-14 max-w-screen-xl"
      >
        {/* Contenedor texto (izq.) */}
        <div className="flex flex-1 flex-col justify-center gap-y-6 lg:pr-10">
          <div data-aos="fade-right" data-aos-duration="600">
            <span className="text-gray-700 text-lg">Eficiencia comprobada</span>
            <h3 className="text-4xl font-semibold tracking-tight">
              Resultados que hablan por sí solos
            </h3>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex flex-col space-y-2"
          >
            <h4 className="text-xl font-medium">
              Ventajas que marcan la diferencia
            </h4>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-lg leading-snug"
            >
              <p className="pb-3">
                En nuestra plataforma, combinamos inteligencia artificial y
                análisis de mercado para maximizar tus rendimientos.
              </p>
              <p>
                El 89% de nuestros usuarios alcanza sus metas financieras antes
                de lo previsto, gracias a herramientas automatizadas y
                estrategias personalizadas. Ofrecemos transparencia absoluta:
                sin comisiones ocultas, sin contratos complejos.
              </p>
            </div>
          </div>
        </div>
        {/* Contenedor img (der.) */}
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          className="flex flex-1 justify-center items-center"
        >
          <div className="w-full max-w-sm lg:max-w-md">
            <img loading="lazy" src="/img/ia_chart.png" alt="movil" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resultados;
