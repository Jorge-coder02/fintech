import GenericPage from "../GenericPage";
import Button from "../../components/ui/Buttons/Button.styles";
const Contacto = () => {
  return (
    <GenericPage
      titulo="Contacto"
      subtitulo="Escríbenos tu petición"
      texto="Estamos encantados de ayudarte"
      texto2="Prestamos especial importancia a las consultas de nuestros clientes. Es por eso que intentamos contestar las peticiones lo antse posible."
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/contacto.webp"
          alt="contacto"
        />
      }
    >
      {/* Contenido específico/extra */}
      <div className="pb-20 flex flex-col gap-y-16 items-center justify-center">
        <h2 className="text-5xl text-tertiary font-semibold">Formulario</h2>
        <div className="lg:w-[600px] mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#1c3c55]">
            Contáctanos
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[#085b69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#05a69f]"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#085b69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#05a69f]"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-[#085b69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#05a69f]"
                placeholder="¿Sobre qué quieres hablar?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-[#085b69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#05a69f]"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button variant="tertiary">Enviar</Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              O escríbenos a:{" "}
              <a className="hover:underline" href="mailto:contacto@growbit.com">
                <span className="text-[#05a69f]">contacto@growbit.com</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};
export default Contacto;
