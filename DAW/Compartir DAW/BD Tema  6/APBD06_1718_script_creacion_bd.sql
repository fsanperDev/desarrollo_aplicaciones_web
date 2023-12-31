drop database if exists `instituto`;
CREATE DATABASE  `instituto` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `instituto`;
-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: instituto
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

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
-- Table structure for table `alumnado`
--

DROP TABLE IF EXISTS `alumnado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnado` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `codCurso` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `Cod_Curso_FK` (`codCurso`),
  CONSTRAINT `Cod_Curso_FK` FOREIGN KEY (`codCurso`) REFERENCES `curso` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=1444 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnado`
--

LOCK TABLES `alumnado` WRITE;
/*!40000 ALTER TABLE `alumnado` DISABLE KEYS */;
INSERT INTO `alumnado` VALUES (5,'BARBARA','PELAEZ VALENCIA','M','1967-08-27',4),(6,'JUAN PEDRO','GALVE GONZALEZ','H','1991-11-10',4),(7,'MARIA ISABEL','PEREZ GUILLEN','M','1962-11-14',2),(9,'DAVID','TAPIA SOLANS','H','1980-06-05',4),(11,'JAVIER','LAMA DEL REY','H','1977-02-26',2),(12,'ALEJANDRA','CALDERON VALDIVIA','M','1960-11-16',2),(13,'ANA DOLORES','ESCUDERO ENCISO','M','1975-09-07',4),(14,'JUAN CARLOS','RODRIGUEZ PADILLA','H','1963-11-15',5),(16,'JUAN','MARTINEZ SANCHEZ','H','1974-10-23',2),(17,'MARIA','LAFUENTE FERNANDEZ','M','1986-11-21',2),(19,'ROSA NIEVES','SANCHEZ CANO','M','1979-12-12',5),(20,'BELEN','RAMOS ANGUITA','M','1967-12-30',2),(23,'JOSE IGNACIO','HARO FANECA','H','1981-05-08',5),(24,'JOSEFA','CASTELLANOS DIEZ','M','1998-05-01',2),(25,'BEATRIZ','RUBIO BERMEJO','M','1970-04-29',5),(26,'JAVIER','CASTRO GOMEZ','H','1967-08-20',5),(29,'ELISA ISABEL','BRUNO CALVO','M','1998-05-13',4),(30,'DIANA','GUILLAMON POSADA','M','1980-04-29',2),(31,'DAVID','RANILLA URRUTIA','H','1964-11-22',2),(33,'DAVID','VALENCIA MEDINA','H','1981-03-27',2),(36,'JOSE MANUEL','GARCIA ZAPICO','H','1963-03-03',5),(37,'MIGUEL','IBARROLA DIEZ','H','1985-08-12',4),(38,'ENCARNACION','ASENJO HERNANDO','M','1962-04-03',4),(39,'FRANCISCO','CALVO BONO','H','1974-06-17',5),(40,'JOSE ANTONIO','CALVO RODRIGUEZ','H','1989-05-04',5),(42,'JOSE MARIA','FUENTEMILLA ALBERT','H','1979-12-27',4),(43,'BELEN','PORTERO GRACIA','M','1991-10-28',4),(44,'LUIS ANTONIO','SUAREZ GARCIA','H','1997-10-24',5),(46,'SILVIA','PEÑA CASTAN','M','1977-07-20',5),(49,'ROCIO EMILIA','IZQUIERDO BELTRAN','M','1981-04-01',5),(51,'JULIAN ANDRES','MORALES RIERA','H','1998-12-31',5),(52,'MUJERES','ALCALA PEREZ','M','1970-10-11',5),(54,'JOSEFA','GOMEZ EGIDO','M','1998-09-27',5),(55,'MYRIAM','MORALES ISAC','M','1984-09-15',5),(57,'JUAN JOSE','RIVAS RAMON','H','1994-05-01',4),(58,'DANIEL JOSE','BLANCO IZQUIERDO','H','1982-02-05',2),(59,'MIRIAN','MONTERO LAMENCA','M','1972-05-06',5),(60,'MARIA PAZ','BERTIZ SARMIENTO','M','1997-04-01',5),(61,'EMILIO','MORILLO RAMON','H','1986-09-05',5),(63,'ANA TERESA','CASADO CRESPO','M','1971-01-13',4),(64,'JOSE IGNACIO','MARTIN BERDUN','H','1987-08-18',5),(65,'DAVID','PADILLA ORTEGA','H','1960-08-29',1),(66,'MIGUEL','GARCIA LARRETA','H','1982-02-04',5),(67,'LUIS MIGUEL','NAVARRO URRUTIA','H','1969-04-20',5),(68,'NURIA','AMOSTEGUI LUZURIAGA','M','1973-10-25',2),(70,'LEON JOSE','SARMIENTO RIVAS','H','1969-04-11',5),(71,'VICTOR','GARCIA GARCÍA','H','1999-12-29',4),(72,'NATALIA','TIMON ECHEPARE','M','1986-01-19',2),(73,'MELANIE','CAMPOY GOMEZ','M','1967-02-24',2),(76,'ISABEL','SORIANO MATAMOROS','M','1995-07-07',2),(77,'MIGUEL','SANCHEZ SANCHEZ','H','1998-02-06',4),(78,'NOEMI','BERRUEZO REQUENA','M','1973-11-25',4),(79,'IVAN ANGEL DE LA','GARCIA RUBIO','H','1979-03-26',4),(80,'LUTGARDA','GOÑI TIMON','M','1974-10-17',2),(82,'MARIA SOLEDAD','MORILLAS GUILLEN','M','1975-04-30',4),(83,'JUAN MANUEL','MARTIN ALEJANO','H','1980-09-16',2),(84,'MARIA DEL MAR','CASTRO CRUZ','M','1977-11-08',2),(86,'JUAN','TALEGON CORTES','H','1966-07-12',2),(87,'MIGUEL','ARAGUAS DE LA TORRE','H','1998-08-12',4),(88,'DAVID','ALONSO GIMENEZ','H','1995-09-02',4),(89,'NICOLAS','BLANCO GONZALEZ','H','1992-03-08',2),(90,'ALBERTO','VEGA GARCIA','H','1976-08-29',4),(91,'EVA MARIA','FENOY ORDOÑEZ','M','1989-12-04',2),(93,'ANA MARIA','FERREIRO DIEZ','M','1999-07-01',5),(94,'ARTURO','REVIRIEGO CERVANTES','H','1964-08-02',5),(96,'AZUCENA','BERENGUEL ROY','M','1998-05-27',4),(98,'PABLO CESAR','URBISTONDO GONZALEZ','H','1991-02-12',2),(99,'OSCAR','MARTIN GALINDO','H','1992-08-03',5),(100,'LUIS','MOLINA TAGARRO','H','1996-01-16',4),(101,'MARIA','GOMEZ ANDRES','M','1985-05-04',1),(102,'JOSE MANUEL','PADILLA VEGAS','H','1988-02-04',4),(103,'RICARDO','MARQUINA HERNANDO','H','1982-02-20',3),(104,'MIGUEL','DIAZ FABRE','H','1985-04-17',NULL),(105,'LUIS MIGUEL','AGURRUZA RODRIGUEZ','H','1983-04-25',NULL),(106,'NICOLAS','LOBATO BARRANCO','H','1961-06-25',NULL),(107,'MIGUEL','BURGOS ZAPICO','H','1986-04-13',NULL),(108,'JOSE JESUS','VALDIVIESO JIMENEZ','H','1985-12-23',NULL),(109,'ANA MARIA','BEAMONTE GOMEZ','M','1968-07-25',NULL),(110,'MARIA','LOPEZ CARREÑO','M','1963-11-18',NULL),(111,'MARIA DEL MAR','ASENSIO SEGURA','M','1984-05-21',NULL),(112,'ROSA NIEVES','LARRAÑETA LAZARO','M','1976-06-10',NULL),(113,'ELENA','DAZA FANECA','M','1960-09-18',NULL),(114,'GEMA','PASTOR ADELL','M','1983-02-13',NULL),(115,'MARIA CARMEN','CHECA CANO','M','1960-08-11',NULL),(116,'JOSE ANTONIO','GRACIA GONZALEZ','H','1962-11-28',NULL),(117,'AMALIA','GIL PER','M','1965-01-10',NULL),(118,'VICTOR','RAMON GARCIA','H','1991-08-24',NULL),(119,'ESPERANZA VICTORIA','PANIZO DEL AGUILA','M','1972-12-07',NULL),(120,'ANTONIO','ALONSO SORIANO','H','1985-06-15',NULL),(121,'JAVIER','BOTAZ HERNÁNDEZ','H','1999-03-31',NULL),(122,'FRANCISCO','CUTILLAS HERNANDEZ','H','1982-03-30',NULL),(123,'EDUARDO','LOPEZ RODRIGUEZ','H','1964-11-20',NULL),(124,'ADOLFO','LOPEZ EL AAKROUTI','H','1987-10-16',NULL),(125,'MARIA ROSA','MORA BAUTISTA','M','1969-04-20',NULL),(126,'GONZALO','IBAÑEZ PALENCIA','H','1965-12-21',NULL),(127,'ANA M.','DIEZ IZQUIERDO','M','1976-10-07',NULL),(128,'ALICIA MARIA','DIAZ GUERRERO','M','1968-08-27',NULL),(129,'MONTSERRAT','VELA SASTRE','M','1980-01-29',NULL),(130,'LUIS','BERMEJO GARCIA','H','1984-11-07',NULL),(132,'MARIA','GOMEZ ANDRES','M','1985-05-04',NULL),(133,'JOSE MANUEL','PADILLA VEGAS','H','1999-05-19',NULL),(134,'RICARDO','MARQUINA HERNANDO','H','1982-02-20',NULL),(135,'MIGUEL','DIAZ FABRE','H','1985-04-17',NULL),(136,'LUIS MIGUEL','AGURRUZA RODRIGUEZ','H','1983-04-25',NULL),(137,'NICOLAS','LOBATO BARRANCO','H','1961-06-25',NULL),(138,'MIGUEL','BURGOS ZAPICO','H','1986-04-13',NULL),(139,'JOSE JESUS','VALDIVIESO JIMENEZ','H','1985-12-23',NULL),(140,'ANA MARIA','BEAMONTE GOMEZ','M','1968-07-25',NULL),(141,'MARIA','LOPEZ CARREÑO','M','1963-11-18',NULL),(142,'MARIA DEL MAR','ASENSIO SEGURA','M','1984-05-21',NULL),(143,'ROSA NIEVES','LARRAÑETA LAZARO','M','1976-06-10',NULL),(144,'ELENA','DAZA FANECA','M','1960-09-18',NULL),(145,'GEMA','PASTOR ADELL','M','1983-02-13',NULL),(146,'MARIA CARMEN','CHECA CANO','M','1960-08-11',NULL),(147,'JOSE ANTONIO','GRACIA GONZALEZ','H','1962-11-28',NULL),(148,'AMALIA','GIL PER','M','1965-01-10',NULL),(149,'VICTOR','RAMON GARCIA','H','1991-08-24',NULL),(150,'ESPERANZA VICTORIA','PANIZO DEL AGUILA','M','1972-12-07',NULL),(151,'ANTONIO','ALONSO SORIANO','H','1985-06-15',NULL),(152,'JAVIER','BOTAZ HERNÁNDEZ','H','1999-03-31',NULL),(153,'FRANCISCO','CUTILLAS HERNANDEZ','H','1982-03-30',NULL),(154,'EDUARDO','LOPEZ RODRIGUEZ','H','1964-11-20',NULL),(155,'ADOLFO','LOPEZ EL AAKROUTI','H','1987-10-16',NULL),(156,'MARIA ROSA','MORA BAUTISTA','M','1969-04-20',NULL),(157,'GONZALO','IBAÑEZ PALENCIA','H','1965-12-21',NULL),(158,'ANA M.','DIEZ IZQUIERDO','M','1976-10-07',NULL),(159,'ALICIA MARIA','DIAZ GUERRERO','M','1968-08-27',NULL),(160,'MONTSERRAT','VELA SASTRE','M','1980-01-29',NULL),(161,'LUIS','BERMEJO GARCIA','H','1984-11-07',NULL);
/*!40000 ALTER TABLE `alumnado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curso` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `codProfesor` int(11) DEFAULT NULL,
  `maxAlumn` decimal(2,0) DEFAULT NULL,
  `fechaIni` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `numHoras` decimal(3,0) DEFAULT NULL,
  `numAlumnos` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `cod_profe_FK` (`codProfesor`),
  CONSTRAINT `cod_profe_FK` FOREIGN KEY (`codProfesor`) REFERENCES `profesor` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'Curso 1',4,10,'2018-01-01','2018-10-20',60,2),(2,'Curso 2',2,22,'2018-05-10','2018-12-31',42,22),(3,'Curso 3',2,5,'2017-09-01','2018-06-21',38,1),(4,'Curso 4',1,25,'2017-09-01','2018-05-31',100,22),(5,'Curso 5',1,25,'2017-10-01','2018-04-01',20,25);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `dni` char(9) DEFAULT NULL,
  `especialidad` varchar(20) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `antiguedad` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'NURIA','ANERO GONZALEZ','58328033X','MATEMATICAS','1972-02-22',9),(2,'MARIA LUISA','FABRE BERDUN','51083099F','TECNOLOGIA','1975-03-31',4),(3,'JAVIER','JIMENEZ HERNANDO','14253647D','LENGUA','1969-05-04',10),(4,'ESTEFANIA','FERNANDEZ MARTINEZ','19964324W','INGLES','1974-06-22',4),(5,'JOSE M.','ANERO PAYAN','66587458W','FRANCES','1972-05-11',5);
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'instituto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-01 17:03:38
