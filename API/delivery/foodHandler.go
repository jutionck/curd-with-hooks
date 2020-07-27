package delivery

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jutionck/go-api-rumahmakan/delivery/middleware"
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/usecase/food"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"
	"net/http"
)

type FoodHandler struct {
	foodUsecase food.FoodUsecaseInterface
}


func FoodRoute(r *mux.Router, service food.FoodUsecaseInterface) {
	foodHandler := FoodHandler{foodUsecase: service}
	r.Use(middleware.ActivityLogMiddleware)
	s := r.PathPrefix("/food").Subrouter()
	s.HandleFunc("", foodHandler.ReturnAllFoods).Methods(http.MethodGet)
	s.HandleFunc("/stock", foodHandler.ReturFoodStock).Methods(http.MethodGet)
	s.HandleFunc("", foodHandler.ReturnCreateFood).Methods(http.MethodPost)
	s.HandleFunc("/{food_code}", foodHandler.ReturnFindFood).Methods(http.MethodGet)
	s.HandleFunc("/{food_code}", foodHandler.ReturnUpdateFood).Methods(http.MethodPut)
	s.HandleFunc("/{food_code}", foodHandler.ReturnDeleteFood).Methods(http.MethodDelete)
}

func (f *FoodHandler) ReturnAllFoods(w http.ResponseWriter, r *http.Request) {
	var response utils.Response
	rows, err := f.foodUsecase.GetAllFoods()
	if err != nil {
		w.Write([]byte("Data Not Found"))
	}

	response.Status = http.StatusOK
	response.Message = "Success: Food Select"
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

func (f *FoodHandler) ReturFoodStock(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	code := utils.DecodePathVariable("food_code", r)
	result, err := f.foodUsecase.GetStock(code)
	data, err := json.Marshal(result)
	if err != nil {
		log.Println(err)
		w.Write([]byte("Error occurred"))
	} else {
		w.Header().Set("content-type", "application/json")
		w.Write(data)
	}
}

func (f *FoodHandler) ReturnFindFood(w http.ResponseWriter, r *http.Request) {
	//var responseStud utils.Respons
	w.Header().Set("Content-Type", "application/json")
	code := utils.DecodePathVariable("food_code", r)
	result, err := f.foodUsecase.FindsFoods(code)
	data, err := json.Marshal(result)
	if err != nil {
		log.Println(err)
		w.Write([]byte("Error occurred"))
	} else {
		w.Header().Set("content-type", "application/json")
		w.Write(data)
	}
}

func (f *FoodHandler) ReturnCreateFood(w http.ResponseWriter, r *http.Request) {
	var food models.Food
	var response utils.Response
	err := json.NewDecoder(r.Body).Decode(&food) // json ke struct
	if err != nil {
		w.Write([]byte("Error"))
		log.Print(err)
	}

	err = f.foodUsecase.SqlInsertFood(&food)
	if err != nil {
		w.Write([]byte(err.Error()))
		log.Print(err)
		return
	}
	response.Status = http.StatusOK
	response.Message = "Success: Foods Insert !"
	response.Data = food

	byteOfProduct, err := json.Marshal(response)
	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfProduct)
}

func (f *FoodHandler) ReturnUpdateFood(w http.ResponseWriter, r *http.Request) {
	var food models.Food
	var response utils.Response
	code := utils.DecodePathVariable("food_code", r)
	_ = json.NewDecoder(r.Body).Decode(&food)
	err := f.foodUsecase.SqlUpdateFood(code, &food)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
	}

	response.Status = http.StatusOK
	response.Message = "Success: Food Update !"
	byteOfProduct, err := json.Marshal(response)

	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfProduct)
}

func (f *FoodHandler) ReturnDeleteFood(w http.ResponseWriter, r *http.Request) {
	var response utils.Response
	code := utils.DecodePathVariable("food_code", r)
	err := f.foodUsecase.SqlDeleteFood(code)
	response.Status = http.StatusOK
	response.Message = "Success: Food Delete!"
	byteOfProduct, err := json.Marshal(response)
	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(byteOfProduct)
}
