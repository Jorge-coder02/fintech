import Layout from "../components/layout/Layout";
import Hero from "../components/Home/sections/Hero";
import Herramientas from "../components/Home/sections/Herramientas";
import Resultados from "../components/Home/sections/Resultados";
import FlujoDeTrabajo from "../components/Home/sections/FlujoDeTrabajo";
import Configuracion from "../components/Home/sections/Configuracion";

function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Herramientas></Herramientas>
      <Resultados></Resultados>
      <FlujoDeTrabajo></FlujoDeTrabajo>
      <Configuracion></Configuracion>
    </Layout>
  );
}

export default Home;
