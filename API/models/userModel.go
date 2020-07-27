package models

type User struct {
	ID        int		`json:"userID"`
	Username  string	`json:"username"`
	FirstName string	`json:"firstName"`
	LastName  string	`json:"lastName"`
	Password  string	`json:"password"`
}

