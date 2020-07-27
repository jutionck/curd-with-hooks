package user

import "github.com/jutionck/go-api-rumahmakan/models"

type UserUsercaseInterface interface {
	GetAllUser() ([]*models.User, error)
}
