import { useState } from "react";
import Navbar from "../components/Navbar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

const DateReservation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    time: "",
    people: 1,
  });
  const navigate = useNavigate();

  const handleDateSelect = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      setIsModalOpen(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservationDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedDate || !reservationDetails.time || reservationDetails.people < 1) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const userToken = localStorage.getItem("authToken");
    if (!userToken) {
      alert("Debes iniciar sesión para hacer una reserva.");
      navigate("/login");
      return;
    }

    const reservationData = {
      date: selectedDate.toISOString(),
      time: reservationDetails.time,
      people: reservationDetails.people,
      restaurant: "Restaurante Ejemplo", // Cambia según tu lógica de negocio
      userName: "Nombre del Usuario", // Obtén esto del contexto o del backend
    };

    try {
      const response = await fetch("http://localhost:8080/getsy-back/reservations/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        const data = await response.json();

        // Redirigir a la página de confirmación con los datos de la reserva
        navigate("/confirmation-reservation", { state: { reservation: data } });
      } else {
        const errorData = await response.json();
        alert(`Error al realizar la reserva: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
      alert("Hubo un error al intentar hacer la reserva. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-24 mt-16">
        Escoge la Fecha
      </h1>
      <div className="flex justify-center">
        <div className="scale-125 shadow-lg rounded-lg">
          <Calendar
            onChange={(date) => handleDateSelect(date as Date | Date[] | null)}
            className="p-4"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Detalles de la Reserva
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Fecha: {selectedDate ? selectedDate.toLocaleDateString() : "Fecha no válida"}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Hora
              </label>
              <input
                type="time"
                name="time"
                value={reservationDetails.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Número de Personas
              </label>
              <input
                type="number"
                name="people"
                value={reservationDetails.people}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateReservation;
