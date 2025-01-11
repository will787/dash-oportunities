package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(router *gin.Engine) {
	router.POST("/api/register", controllers.Register)
	router.POST("/api/login", controllers.Login)
}
