package main

import (
	"backend/config"
	"backend/routes"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Carregar variáveis de ambiente
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Erro ao carregar o arquivo .env")
	}

	// Conectar ao banco de dados
	config.ConnectDatabase()

	// Configurar o servidor
	router := gin.Default()

	// Middleware CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5174"},         // Permitir o domínio do frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},  // Métodos permitidos
		AllowHeaders:     []string{"Content-Type", "Authorization"}, // Cabeçalhos permitidos
		AllowCredentials: true,                                      // Permitir cookies/sessões, se necessário
	}))

	// Rotas
	routes.AuthRoutes(router)

	// Iniciar o servidor
	router.Run(":5000")
}
