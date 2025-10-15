"use client";

import { FaUserEdit, FaBriefcase, FaRegClock, FaSearch } from "react-icons/fa";

function Home() {
  const userName = "David";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10">

        <section className="py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Bem-vindo,{" "}
              <span className="text-[var(--color-blue-main)]">{userName}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              Explore novas oportunidades, acompanhe suas aplicações e fortaleça
              sua carreira no mundo da tecnologia.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[260px]">
            <a
              href="/vagas"
              className="bg-[var(--color-blue-main)] hover:bg-[var(--color-blue-dark)] text-white font-semibold py-3 px-8 rounded-xl transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
            >
              <FaSearch className="text-lg" /> Buscar Vagas
            </a>

            <a
              href="/perfil/editar"
              className="bg-[var(--color-green-main)] hover:bg-[var(--color-green-dark)] text-white font-semibold py-3 px-8 rounded-xl transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
            >
              <FaUserEdit className="text-lg" /> Atualizar Perfil
            </a>
          </div>
        </section>

        <section className="py-10 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-[var(--color-blue-main)]">
            Últimas Aplicações
          </h3>
        </section>

        <section className="py-10 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-[var(--color-green-main)]">
            Vagas que se encaixam no seu perfil
          </h3>
        </section>
      </main>
    </div>
  );
}

export default Home;
