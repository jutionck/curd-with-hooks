package utils

const (
	FORMART_DATE = `2006-01-02 15:04:05`
	SELECT_ALL_FOODS = `SELECT 
    f.id,
    f.food_name,
    fp.food_price,
    c.id,
    c.category_name,
    f.food_stock,
	f.created_at,
	f.updated_at
FROM
    m_foods f
        JOIN
    m_categories c ON c.id = f.cetegory_id
		JOIN
	m_food_price fp ON fp.food_id = f.id
WHERE
    f.food_status = 1`

	SELECT_FOODS_BYID = `SELECT 
    f.id,
    f.food_name,
    fp.food_price,
    c.id,
    c.category_name,
    f.food_stock,
	f.created_at,
	f.updated_at
FROM
    m_foods f
        JOIN
    m_categories c ON c.id = f.cetegory_id
		JOIN
	m_food_price fp ON fp.food_id = f.id
WHERE
    f.food_status = 1 AND f.id=?`

	SQL_INSERT_FOOD = `INSERT INTO m_foods(id,food_name,cetegory_id,food_stock,food_price_id,created_at,updated_at) VALUES(?,?,?,?,?,?,?)`
	SQL_UPDATE_FOOD = `UPDATE m_foods SET food_name=?, food_price=?,cetegory_id=?,food_stock=?,food_status='1',updated_at=? WHERE id=?`
	SQL_DELETE_FOOD = `UPDATE m_foods SET food_status=0 WHERE id=?`

	SELECT_FOOD_STOCK = `SELECT m_foods.id,m_foods.food_name,m_foods.food_stock FROM m_foods WHERE food_stock=0 AND id = ?`
	SELECT_ALL_TRANSACTION = `SELECT 
    t.nota_number,
    t.transaction_date,
    t.customer_name,
    td.food_id,
    f.food_name,
    f.food_price,
    td.qty,
    madd.food_add,
    madd.price_add,
    SUM((td.qty * f.food_price)+madd.price_add) AS Total
FROM
    t_transactions t
        JOIN
    t_transaction_details td ON td.nota_number = t.nota_number
        JOIN
    m_foods f ON f.id = td.food_id
    JOIN m_food_addtionals madd ON madd.id=td.additional_food
GROUP BY f.food_name , t.nota_number , td.food_id , td.qty , td.additional_food`
	INSERT_TRANSACTION = `INSERT INTO t_transactions(nota_number,transaction_date,customer_name) VALUES(?,?,?)`
	INSERT_TRANSACTION_DETAIL = `INSERT INTO t_transaction_details (nota_number,food_id,additional_food,qty) VALUES(?,?,?,?)`

	SELECT_REPORT_BYDAY = `SELECT 
    t.nota_number,
    t.transaction_date,
    t.customer_name,
    td.food_id,
    f.food_name,
    f.food_price,
    td.qty,
    madd.food_add,
    madd.price_add,
    SUM((td.qty * f.food_price)+madd.price_add) AS Total
FROM
    t_transactions t
        JOIN
    t_transaction_details td ON td.nota_number = t.nota_number
        JOIN
    m_foods f ON f.id = td.food_id
    JOIN m_food_addtionals madd ON madd.id=td.additional_food
GROUP BY t.transaction_date,t.nota_number,td.food_id,td.qty,td.additional_food`

	SQL_ALL_USER = `SELECT id,username,first_name,last_name,password FROM m_users`
	SQL_GET_USER = `SELECT id, 
		username, 
		first_name, 
		last_name, 
		password 
		FROM users WHERE username=?`
	)


