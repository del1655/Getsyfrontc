import { Link } from "react-router-dom";
import FondoHome from '../assets/images/fondoHome.jpg'
import cortes from '../assets/images/cortesjpg.jpg'
import ensaladas from '../assets/images/ensaladas.jpg'
import pastas from '../assets/images/pastas.jpg'
import nosotros1 from '../assets/images/nosotros1.jpg'
import nosotros2 from '../assets/images/nosotor2.jpg'
import NavbarHome from "../components/NavbarHome";

const HomePage = () => {
    return (
        <div>
            <div className="bg-transparent sm:bg-gray-900">

                {/* Navbar */}
                <NavbarHome />

                {/* Imagen de fondo con transparencia solo para web */}
                <div className="relative">
                    <img
                        src={FondoHome}
                        alt="Fondo de Bienvenida"
                        className="w-full h-[50vh] object-cover opacity-50 hidden sm:block" // Solo se muestra en pantallas grandes
                    />
                    {/* Texto de Bienvenida */}
                    <div className="absolute inset-0 flex flex-col justify-center mb-11">
                        <h1 className="text-8xl font-extrabold text-white tracking-wider drop-shadow-lg font-serif hidden text-center sm:block">Bienvenido</h1>
                        <h1 className="text-6xl font-extrabold text-white tracking-wider drop-shadow-lg font-serif hidden text-center sm:block">a Getsy</h1>

                        {/* Título en negro para móvil */}
                        <h1 className="text-5xl font-extrabold text-black tracking-wider drop-shadow-lg font-serif sm:hidden text-left ml-9 mt-11">Bienvenido</h1>
                        <h1 className="text-4xl font-extrabold text-black tracking-wider drop-shadow-lg font-serif sm:hidden text-left ml-9">a Getsy</h1>
                        <p className="text-xl text-black font-semibold sm:hidden ml-9">¿Qué te gustaría de comer?</p>
                    </div>
                </div>

            </div>


            {/* Categorías */}
            <div>
                <div className="text-center mt-11">
                    {/* Título Categorías */}
                    <h2 className="text-6xl font-bold text-yellow-500 mb-4 font-serif hidden sm:block">Categorías</h2>

                    {/* Título en móvil */}
                    <h2 className="text-4xl font-bold text-yellow-500 mb-4 font-serif sm:hidden mt-44 ">Categorías</h2>

                    <p className="text-xl text-black font-semibold hidden sm:block">¿Qué te gustaría de comer?</p>
                </div>

                {/* Tres imágenes de categorías */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 px-4 gap-4">
                    {/* Cortes */}
                    <div className="flex flex-col items-center">
                        <Link to="/inforestaurants">
                            <img
                                src={cortes}
                                alt="Cortes"
                                className="shadow-lg w-72 h-80 object-cover cursor-pointer"
                            />
                        </Link>
                        <div className="w-72 bg-white text-left py-2 shadow-md">
                            <p className="text-gray-700 font-medium ml-6">Cortes</p>
                        </div>
                    </div>

                    {/* Pastas */}
                    <div className="flex flex-col items-center">
                        <Link to="/inforestaurants">
                            <img
                                src={pastas}
                                alt="Pastas"
                                className="shadow-lg w-72 h-80 object-cover cursor-pointer"
                            />
                        </Link>
                        <div className="w-72 bg-white text-left py-2 shadow-md">
                            <p className="text-gray-700 font-medium ml-6">Pastas</p>
                        </div>
                    </div>

                    {/* Ensaladas */}
                    <div className="flex flex-col items-center">
                        <Link to="/inforestaurants">
                            <img
                                src={ensaladas}
                                alt="Ensaladas"
                                className="shadow-lg w-72 h-80 object-cover cursor-pointer"
                            />
                        </Link>
                        <div className="w-72 bg-white text-left py-2 shadow-md">
                            <p className="text-gray-700 font-medium ml-6">Ensaladas</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Nosotros */}
            <div className="relative flex justify-center items-center mb-32 mt-32">
                {/* Contenedor de las imágenes solo en pantallas grandes */}
                <div className="absolute flex gap-56 mt-32 hidden sm:flex"> {/* Solo visible en pantallas grandes */}
                    <img
                        src={nosotros1}
                        alt="Imagen izquierda"
                        className="rounded-lg shadow-lg w-80 h-96 object-cover"
                    />
                    <img
                        src={nosotros2}
                        alt="Imagen derecha"
                        className="rounded-lg shadow-lg w-80 h-96 object-cover"
                    />
                </div>

                {/* Cuadro con texto */}
                <div className="bg-black text-white rounded-lg p-12 text-center shadow-lg relative z-10 w-[400px] h-auto">
                    <div className="flex items-center justify-center mb-6">
                        <h3 className="text-xl uppercase font-semibold">Nosotros</h3>
                    </div>
                    <h1 className="text-3xl font-bold mb-6 font-serif">Historia de Getsy</h1>
                    <p className="text-base mb-8">
                        Somos Getsy, una plataforma diseñada para que encuentres la mejor comida
                        de una manera fácil y rápida en el restaurante de tu preferencia. Únete a nosotros para disfrutar de la
                        experiencia.
                    </p>
                    <Link to="/signup">
                        <button className="px-8 py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 text-lg font-semibold">
                            Registrarse
                        </button>
                    </Link>
                </div>
            </div>

            <footer className="bg-black text-white py-10">
                <div className="max-w-screen-xl mx-auto text-center">
                    <p className="text-sm mb-4">&copy; 2024 Getsy. Todos los derechos reservados.</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="text-yellow-500 hover:text-yellow-600">Sobre nosotros</a>
                        <a href="#" className="text-yellow-500 hover:text-yellow-600">Política de privacidad</a>
                        <a href="#" className="text-yellow-500 hover:text-yellow-600">Contacto</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;
