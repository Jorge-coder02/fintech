function Header() {
  return (
    <header className="bg-[#085b69] text-[#fff] shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-auto md:px-16 px-4 py-4 ">
        {/* Contenedor elementos */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6 hover:[&>a]:opacity-85 [&>a]:font-medium">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Inversiones</a>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 rounded-md font-medium">Login</button>
          <button className="bg-primary-500 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-600">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
