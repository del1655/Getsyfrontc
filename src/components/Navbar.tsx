import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); 
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent mb-16 sm:mb-0 mt-5 sm:mt-0 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      {/* Menú izquierdo (Enlace a Inicio, Mis Reservas y Mi Perfil) */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={`text-black sm:text-black font-semibold px-2 py-1 ${
            isActive("/") ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Inicio
        </Link>

        {/* Enlaces solo visibles en pantallas grandes y pequeños */}
        <Link
          to="/Reservations"
          className={`text-black sm:text-black font-semibold px-2 py-1 ${
            isActive("/Reservations") ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Reservas
        </Link>
        <Link
          to="/profile"
          className={`text-black sm:text-black font-semibold px-2 py-1 ${
            isActive("/profile") ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Perfil
        </Link>
      </div>

      {/* Logo (Ocultarlo en móvil y mostrarlo solo en pantallas grandes) */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
        {/* Aquí puedes colocar el logo si lo deseas, pero solo en pantallas grandes */}
        {/* <img src={GetsyLogo} alt="Logo" className="h-16" /> */}
      </div>

      {/* Botón Iniciar Sesión en móvil y escritorio */}
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className={`text-black sm:text-black font-semibold px-2 py-1 ${
            isActive("/login") ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
