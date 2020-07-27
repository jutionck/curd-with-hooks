package food

import (
	"database/sql"
	"github.com/google/uuid"
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"
	"time"
)

type FoodRepository struct {
	Conn *sql.DB
}

func (f *FoodRepository) GetStock(foodCode string) (models.FoodStock, error) {
	var foodStok models.FoodStock
	query := utils.SELECT_FOOD_STOCK
	err := f.Conn.QueryRow(query, foodCode).Scan(&foodStok.FoodCode, &foodStok.FoodName, &foodStok.FoodStock)
	if err != nil {
		return foodStok, err
	}
	return foodStok, nil
}

func (f *FoodRepository) GetAllFoods() ([]*models.Food, error) {
	var foods []*models.Food
	rows, err := f.Conn.Query(utils.SELECT_ALL_FOODS)
	if err != nil {
		log.Print(err)
	}
	for rows.Next() {
		food := models.Food{}
		if err := rows.Scan(&food.FoodCode, &food.FoodName, &food.FoodPrice,&food.FoodCategory.CategoryCode,&food.FoodCategory.CategoryName,&food.FoodStock, &food.CreatedAt, &food.UpdatedAt); err != nil {
			log.Fatalf("%v", err)
			return nil, err
		} else {
			foods = append(foods, &food)
		}
	}
	return foods, nil
}

func (f *FoodRepository) FindsFoods(foodCode string) (models.Food, error) {
	var food models.Food
	query := utils.SELECT_FOODS_BYID
	err := f.Conn.QueryRow(query, foodCode).Scan(&food.FoodCode, &food.FoodName, &food.FoodPrice,&food.FoodCategory.CategoryCode,&food.FoodCategory.CategoryName,&food.FoodStock,&food.CreatedAt, &food.UpdatedAt)
	if err != nil {
		return food, err
	}
	return food, nil
}

func (f *FoodRepository) SqlInsertFood(food *models.Food) error {
	id := uuid.New()
	food.FoodCode = id.String()
	createdAt := time.Now().Format(utils.FORMART_DATE)
	food.CreatedAt = createdAt
	updatedAt := time.Now().Format(utils.FORMART_DATE)
	food.UpdatedAt = updatedAt
	tx, err := f.Conn.Begin()
	query := utils.SQL_INSERT_FOOD
	stmt, err := tx.Exec(query, id,food.FoodName,food.FoodCategory.CategoryCode,food.FoodStock,food.FoodPrice,createdAt,updatedAt)
	if err != nil {
		tx.Rollback()
		log.Fatal(err)
	}
	_, err = stmt.LastInsertId()


	if err != nil {
		log.Fatal(err)
	}
	return tx.Commit()
}

func (f *FoodRepository) SqlUpdateFood(foodCode string, food *models.Food) error {
	updatedAt := time.Now().Format(utils.FORMART_DATE)
	food.UpdatedAt = updatedAt
	tx, err := f.Conn.Begin()
	query := utils.SQL_UPDATE_FOOD
	stmt, err := tx.Prepare(query)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(food.FoodName,food.FoodPrice,food.FoodCategory.CategoryCode,food.FoodStock,updatedAt, foodCode)
	if err != nil {
		return tx.Rollback()
	}

	stmt.Close()
	return tx.Commit()
}

func (f *FoodRepository) SqlDeleteFood(foodCode string) error {
	tx, err := f.Conn.Begin()
	query := utils.SQL_DELETE_FOOD
	stmt, err := tx.Prepare(query)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(foodCode)
	if err != nil {
		return tx.Rollback()
	}

	stmt.Close()
	return tx.Commit()
}

func NewFoodRepository(db *sql.DB) FoodRepoInterface {
	return &FoodRepository{Conn: db}
}