// En estas páginas (plantillas) se define el contenido que se exporta al componente GenericPage,
//  que actúa como Layout.

import GenericPage from "../GenericPage";
import ItemServicio from "../../components/Servicios/ItemServicio";
import Button from "../../components/ui/Buttons/Button.styles";

const Servicios = () => {
  return (
    <GenericPage
      titulo="Nuestros Servicios Fintech"
      subtitulo="Soluciones financieras innovadoras"
      texto="Tecnología avanzada para gestionar tu dinero"
      texto2="Ofrecemos herramientas inteligentes que simplifican la inversión, mejoran la gestión de riesgos y optimizan tus operaciones financieras."
      imagen={
        <img
          className="rounded-lg shadow-xl w-full h-64 object-cover"
          src="/img/servicios.webp"
          alt="servicios_Fintech"
        />
      }
    >
      {/* Contenido específico para servicios */}
      <div className="flex flex-col gap-y-12 pb-28 lg:px-20 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold mx-auto text-center mb-8">
          Servicios que ofrecemos
        </h2>
        {/* Servicio 1 */}
        <ItemServicio
          titulo="Inversión Automatizada"
          descripcion="Nuestros algoritmos de IA analizan mercados en tiempo real para ejecutar
        inversiones con máxima precisión. Rentabilidad promedio del 8.5% anual."
          caracteristica1="Portafolios diversificados"
          caracteristica2="Reequilibrio automático"
          caracteristica3="Control de riesgos integrado"
        ></ItemServicio>

        {/* Servicio 2 */}
        <ItemServicio
          titulo="Análisis de Datos Financieros"
          descripcion="Plataforma de análisis predictivo con visualización interactiva de
            tendencias de mercado y oportunidades de inversión."
          caracteristica1="Reportes personalizados"
          caracteristica2="Alertas en tiempo real"
          caracteristica3="Históricos de 10+ años"
        ></ItemServicio>

        {/* Servicio 3 */}
        <ItemServicio
          titulo=" APIs Bancarias"
          descripcion="Conexión segura con +150 instituciones financieras para agregar
            cuentas, procesar pagos y sincronizar datos."
          caracteristica1="Certificación PCI DSS Nivel 1"
          caracteristica2="Latencia ~50ms"
          caracteristica3="Documentación interactiva"
        ></ItemServicio>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="secondary" enlace="/servicios">
            Solicitar Demo
          </Button>
        </div>
      </div>
    </GenericPage>
  );
};

export default Servicios;
