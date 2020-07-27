-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: db_kedaimakan
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `m_categories`
--

DROP TABLE IF EXISTS `m_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_categories` (
  `id` varchar(50) NOT NULL,
  `category_name` varchar(50) DEFAULT NULL,
  `category_status` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_categories`
--

LOCK TABLES `m_categories` WRITE;
/*!40000 ALTER TABLE `m_categories` DISABLE KEYS */;
INSERT INTO `m_categories` VALUES ('3de4e2c8-bff4-11ea-bdc5-2536a289c646','Food',1,'2020-07-07 08:50:31',NULL),('3de57ea4-bff4-11ea-bdc5-2536a289c646','Drink',1,'2020-07-07 08:50:31',NULL),('3de58458-bff4-11ea-bdc5-2536a289c646','Dessert',1,'2020-07-07 08:50:31',NULL);
/*!40000 ALTER TABLE `m_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_customers`
--

DROP TABLE IF EXISTS `m_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_customers` (
  `id` varchar(50) NOT NULL,
  `customer_name` varchar(50) DEFAULT NULL,
  `customer_telp` varchar(15) DEFAULT NULL,
  `customer_address` varchar(100) DEFAULT NULL,
  `customer_status` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_customers`
--

LOCK TABLES `m_customers` WRITE;
/*!40000 ALTER TABLE `m_customers` DISABLE KEYS */;
INSERT INTO `m_customers` VALUES ('1010','NN','NN',NULL,1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('2020','Jution Candra Kirana','8282892','Jakarta Barat',1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('3030','Sugeng Halu','2828288','Bandung Barat',1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('4040','Dewi Kania W','7272728','Depok',1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('5050','Zuriati','1717717','Bandar Lampung',1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('6060','Atta Halilintar','7e97199','Jakarta Selatab',1,'2020-07-08 13:04:05','2020-07-08 13:04:05'),('7070','Deddy Mizwar','3977371','Bandung Selatan',1,'2020-07-08 13:04:05','2020-07-08 13:04:05');
/*!40000 ALTER TABLE `m_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_food_additional_prices`
--

DROP TABLE IF EXISTS `m_food_additional_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_food_additional_prices` (
  `id` varchar(50) NOT NULL,
  `food_add_id` varchar(50) DEFAULT NULL,
  `food_add_price` int DEFAULT NULL,
  `food_add_price_status` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `food_additional_price_fk_idx` (`food_add_id`),
  CONSTRAINT `food_additional_price_fk` FOREIGN KEY (`food_add_id`) REFERENCES `m_food_addtionals` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_food_additional_prices`
--

LOCK TABLES `m_food_additional_prices` WRITE;
/*!40000 ALTER TABLE `m_food_additional_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `m_food_additional_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_food_addtionals`
--

DROP TABLE IF EXISTS `m_food_addtionals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_food_addtionals` (
  `id` varchar(50) NOT NULL,
  `food_add_name` varchar(30) NOT NULL,
  `food_add_status` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_food_addtionals`
--

LOCK TABLES `m_food_addtionals` WRITE;
/*!40000 ALTER TABLE `m_food_addtionals` DISABLE KEYS */;
INSERT INTO `m_food_addtionals` VALUES ('90a1dbba-bff4-11ea-bdc5-2536a289c646','Extra Pedas',1,'2020-07-07 08:52:50','2020-07-07 09:13:45'),('90a1dd33-bff4-11ea-bdc5-2536a289sc46','-',1,'2020-07-07 09:13:45','2020-07-07 09:13:45'),('90a1dd33-cff4-11ea-bdc5-2233a289sc46','Peralatan Makanan',1,'2020-07-07 09:13:45',NULL);
/*!40000 ALTER TABLE `m_food_addtionals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_food_price`
--

DROP TABLE IF EXISTS `m_food_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_food_price` (
  `id` varchar(50) NOT NULL,
  `food_id` varchar(50) DEFAULT NULL,
  `food_price` int DEFAULT NULL,
  `food_price_status` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `m_food_price_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `m_foods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_food_price`
--

LOCK TABLES `m_food_price` WRITE;
/*!40000 ALTER TABLE `m_food_price` DISABLE KEYS */;
INSERT INTO `m_food_price` VALUES ('5f425cea-c894-11ea-9bc4-365a209381cb','03b3a163-f0bc-4a69-9285-5a5d3659d2dd',15000,1,'2020-07-18 08:16:56','2020-07-18 08:16:56'),('925549a8-c894-11ea-9bc4-365a209381cb','476501f6-bff5-11ea-bdc5-2536a289c646',7000,1,'2020-07-18 08:18:22','2020-07-18 08:18:22'),('a14425f6-c894-11ea-9bc4-365a209381cb','476522c6-bff5-11ea-bdc5-2536a289c646',12000,1,'2020-07-18 08:18:47','2020-07-18 08:18:47'),('a94cc852-c894-11ea-9bc4-365a209381cb','476525dc-bff5-11ea-bdc5-2536a289c646',8000,1,'2020-07-18 08:19:00','2020-07-18 08:19:00'),('b4b32696-c894-11ea-9bc4-365a209381cb','56968927-fec9-4019-bad3-831a75283ecf',20000,1,'2020-07-18 08:19:20','2020-07-18 08:19:20'),('bc2e12b4-c894-11ea-9bc4-365a209381cb','5f173083-101c-410c-86eb-5ffea310bd2a',5000,1,'2020-07-18 08:19:32','2020-07-18 08:19:32'),('c40127f6-c894-11ea-9bc4-365a209381cb','c42edf56-2b3c-47ed-bd56-dcd040010139',11000,1,'2020-07-18 08:19:45','2020-07-18 08:19:45');
/*!40000 ALTER TABLE `m_food_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_foods`
--

DROP TABLE IF EXISTS `m_foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_foods` (
  `id` varchar(50) NOT NULL,
  `food_name` varchar(20) DEFAULT NULL,
  `cetegory_id` varchar(50) DEFAULT NULL,
  `food_stock` int DEFAULT NULL,
  `food_price_id` varchar(50) DEFAULT NULL,
  `food_status` varchar(1) DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cetegory_id` (`cetegory_id`),
  KEY `m_foods_ibfk_2_idx` (`food_price_id`),
  CONSTRAINT `m_foods_ibfk_1` FOREIGN KEY (`cetegory_id`) REFERENCES `m_categories` (`id`),
  CONSTRAINT `m_foods_ibfk_2` FOREIGN KEY (`food_price_id`) REFERENCES `m_food_price` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_foods`
--

LOCK TABLES `m_foods` WRITE;
/*!40000 ALTER TABLE `m_foods` DISABLE KEYS */;
INSERT INTO `m_foods` VALUES ('03b3a163-f0bc-4a69-9285-5a5d3659d2dd','Ayam Pop','3de4e2c8-bff4-11ea-bdc5-2536a289c646',10,'5f425cea-c894-11ea-9bc4-365a209381cb','0','2020-07-07 14:11:58','2020-07-07 14:11:58'),('3bcdab75-40fa-4d6a-be32-f30d8e13d3d7','Cakwe','3de4e2c8-bff4-11ea-bdc5-2536a289c646',5,'925549a8-c894-11ea-9bc4-365a209381cb','1','2020-07-20 12:27:53','2020-07-20 12:27:53'),('476501f6-bff5-11ea-bdc5-2536a289c646','Nasi Merah','3de4e2c8-bff4-11ea-bdc5-2536a289c646',5,'925549a8-c894-11ea-9bc4-365a209381cb','0','2020-07-07 08:57:57','2020-07-07 16:25:11'),('476522c6-bff5-11ea-bdc5-2536a289c646','Nasi Tambah Tes','3de4e2c8-bff4-11ea-bdc5-2536a289c646',5,NULL,'1','2020-07-07 08:57:57','2020-07-07 00:00:00'),('476524c4-bff5-11ea-bdc5-2536a289c646','Ayam Goreng','3de4e2c8-bff4-11ea-bdc5-2536a289c646',20,'a14425f6-c894-11ea-9bc4-365a209381cb','1','2020-07-07 08:57:57','2020-07-07 08:57:57'),('476525dc-bff5-11ea-bdc5-2536a289c646','Jus Mangga','3de57ea4-bff4-11ea-bdc5-2536a289c646',5,'a94cc852-c894-11ea-9bc4-365a209381cb','1','2020-07-07 08:57:57','2020-07-07 08:57:57'),('56968927-fec9-4019-bad3-831a75283ecf','Rendang Tes','3de4e2c8-bff4-11ea-bdc5-2536a289c646',1,'b4b32696-c894-11ea-9bc4-365a209381cb','1','2020-07-07 10:11:16','2020-07-07 15:12:35'),('5f173083-101c-410c-86eb-5ffea310bd2a','Nasi Putih','3de4e2c8-bff4-11ea-bdc5-2536a289c646',50,'bc2e12b4-c894-11ea-9bc4-365a209381cb','1','2020-07-07 12:41:08','2020-07-07 12:41:08'),('ad9afcef-691a-4638-ac14-5c6672d93a65','Gulali','3de4e2c8-bff4-11ea-bdc5-2536a289c646',5,'925549a8-c894-11ea-9bc4-365a209381cb','1','2020-07-20 12:19:47','2020-07-20 12:19:47'),('bd5a0c93-cf9e-496f-81b8-2204e1ff5e81','Cakweeee','3de4e2c8-bff4-11ea-bdc5-2536a289c646',0,'c40127f6-c894-11ea-9bc4-365a209381cb','1','2020-07-20 12:40:39','2020-07-20 12:40:39'),('c42edf56-2b3c-47ed-bd56-dcd040010139','Ikan Bakar Lele','3de4e2c8-bff4-11ea-bdc5-2536a289c646',4,NULL,'1','2020-07-08 09:51:34','2020-07-08 09:51:34'),('f59dfc16-b1ff-4835-b1cc-c202b7721337','Nasi Tambah Tes','3de4e2c8-bff4-11ea-bdc5-2536a289c646',10,NULL,'0','2020-07-07 15:05:13','2020-07-07 15:05:13');
/*!40000 ALTER TABLE `m_foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_users`
--

DROP TABLE IF EXISTS `m_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `password` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_users`
--

LOCK TABLES `m_users` WRITE;
/*!40000 ALTER TABLE `m_users` DISABLE KEYS */;
INSERT INTO `m_users` VALUES (1,'admin','Jution','Candra','21232f297a57a5a743894a0e4a801fc3');
/*!40000 ALTER TABLE `m_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_transaction_details`
--

DROP TABLE IF EXISTS `t_transaction_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_transaction_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota_number` varchar(15) NOT NULL,
  `food_id` varchar(50) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `food_add_id` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `food_id_fk_idx` (`food_id`),
  KEY `transaction_id_idx` (`nota_number`),
  KEY `add_food_fk_idx` (`food_add_id`),
  CONSTRAINT `add_food_fk` FOREIGN KEY (`food_add_id`) REFERENCES `m_food_addtionals` (`id`),
  CONSTRAINT `food_id_fk` FOREIGN KEY (`food_id`) REFERENCES `m_foods` (`id`),
  CONSTRAINT `transaction_id` FOREIGN KEY (`nota_number`) REFERENCES `t_transactions` (`nota_number`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_transaction_details`
--

LOCK TABLES `t_transaction_details` WRITE;
/*!40000 ALTER TABLE `t_transaction_details` DISABLE KEYS */;
INSERT INTO `t_transaction_details` VALUES (7,'S20200707','476524c4-bff5-11ea-bdc5-2536a289c646',3,'90a1dbba-bff4-11ea-bdc5-2536a289c646','2020-07-07 10:29:52','2020-07-07 10:29:52'),(8,'S20200707001','476525dc-bff5-11ea-bdc5-2536a289c646',3,'90a1dd33-bff4-11ea-bdc5-2536a289sc46','2020-07-07 11:12:58','2020-07-07 10:29:52'),(9,'S20200708001','476525dc-bff5-11ea-bdc5-2536a289c646',1,'90a1dd33-cff4-11ea-bdc5-2233a289sc46','2020-07-07 11:54:37','2020-07-07 11:54:37'),(10,'S20200709001','476525dc-bff5-11ea-bdc5-2536a289c646',1,'90a1dd33-cff4-11ea-bdc5-2233a289sc46','2020-07-07 11:57:25','2020-07-07 11:57:25'),(11,'S20200911002','476524c4-bff5-11ea-bdc5-2536a289c646',1,'90a1dd33-cff4-11ea-bdc5-2233a289sc46','2020-07-07 16:26:25',NULL),(12,'S202007111033','c42edf56-2b3c-47ed-bd56-dcd040010139',1,'90a1dd33-cff4-11ea-bdc5-2233a289sc46','2020-07-08 10:33:48',NULL);
/*!40000 ALTER TABLE `t_transaction_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_transactions`
--

DROP TABLE IF EXISTS `t_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_transactions` (
  `nota_number` varchar(15) NOT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `customer_id` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`nota_number`),
  KEY `customer_fk_idx` (`customer_id`),
  CONSTRAINT `customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `m_customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_transactions`
--

LOCK TABLES `t_transactions` WRITE;
/*!40000 ALTER TABLE `t_transactions` DISABLE KEYS */;
INSERT INTO `t_transactions` VALUES ('S20200707','2020-07-07 00:00:00','2020','2020-07-07 10:29:52','2020-07-07 10:29:52'),('S20200707001','2020-07-07 11:12:58','3030','2020-07-07 11:12:58','2020-07-07 11:12:58'),('S20200708001','2020-07-07 11:54:37','4040','2020-07-07 11:54:37',NULL),('S20200709001','2020-07-07 11:57:25','5050','2020-07-07 11:57:25',NULL),('S202007111033','2020-07-08 10:33:48','6060','2020-07-08 10:33:48',NULL),('S20200911002','2020-07-07 16:26:25','1010','2020-07-07 16:26:25',NULL);
/*!40000 ALTER TABLE `t_transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-20 15:08:40
