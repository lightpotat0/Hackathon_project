"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/80 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 h-14 flex items-center">
        <h1 className="text-white text-4xl font-semibold">Olá</h1>
      </nav>
    </header>
  );
}