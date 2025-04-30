import GenericPage from "../GenericPage";
import Button from "../../components/ui/Buttons/Button.styles";

const Inversiones = () => {
  return (
    <GenericPage
      titulo="Inversiones"
      subtitulo="Servicios de inversión y análisis de datos financieros"
      texto="Conoce nuestros servicios"
      texto2="Optimiza tus inversiones con nuestra tecnología de vanguardia. Mantente simpre un paso adelante en el mundo financiero."
      imagen={
        <img
          className="rounded-lg shadow-xl w-full h-64 object-cover"
          src="/img/inversiones.webp"
          alt="inversiones"
        />
      }
    >
      {/* Contenido específico para inversiones */}
      <div className="flex flex-col gap-y-4 pb-28 lg:px-20 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold mx-auto text-center">
          Comienza a invertir con nosotros
        </h2>
        <p className="text-lg text-center mb-4 max-w-2xl mx-auto">
          Te ofrecemos una amplia gama de servicios para ayudarte a maximizar
          tus inversiones y alcanzar tus objetivos financieros.
        </p>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="secondary" enlace="/inversiones">
            Comenzar
          </Button>
        </div>
      </div>
    </GenericPage>
  );
};

export default Inversiones;
