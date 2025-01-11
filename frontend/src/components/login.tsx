// src/pages/Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Importar do Firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Importamos o 'auth' que criamos

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado:", result.user);
      // Redirecionar
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      alert("Falha ao fazer login com Google");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Entrar</h2>
        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {/* Lembre-me & Esqueceu a senha */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Lembrar-me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4
                       rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Entrar
          </button>

          {/* Botão de Login com Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-2 bg-white
                       border border-gray-300 text-gray-700 py-2 px-4 rounded
                       hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {/* Ícone do Google (SVG) */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.94 0 7.07 1.63 9.21 3.45l6.79-6.79C36.09 2.44 30.67 0 24 0 14.6 0 6.41 4.51 1.82 11.08l8.31 6.44C11.49 10.79 17.23 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.09 24.48c0-1.19-.11-2.33-.31-3.43H24v6.51h12.49c-.53 2.54-2.09 4.75-4.42 6.2l7.02 5.44C42.65 35.61 46.09 30.52 46.09 24.48z"
              />
              <path
                fill="#FBBC05"
                d="M9.46 28.03a14.31 14.31 0 0 1-.75-4.53c0-1.58.27-3.11.75-4.53l-8.31-6.44A23.86 23.86 0 0 0 0 23.5c0 3.93.93 7.64 2.58 10.96l8.31-6.43z"
              />
              <path
                fill="#34A853"
                d="M24 47c6.41 0 11.78-2.12 15.71-5.75l-7.02-5.44c-2.01 1.37-4.58 2.16-8.69 2.16-6.77 0-12.51-4.29-14.58-10.23l-8.31 6.43C6.41 43.49 14.6 47 24 47z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            <span>Entrar com Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
