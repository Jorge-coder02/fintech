/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { HeaderLink } from "../ui/Buttons/HeaderLink";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="bg-primary text-text_primary shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-auto md:px-16 px-4 py-4 ">
        {/* Contenedor elementos */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex justify-center items-center space-x-6 hover:[&>a]:opacity-85 [&>a]:font-medium ">
            <HeaderLink to="/">Inicio</HeaderLink>
            <HeaderLink to="/">Productos</HeaderLink>
            <HeaderLink to="/">Inversiones</HeaderLink>
          </nav>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-text_primary px-4 py-2"
          >
            Login
          </button>
          <button className="text-text_primary px-4 py-2">
            {/* CAMBIAR ** */}
            Registrarse
          </button>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      ></LoginModal>
    </header>
  );
}

export default Header;
