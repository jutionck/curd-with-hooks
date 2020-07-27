package models

type TransactionDetail struct {
	DetailId   string         `json:"transaction_id"`
	Qty        int            `json:"qty"`
	DetailFood Food           `json:"food"`
	AddFood    FoodAdditional `json:"additional_food"`
}
