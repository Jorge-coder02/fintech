import GenericPage from "../GenericPage";
const Cookies = () => {
  return (
    <GenericPage
      titulo="Política de Cookies"
      subtitulo="Uso de cookies en nuestra plataforma de inversión"
      texto="En nuestra plataforma utilizamos cookies para mejorar tu experiencia de inversión"
      texto2="Garantizamos la máxima transparencia en el uso de tus datos mientras operas con criptomonedas"
      imagen={
        <img
          className="rounded-lg shadow-xl w-full h-full"
          src="/img/cookies.jfif"
          alt="Seguridad en cripto inversiones"
        />
      }
    >
      {/* Contenido específico/extra */}
      <div className="pb-20 flex flex-col gap-y-8 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0]">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            ¿Qué son las cookies?
          </h3>
          <p className="text-gray-700">
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando utilizas nuestra plataforma de inversión en
            criptomonedas. Nos ayudan a:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            <li>Mantener tu sesión segura durante las operaciones</li>
            <li>Recordar tus preferencias de visualización</li>
            <li>Analizar el rendimiento de nuestra plataforma</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0] text-primary ">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            Cookies que utilizamos
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-">Esenciales</h4>
              <p className="text-gray-700 text-sm mt-1">
                Necesarias para operar en los mercados de criptomonedas.
                Gestionan la autenticación y seguridad de las transacciones.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#056573]">Analíticas</h4>
              <p className="text-gray-700 text-sm mt-1">
                Nos ayudan a mejorar el rendimiento de la plataforma para tus
                operaciones financieras.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#056573]">Funcionales</h4>
              <p className="text-gray-700 text-sm mt-1">
                Recuerdan tus preferencias de moneda (BTC, ETH, etc.) y
                configuración de alertas de mercado.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0]">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Gestión de cookies
          </h3>
          <p className="text-gray-700 mb-4">
            Puedes configurar tus preferencias en cualquier momento desde el
            panel de configuración de tu cuenta de inversión:
          </p>
          <button className="bg-[#085b69] hover:bg-[#056573] text-white px-4 py-2 rounded-md text-sm transition-colors">
            Configurar preferencias
          </button>
          <p className="text-gray-500 text-xs mt-3">
            Ten en cuenta que desactivar ciertas cookies puede afectar a la
            funcionalidad de trading en tiempo real.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Última actualización: {new Date().getFullYear()}</p>
          <p className="mt-1">
            Para más información, contacta con nuestro equipo de seguridad:{" "}
            <a
              href="mailto:seguridad@growbit.com"
              className="text-[#05a69f] hover:underline"
            >
              seguridad@growbit.com
            </a>
          </p>
        </div>
      </div>
    </GenericPage>
  );
};
export default Cookies;
