package main

import (
	"github.com/jutionck/go-api-rumahmakan/config"
	"github.com/jutionck/go-api-rumahmakan/delivery"
)

func main() {
	db, _ := config.ConfifDb()
	router := config.CreateRouter()
	delivery.Init(router, db)
	config.RunServer(router)
}
