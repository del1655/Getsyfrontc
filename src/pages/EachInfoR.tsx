import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Añadimos useNavigate para redirigir
import Navbar from "../components/Navbar";

// Declarar la interface para el restaurante
interface Restaurant {
  id: number;
  name: string;
  phoneNumber: string;
  description: string;
  address: string;
  logo: string;
}

export default function EachInfoR() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Estado para verificar si está logeado
  const [showModal, setShowModal] = useState<boolean>(false); // Estado para controlar el modal

  const { id } = useParams<{ id: string }>(); // Obtener el ID desde la URL
  const navigate = useNavigate(); // Navegación programática

  // Simulación de verificación de sesión (puedes reemplazarlo con tu lógica de autenticación real)
  useEffect(() => {
    const checkLoginStatus = () => {
      const userToken = localStorage.getItem("authToken"); // O cualquier otra lógica de sesión
      if (userToken) {
        setIsLoggedIn(true);  // Si hay un token, se considera que el usuario está logeado
      }
    };

    checkLoginStatus();

    // Obtener el restaurante desde la API
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getsy-back/get-restaurant/${id}`);
        const data: Restaurant = await response.json(); // Tipar los datos
        setRestaurant(data); // Guardar los datos en el estado
      } catch (error) {
        console.error("Error al obtener el restaurante:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Mostrar un loader mientras se carga la información
  if (!restaurant) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Cargando información...</p>
      </div>
    );
  }

  // Función para manejar la reserva
  const handleReservation = () => {
    if (isLoggedIn) {
      navigate("/gettingdate"); // Si está logeado, redirige a la página de reserva
    } else {
      setShowModal(true); // Si no está logeado, muestra el modal
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center mt-16 px-4">
        {/* Imagen de la tienda */}
        <div className="relative w-full sm:w-1/2 h-56 sm:h-72 bg-cover bg-center rounded-lg shadow-2xl shadow-yellow-200/100" style={{ backgroundImage: `url(${restaurant.logo})` }}>
          {/* Fondo sobre la imagen con el nombre y la descripción */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[75%] bg-white text-center py-4 px-6 sm:py-6 sm:px-8 shadow-lg rounded-lg">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>
            <p className="text-base sm:text-lg text-gray-600">{restaurant.description}</p>
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-white w-full max-w-3xl p-6 shadow-lg rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Información del Restaurante</h2>
          <ul className="text-gray-600 text-base sm:text-lg space-y-2">
            <li>
              <strong>Dirección:</strong> {restaurant.address}
            </li>
            <li>
              <strong>Teléfono:</strong> {restaurant.phoneNumber}
            </li>
          </ul>
        </div>

        {/* Botón para realizar la reserva */}
        <div className="mt-8 mb-28">
          <button onClick={handleReservation} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-all duration-300">
            Realizar una Reserva
          </button>
        </div>
      </div>

      {/* Modal de inicio de sesión */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-center mb-4">¡Inicia sesión para continuar!</h2>
            <p className="text-center mb-4">Necesitas iniciar sesión para realizar una reserva.</p>
            <div className="flex justify-center">
              <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
