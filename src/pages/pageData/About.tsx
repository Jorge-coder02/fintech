import GenericPage from "../GenericPage";

const About = () => {
  return (
    <GenericPage
      titulo="Sobre Nosotros"
      subtitulo="Una empresa innovadora"
      texto="Amplia experiencia en el sector. "
      texto2="Entendemos muy bien lo que necesitas. Gracias a nuestra experiencia, podemos ofrecerte un 
      servicio de calidad y adaptado a tus necesidades."
      imagen={
        <img className="rounded-lg shadow-xl" src="/img/about.jpg" alt="alt" />
      }
    >
      {/* Contenido específico/extra */}
      <div className="flex flex-col justify-center items-center gap-y-4 pb-32 lg:px-20 max-w-screen-xl">
        <p className="text-2xl font-semibold">Fundada en 2020...</p>
        <p className="text-lg lg:text-center">
          Growbit es una empresa dedicada a la inversión automatizada y el
          análisis de datos financieros. Nuestro objetivo es ayudar a nuestros
          clientes a maximizar sus rendimientos y alcanzar sus metas financieras
          de manera eficiente y efectiva.
        </p>
      </div>
    </GenericPage>
  );
};
export default About;
