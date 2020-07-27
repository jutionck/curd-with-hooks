package utils

import (
	"errors"
)

func ValidateInputNotNil(data ...interface{}) error {
	for _, value := range data {
		switch value {
		case "":
			return errors.New("Data Input Cannot Empty")
		case 0:
			return errors.New("Data Input Cannot 0")
		case nil:
			return errors.New("Input cannot be nil")
		}
	}
	return nil
}
//
//func CekStok(foodCode string) (models.FoodStock, error) {
//	db, _ := config.ConfifDb()
//	var foodStok models.FoodStock
//	query := SELECT_FOOD_STOCK
//	err := db.QueryRow(query, foodCode).Scan(&foodStok.FoodCode, &foodStok.FoodName, &foodStok.FoodStock)
//	if err != nil {
//		return foodStok, err
//	}
//	return foodStok, nil
//}