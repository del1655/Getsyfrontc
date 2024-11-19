// import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import User from "../assets/images/usuario.png";
import GetsyLogo from "../assets/images/GetsyLogo.png";

const Navbar = () => {
  const location = useLocation(); 
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      {/* Menú izquierdo */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className={`text-black font-semibold hover:text-yellow-200 px-2 py-1 ${
            isActive("/") ? "border-b-4 border-yellow-300" : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/Reservations"
          className={`text-black font-semibold hover:text-yellow-200 px-2 py-1 ${
            isActive("/Reservations") ? "border-b-4 border-yellow-300" : ""
          }`}
        >
          Mis Reservas
        </Link>
        <Link
          to="/profile"
          className={`text-black font-semibold hover:text-yellow-200 px-2 py-1 ${
            isActive("/profile") ? "border-b-4 border-yellow-300" : ""
          }`}
        >
          Mi Perfil
        </Link>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={GetsyLogo} alt="Logo" className="h-16" />
        
      </div>

      <div>
      <Link
          to="/login"
          className={`text-black font-semibold hover:text-yellow-200 px-2 py-1 ml-40 ${
            isActive("/profile") ? "border-b-4 border-yellow-300" : ""
          }`}
        >
          Iniciar Sesión
        </Link>
        </div>      

        
      <div>
        <img
          src={User}
          alt="Foto de perfil"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
