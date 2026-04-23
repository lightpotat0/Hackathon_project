"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Melhor para performance no Next.js
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userType: "applicant",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Para mensagens de erro da API
  const [loading, setLoading] = useState(false); // Feedback visual de envio

  const togglePassword = () => setShowPassword((prev) => !prev);

  // 2. Handler genérico: Atualiza qualquer campo pelo "name"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validação básica de front-end
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      // 3. Exemplo de chamada real de API (substitua pela sua URL)
      // const response = await fetch("https://sua-api.com", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Simulando um delay de rede
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Dados prontos para o backend:", formData);
      router.push("/login");

    } catch (err) {
      setError("Ocorreu um erro ao criar a conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const isPasswordMatch = formData.confirmPassword === "" || formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-[var(--color-blue-dark)]">
        <h1 className="text-3xl font-bold text-center mb-6 text-[var(--color-blue-main)]">
          Cadastro
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Tipo de Usuário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuário</label>
            <div className="relative">
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none appearance-none"
              >
                <option value="applicant">Estou procurando vagas</option>
                <option value="company">Sou uma empresa contratante</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▾</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-blue-main)] outline-none"
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

          {/* Confirmar Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 outline-none ${
                  isPasswordMatch ? "border-gray-300 focus:ring-[var(--color-blue-main)]" : "border-red-500 focus:ring-red-400"
                }`}
              />
            </div>
            {!isPasswordMatch && (
              <p className="text-xs text-red-500 mt-1">As senhas não coincidem</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !isPasswordMatch}
            className={`w-full text-white font-semibold py-2 rounded-lg transition duration-200 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-blue-main)] hover:bg-[var(--color-blue-dark)] cursor-pointer"
            }`}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>

          <div className="text-center text-sm text-gray-600 mt-3">
            Já possui uma conta?{" "}
            <Link
              href="/login"
              className="text-[var(--color-green-main)] hover:text-[var(--color-green-dark)] font-medium"
            >
              Faça Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
