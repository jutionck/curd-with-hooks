***PRIVATE*** <br>
Buatlah sebuah aplikasi kedai makan Mas Bambang dengan kententuan sbb
1. Buatlah CRUD daftar menu
2. Menu berisi informasi nama menu, harga, jenis, stok
3. Apabila pelanggan membeli produk yang stok nya kosong, mengembalikan ‘<nama produk> sementara kosong’
4. Buat perhitungan total belanja
6. Apabila pelanggan membeli ekstra pedas, dikenakan biaya tambahan Rp. 1500
7. Tambah peralatan makan, biaya Rp. 2000
8. Laporan omzet harian


*** REQUEST METHOD FOR FOOD SERVICE **
<pre>
GET = loaclhost:9000/food
GET = localhost:9000/food/{food_code}
POST = loaclhost:9000/food
PUT = localhost:9000/food/{food_code}
DELETE = localhost:9000/food/{food_code}
</pre>

<pre>
Create Format Food

[
    {
        "food_name": "Nasi Putih",
        "food_price": 5000,
        "food_category": {
            "category_code": "3de4e2c8-bff4-11ea-bdc5-2536a289c646"
        },
        "food_stock": 50
    }
]
</pre>

<pre>
UPDATE Format Food

{
    "food_name": "Jus Mangga",
    "food_price": 10000,
    "food_category": {
        "category_code": "3de57ea4-bff4-11ea-bdc5-2536a289c646"
    },
    "food_stock": 3
}
</pre>

*** REQUEST METHOD FOR TRANSACTION SERVICE **
<pre>
GET = loaclhost:9000/transaction
POST = loaclhost:9000/transaction
</pre>

<pre>
CREATE Format Transaction

{
    "nota_number": "S20200811001",
    "detail_transaction": {
        "qty": 3,
        "food": {
            "food_code": "476524c4-bff5-11ea-bdc5-2536a289c646"
        },
        "additional_food": {
            "food_add_code": "90a1dd33-cff4-11ea-bdc5-2233a289sc46"
        }
    },
    "customer_name": "Deddy Corbuzier"
}
</pre>

*** REQUEST METHOD FOR REPORT SERVICE **
<pre>
GET = loaclhost:9000/report/day
</pre>

<pre>
{
    "status": 200,
    "message": "Success: Report Of The Day",
    "data": [
        {
            "report": {
                "nota_number": "S20200707",
                "nota_date": "2020-07-07 00:00:00",
                "detail_transaction": {
                    "transaction_id": "",
                    "qty": 3,
                    "food": {
                        "food_code": "476524c4-bff5-11ea-bdc5-2536a289c646",
                        "food_name": "Ayam Goreng",
                        "food_price": 10000,
                        "food_category": {
                            "category_code": "",
                            "category_name": ""
                        },
                        "food_stock": 0,
                        "created_at": "",
                        "updated_at": ""
                    },
                    "additional_food": {
                        "food_add_code": "",
                        "food_add": "Extra Pedas",
                        "price_add": 1500
                    }
                },
                "total_transaction": 31500,
                "customer_name": "Jution Candra Kirana"
            }
        },
        {
            "report": {
                "nota_number": "S20200707001",
                "nota_date": "2020-07-07 11:12:58",
                "detail_transaction": {
                    "transaction_id": "",
                    "qty": 3,
                    "food": {
                        "food_code": "476525dc-bff5-11ea-bdc5-2536a289c646",
                        "food_name": "Jus Mangga",
                        "food_price": 10000,
                        "food_category": {
                            "category_code": "",
                            "category_name": ""
                        },
                        "food_stock": 0,
                        "created_at": "",
                        "updated_at": ""
                    },
                    "additional_food": {
                        "food_add_code": "",
                        "food_add": "-",
                        "price_add": 0
                    }
                },
                "total_transaction": 30000,
                "customer_name": "Sugeng Halu"
            }
        },
        {
            "report": {
                "nota_number": "S20200708001",
                "nota_date": "2020-07-07 11:54:37",
                "detail_transaction": {
                    "transaction_id": "",
                    "qty": 1,
                    "food": {
                        "food_code": "476525dc-bff5-11ea-bdc5-2536a289c646",
                        "food_name": "Jus Mangga",
                        "food_price": 10000,
                        "food_category": {
                            "category_code": "",
                            "category_name": ""
                        },
                        "food_stock": 0,
                        "created_at": "",
                        "updated_at": ""
                    },
                    "additional_food": {
                        "food_add_code": "",
                        "food_add": "Peralatan Makanan",
                        "price_add": 2000
                    }
                },
                "total_transaction": 12000,
                "customer_name": "Dewi Kania W"
            }
        },
        {
            "report": {
                "nota_number": "S20200709001",
                "nota_date": "2020-07-07 11:57:25",
                "detail_transaction": {
                    "transaction_id": "",
                    "qty": 1,
                    "food": {
                        "food_code": "476525dc-bff5-11ea-bdc5-2536a289c646",
                        "food_name": "Jus Mangga",
                        "food_price": 10000,
                        "food_category": {
                            "category_code": "",
                            "category_name": ""
                        },
                        "food_stock": 0,
                        "created_at": "",
                        "updated_at": ""
                    },
                    "additional_food": {
                        "food_add_code": "",
                        "food_add": "Peralatan Makanan",
                        "price_add": 2000
                    }
                },
                "total_transaction": 12000,
                "customer_name": "Zuriati"
            }
        }
    ]
}
</pre>
