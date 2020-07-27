package transaction

import "github.com/jutionck/go-api-rumahmakan/models"

type TransactionRepoInterface interface {
	GetAllTransactions() ([]*models.Transaction, error)
	//FindsTransaction(string) (models.Transaction, error)
	SqlInsertTransaction(*models.Transaction) error
	//SqlUpdateTransaction(string, *models.Transaction) error
	//SqlDeleteTransaction(string) error
}

