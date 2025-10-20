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

        <div className="w-[100%] bg-white/10 rounded-xl shadow-lg flex flex-row items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/93.png"
            alt="Ícone de usuário"
            className="w-52 h-52 border border-black rounded-full object-cover"
          />
          <h1 className="text-6xl font-bold text-center ml-10">{username}</h1>
          <div className="text-center border border-black rounded-lg w-70 p-2 ml-14">
            <h1 className="text-5xl font-bold">Pontuação</h1>
            <p className="text-4xl font-bold">{points}</p>
          </div>
        </div>
        <div>
          <hq>Currículo</hq>
          <p>Meu nome é Rodrigo</p>
        </div>
      </div>

      {/* Rodapé / Observação */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">Seu perfil</p>
      </div>
    </div>
  );
}
