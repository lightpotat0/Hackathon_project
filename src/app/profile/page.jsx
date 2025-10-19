"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function Perfil() {
  const username = "Francisco Rodrigo";
  const points = "1240.00";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col p-10">

      <div className="flex justify-start gap-10 w-[80%]">
        <div className="w-[60%] bg-white/10 p-6 rounded-xl shadow-lg ml-[5%]">
          <h2 className="text-2xl text-center font-bold mb-4">
            Badges & Conquistas
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {[
              { name: "Contribuidor", icon: "🏅", desc: "Participou de projetos" },
              { name: "Top 10", icon: "🔥", desc: "Entre os 10 melhores do ranking" },
              { name: "Mentor", icon: "🎓", desc: "Ajudou novos membros" },
              { name: "Ativo", icon: "⚡", desc: "Acessou 7 dias seguidos" },
              { name: "Veterano", icon: "🕰️", desc: "Mais de 6 meses na plataforma" },
              { name: "Explorador", icon: "🌎", desc: "Visitou todas as seções" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/20 border border-white/30 rounded-xl p-4 hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className="text-lg font-semibold">{badge.name}</h3>
                <p className="text-xs text-gray-300 text-center mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Direita — Perfil */}
        <div className="w-[70%] ml-10 bg-white/10 p-6 rounded-xl shadow-lg flex flex-row items-center justify-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/93.png"
            alt="Ícone de usuário"
            className="w-52 h-52 border border-black rounded-full object-cover mb-5"
          />
          <h1 className="text-6xl font-bold text-center mb-3 ml-10">{username}</h1>
          <div className="text-center border border-black rounded-lg w-70 p-2 ml-14">
            <h1 className="text-5xl font-bold">Pontuação</h1>
            <p className="text-4xl font-bold">{points}</p>
          </div>
        </div>
      </div>

      {/* Rodapé / Observação */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">Seu perfil</p>
      </div>
    </div>
  );
}
