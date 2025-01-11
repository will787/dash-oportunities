package models

import "gorm.io/gorm"

// User representa o modelo de usuário no banco de dados
type User struct {
	gorm.Model
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password"`
}
