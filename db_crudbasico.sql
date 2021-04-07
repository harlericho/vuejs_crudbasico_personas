DROP TABLE IF EXISTS `crud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crud` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `edad` int NOT NULL,
  `fecha_c` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` char(1) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

