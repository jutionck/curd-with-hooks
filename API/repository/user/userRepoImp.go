package user

import (
	"database/sql"
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"
)

type UserRepository struct {
	Conn *sql.DB
}

func (u *UserRepository) GetAllUser() ([]*models.User, error) {
	var users []*models.User
	rows, err := u.Conn.Query(utils.SQL_ALL_USER)
	if err != nil {
		log.Print(err)
	}
	for rows.Next() {
		user := models.User{}
		if err := rows.Scan(&user.ID,&user.Username, &user.FirstName, &user.LastName,&user.Password); err != nil {
			log.Fatalf("%v", err)
			return nil, err
		} else {
			users = append(users, &user)
		}
	}
	return users, nil
}

func NewUserRepository(db *sql.DB) UserRepoInterface {
	return &UserRepository{Conn: db}
}