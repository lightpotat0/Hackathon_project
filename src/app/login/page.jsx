"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-[var(--color-blue-dark)]">
            <h1 className="text-3xl font-bold text-center mb-6 text-[var(--color-blue-main)]">
            Login
            </h1>
            <p className="text-center text-gray-600 mb-8">
            Faça login para continuar
            </p>

            <form className="space-y-5">
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                E-mail
                </label>
                <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
                />
            </div>

            <div className="relative">
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                Senha
                </label>

                <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
                />
                <button
                type="button"
                onClick={togglePassword}
                onChange={(e) => setPassword(e.target.value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[var(--color-blue-main)]"
                >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>


                <a
                className="text-[var(--color-blue-main)] hover:text-[var(--color-blue-dark)] font-medium text-sm block mt-1"
                href="/password-recover"
                >
                Esqueci minha senha
                </a>
            </div>

            <button
                type="submit"
                className="w-full bg-[var(--color-blue-main)] hover:bg-[var(--color-blue-dark)] text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
            >
                Entrar
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
                Não tem uma conta?{" "}
                <a
                href="/cadastro"
                className="text-[var(--color-green-main)] hover:text-[var(--color-green-dark)] font-medium"
                >
                Cadastre-se
                </a>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Login;
