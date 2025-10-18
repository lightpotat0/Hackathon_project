"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from 'next/image';

export default function Perfil(){

    const username = "Francisco Rodrigo"
    const points = "1240.00"

return (
<div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] items-center p-0">
    <div className="flex items-center gap-6 bg-white/10 p-5 shadow-lg w-[100%] h-[400px]">
        <img
        src="https://cdn-icons-png.flaticon.com/512/0/93.png"
        alt="Ícone de usuário"
        className="w-80 h-80 border border-black rounded-full object-cover"
        />
        <h1 className="text-6xl font-bold w-50">{username}</h1>
        <div className="itens-center border border-black rounded w-50 h-40">
            <h1 className="text-3xl font-bold w-50">Pontuação</h1>
            <p className="text-2xl font-bold w-50">{points}</p>
        </div>
  </div>
    <div className="mt-2">
      <p className="text-sm text-gray-400">Seu perfil</p>
    </div>
  </div>
);
}