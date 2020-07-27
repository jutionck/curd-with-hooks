package models

type Food struct {
	FoodCode     string   	`json:"foodCode"`
	FoodName     string   	`json:"foodName"`
	FoodPrice    string   	`json:"foodPrice"`
	FoodCategory Category 	`json:"foodCategory"`
	FoodStock    int      	`json:"foodStock"`
	CreatedAt    string		`json:"createdAt"`
	UpdatedAt    string		`json:"updatedAt"`
}

