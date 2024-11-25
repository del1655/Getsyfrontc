import Navbar from "../components/Navbar";
import R1 from '../assets/images/r1.jpg'
import R2 from '../assets/images/R2.jpg'
import R3 from '../assets/images/R3.jpg'

const InfoRestaurants = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Título */}
            <div className="text-center mt-16">
                <h1 className="text-5xl font-bold text-yellow-500 mb-6 font-serif">
                    Selección de Restaurante
                </h1>
            </div>

            {/* Contenido en tres columnas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 mt-12">
                {/* Restaurante 1 */}
                <div className="flex flex-col items-center">
                    <img
                        src={R1}
                        alt="Restaurante 1"
                        className="shadow-lg w-full h-64 object-cover rounded-lg"
                    />
                    <div className="w-full bg-white text-center py-4 mt-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold text-gray-700">La Madalena</h3>
                        <p className="text-gray-600 mt-2">Disfruta de los mejores cortes de carne en un ambiente único y acogedor.</p>
                    </div>
                </div>

                {/* Restaurante 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src={R2}
                        alt="Restaurante 2"
                        className="shadow-lg w-full h-64 object-cover rounded-lg"
                    />
                    <div className="w-full bg-white text-center py-4 mt-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold text-gray-700">Sonora Grill Isla Cancun II</h3>
                        <p className="text-gray-600 mt-2">Auténticas pastas italianas preparadas con ingredientes frescos y deliciosos.</p>
                    </div>
                </div>

                {/* Restaurante 3 */}
                <div className="flex flex-col items-center">
                    <img
                        src={R3}
                        alt="Restaurante 3"
                        className="shadow-lg w-full h-64 object-cover rounded-lg"
                    />
                    <div className="w-full bg-white text-center py-4 mt-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold text-gray-700">Tora Cancun</h3>
                        <p className="text-gray-600 mt-2">Sabrosas ensaladas y opciones saludables en un ambiente fresco y moderno.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoRestaurants;
