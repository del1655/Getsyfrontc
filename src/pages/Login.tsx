import { Link } from "react-router-dom";
import GetsyLogo from "../assets/images/GetsyLogo.png";
import LoginImage from "../assets/images/loginImage.png"; // Imagen de la derecha

const Login = () => {
    return (
        <div className="flex min-h-screen">

            <div className="w-full md:w-1/2 bg-white p-20 flex flex-col justify-center space-y-8 relative">
                <div className="flex">
                <div className="text-center mb-6">
                    <h1 className="text-6xl font-bold text-gray-800 text-left">Bienvenido,</h1>
                    <h1 className="text-5xl font-bold text-gray-800 text-left">a Getsy</h1>
                </div>
                <img src={GetsyLogo} alt="Getsy Logo" className="mx-auto h-32 mb-6" />

                </div>


                <div>

                <p className="text-black text-xl text-left mb-6 font-semibold">Inicia sesión para continuar</p>

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
                                Iniciar sesión
                                
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-600">
                        ¿No tienes cuenta?{" "}
                        <Link to="/signup" className="text-yellow-500 hover:underline">
                            Crear cuenta
                        </Link>
                    </p>
                </div>
            </div>



            <div className="hidden md:block w-1/2 relative">

                <div className="absolute top-0 bottom-0  w-32 bg-gradient-to-l from-yellow-500 to-transparent z-10 pointer-events-none"></div>
                <img
                    src={LoginImage}
                    alt="Imagen de inicio de sesión"
                    className="object-contain h-full mx-auto z-0 relative"
                />
            </div>
        </div>
    );
};

export default Login;
