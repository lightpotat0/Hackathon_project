"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-blue-main)] text-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-4">
        <h1
          className="text-2xl font-bold cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => router.push("/home")}
        >
          GETvagas
        </h1>

        <form className="flex-1 mx-6" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Procure sua nova oportunidade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-dark)]"
          />
        </form>

        <nav className="flex space-x-6 text-sm md:text-base flex-shrink-0">
          <a
            href="/aplicacoes"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-0 hover:after:left-auto"
          >
            Minhas Aplicações
          </a>
          <a
            href="/perfil"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-0 hover:after:left-auto"
          >
            Meu Perfil
          </a>
        </nav>
      </div>
    </header>
  );
}
