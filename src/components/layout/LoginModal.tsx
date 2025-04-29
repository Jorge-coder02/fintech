import Button from "../ui/Buttons/Button.styles";

export const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 px-4 lg:px-0 pb-32 bg-opacity-50 flex items-center justify-center z-50 bg-black text-text_tertiary">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text_tertiary">
            Iniciar sesión
          </h2>
          <button
            onClick={onClose}
            className=" hover:text-gray-700 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <form
          className="space-y-4 flex flex-col justify-center gap-y-2 
            [&>div>label]:font-semibold [&>div>label]:text-md [&>div>label]:text-text_tertiary"
        >
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded border-black"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 border rounded border-black"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button enlace="/" variant="secondary">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
