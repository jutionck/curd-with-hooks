package delivery

import (
	"database/sql"
	"github.com/gorilla/mux"
	fRepo "github.com/jutionck/go-api-rumahmakan/repository/food"
	fUsecase "github.com/jutionck/go-api-rumahmakan/usecase/food"

	tRepo "github.com/jutionck/go-api-rumahmakan/repository/transaction"
	tUsecase "github.com/jutionck/go-api-rumahmakan/usecase/transaction"

	rRepo "github.com/jutionck/go-api-rumahmakan/repository/report"
	rUsecase "github.com/jutionck/go-api-rumahmakan/usecase/report"

	uRepo "github.com/jutionck/go-api-rumahmakan/repository/user"
	uUsecase "github.com/jutionck/go-api-rumahmakan/usecase/user"
)

func Init(r *mux.Router, db *sql.DB) {
	foodRepo 	:= fRepo.NewFoodRepository(db)
	productUsecase	:= fUsecase.FoodUsecaseInterface(foodRepo)
	FoodRoute(r, productUsecase)

	transRepo 	:= tRepo.NewTrasactionRepository(db)
	transUsecase	:= tUsecase.NewTransactionUsecase(transRepo)
	TransactionRoute(r, transUsecase)

	reportRepo 	:= rRepo.NewReportRepository(db)
	reportUsecase	:= rUsecase.NewReportUsecase(reportRepo)
	ReportRoute(r, reportUsecase)

	userRepo 	:= uRepo.NewUserRepository(db)
	userUsecase	:= uUsecase.NewUserUsecase(userRepo)
	UserRoute(r, userUsecase)

}
