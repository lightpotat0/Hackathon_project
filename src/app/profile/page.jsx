"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function Perfil() {
  const username = "Francisco Rodrigo";
  const points = "1240.00";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col pt-10">

      <div className="flex justify-start w-[100%]">
        <div className="w-[30%] bg-white/10 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl text-center font-bold">
            Badges & Conquistas
          </h2>
          <div className="grid grid-cols-2 gap-3 mt-10 cursor-pointer">
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
                className="flex flex-row items-center bg-white/20 border border-white/10 rounded-xl p-1 hover:scale-105 transition-all"
              >
                <div className="text-4xl">{badge.icon}</div>
                <h3 className="text-lg font-semibold">{badge.name}</h3>
                <p className="text-xs text-gray-300 text-center mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

      
        <section className="w-[100%]">
          <div className="w-[100%] bg-white/10 rounded-xl flex flex-row items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/93.png"
              alt="Ícone de usuário"
              className="w-52 h-52 border border-black rounded-full object-cover ml-15"
            />
            <h1 className="text-6xl font-bold text-center ml-5">{username}</h1>

            <div className="text-center border border-black rounded-lg w-70 p-2 ml-5">
              <h1 className="text-5xl font-bold">Pontuação</h1>
              <p className="text-4xl font-bold">{points}</p>
            </div>
          </div>
          
          <div className="w-[100%] bg-white/10 rounded-xl shadow-lg flex flex-row">

            <div className="w-[500%] rounded-lg w-70 p-2 ml-8">
              <h1 className="text-5xl font-bold mt-10">Currículo</h1>
              <p className="text-1xl mt-5"><b>Francisco Rodrigo | Software Engineer</b><br></br>
                Especialista em desenvolvimento de software com foco em resultados de negócio e qualidade de 
                código. Ao longo da minha trajetória, liderei a implementação de funcionalidades que reduziram 
                o tempo de carregamento de aplicações e melhoraram a retenção de usuários. Domínio em arquitetura 
                de microsserviços, integração de APIs e bancos de dados SQL/NoSQL.</p>
            </div>

            <div className="w-[100%] rounded-lg w-70 p-2 ml-8">
             <h1 className="text-5xl font-bold mt-10"></h1>
            </div>
          </div>

        </section>
      </div>

      {/* Rodapé / Observação */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">Seu perfil</p>
      </div>
    </div>
  );
}
