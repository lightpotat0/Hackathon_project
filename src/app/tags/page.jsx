"use client";

import { FaUserEdit, FaBriefcase, FaRegClock, FaSearch } from "react-icons/fa";

export default function Tags() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* BANNER */}
      <section className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 py-20 px-6">
        <div className="max-w-6xl mx-auto">

            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="Icone da Tag"
            className="w-40 p-2">
            </img>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            React
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Framework baseado em Javascritpt
          </p>

          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            Ver Projetos
          </button>

        </div>
      </section>

      {/* Conteúdo abaixo */}
      <section className="max-w-6xl mx-auto p-8">

        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Tags Disponíveis</h2>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-600 px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer">
              React
            </span>
            <span className="bg-green-600 px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer">
              Node.js
            </span>
            <span className="bg-purple-600 px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer">
              Next.js
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}
