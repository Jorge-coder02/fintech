import Button from "../ui/Buttons/Button.styles";
import LoadingSpinner from "../ui/Icons/Tools/LoadingSpinner";
import { useReducer, useState } from "react";
import api from "../../api/client.ts"; // Importa la función api desde

// const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "localhost:5000";

// *Reducer para manejar el estado del formulario
const initialState = {
  email: "",
  password: "",
};

type State = {
  email: string;
  password: string;
};

type Action = {
  field: string;
  value: string;
};

// *

function reducer(state: State, action: Action): State {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // ** Reducer formulario **
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      field: e.target.name, // estado que quiero cambiar
      value: e.target.value, // valor que va a tomar
    });
  };

  // useEffect(() => {
  //   // Resetear el estado del formulario al cerrar el modal
  //   if (!isOpen) {
  //     dispatch({ field: "email", value: "" });
  //     dispatch({ field: "password", value: "" });
  //   }
  // }
  // }, [isOpen]);

  const handleFormulario = async () => {
    // Recoger datos del formulario
    const datosUser = {
      email: state.email,
      password: state.password,
    };

    // Validar datos del formulario
    if (!datosUser.email || !datosUser.password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // 🔄 Reseteos
    setLoading(true);
    setSuccess(false);
    setError("");

    // 👤 Petición POST al backend
    try {
      const response = await api.post(`/api/login`, datosUser);
      console.log("Login exitoso:", response.data);
      // ✅ Manejo de éxito
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      // ❌ Manejo de error
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // VISUAL
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
              onChange={handleChange}
              name="email"
              value={state.email}
              type="email"
              className="w-full p-2 border rounded border-black"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block mb-1">Contraseña</label>
            <input
              onChange={handleChange}
              name="password"
              value={state.password}
              type="password"
              className="w-full p-2 border rounded border-black"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button onClick={handleFormulario} enlace="/" variant="secondary">
              Entrar
            </Button>
          </div>
        </form>
        <div className="w-24 h-24">
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <LoadingSpinner />
            </div>
          )}
          {success && (
            <p className="text-blue-500 font-semibold text-sm mt-2 text-center">
              Has iniciado sesión correctamente
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm text-text_tertiary">
            ¿No tienes cuenta?{" "}
            <button onClick={onClose} className="text-blue-500 hover:underline">
              Regístrate{/* Link */}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
