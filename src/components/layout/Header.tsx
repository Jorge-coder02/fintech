import { HeaderLink } from "../ui/Buttons/HeaderLink";
function Header() {
  return (
    <header className="bg-primary text-text_primary shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-auto md:px-16 px-4 py-4 ">
        {/* Contenedor elementos */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6 hover:[&>a]:opacity-85 [&>a]:font-medium ">
            <HeaderLink to="/">Inicio</HeaderLink>
            <HeaderLink to="/">Productos</HeaderLink>
            <HeaderLink to="/">Inversiones</HeaderLink>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 rounded-md font-medium">Login</button>
          <button className="bg-primary-500 text-text_primary px-4 py-2 rounded-md font-medium hover:bg-primary-600">
            {/* CAMBIAR ** */}
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
