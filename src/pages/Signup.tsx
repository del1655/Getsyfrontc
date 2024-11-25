import React, { useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado: npm install axios
import loginfondo from '../assets/images/loginfondo.jpg';
import logoG from '../assets/images/LogoG.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: ""
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Enviar datos al backend
      const response = await axios.post("http://localhost:8080/getsy-back/create-user", formData, {
        headers: {
          "Content-Type": "application/json", // Indica que estás enviando JSON
        },
      });

      if (response.status === 201) {
        setSuccess("Usuario creado exitosamente.");
      }
    } catch (error: any) {
      if (error.response) {
        // Si el backend responde con un error
        setError(`Error: ${error.response.data.message || "Algo salió mal."}`);
      } else {
        // Si ocurre un error de red
        setError("Error de conexión. Intenta nuevamente.");
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 bg-white p-14 flex flex-col justify-center space-y-6 relative mr-36">
        <div className="flex items-center mb-6">
          <div className="text-left">
            <h1 className="text-6xl font-bold text-black whitespace-nowrap">Crea tu cuenta,</h1>
            <h1 className="text-4xl font-bold text-black">en Getsy</h1>
          </div>
          <img src={logoG} alt="Getsy Logo" className="h-32 ml-4" />
        </div>
        <div>
          <p className="text-black text-xl text-left mb-6 font-semibold">Ingresa tus Datos para continuar</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Nombre:</label>
              <input
                id="name"
                name="name"
                type="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-600">
                Número de Teléfono
              </label>
              <input
                id="phoneNumber"
                name="phone_number" // Cambiado de "phoneNumber" a "phone_number"
                type="text" // Usa "text" o "tel" para este tipo de datos
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Ingresa tu número de teléfono"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 focus:outline-none"
              >
                Crear Cuenta
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}
        </div>
      </div>
      <div className="hidden md:block w-3/4 relative">
        <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-500 via-yellow-400 to-transparent opacity-70 z-10 pointer-events-none"></div>
        <img src={loginfondo} alt="Imagen de inicio de sesión" className="object-cover h-[800px] w-[800px] z-0 relative ml-32" />
      </div>
    </div>
  );
};

export default Signup;
