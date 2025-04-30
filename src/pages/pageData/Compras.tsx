import GenericPage from "../GenericPage";

const Compras = () => {
  return (
    <GenericPage
      titulo="Compra de Acciones"
      subtitulo="Compra de acciones de forma automatizada"
      texto="Expande tu cartera de inversión"
      texto2="Con nuestra plataforma, puedes comprar acciones de forma automatizada y sin complicaciones.
      Te ayudamos a diversificar tu cartera y a maximizar tus rendimientos."
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/compras.jfif"
          alt="compras"
        />
      }
    >
      {/* Contenido específico/extra */}
      {/* <div className="flex flex-col justify-center items-center gap-y-4 pb-32 lg:px-20 max-w-screen-xl">
        <p className="text-2xl font-semibold"></p>
        <p className="text-lg lg:text-center">
          Growbit es una empresa dedicada a la inversión automatizada y el
          análisis de datos financieros. Nuestro objetivo es ayudar a nuestros
          clientes a maximizar sus rendimientos y alcanzar sus metas financieras
          de manera eficiente y efectiva.
        </p>
      </div> */}
    </GenericPage>
  );
};
export default Compras;
