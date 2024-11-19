import Navbar from "../components/Navbar";
import CategoryP from "../assets/images/pastas.png"; 
const Reservations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-10 mt-8">Tus Reservas</h1>

        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={CategoryP}
              alt="Imagen de reserva"
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="text-left flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Nombre del Restaurante
              </h2>
              <p className="text-gray-700 text-base">
                Fecha: 25/12/2024, 7:00 PM
                <br />
                Dirección: Av. Siempre Viva 123, Springfield
              </p>
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={CategoryP}
              alt="Imagen de reserva"
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="text-left flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Nombre del Restaurante
              </h2>
              <p className="text-gray-700 text-base">
                Fecha: 26/12/2024, 8:00 PM
                <br />
                Dirección: Calle Falsa 456, Shelbyville
              </p>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Reservations;
