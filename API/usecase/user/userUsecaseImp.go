package user

import (
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/repository/user"
)

type userUsecase struct {
	userRepo user.UserRepoInterface
}


func (u userUsecase) GetAllUser() ([]*models.User, error) {
	users, err := u.userRepo.GetAllUser()
	if err != nil {
		return nil, err
	}
	return users, nil
}

func NewUserUsecase(userRepo user.UserRepoInterface) userUsecase {
	return userUsecase{userRepo}
}