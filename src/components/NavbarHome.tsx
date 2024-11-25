import { Link, useLocation } from "react-router-dom"; 
// import User from "../assets/images/usuario.png";
// import GetsyLogo from "../assets/images/GetsyLogo.png";

const NavbarHome = () => {
  const location = useLocation(); 
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Menú izquierdo */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={`text-white font-semibold px-2 py-1 ${
            isActive("/") ? "underline underline-offset-4" : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/Reservations"
          className={`text-white font-semibold px-2 py-1 ${
            isActive("/Reservations") ? "underline underline-offset-4" : ""
          }`}
        >
          Mis Reservas
        </Link>
        <Link
          to="/profile"
          className={`text-white font-semibold px-2 py-1 ${
            isActive("/profile") ? "underline underline-offset-4" : ""
          }`}
        >
          Mi Perfil
        </Link>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* <img src={GetsyLogo} alt="Logo" className="h-16" /> */}
      </div>

      {/* Botones y foto de usuario */}
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className={`text-white font-semibold px-2 py-1 ${
            isActive("/login") ? "underline underline-offset-4" : ""
          }`}
        >
          Iniciar Sesión
        </Link>
        {/* <img
          src={User}
          alt="Foto de perfil"
          className="w-10 h-10 rounded-full"
        /> */}
      </div>
    </nav>
  );
};

export default NavbarHome;
