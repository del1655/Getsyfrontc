import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import loginfondo from "../assets/images/loginfondo.jpg";
import logoG from "../assets/images/LogoG.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/getsy-back/login-user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Guardar token en localStorage
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message || "Credenciales incorrectas");
      } else {
        setError("Error de conexión. Intenta nuevamente.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Parte izquierda: formulario de login */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center space-y-8">
        {/* Logo y Título */}
        <div className="hidden md:flex items-center justify-between text-center mb-6">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-black">Bienvenido,</h1>
            <h1 className="text-3xl md:text-5xl font-bold text-black">a Getsy</h1>
          </div>
          <img src={logoG} alt="Getsy Logo" className="h-24 md:h-32 mb-6" />
        </div>

        {/* Formulario */}
        <div>
          <p className="text-black text-xl text-left mb-6 font-semibold">
            Inicia sesión para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Correo
              </label>
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
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                Contraseña
              </label>
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

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 focus:outline-none"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>

        {/* Enlace para crear cuenta */}
        <div className="text-center">
          <p className="text-xl text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>

      {/* Parte derecha: imagen de fondo */}
      <div className="hidden md:block w-3/4 relative">
        <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-500 via-yellow-400 to-transparent opacity-70 z-10 pointer-events-none "></div>
        <img
          src={loginfondo}
          alt="Imagen de inicio de sesión"
          className="object-cover h-[800px] w-[800px] z-0 relative ml-32"
        />
      </div>
    </div>
  );
};

export default Login;
