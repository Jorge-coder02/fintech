import Layout from "./Layout";
import Hero from "../Home/Hero";
import Herramientas from "../Home/Herramientas";
import Resultados from "../Home/Resultados";

function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Herramientas></Herramientas>
      <Resultados></Resultados>
    </Layout>
  );
}

export default Home;
