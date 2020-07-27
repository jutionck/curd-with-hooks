package models

type Transaction struct {
	NotaNumber        string            `json:"nota_number"`
	NotaDate          string            `json:"nota_date"`
	DetailTransaction []TransactionDetail `json:"detail_transaction"`
	Total             int               `json:"total_transaction"`
	CustomerName      string            `json:"customer_name"`

}
