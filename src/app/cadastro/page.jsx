"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("cliente");
  const [match, setMatch] = useState(true);
  const [touchedConfirm, setTouchedConfirm] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleConfirmBlur = () => {
    setTouchedConfirm(true);
    setMatch(confirmPassword === password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-[var(--color-blue-dark)]">
        <h1 className="text-3xl font-bold text-center mb-6 text-[var(--color-blue-main)]">
          Cadastro
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Preencha seus dados para realizar o cadastro
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="userType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de Usuário
            </label>
            <div className="relative">
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none appearance-none"
              >
                <option value="" disabled>Selecione o tipo de usuário</option>
                <option value="applicant">Estou procurando vagas</option>
                <option value="company">Sou uma empresa contratante</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▾</span>
            </div>
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touchedConfirm) {
                    setMatch(e.target.value === confirmPassword);
                  }
                }}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[var(--color-blue-main)]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmar Senha
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 outline-none ${
                  match
                    ? "border-gray-300 focus:ring-[var(--color-blue-main)]"
                    : "border-red-500 focus:ring-red-400"
                }`}
                onChange={handleConfirmChange}
                onBlur={handleConfirmBlur}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[var(--color-blue-main)]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {touchedConfirm && !match && (
              <p className="text-sm text-red-500 mt-1">
                As senhas não coincidem
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-blue-main)] hover:bg-[var(--color-blue-dark)] text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
          >
            Cadastrar
          </button>

          <div className="text-center text-sm text-gray-600 mt-3">
            Já possui uma conta?{" "}
            <a
              href="/login"
              className="text-[var(--color-green-main)] hover:text-[var(--color-green-dark)] font-medium"
            >
              Faça Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}