import Layout from "../components/layout/Layout";
import Hero from "../components/Home/Hero";
import Herramientas from "../components/Home/Herramientas";
import Resultados from "../components/Home/Resultados";
import FlujoDeTrabajo from "../components/Home/FlujoDeTrabajo";

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
