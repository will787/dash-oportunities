import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Acesso não autorizado. Faça login.");
      navigate("/"); // Redireciona para login se não houver token
    }
  }, [navigate]);

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
    alert("Logout realizado com sucesso!");
    navigate("/"); // Redireciona para a tela de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo à Home!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
