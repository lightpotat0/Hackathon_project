"use client";

import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import EditProfileModal from "../../../components/EditProfileModal"; // Certifique-se de criar este arquivo na pasta components

export default function Perfil() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const username = "Francisco Rodrigo";
    const points = "1240.00";

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                
                {/* Exemplo de botão que dispara o Modal */}
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
                >
                    <FaUserEdit /> Editar Perfil
                </button>

            </div>

            {/* O componente separado fica aqui, "escutando" o estado */}
            <EditProfileModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}
