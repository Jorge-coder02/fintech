import GenericPage from "../GenericPage";
import ItemPost from "../../components/Blog/ItemPost";

const Blog = () => {
  return (
    <GenericPage
      titulo="Nuestro blog"
      subtitulo="Conoce más sobre nosotros"
      texto="Échale un vistazo"
      texto2="En nuestro blog encontrarás artículos y recursos sobre inversión automatizada y análisis de datos financieros."
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/blog.webp"
          alt="compras"
        />
      }
    >
      {/* Contenido específico/extra *POSTS* */}
      <div className="flex flex-col gap-y-12 pb-28 lg:px-20 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold mx-auto text-center mb-8">
          Posts destacados
        </h2>
        {/* Post 1 */}
        <ItemPost
          img="about.jpg"
          titulo="¿Qué es la inversión automatizada?"
          descripcion="La inversión automatizada es un enfoque innovador que utiliza algoritmos y tecnología avanzada para gestionar inversiones de manera eficiente y efectiva."
          caracteristica1="Optimización de carteras"
          caracteristica2="Reducción de costos operativos"
        ></ItemPost>

        {/* Post 2 */}
        <ItemPost
          img="compras.jfif"
          titulo="Análisis predictivo en finanzas"
          descripcion="El análisis predictivo en finanzas utiliza técnicas estadísticas y algoritmos de aprendizaje automático para predecir tendencias y comportamientos futuros en los mercados financieros."
          caracteristica1="Modelos de regresión"
          caracteristica2="Reducción de riesgos"
          caracteristica3="Optimización de decisiones"
        ></ItemPost>

        {/* Post 3 */}
        <ItemPost
          img="tech.webp"
          titulo="Integración con instituciones financieras"
          descripcion="La integración con instituciones financieras es un proceso clave que permite a las plataformas de inversión automatizada conectarse y colaborar con bancos, corredores y otras entidades financieras."
          caracteristica1="Acceso a datos en tiempo real"
          caracteristica2="Facilitación de transacciones"
        ></ItemPost>
      </div>
    </GenericPage>
  );
};
export default Blog;
