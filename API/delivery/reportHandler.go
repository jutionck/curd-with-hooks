package delivery

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jutionck/go-api-rumahmakan/delivery/middleware"
	"github.com/jutionck/go-api-rumahmakan/usecase/report"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"net/http"
)

type ReportHandler struct {
	reportUsecase report.ReportUsecaseInterface
}


func ReportRoute(r *mux.Router, service report.ReportUsecaseInterface) {
	reportHandler := ReportHandler{reportUsecase: service}
	r.Use(middleware.ActivityLogMiddleware)
	s := r.PathPrefix("/report").Subrouter()
	//s.HandleFunc("", reportHandler.ReturnAllReport).Methods(http.MethodGet)
	s.HandleFunc("/day", reportHandler.ReturnAllReportOfDay).Methods(http.MethodGet)
	//s.HandleFunc("/day/{date}", reportHandler.ReturnFindReportByDay).Methods(http.MethodGet)
	//s.HandleFunc("/month", reportHandler.ReturnAllReportOfMonth).Methods(http.MethodGet)
	//s.HandleFunc("/month/{month}", reportHandler.ReturnFindReportByMonth).Methods(http.MethodGet)
}

func (re *ReportHandler) ReturnAllReportOfDay(w http.ResponseWriter, r *http.Request) {
	var response utils.Response
	rows, err := re.reportUsecase.GetTrasanctionOfDay()
	if err != nil {
		w.Write([]byte("Data Not Found"))
	}

	response.Status = http.StatusOK
	response.Message = "Success: Report Of The Day"
	response.Data = rows

	//change data (rows) to JSON
	byteOfReport, err := json.Marshal(response)
	if err != nil {
		w.Write([]byte("Oops, Something when wrong !!"))
	}
	// set header look
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfReport)
}

