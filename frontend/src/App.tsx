// App.tsx (exemplo com React Router v6)
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import Home from "./components/home";

function App() {
    return (
        <div className="bg-dark-secondary text-dark-text min-h-screen">
            <Routes>
                {/* Rota para a tela de Login */}
                <Route path="/" element={<Login />} />
                {/* Rota para a tela de Cadastro */}
                <Route path="/register" element={<Register />} />
                {/* Rota para a tela de Recuperação de Senha */}
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* Rota para a tela Home */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
