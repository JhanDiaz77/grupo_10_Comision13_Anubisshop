-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: anubisshop_db1
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `province` varchar(45) NOT NULL,
  `number` varchar(45) NOT NULL,
  `postal_code` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_userId_IDX` (`user_id`) USING BTREE,
  CONSTRAINT `addresses_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Juguete'),(2,'Accesorios'),(3,'Almohadas y camas'),(4,'Alimentos'),(5,'Higiene');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updateAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_FK` (`order_id`),
  KEY `order_items_FK_1` (`product_id`),
  CONSTRAINT `order_items_FK` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `state` varchar(45) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_FK` (`user_id`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `promo` varchar(20) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `images` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `stock` tinyint(4) DEFAULT NULL,
  `product_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (22,'Hueso de goma',300,'Hueso especialmente para perros anti estress',1,'Oferta',15,'1656402338051_img_.jpg','2022-06-28 07:45:38',NULL,NULL,NULL),(23,'Pelota de tenis',325,'Pelota de goma maciza que rebota. Este juguete de goma ha sido especialmente diseñado para satisfacer el natural comportamiento mordedor y dar la máxima posibilidad de roer que sienten los perros activos, estimulando el juego y el ejercicio, al mismo tiempo que mantiene la salud bucal al al masajear sus encías y fortalecer todo el sistema muscular de su mandíbula',1,'Destacado',40,'1656402419218_img_.jpg','2022-06-28 07:46:59',NULL,NULL,NULL),(24,'Pelotas de soga',200,'Pelota realizada con sogas anudadas que además de servir para que el perro de divierta ayuda a la limpieza dental.',1,'Ninguno',0,'1656402505960_img_.jpg','2022-06-28 07:48:26',NULL,NULL,NULL),(25,'Rascador',200,'Elaborado con cartón corrugado muy resistente ofrece a su gato una superficie ideal donde afilarse las uñas. Gracias a su diseño exclusivo quedará fantástico en cualquier lugar de su casa. Los gatos necesitan arañar por instinto. Ésto les ayuda a afilar sus uñas, eliminar las capas muertas de sus garras, estirar y flexionar sus cuerpos. Además ayuda a proteger los muebles de los arañazos. Incluye hierba para gatos.',1,'Oferta',5,'1656402583659_img_.jpg','2022-06-28 07:49:43',NULL,NULL,NULL),(26,'Varita con plumas para gato',300,'Seguramente este sea el juego favorito de los gatos: agita la varita Zootec delante del gato y verás lo rápido que reacciona ante las coloridas plumas. Con este juguete despertarás el instinto cazador de tu mascota gracias a las ligeras plumas que se mueven suavemente.',1,'Oferta',10,'1656402663385_img_.jpg','2022-06-28 07:51:03',NULL,NULL,NULL),(27,'Arnes con forma de hueso',800,'Cómodo y seguro arnés para todo tipo de perros. Les entrega comodidad y libertad de movimientos, pero también permite aplicar control facilmente en caso de ser necesario. Totalmente ergonómico y extra robusto, está acolchado en su interior y tiene 2 mecanismos de ajuste. Sus líneas robustas no alteran la calidad total del tejido, que es impermeable, extra resistente y sin embargo, delicado con la piel del perro, al tener las costuras ocultas para evitar roces y ser un tejido transpirable a la piel. El arnés además, viene provisto de un completo sistema reflectante en sus costuras y acabados. En su parte superior dispone de una medialuna de acero para enganchar la correa, pero, en el caso de querer tener un control más preciso del perro, también tiene un agarre muy resistente para sujetar a su mascota y tener el control total, incluso en caso de tirones. Gracias a su diseño ergonómico, consigue una óptima distribución de las fuerzas evitando lastimar a tu mascota.',2,'Destacado',60,'1656402734072_img_.jpg','2022-06-28 07:52:14',NULL,NULL,NULL),(28,'Bebedero portátil',500,'Si te gusta salir de paseo con tu mascota, este producto es perfecto para ti. Se trata de una botella de plástico unida a una pieza que sirve a la vez como plato y como estuche para la botella.  Es muy práctico para transportar agua limpia para tu perro durante cualquier actividad (paseo en coche, marcha a pie, camping), incluso para elpaseo diario en el parque en épocas de calor, cuando hay un mayor riesgo de deshidratación. El novedoso diseño botella y taza en uno proporciona un transporte fácil y un consumo de agua segura para el animal. Simplemente aprieta la botella para que el agua se descargue en la taza. Tiene una correa que te permite cargarlo cómodamente y tener ambas manos libres. Disponible en tamaño 500ml',2,'Ninguno',0,'1656402953779_img_.jpg','2022-06-28 07:55:53',NULL,NULL,NULL),(29,'Collares de nylon clásicos',200,'Collares para perros de alta gama realizados en polipropileno. Este modelo otorga un toque de distinción y belleza a la mascota. Excelente terminación y diseño. Venta mayorista. Modelos y colores variados. Medidas: 15mm de ancho x 30cms de largo. 20mm de ancho x 40cms de largo. 20mm de ancho x 50cms de largo. 30mm de ancho x 60cms de largo. 30mm de ancho x 65cms de largo. 40mm de ancho x 70cms de largo. Hebilla doble pitón.',2,'Oferta',10,'1656402904840_img_.jpg','2022-06-28 07:55:04',NULL,NULL,NULL),(30,'Comedero bebedero con botella',600,'Comedero Bebedero doble con rosca. - para botella de hasta 1.5 litros. - el platito del alimento se saca para lavarlo. - mide: 34cms de largo x 6 cms',2,'Ninguno',10,'1656403049573_img_.jpg','2022-06-28 07:57:29',NULL,NULL,NULL),(31,'Correa de cadena',400,'La unión de la manija está asegurada con remaches. La cadena termina en un mosquetón muy seguro para amarrarla al collar. Ideal para perros que muerden la correa. 120 CM',2,'Oferta',5,'1656403120561_img_.jpg','2022-06-28 07:58:40',NULL,NULL,NULL),(32,'Correa trenzada',260,'Esta correa es ideal para perros de gran tamaño o que tienen mucha fuerza. Con su diseño de soga plástica trenzada y su gancho reforzado garantiza resistencia y seguridad para cientos de paseos.  Medidas: 1.35 de largo, aprox 3 cms de diámetro',2,'Oferta',5,'1656403418217_img_.jpg','2022-06-28 08:03:38',NULL,NULL,NULL),(33,'Mochila transportadora',1600,'Mochila cómoda y acolchada que para transportar a su mascota en un espacio compacto y seguro, con aberturas para que pueda disfrutar del sol y el aire fresco. Contiene una correa corta con mosquetón en su interior para enganchar el collar de su mascota a la mochila y brindar más seguridad. Se ofrece en 2 tamaños: chico y mediano. Importante: No se puede seleccionar color. Los colores está sujetos a la disponibilidad al momento de armar el pedido.',2,'Destacado',45,'1656403503112_img_.jpg','2022-06-28 08:05:03',NULL,NULL,NULL),(34,'Plato plegable silicona',500,'Práctico comedero/bebedero para llevar en tus paseos o viajes con tu mascota. Es de silicona, se puede plegar para que sea de fácil traslado. Incluye mosquetón para enganchar en la correa, collar, en tu mochila o donde prefieras. Tamaño: -Chico: Diámetro superior 13cms, Diámetro base: 9 cms, Altura: 5 cms. -Mediano: Diámetro superior 17,5cms, Diámetro base: 12 cms, Altura: 6,5 cms',2,'Ninguno',5,'1656403558482_img_.jpg','2022-06-28 08:05:58',NULL,NULL,NULL),(35,'Cama colchon',800,'Colchonetas 60 x 80 cm, ideal para el perro!, varios modelos.',1,'Oferta',10,'1656403800157_img_.jpg','2022-06-28 08:10:00',NULL,NULL,NULL),(36,'Cama marvel',1000,'La Cama Marvel, es una opción ideal para darle a tu mascota un lugar de descanso donde se sienta cómoda y relajada. Está fabricada con materiales térmicos que protegen a tu perro de las temperaturas más frías, asegurando que pueda dormir con todas las comodidades. Asimismo, su diseño divertido de Spider Man la vuelve una adición moderna y atractiva para cualquier hogar amante de Marvel. Incluye un almohadón con un divertido diseño de Spider Man. Medidas:         65x45 cm',3,'Destacado',50,'1656413480901_img_.jpg','2022-06-28 10:51:20',NULL,NULL,NULL),(37,'Camas',800,'Colchoneta impermeable gigante. Relleno espuma de polietileno (troqueles), mantiene mejor la altura y mejor aislación térmica. - Variedad de colores.\r\n      ',3,'Ninguno',10,'1656413573767_img_.jpg','2022-06-28 10:52:53',NULL,NULL,NULL),(38,'Igloo para perro marvel',1300,'Cueva para mascota CAPITAN AMÉRICA - MARVEL©. Las cuevas son perfectas para que tu mascota pueda descansar muy cómoda. Es ideal para las mascotas más FAN y les encante estar acurrucados a la hora de dormir. Su tejido es muy suave y acogedor, hará que tu mascota esté calentito en su interior. La entrada de la parte frontal proporciona un acceso fácil, además gracias a su relleno esponjoso proporcionará una nuena sensación de bienestar y su mascota se sentirá muy segura. Su base es antideslizante y muy resistente por lo que evitará que se desplace, es aislante total de la humedad, el frío o el calor del suelo. El cojin es extraible. Funda / Cover: 50% POLYESTER 50% COTTON Relleno / Padding: 100% POLYESTER Base / Base: 100% POLYESTER. Medidas: 40x45 Cm\r\n       ',3,'Destacado',55,'1656413627976_img_.jpg','2022-06-28 10:53:47',NULL,NULL,NULL),(39,'Igloo para perro star wars',1300,'Cueva para mascota STAR WARS R2-D2©. Las cuevas son perfectas para que tu mascota pueda descansar muy cómoda. Es ideal para las mascotas más FAN y les encante estar acurrucados a la hora de dormir. Su tejido es muy suave y acogedor, hará que tu mascota esté calentito en su interior. La entrada de la parte frontal proporciona un acceso fácil, además gracias a su relleno esponjoso proporcionará una nuena sensación de bienestar y su mascota se sentirá muy segura. Su base es antideslizante y muy resistente por lo que evitará que se desplace, es aislante total de la humedad, el frío o el calor del suelo. El cojin es extraible. Funda / Cover: 50% POLYESTER 50% COTTON Relleno / Padding: 100% POLYESTER Base / Base: 100% POLYESTER. Medidas: 40x45 Cm\r\n       ',3,'Destacado',45,'1656413688954_img_.jpg','2022-06-28 10:54:48',NULL,NULL,NULL),(40,'proplan cat adult',2500,'Alimento para gatos mayores a 1 año con actividad normal. Calidad Super Premium. Los gatos adultos tienen diferentes hábitos y por lo tanto, diferentes necesidades nutricionales que los gatitos o los gatos maduros. Estas necesidades nutricionales pueden ser satisfechas por medio de una alimentación específicamente diseñada para su estilo de vida y su edad. Cuidar la nutrición de tu gato lo ayudará a mantenerse sano en el futuro. PRO PLAN® Cat Adult con OptiDigest formulados con OptiDigest y pollo o salmón fresco, proporcionan una nutrición completa, equilibrada y de alta calidad para gatos adultos entre 1 y 7 años.\r\n        ',4,'Ninguno',10,'1656413788091_img_.jpg','2022-06-28 10:56:28',NULL,NULL,NULL),(41,'proplan cat kitten-x7,5-kg',3000,'Alimento rico en vitaminas y minerales para Gatitos hasta el 1° año. Calidad Super Premium. Formulado con OptiStart para gatitos en etapa de desarrollo (de 1 a 12 meses de edad) y hembras gestantes y lactantes. Purina Pro Plan® Kitten apoya la respuesta inmunológica, gracias a la presencia de anticuerpos naturales del calostro y antioxidantes. Esto produce una mejor respuesta a la vacunación, mayor protección frente a patógenos, una óptima absorción de nutrientes y en general una mejor salud de los gatitos.\r\n        ',4,'Destacado',40,'1656413893259_img_.jpg','2022-06-28 10:58:13',NULL,NULL,NULL),(42,'proplan cat sterilized x7,5-kg',3000,'Alimento para gatos castrados Super Premium, Salmon y Arroz. Pro Plan® Cat Sterilized con Optirenal, esta especialmente elaborado para gatos adultos castrados o esterilizados. Formulado con OptiRenal, ayuda a proteger la función renal de los gatos. Incluye también salmón fresco, aportando mayor digestibilidad y manteniendo las características nutritivas del pescado fresco. Nutrición de vanguardia para una protección completa y una óptima salud.\r\n       ',4,'Oferta',10,'1656413959360_img_.jpg','2022-06-28 10:59:19',NULL,NULL,NULL),(43,'Royal canin maxi adulto x15-kg',2000,'Alimento para perros de raza grande de 15 meses a 8 años de edad. Promueve una óptima digestibilidad gracias a su fórmula exclusiva que incluye proteínas de muy alta calidad y un aporte adecuado de fibras dietarias. SOPORTE OSTEOARTICULAR. Contribuye a la salud de los huesos y de las articulaciones, particularmente sometidas al estrés en los perros de tamaño grande. ALTA PALATABILIDAD. Satisface el apetito de los perros de talla grande gracias a sus saborizantes rigurosamente seleccionados. OMEGA 3: EPA - DHA.   Fórmula enriquecida con ácidos grasos omega 3 (EPA-DHA) que ayudan a mantener una piel saludable.\r\n       ',4,'Ninguno',15,'1656414019695_img_.jpg','2022-06-28 11:00:19',NULL,NULL,NULL),(44,'royal canin medium adulto x3-kg',2500,'Alimento para perros adultos de raza mediana de 1 a 7 años de edad. Ayuda a reforzar las defensas naturales gracias a un complejo de antioxidantes patentado (vitamina E, vitamina C, luteína y taurina) y a los manano-oligosacáridos. ALTA DIGESTIBILIDAD. Ayuda a promover una óptima digestibilidad gracias a su exclusiva fórmula que incluye proteínas de muy alta calidad y un aporte adecuado de fibras dietarias. OMEGA 3: EPA Y DHA. Fórmula enriquecida con ácidos grasos omega 3 (EPA-DHA) que ayudan a mantener una piel saludable. ALTA PALATABILIDAD. Estimula el apetito de los perros de talla mediana, gracias a la incorporación de aromas naturales cuidadosamente seleccionados.\r\n       ',4,'Destacado',50,'1656414072614_img_.jpg','2022-06-28 11:01:12',NULL,NULL,NULL),(45,'royal-canin-mini-adulto-x3-kg',2500,'Alimento para perros de raza pequeña de 10 meses a 8 años de edad. Contribuye a mantener el peso ideal de los perros de talla pequeña, teniendo en cuenta sus elevadas necesidades energéticas a través de un contenido adaptado en calorías (3914 kcal/kg) y proteínas (27%). Se encuentra enriquecido con L-carnitina, que promueve el metabolismo de las grasas. PALATABILIDAD REFORZADA. Ayuda a satisfacer el apetito caprichoso de los perros de talla pequeña gracias a su fórmula y a la selección de saborizantes exclusivos. CALIDAD DEL PELAJE. Contribuye a mejorar el estado de la piel y el pelo, gracias al aporte de nutrientes específicos y su alto contenido de EPA-DHA. CONTROL DEL SARRO. Ayuda a reducir la formación de sarro gracias a la adición en su fórmula de agentes quelantes de calcio (politrifosfato de sodio).\r\n       ',4,'Ninguno',10,'1656414159941_img_.jpg','2022-06-28 11:02:39',NULL,NULL,NULL),(46,'royal canin mini junior x3-kg',2000,'Práctico comedero/bebedero para llevar en tus paseos o viajes con tu mascota. Es de silicona, se puede plegar para que sea de fácil traslado. Incluye mosquetón para enganchar en la correa, collar, en tu mochila o donde prefieras. Tamaño: -Chico: Diámetro superior 13cms, Diámetro base: 9 cms, Altura: 5 cms. -Mediano: Diámetro superior 17,5cms, Diámetro base: 12 cms, Altura: 6,5 cms\r\n      ',4,'Ninguno',10,'1656414211473_img_.jpg','2022-06-28 11:03:31',NULL,NULL,NULL),(47,'Cepillo cardina mango de madera',600,'Cardina con superficie plana, la cual ayuda a sacar los pelos sueltos y a emparejar el pelaje. Si bien sus dientes son metálicos, son muy suaves y sus puntas no lastiman la piel de su perro. Pásela a contrapelo para desenredar, quitar la suciedad y soltar los pelos viejos. Y en sentido del pelo para retirar los pelos sueltos, emprolijar y dar brillo. La estructura es metálica y el mango es de madera.\r\n       ',5,'Ninguno',10,'1656414264500_img_.jpg','2022-06-28 11:04:24',NULL,NULL,NULL),(48,'cepillo dental perro',800,'Dedo Cepillo De Dientes Suave Mascota Perro Gato Dental x 2 unidades. Se estima que sin un cuidado dental apropiado, el 80% de los perros y el 70% de los gatos mostrarán signos de enfermedad bucal a los 3 años. Con tu apoyo, tu mascota puede tener dientes y encías saludables durante toda su vida. El uso regular del cepillo dental evita la formación de placa y sarro, previene las enfermedades de los dientes y las encías. También el mal aliento en perros y gatos.\r\n       ',5,'Ninguno',10,'1656414367568_img_.jpg','2022-06-28 11:06:07',NULL,NULL,NULL),(49,'cepillo doble madera',850,'Cepillo con mango de madera, para perros o gatos (23 cms de largo)\r\n       ',5,'Ninguno',15,'1656414409266_img_.jpg','2022-06-28 11:06:49',NULL,NULL,NULL),(50,'collar isabelino',1550,'Cuello isabelino de fácil colocación para la recuperación de perros y gatos después de operaciones o castración. Los collares isabelinos se colocan en el cuello de perros o gatos para que no lleguen a lamerse las heridas o sacarse los puntos después de una operación o una castración. Así, evitan infecciones y lastimaduras y aceleran su recuperación.\r\n       ',5,'Ninguno',20,'1656414484117_img_.jpg','2022-06-28 11:08:04',NULL,NULL,NULL),(51,'corta uñas tijera',780,'Alicate con Lima mediano.   Tamaño Alicate: 13 cm de largo\r\n       ',5,'Ninguno',20,'1656414553768_img_.jpg','2022-06-28 11:09:13',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_name` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_79` (`product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sub_categories_FK` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'perros',1,'2022-06-10 19:54:13',NULL),(2,'gatos',1,'2022-06-10 19:54:13',NULL),(3,'perros',2,'2022-06-10 19:54:13',NULL),(4,'gatos',2,'2022-06-10 19:54:13',NULL),(5,'perros',3,'2022-06-10 19:54:13',NULL),(6,'gatos',3,'2022-06-10 19:54:13',NULL),(7,'perros',4,'2022-06-10 19:54:13',NULL),(8,'gatos',4,'2022-06-10 19:54:13',NULL),(9,'perros',5,'2022-06-10 19:54:13',NULL),(10,'gatos',5,'2022-06-10 19:54:13',NULL);
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(70) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `phone` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_86` (`rol_id`) USING BTREE,
  CONSTRAINT `users_FK` FOREIGN KEY (`rol_id`) REFERENCES `users_rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juancito',1,'juan@mail.com','$2a$10$emEgPGu6V6rCW87Aoe.OSudaCin3j5G4K/i6VjiT7ysJx7l0jHxRe','default-image.jpg','2022-06-07 14:18:24',NULL,'5353456'),(2,'jhan',2,'jhan@mail.com','$2a$10$SbJiMZZCydbDEvfQkcY.T..nNIqGDW.rLz4CF2iVQiiFxc5qQjIzW','default-image.jpg','2022-06-07 04:26:08',NULL,NULL),(3,'selena',2,'selena@mail.com','$2a$10$QKw.oaYT8vmTrnTVqBsYKu9J6Qt4kcdlO4bXInlt1rUh/hbuzCqHy','default-image.jpg','2022-06-07 04:26:08',NULL,NULL),(4,'sebastian',2,'seba@mail.com','$2a$10$N5pHq1xYqjlPxm2ScJeQc.TeAfFukSB/EyXI/FMH7YwimkgadUFEe','default-image.jpg','2022-06-07 04:26:08',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_rols`
--

DROP TABLE IF EXISTS `users_rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_rols`
--

LOCK TABLES `users_rols` WRITE;
/*!40000 ALTER TABLE `users_rols` DISABLE KEYS */;
INSERT INTO `users_rols` VALUES (1,'USER'),(2,'ADMIN');
/*!40000 ALTER TABLE `users_rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'anubisshop_db1'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-28  8:44:34
