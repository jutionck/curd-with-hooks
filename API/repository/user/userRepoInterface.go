package user

import "github.com/jutionck/go-api-rumahmakan/models"

type UserRepoInterface interface {
	GetAllUser() ([]*models.User, error)
}
