import GenericPage from "../GenericPage";

const Criptomonedas = () => {
  return (
    <GenericPage
      titulo="Blockchain & Criptomonedas"
      subtitulo="Domina la tecnología que está revolucionando el sistema financiero"
      texto="Aprende los fundamentos técnicos y económicos de las redes blockchain"
      texto2="Descubre cómo las criptomonedas están transformando el dinero digital"
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/crypto.webp"
          alt="Tecnología blockchain y criptomonedas"
        />
      }
    />
    // Contenido adicional
  );
};

export default Criptomonedas;
