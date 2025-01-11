// src/pages/ForgotPassword.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Recuperação de senha para:", email);
    alert("Link de recuperação enviado!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-dark-card p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Recuperar Senha</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-400">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-dark-secondary text-gray-200"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-dark-accent py-2 px-4 rounded text-white hover:bg-blue-700"
          >
            Enviar Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-dark-accent">
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;