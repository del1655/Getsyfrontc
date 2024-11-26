import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationReservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.reservation) {
    // Si no hay datos, redirige al usuario
    navigate("/");
    return null;
  }

  const { date, time } = state.reservation;
//   people, restaurant, userName

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">¡Reserva Confirmada!</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* <p className="text-lg font-semibold">
          <span className="font-bold">Restaurante:</span> {restaurant}
        </p> */}
        <p className="text-lg font-semibold">
          <span className="font-bold">Fecha:</span> {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Hora:</span> {time}
        </p>
        {/* <p className="text-lg font-semibold">
          <span className="font-bold">Número de Personas:</span> {people}
        </p> */}
        {/* <p className="text-lg font-semibold">
          <span className="font-bold">Reservado por:</span> {userName}
        </p> */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default ConfirmationReservation;
