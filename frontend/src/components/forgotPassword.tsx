// src/pages/ForgotPassword.jsx
import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Enviando e-mail de recuperação...");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Recuperar Senha</h2>
        <p className="text-gray-600 text-center mb-4">
          Digite seu e-mail para receber as instruções de recuperação de senha
        </p>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail cadastrado"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar Link de Recuperação
          </button>
        </form>

        {/* Link para voltar ao login */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-blue-500 hover:underline">
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
