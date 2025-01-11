// src/pages/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Cartão simples no centro */}
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Hello World</h1>
        <p className="text-gray-700 text-center">
          Seja bem-vindo(a) à tela inicial!
        </p>
      </div>
    </div>
  );
}

export default Home;
