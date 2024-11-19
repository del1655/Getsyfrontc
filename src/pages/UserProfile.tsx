import { useState } from "react";
import User from "../assets/images/usuario.png"; // Imagen de perfil de usuario
import Navbar from "../components/Navbar";

const Profile = () => {
    // Estados para manejar los datos del usuario
    const [nombre, setNombre] = useState("Juan Pérez");
    const [correo, setCorreo] = useState("juan.perez@example.com");
    const [telefono, setTelefono] = useState("123-456-7890");

    return (
        <div>

            <Navbar></Navbar>

            <div className="flex flex-col items-center w-full min-h-screen  px-6 py-8">


                {/* Título */}
                <h1 className="text-4xl font-bold mb-8 mt-6">Perfil</h1>

                <div className="flex flex-col md:flex-row bg-white rounded-lg w-full max-w-6xl gap-x-10 mt-10">
                    {/* Columna izquierda */}
                    <div className="flex flex-col w-full md:w-1/2 p-6 space-y-8">
                        {/* Campo Nombre */}
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="nombre">
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        {/* Campo Correo */}
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="correo">
                                Correo
                            </label>
                            <input
                                id="correo"
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        {/* Campo Teléfono */}
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="telefono">
                                Teléfono
                            </label>
                            <input
                                id="telefono"
                                type="text"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        {/* Botones en la parte inferior izquierda */}
                        <div className="flex flex-col items-center mt-6 space-y-4">
                            <button className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-yellow-500">
                                Guardar cambios
                            </button>
                            <button className="px-6 py-2  text-black font-semibold rounded-md hover:bg-red-500">
                                Cerrar sesión
                            </button>
                        </div>

                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 space-y-4">
                        {/* Foto de perfil */}
                        <img
                            src={User}
                            alt="Foto de perfil"
                            className="w-64 h-64 rounded-full object-cover border-x border-yellow-200"
                        />
                        {/* Botón para editar foto */}
                        <button className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-500">
                            Editar foto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
