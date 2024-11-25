import { useState } from "react";
import Navbar from "../components/Navbar"; // Asegúrate de tener este componente
import "react-calendar/dist/Calendar.css"; // Importa los estilos del calendario
import Calendar from "react-calendar";

const ReservationCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    time: "",
    people: 1,
  });

  // Maneja la selección de fecha
  const handleDateSelect = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date); // Si es una sola fecha, la seleccionamos
      setIsModalOpen(true);
    } else if (Array.isArray(date) && date.length > 0) {
      // Si es un rango de fechas, seleccionamos la primera fecha del rango
      setSelectedDate(date[0]);
      setIsModalOpen(true);
    } else {
      setSelectedDate(null); // Si es null, no hacemos nada
    }
  };

  // Maneja el cambio en los campos del modal
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservationDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Envía los detalles de la reserva
  const handleSubmit = () => {
    console.log("Reserva realizada:", {
      date: selectedDate,
      ...reservationDetails,
    });
    setIsModalOpen(false);

    // Limpia los campos del formulario
    setReservationDetails({
      time: "",
      people: 1,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Título */}
      <h1 className="text-4xl font-bold text-center  mb-24 mt-16">
        Escoge la Fecha
      </h1>

      {/* Calendario */}
      <div className="flex justify-center">
        <div className="scale-125 shadow-lg rounded-lg"> {/* Aquí se ajusta el tamaño */}
          <Calendar
            onChange={(date) => handleDateSelect(date as Date | Date[] | null)}
            className="p-4"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Detalles de la Reserva
            </h2>

            {/* Fecha seleccionada */}
            <p className="text-gray-700 mb-4 text-center">
              Fecha: {selectedDate ? selectedDate.toLocaleDateString() : "Fecha no válida"}
            </p>

            {/* Hora */}
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

            {/* Número de personas */}
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

            {/* Botones */}
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

export default ReservationCalendar;
