import GenericPage from "../GenericPage";

const Ahorro = () => {
  return (
    <GenericPage
      titulo="Ahorro Inteligente en Cripto"
      subtitulo="Potencia tus finanzas con estrategias de ahorro en activos digitales"
      texto="Descubre cómo acumular criptomonedas de forma segura y con rendimientos pasivos"
      texto2="Convierte la volatilidad en oportunidad con métodos probados"
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/ahorro.webp"
          alt="Estrategias de ahorro en criptomonedas"
        />
      }
    />
    // Contenido adicional
  );
};

export default Ahorro;
