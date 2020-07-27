package food

import "github.com/jutionck/go-api-rumahmakan/models"

type FoodRepoInterface interface {
	GetAllFoods() ([]*models.Food, error)
	GetStock(string) (models.FoodStock, error)
	FindsFoods(string) (models.Food, error)
	SqlInsertFood(*models.Food) error
	SqlUpdateFood(string, *models.Food) error
	SqlDeleteFood(string) error
}
