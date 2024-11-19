import Navbar from '../components/Navbar';
import CategoriaP from '../assets/images/pastas.png'
import FondoHome from '../assets/images/FondoHome.png'
import Busqueda from '../assets/images/busqueda.png'

const HomePage = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${FondoHome})` }}>

            <Navbar></Navbar>

            <main className="flex flex-col items-center mt-10 px-6 ">
                <h1 className="text-3xl font-bold text-black mb-4">¡Bienvenido!,</h1>
                <p className='text-2xl font-semibold text-black mb-10'>¿Que te gustaría comer hoy?</p>

                <div className="relative w-full px-6 mb-10">
                    <img
                        src={Busqueda}
                        alt="Buscar"
                        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-6 h-6"
                    />

                    <input
                        type="text"
                        placeholder=""
                        className="w-full pl-12 pr-6 py-3 border bg-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:outline-none"
                    />
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-2">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 1"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 1
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 2"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 2
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 3"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 3
                            </h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 1"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 1
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 2"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 2
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 3"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 3
                            </h2>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 1"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 1
                            </h2>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 2"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 2
                            </h2>
                        </div>
                    </div>

                    {/* Imagen 6 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={CategoriaP}
                            alt="Restaurante 3"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Restaurante 3
                            </h2>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default HomePage;
