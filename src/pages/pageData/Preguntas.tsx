import GenericPage from "../GenericPage";

const Preguntas = () => {
  return (
    <GenericPage
      titulo="Preguntas Frecuentes"
      subtitulo="Todo lo que necesitas saber para invertir con seguridad"
      texto="Resolvemos tus dudas sobre criptomonedas y nuestra plataforma"
      texto2="Información clara para que tomes decisiones de inversión fundamentadas"
      imagen={
        <img
          className="rounded-lg shadow-xl"
          src="/img/preguntas.webp"
          alt="Inversión en criptomonedas"
        />
      }
    >
      {/* Contenido adicional */}
      <div className="pb-20 flex flex-col gap-y-8 max-w-3xl mx-auto">
        {/* Sección Cuentas y Seguridad */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0]">
          <h3 className="text-xl font-semibold text-[#085b69] mb-4">
            📌 Cuentas y Seguridad
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Cómo protegen mis fondos?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                Utilizamos cold wallets para el 95% de los fondos y
                autenticación multifactor (MFA). Todas las transacciones
                requieren verificación en dos pasos.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Qué hago si olvido mi contraseña?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                Puedes restablecerla desde el login con tu email y número de
                teléfono asociado. Todos los reset requieren verificación de
                identidad.
              </p>
            </div>
          </div>
        </div>

        {/* Sección Transacciones */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0]">
          <h3 className="text-xl font-semibold text-[#085b69] mb-4">
            💱 Transacciones
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Cuánto tardan los depósitos/retiros?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                <span className="font-medium">Depósitos:</span> Instantáneos
                (redes ERC-20/BEP-20) o 1-3 confirmaciones (Bitcoin).
                <br />
                <span className="font-medium">Retiros:</span> Procesamos 3 veces
                al día (9:00, 14:00 y 19:00 UTC).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Qué comisiones aplican?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                Trading: 0.1% maker / 0.2% taker. Retiros: Costo de red + 0.0005
                BTC (o equivalente). No cobramos por depósitos.
              </p>
            </div>
          </div>
        </div>

        {/* Sección Criptomonedas */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e2e8f0]">
          <h3 className="text-xl font-semibold text-[#085b69] mb-4">
            💰 Criptomonedas
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Qué criptos soportan?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                BTC, ETH, USDT, USDC y 15+ activos verificados. Añadimos nuevos
                proyectos tras riguroso análisis de seguridad y liquidez.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#056573]">
                ¿Puedo stakear mis criptos?
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                Sí, ofrecemos staking en ETH (4.2% APY), SOL (6.8% APY) y otros
                3 activos. Los rendimientos se pagan diariamente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA de Contacto */}
        <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] text-center">
          <h3 className="text-lg font-semibold text-[#085b69] mb-2">
            ¿No encuentras tu respuesta?
          </h3>
          <p className="text-gray-700 mb-4 text-sm">
            Nuestro equipo de soporte especializado en cripto está disponible
            24/7
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:soporte@growbit.com"
              className="bg-[#085b69] hover:bg-[#056573] text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="border border-[#085b69] text-[#085b69] hover:bg-[#f1f5f9] px-4 py-2 rounded-md text-sm transition-colors"
            >
              Chat en vivo
            </a>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};
export default Preguntas;
