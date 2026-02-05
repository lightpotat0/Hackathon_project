"use client";

import { useState } from "react";
export default function Perfil() {
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
              { name: "Ativo", icon: "⚡"},
              { name: "Veterano", icon: "🕰️"  },
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

            <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md min-w-[180px]">
              <h1 className="text-xl font-semibold text-gray-400">Pontuação Total</h1>
              <p className="text-4xl font-bold text-yellow-400 mt-1">{points}</p>
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
              </div>

            <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Experiências</h1>
            
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
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">React</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">SQL</span>
                    <span className="bg-blue-600 text-sm font-medium px-3 py-1 rounded-full">Microsserviços</span>
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