import { Link } from "react-router-dom";
// import GetsyLogo from "../assets/images/GetsyLogo.png";
// import LoginImage from "../assets/images/loginImage.png";
import loginfondo from '../assets/images/loginfondo.jpg'
import logoG from '../assets/images/LogoG.png'

const Signup = () => {
  return (
    <div className="flex min-h-screen">

      <div className="w-full md:w-1/2 bg-white p-14 flex flex-col justify-center space-y-6 relative mr-36">
        <div className="flex items-center mb-6">
          {/* Texto */}
          <div className="text-left">
            <h1 className="text-6xl font-bold text-black whitespace-nowrap">Crea tu cuenta,</h1>
            <h1 className="text-4xl font-bold text-black">en Getsy</h1>
          </div>
          {/* Logo */}
          <img src={logoG} alt="Getsy Logo" className="h-32 ml-4" />
        </div>



        <div>

          <p className="text-black text-xl text-left mb-6 font-semibold">Ingresa tus Datos para continuar</p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-600"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 focus:outline-none"
              >
                Crear Cuenta

              </button>
            </div>
          </form>
        </div>

      </div>



      <div className="hidden md:block w-3/4 relative">
        <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-500 via-yellow-400 to-transparent opacity-70 z-10 pointer-events-none"></div>
        <img
          src={loginfondo}
          alt="Imagen de inicio de sesión"
          className="object-cover h-[800px] w-[800px] z-0 relative ml-32" // Ajusta la altura aquí
        />
      </div>


    </div>
  );
};

export default Signup;
