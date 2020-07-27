package delivery

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jutionck/go-api-rumahmakan/delivery/middleware"
	"github.com/jutionck/go-api-rumahmakan/usecase/user"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"net/http"
)

type UserHandler struct {
	userUsecase user.UserUsercaseInterface
}


func UserRoute(r *mux.Router, service user.UserUsercaseInterface) {
	userHandler := UserHandler{userUsecase: service}
	r.Use(middleware.ActivityLogMiddleware)
	s := r.PathPrefix("/user").Subrouter()
	s.HandleFunc("", userHandler.ReturnAllUser).Methods(http.MethodGet)
}

func (u *UserHandler) ReturnAllUser(w http.ResponseWriter, r *http.Request) {
	var response utils.Response
	rows, err := u.userUsecase.GetAllUser()
	if err != nil {
		w.Write([]byte("Data Not Found"))
	}

	response.Status = http.StatusOK
	response.Message = "Success: User Select"
	response.Data = rows

	//change data (rows) to JSON
	byteOfUser, err := json.Marshal(response)
	if err != nil {
		w.Write([]byte("Oops, Something when wrong !!"))
	}
	// set header look
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfUser)
}
