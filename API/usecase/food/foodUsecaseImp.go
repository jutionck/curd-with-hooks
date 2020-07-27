package food

import (
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/repository/food"
	"github.com/jutionck/go-api-rumahmakan/utils"
)

type foodUsecase struct {
	foodRepo food.FoodRepoInterface
}


func (f foodUsecase) GetAllFoods() ([]*models.Food, error) {
	products, err := f.foodRepo.GetAllFoods()
	if err != nil {
		return nil, err
	}
	return products, nil
}

func (f foodUsecase) GetStock(foodCode string) (models.FoodStock, error) {
	products, err := f.foodRepo.GetStock(foodCode)
	if err != nil {
		return products, err
	}
	return products, nil
}

func (f foodUsecase) FindsFoods(foodCode string) (models.Food, error) {
	products, err := f.foodRepo.FindsFoods(foodCode)
	if err != nil {
		return products, err
	}
	return products, nil
}

func (f foodUsecase) SqlInsertFood(food *models.Food) error {
	err := utils.ValidateInputNotNil(food.FoodName, food.FoodStock)
	if err != nil {
		return err
	}
	err = f.foodRepo.SqlInsertFood(food)
	if err != nil {
		return err
	}
	return nil
}

func (f foodUsecase) SqlUpdateFood(foodCode string, food *models.Food) error {
	err := f.foodRepo.SqlUpdateFood(foodCode, food)
	if err != nil {
		return err
	}
	return nil
}

func (f foodUsecase) SqlDeleteFood(foodCode string) error {
	err := f.foodRepo.SqlDeleteFood(foodCode)
	if err != nil {
		return err
	}
	return nil
}


func NewFoodUsecase(foodRepo food.FoodRepoInterface) foodUsecase {
	return foodUsecase{foodRepo}
}