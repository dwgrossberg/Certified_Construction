-- MariaDB dump 10.19  Distrib 10.5.22-MariaDB, for Linux (x86_64)
--
-- Host: classmysql.engr.oregonstate.edu    Database: cs340_grossbed
-- ------------------------------------------------------
-- Server version	10.6.17-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Certifications`
--

DROP TABLE IF EXISTS `Certifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Certifications` (
  `certID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(90) NOT NULL,
  `certOrg` varchar(90) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`certID`),
  UNIQUE KEY `certID_UNIQUE` (`certID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Certifications`
--

LOCK TABLES `Certifications` WRITE;
/*!40000 ALTER TABLE `Certifications` DISABLE KEYS */;
INSERT INTO `Certifications` VALUES (1,'Safety 101','OSHA','Intro to Safety'),(2,'Drawing Reading 101','Internal','Intro to Drawing Reading Training'),(3,'Drawing Reading 102','Internal','Intermediate Level Drawing Reading'),(4,'Drawing Reading 103','Internal','Advanced Drawing Reading and Generation'),(5,'Ethics Compliance','OSHA','Ethics At Workplace Training'),(6,'Cyber Security 101','IT Compliance','Intro to Cyber Attack Awareness'),(7,'Cyber Security 102','IT Compliance','Intermediate Cyber Attack Awareness'),(8,'Torque Cert','NTSB','Intro to Torque Training and Certification'),(9,'Sealing Cert','NTSB','Intro to Seal Training and Certification'),(10,'Crane Cert','NTSB','Intro to Electrical Crane and Certification');
/*!40000 ALTER TABLE `Certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departments` (
  `deptID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(145) NOT NULL,
  `description` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`deptID`),
  UNIQUE KEY `deptID_UNIQUE` (`deptID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'HR','Human Resources'),(2,'ENG','Engineering'),(3,'TEC','Technicians');
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employees`
--

DROP TABLE IF EXISTS `Employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employees` (
  `employeeID` int(11) NOT NULL AUTO_INCREMENT,
  `fName` varchar(145) NOT NULL,
  `lName` varchar(145) NOT NULL,
  `email` varchar(145) NOT NULL,
  `deptID` int(11) DEFAULT NULL,
  PRIMARY KEY (`employeeID`),
  UNIQUE KEY `employeeID_UNIQUE` (`employeeID`),
  KEY `fk_Employees_Departments` (`deptID`),
  CONSTRAINT `Employees_ibfk_1` FOREIGN KEY (`deptID`) REFERENCES `Departments` (`deptID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employees`
--

LOCK TABLES `Employees` WRITE;
/*!40000 ALTER TABLE `Employees` DISABLE KEYS */;
INSERT INTO `Employees` VALUES (1,'Vladimir','Collier','hendrerit.neque@aol.org',1),(2,'Donna','Lott','id.nunc@yahoo.net',1),(3,'Athena','Fry','molestie.sed@hotmail.ca',2),(4,'Igor','Parks','suspendisse.eleifend.cras@yahoo.co.uk',3),(5,'Sybill','Robles','elit.a@protonmail.org',3),(6,'Lucian','Jordan','cubilia.curae@icloud.ca',3),(7,'Sharon','Murray','et.commodo@aol.net',3),(8,'Maisie','Herman','mus.proin@aol.com',NULL);
/*!40000 ALTER TABLE `Employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeesCertifications`
--

DROP TABLE IF EXISTS `EmployeesCertifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeesCertifications` (
  `employeeCertID` int(11) NOT NULL AUTO_INCREMENT,
  `employeeID` int(11) NOT NULL,
  `certID` int(11) NOT NULL,
  `dateObtained` date NOT NULL,
  `expirationDate` date NOT NULL,
  PRIMARY KEY (`employeeCertID`),
  UNIQUE KEY `employeeCertID_UNIQUE` (`employeeCertID`),
  KEY `fk_EmployeesCertifications_Certifications` (`certID`),
  KEY `fk_EmployeesCertifications_Employees` (`employeeID`),
  CONSTRAINT `EmployeesCertifications_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `Employees` (`employeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `EmployeesCertifications_ibfk_2` FOREIGN KEY (`certID`) REFERENCES `Certifications` (`certID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeesCertifications`
--

LOCK TABLES `EmployeesCertifications` WRITE;
/*!40000 ALTER TABLE `EmployeesCertifications` DISABLE KEYS */;
INSERT INTO `EmployeesCertifications` VALUES (1,1,1,'2023-02-19','2024-02-19'),(2,1,2,'2023-03-02','2024-03-02'),(3,1,3,'2023-04-29','2024-04-29'),(4,1,4,'2023-04-29','2024-04-29'),(5,1,5,'2023-04-29','2024-04-29'),(6,1,6,'2023-04-29','2024-04-29'),(7,2,1,'2024-08-05','2025-08-05'),(8,2,2,'2024-08-05','2025-08-05'),(9,2,3,'2024-08-05','2025-08-05'),(10,2,4,'2024-08-05','2025-08-05'),(11,2,5,'2024-08-05','2025-08-05'),(12,2,6,'2024-08-05','2025-08-05'),(13,3,5,'2024-08-05','2025-08-05'),(14,3,6,'2023-05-29','2024-05-29'),(15,3,7,'2023-04-29','2024-04-29'),(16,4,1,'2023-09-21','2024-09-21'),(17,4,2,'2023-04-29','2024-04-29'),(18,4,6,'2024-01-23','2025-01-23'),(19,4,8,'2023-04-29','2024-04-29'),(20,5,1,'2023-04-29','2024-04-29'),(21,5,2,'2023-04-29','2024-04-29'),(22,5,6,'2023-04-29','2024-04-29'),(23,5,9,'2023-07-06','2024-07-06'),(24,6,1,'2023-10-09','2024-10-09'),(25,6,2,'2024-10-02','2025-10-02'),(26,6,6,'2023-04-29','2024-04-29'),(27,6,9,'2023-04-29','2024-04-29'),(28,7,1,'2023-12-31','2024-12-31'),(29,7,6,'2023-04-29','2024-04-29'),(30,7,10,'2024-02-01','2025-02-01'),(31,8,1,'2023-04-29','2024-04-29'),(32,8,6,'2023-04-29','2024-04-29'),(33,8,10,'2023-04-29','2024-04-29');
/*!40000 ALTER TABLE `EmployeesCertifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeesTrainingSessions`
--

DROP TABLE IF EXISTS `EmployeesTrainingSessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeesTrainingSessions` (
  `employeeTrainingID` int(11) NOT NULL AUTO_INCREMENT,
  `employeeID` int(11) NOT NULL,
  `trainingID` int(11) NOT NULL,
  PRIMARY KEY (`employeeTrainingID`),
  UNIQUE KEY `employeeTrainingID_UNIQUE` (`employeeTrainingID`),
  KEY `fk_EmployeesTrainingSessions_TrainingSessions` (`trainingID`),
  KEY `fk_EmployeesTrainingSessions_Employees` (`employeeID`),
  CONSTRAINT `fk_EmployeesTrainingSessions_Employees` FOREIGN KEY (`employeeID`) REFERENCES `Employees` (`employeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_EmployeesTrainingSessions_TrainingSessions` FOREIGN KEY (`trainingID`) REFERENCES `TrainingSessions` (`trainingID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeesTrainingSessions`
--

LOCK TABLES `EmployeesTrainingSessions` WRITE;
/*!40000 ALTER TABLE `EmployeesTrainingSessions` DISABLE KEYS */;
INSERT INTO `EmployeesTrainingSessions` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,2,6),(7,2,7),(8,2,8),(9,2,9),(10,2,10),(11,3,1),(12,3,2),(13,3,3),(14,4,4),(15,4,5),(16,4,6),(17,4,7),(18,4,8),(19,5,9),(20,5,10),(21,5,1),(22,5,2),(23,5,3),(24,6,4),(25,6,5),(26,6,6),(27,6,7),(28,7,8),(29,7,9),(30,7,10),(31,7,1),(32,8,2),(33,8,3),(34,8,4),(35,8,5),(36,8,6);
/*!40000 ALTER TABLE `EmployeesTrainingSessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TrainingSessions`
--

DROP TABLE IF EXISTS `TrainingSessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TrainingSessions` (
  `trainingID` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `location` varchar(90) NOT NULL,
  `description` varchar(145) DEFAULT NULL,
  `certID` int(11) NOT NULL,
  PRIMARY KEY (`trainingID`),
  UNIQUE KEY `trainingID_UNIQUE` (`trainingID`),
  KEY `fk_TrainingSessions_Certifications` (`certID`),
  CONSTRAINT `TrainingSessions_ibfk_1` FOREIGN KEY (`certID`) REFERENCES `Certifications` (`certID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TrainingSessions`
--

LOCK TABLES `TrainingSessions` WRITE;
/*!40000 ALTER TABLE `TrainingSessions` DISABLE KEYS */;
INSERT INTO `TrainingSessions` VALUES (1,'2024-04-10','A1','Building A - Classroom 1',1),(2,'2024-04-12','A2','Building A - Classroom 1',2),(3,'2024-04-14','A3','Building A - Classroom 2',3),(4,'2024-04-16','A4','Building A - Classroom 3',4),(5,'2024-04-18','A5','Building A - Classroom 4',5),(6,'2024-04-20','B1','Building B - Classroom 1',6),(7,'2024-04-22','B2','Building B - Classroom 2',7),(8,'2024-04-24','B3','Building B - Classroom 3',8),(9,'2024-04-26','B4','Building B - Classroom 4',9),(10,'2024-04-28','B5','Building B - Classroom 5',10);
/*!40000 ALTER TABLE `TrainingSessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostic`
--

DROP TABLE IF EXISTS `diagnostic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diagnostic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostic`
--

LOCK TABLES `diagnostic` WRITE;
/*!40000 ALTER TABLE `diagnostic` DISABLE KEYS */;
INSERT INTO `diagnostic` VALUES (1,'MySQL is working for ONIDhere!');
/*!40000 ALTER TABLE `diagnostic` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-24  3:35:56
