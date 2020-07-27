package delivery

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jutionck/go-api-rumahmakan/delivery/middleware"
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/usecase/transaction"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"
	"net/http"
)

type TransactionHandler struct {
	transactionUsecase transaction.TransactionUsecaseInterface
}


func TransactionRoute(r *mux.Router, service transaction.TransactionUsecaseInterface) {
	transactionHandler := TransactionHandler{transactionUsecase: service}
	r.Use(middleware.ActivityLogMiddleware)
	s := r.PathPrefix("/transaction").Subrouter()
	s.HandleFunc("", transactionHandler.ReturnAllTransactions).Methods(http.MethodGet)
	//s.HandleFunc("/{faktur_number}", transactionHandler.ReturnFindTransaction).Methods(http.MethodGet)
	s.HandleFunc("", transactionHandler.ReturnCreateTransaction).Methods(http.MethodPost)
}

func (t *TransactionHandler) ReturnAllTransactions(w http.ResponseWriter, r *http.Request) {
	var response utils.Response
	rows, err := t.transactionUsecase.GetAllTransactions()
	if err != nil {
		w.Write([]byte("Data Not Found"))
	}

	response.Status = http.StatusOK
	response.Message = "Success: Transaction Select"
	response.Data = rows

	//change data (rows) to JSON
	byteOfProduct, err := json.Marshal(response)
	if err != nil {
		w.Write([]byte("Oops, Something when wrong !!"))
	}
	// set header look
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfProduct)
}

func (t *TransactionHandler) ReturnCreateTransaction(w http.ResponseWriter, r *http.Request) {
	var transaction models.Transaction
	var response utils.Response
	_ = json.NewDecoder(r.Body).Decode(&transaction) // json ke struct
	err := t.transactionUsecase.SqlInsertTransaction(&transaction)
	if err != nil {
		w.Write([]byte("Error occurred"))
	}

	response.Status = http.StatusOK
	response.Message = "Success: Transaction Create!"
	response.Data = transaction

	byteOfTransaction, err := json.Marshal(response)
	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfTransaction)
}