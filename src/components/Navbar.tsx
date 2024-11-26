import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/LogoG.png"; // Asegúrate de usar la ruta correcta al logo

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path; // Verifica si la ruta actual coincide

  const isLoggedIn = localStorage.getItem("authToken");

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent mb-16 sm:mb-0 mt-5 sm:mt-0 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      {/* Menú izquierdo (Enlace a Inicio, Mis Reservas y Mi Perfil) */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={`text-black sm:text-black font-semibold px-2 py-1 ${
            isActive("/") ? "border-b-2 border-yellow-500" : "" // Línea amarilla si es ruta activa
          }`}
        >
          Inicio
        </Link>

        {/* Enlaces visibles solo si el usuario está logueado */}
        {isLoggedIn ? (
          <Link
            to="/:id/Reservations"
            className={`text-black sm:text-black font-semibold px-2 py-1 ${
              isActive("/Reservations") ? "border-b-2 border-yellow-500" : "" // Línea amarilla si es ruta activa
            }`}
          >
            Reservas
          </Link>
        ) : null}

        {isLoggedIn ? (
          <Link
            to="/Profile"
            className={`text-black sm:text-black font-semibold px-2 py-1 ${
              isActive("/Profile") ? "border-b-2 border-yellow-500" : "" // Línea amarilla si es ruta activa
            }`}
          >
            Perfil
          </Link>
        ) : null}
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Getsy Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </Link>
      </div>

      {/* Botón Iniciar Sesión */}
      {!isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className={`text-black sm:text-black font-semibold px-2 py-1 ${
              isActive("/login") ? "border-b-2 border-yellow-500" : "" // Línea amarilla si es ruta activa
            }`}
          >
            Iniciar Sesión
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
