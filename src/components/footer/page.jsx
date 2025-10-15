"use client";

import React from "react";
// import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-blue-main)] text-white py-10 mt-0 shadow-inner">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">GETtrampo</h2>
          <p className="text-sm text-gray-200 mt-1">
            Conectando talentos e oportunidades com tecnologia.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a
            href="/sobre"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-0 hover:after:left-auto"
          >
            Sobre
          </a>
          <a
            href="/contato"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-0 hover:after:left-auto"
          >
            Contato
          </a>
          <a
            href="/privacidade"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-0 hover:after:left-auto"
          >
            Política de Privacidade
          </a>
        </nav>

        {/* <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition-transform duration-200 hover:scale-110">
            <Facebook size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition-transform duration-200 hover:scale-110">
            <Instagram size={22} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition-transform duration-200 hover:scale-110">
            <Linkedin size={22} />
          </a>
        </div> */}
      </div>

      <div className="mt-8 text-center text-xs text-gray-300 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} GETtrampo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
