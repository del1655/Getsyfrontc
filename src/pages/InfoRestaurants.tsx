import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
import Navbar from "../components/Navbar";
import noImage from '../assets/images/no_image.jpg'

interface Restaurant {
    id: number;
    name: string;
    description: string;
    logo: string;
}

const InfoRestaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch("http://localhost:8080/getsy-back/list-restaurants");
                if (!response.ok) {
                    throw new Error("Error al cargar los datos");
                }
                const data: Restaurant[] = await response.json();
                setRestaurants(data);
            } catch (err: any) {
                setError(err.message || "Error desconocido");
            } finally {
                setIsLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Título */}
            <div className="text-center mt-16 mb-10">
                <h1 className="text-5xl font-bold text-yellow-500 mb-6 font-serif">
                    Selección de Restaurante
                </h1>
            </div>

            {/* Mostrar errores o carga */}
            {isLoading ? (
                <div className="text-center mt-12 text-gray-600">Cargando restaurantes...</div>
            ) : error ? (
                <div className="text-center mt-12 text-red-500">Error: {error}</div>
            ) : (
                /* Contenido en tres columnas */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-20 mt-12">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="flex flex-col items-center">
                            {/* Link en la imagen */}
                            <Link to={`/infoeachR/${restaurant.id}`} className="w-full">
                                <img
                                    src={restaurant.logo || noImage}
                                    alt={restaurant.name}
                                    className="w-full h-64 object-cover rounded-t-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                            </Link>
                            {/* Información del restaurante */}
                            <div className="w-full bg-gray-200 text-center py-6 shadow-lg rounded-lg">
                                <Link to={`/infoeachR/${restaurant.id}`}>
                                    <h3 className="text-2xl font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
                                        {restaurant.name}
                                    </h3>
                                </Link>
                                <p className="text-gray-600 mt-3 text-lg">{restaurant.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InfoRestaurants;
