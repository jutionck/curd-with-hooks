package models

type FoodStock struct {
	FoodCode     string   `json:"food_code"`
	FoodName     string   `json:"food_name"`
	FoodStock    int      `json:"food_stock"`
}
