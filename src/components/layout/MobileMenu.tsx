import { useState, useRef, useEffect } from "react";
import { HeaderLink } from "../ui/Buttons/HeaderLink";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Quitar el menú al hacer click fuera de él
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:hidden" ref={menuRef}>
      {/* Botón Hamburguesa (igual que antes) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text_primary focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menú Desplegable - Siempre en el DOM pero oculto */}
      <div
        className={`absolute left-0 right-0 top-16 bg-primary shadow-md py-4 px-4 z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <nav className="flex flex-col justify-center items-center py-4 space-y-4 [&>a]:font-medium">
          <HeaderLink to="/" onClick={() => setIsOpen(false)}>
            Inicio
          </HeaderLink>
          <HeaderLink to="/about" onClick={() => setIsOpen(false)}>
            Sobre nosotros
          </HeaderLink>
          <HeaderLink to="/servicios" onClick={() => setIsOpen(false)}>
            Servicios
          </HeaderLink>
          <HeaderLink to="/servicios" onClick={() => setIsOpen(false)}>
            Inversiones
          </HeaderLink>
        </nav>
      </div>
    </div>
  );
}
