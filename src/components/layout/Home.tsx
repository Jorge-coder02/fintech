import Layout from "./Layout";
import Hero from "../Home/Hero";
import Herramientas from "../Home/Herramientas";
import Resultados from "../Home/Resultados";
import FlujoDeTrabajo from "../Home/FlujoDeTrabajo";

function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Herramientas></Herramientas>
      <Resultados></Resultados>
      <FlujoDeTrabajo></FlujoDeTrabajo>
    </Layout>
  );
}

export default Home;
