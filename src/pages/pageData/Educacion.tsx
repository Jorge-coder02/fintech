import GenericPage from "../GenericPage";

const Educacion = () => {
  return (
    <GenericPage
      titulo="Educación Crypto Fintech"
      subtitulo="Domina los fundamentos de las criptomonedas y blockchain"
      texto="Aprende desde cero: wallets, trading, DeFi y seguridad digital"
      texto2="Conviértete en un inversor informado con nuestros recursos educativos"
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/educacion.webp"
          alt="Aprende sobre blockchain y criptoactivos"
        />
      }
    ></GenericPage>
  );
  // Contenido adicional
};

export default Educacion;
