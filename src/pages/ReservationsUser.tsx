import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

interface Reservation {
  id: string;
  date: string;
  time: string;
  pax: number;
  status: string;
  notes?: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
  }).format(date); // Ejemplo: "28 de noviembre de 2024"
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return new Intl.DateTimeFormat("es-ES", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date); // Ejemplo: "5:00 p. m."
};

const Reservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setError("No se encontró el ID del usuario.");
      setIsLoading(false);
      return;
    }

    const fetchReservations = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:8080/getsy-back/${userId}/reservations`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReservations(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Error al cargar reservas.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10 mt-8 text-gray-800">
          Tus Reservas
        </h1>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Estado de carga */}
        {isLoading && !error && (
          <p className="text-gray-700 text-center">Cargando tus reservas...</p>
        )}

        {/* Sin reservas */}
        {!isLoading && reservations.length === 0 && !error && (
          <p className="text-gray-700 text-center">
            No tienes reservas disponibles.
          </p>
        )}

        {/* Lista de reservas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-orange-600 transition-shadow duration-300 shadow-[0_10px_20px_rgba(255,_223,_0,_0.7)]"
            >
              <div className="p-6 h-52">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {/* Reserva   #{reservation.id} */}
                </h2>

                <p className="text-base text-gray-600 mb-3">
                  <span className="font-bold">Fecha:</span>{" "}
                  {formatDate(reservation.date)}
                </p>
                <p className="text-base text-gray-600 mb-3">
                  <span className="font-bold">Hora:</span>{" "}
                  {formatTime(reservation.time)}
                </p>
                <p className="text-base text-gray-600 mb-3">
                  <span className="font-bold">Personas:</span>{" "}
                  {reservation.pax}
                </p>
                <p className="text-base text-gray-600">
                  <span className="font-bold">Estado:</span>{" "}
                  {reservation.status === "pending"
                    ? "Pendiente"
                    : reservation.status}
                </p>
                {reservation.notes && (
                  <p className="text-base text-gray-600 mt-3">
                    <span className="font-semibold">Notas:</span>{" "}
                    {reservation.notes || "Sin información adicional"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
