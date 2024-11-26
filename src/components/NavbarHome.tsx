import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/LogoG.png'; // Asegúrate de usar la ruta correcta al logo

const NavbarHome = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isLoggedIn = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  console.log("User ID desde localStorage:", userId);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent mb-16 sm:mb-0">
      {/* Menú izquierdo (Enlace a Inicio, Mis Reservas y Mi Perfil) */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={`text-black sm:text-white font-semibold px-2 py-1 ${
            isActive("/") ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Inicio
        </Link>

        {/* Enlaces solo visibles si el usuario está logueado */}
        {isLoggedIn ? (
          <Link
            to={`/${userId}/reservations`}
            className="text-black sm:text-white font-semibold px-2 py-1"
          >
            Reservas
          </Link>
        ) : null}
        {isLoggedIn ? (
          <Link
            to="/profile"
            className={`text-black sm:text-white font-semibold px-2 py-1 ${
              isActive("/profile") ? "border-b-2 border-yellow-500" : ""
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
            className={`text-black sm:text-white font-semibold px-2 py-1 ${
              isActive("/login") ? "border-b-2 border-yellow-500" : ""
            }`}
          >
            Iniciar Sesión
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default NavbarHome;
