"use client";

import { useState } from "react";
import { FaUserEdit, FaBriefcase, FaRegClock, FaSearch } from "react-icons/fa";

export default function Perfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = "Francisco Rodrigo";
  const points = "1240.00";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        <aside className="lg:w-1/4 w-full bg-gray-800 p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
            🏆 Badges & Conquistas
          </h2>
          <div className="grid grid-cols-2 gap-3 cursor-pointer">
            {[
              { name: "Contribuidor", icon: "🏅" },
              { name: "Top 10", icon: "🔥" },
              { name: "Mentor", icon: "🎓" },
              { name: "Ativo", icon: "⚡" },
              { name: "Veterano", icon: "🕰️" },
              { name: "Ver mais" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200 transform hover:scale-105"
              >
                <div className="text-3xl mb-1">{badge.icon}</div>
                <h3 className="text-sm font-semibold text-center">{badge.name}</h3>
              </div>
            ))}
          </div>
        </aside>

        <main className="lg:w-3/4 w-full space-y-8">

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/93.png"
              alt="Ícone de usuário"
              className="w-40 h-40 border-4 border-blue-500 rounded-full object-cover"
            />
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-5xl font-extrabold">{username}</h1>
              <p className="text-blue-400 text-2xl mt-2">Software Engineer</p>
            </div>

            <div className="flex flex-col gap-2 min-w-[180px] mt-5">
              <div className="bg-gray-700 p-2 rounded-lg text-center shadow-md">
                <h1 className="text-xl font-semibold text-gray-400">Pontuação Total</h1>
                <p className="text-4xl font-bold text-yellow-400">{points}</p>
              </div>

              <button className="bg-gray-700 p-1 rounded-lg text-center shadow-md hover:bg-gray-600 transition-colors cursor-pointer">
                <a
                  href="/profile/edit_profile" className="font-semibold text-gray-200">Editar Perfil</a>
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Sumário Profissional</h1>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-300 leading-relaxed">
                  Especialista em desenvolvimento de software com foco em resultados de negócio e qualidade de
                  código. Ao longo da minha trajetória, liderei a implementação de funcionalidades que reduziram
                  o tempo de carregamento de aplicações e melhoraram a retenção de usuários. Domínio em arquitetura
                  de microsserviços, integração de APIs e bancos de dados SQL/NoSQL.
                </p>
              </div>

              <div className="md:w-1/3">
                <h1 className="text-2xl font-bold mb-4">Habilidades & Techs</h1>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">React</span>
                  <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Tailwind CSS</span>
                  <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Node.js</span>
                  <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">SQL</span>
                  <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Microsserviços</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2 mt-10">Experiências</h1>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-blue-500 pl-4">
                <div className="md:w-1/4">
                  <p className="text-blue-400 font-bold">Jan 2022 - Atual</p>
                  <p className="text-gray-400 text-sm">Empresa Tech S.A.</p>
                </div>
                <div className="md:w-3/2">
                  <h3 className="text-xl font-bold">Software Engineer Junior</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Liderança técnica no desenvolvimento de microserviços escaláveis utilizando Node.js e AWS.
                    Melhoria de 40% na performance de queries do banco de dados.
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2 mt-10">Certificados</h1>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-blue-500 pl-4">
                <div className="md:w-1/4">
                  <p className="text-blue-400 font-bold">Jan 2025</p>
                  <p className="text-gray-400 text-sm">Curso em Vídeo</p>
                </div>
                <div className="md:w-3/2">
                  <h3 className="text-xl font-bold">Curso Avançado de .NET</h3>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">React</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Tailwind CSS</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Node.js</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">SQL</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Microsserviços</span>
                  </div>
                </div>
              </div>
            </div>


            <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2 mt-10">Projetos</h1>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 border-l-4 border-blue-500 pl-4">
                <div className="md:w-1/4">
                  <p className="text-blue-400 font-bold">Mar 2024</p>
                  <p className="text-gray-400 text-sm">Criação</p>
                </div>
                <div className="md:w-3/2">
                  <h3 className="text-xl font-bold">Market Shop</h3>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">React</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Tailwind CSS</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Node.js</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">SQL</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full transition duration-200 transform hover:scale-108 cursor-pointer">Microsserviços</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">GETvagas - Seu perfil profissional em destaque</p>
      </div>
    </div>
  );
}