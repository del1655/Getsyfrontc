import { useEffect, useState } from "react";
import User from "../assets/images/usuario.png"; // Imagen de perfil de usuario
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [userImage, setUserImage] = useState("");

    const token = localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);
    const navigate = useNavigate();

    const getUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/getsy-back/get-user/${decodedToken.id}`, )

            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }

            const data = await response.json();
            setNombre(data.user.name);
            setCorreo(data.user.email);
            setTelefono(data.user.phone_number);
            setUserImage(data.user.avatar);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    const updateUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/getsy-back/update-user/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nombre,
                    email: correo,
                    phone_number: telefono,
                    avatar: userImage,
                    id: decodedToken.id,
                }),
            });

            if (!response.ok) {
                throw new Error("Error al actualizar los datos");
            }

            alert("Datos actualizados correctamente");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const updateUserAvatar = async () => {
        const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
        const name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.click();

        fileInput.onchange = async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", preset);

            try {
                const response = await fetch(`https://api.cloudinary.com/v1_1/${name}/image/upload`, {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Error al subir la imagen");
                }

                const data = await response.json();
                setUserImage(data.secure_url);
            } catch (error) {
                console.error("Error:", error);
            }
        };
    };

    const loggout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

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
                            <button
                            onClick={() => updateUserData()}
                            className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-yellow-500">
                                Guardar cambios
                            </button>
                            <button 
                            onClick={() => loggout()}
                            className="px-6 py-2  text-black font-semibold rounded-md hover:bg-red-500">
                                Cerrar sesión
                            </button>
                        </div>

                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 space-y-4">
                        {/* Foto de perfil */}
                        <img
                            src={userImage || User}
                            alt="Foto de perfil"
                            className="w-64 h-64 rounded-full object-cover border-x border-yellow-200"
                        />
                        {/* Botón para editar foto */}
                        <button
                        onClick={() => updateUserAvatar()}
                        className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-500">
                            Editar foto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
