"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  const [username, setUsername] = useState("Francisco Rodrigo");
  const [role, setRole] = useState("Software Engineer");
  const [summary, setSummary] = useState(
    "Especialista em desenvolvimento de software com foco em resultados de negócio."
  );
  const [points, setPoints] = useState("1240.00");

  const [photo, setPhoto] = useState(
    "https://cdn-icons-png.flaticon.com/512/0/93.png"
  );

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ username, role, summary, points, photo });

    alert("Perfil atualizado com sucesso 🚀");

    router.push("/profile");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
          ✏️ Editar Perfil
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* FOTO */}
          <div className="flex flex-col items-center gap-4">
            <label className="relative group cursor-pointer">
              
              <img
                src={photo}
                alt="Foto"
                className="w-32 h-32 border-4 border-blue-500 rounded-full object-cover transition duration-300 group-hover:brightness-50"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-semibold text-sm">
                  Alterar Foto
                </span>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Nome */}
          <div>
            <label className="block mb-2 text-gray-300">Nome</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded text-black bg-white"
            />
          </div>

          {/* Cargo */}
          <div>
            <label className="block mb-2 text-gray-300">Cargo</label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded text-black bg-white"
            />
          </div>

          {/* Pontos */}
          <div>
            <label className="block mb-2 text-gray-300">Pontuação</label>
            <input
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full p-3 rounded text-black bg-white"
            />
          </div>

          {/* Resumo */}
          <div>
            <label className="block mb-2 text-gray-300">
              Sumário Profissional
            </label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={4}
              className="w-full p-3 rounded text-black bg-white"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-4 justify-end pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
