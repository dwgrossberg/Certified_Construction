-- CS340 Group 21 - Ditrung Duong and Daniel Grossberg
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
SET AUTOCOMMIT = 0;

-- -----------------------------------------------------

-- Drop tables in reverse order of creation to avoid foreign key issues
DROP TABLE IF EXISTS `EmployeesCertifications`;
DROP TABLE IF EXISTS `EmployeesTrainingSessions`;
DROP TABLE IF EXISTS `TrainingSessions`;
DROP TABLE IF EXISTS `Employees`;
DROP TABLE IF EXISTS `Certifications`;
DROP TABLE IF EXISTS `Departments`;

-- -----------------------------------------------------
-- Table `Departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Departments` (
  `deptID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`deptID`),
  UNIQUE INDEX `deptID_UNIQUE` (`deptID` ASC) VISIBLE)
ENGINE = InnoDB;

-- Inserts into `Departments` table
INSERT INTO `Departments` (`name`, `description`) VALUES 
('HR', 'Human Resources'),
('ENG', 'Engineering'),
('TEC', 'Technicians');

-- -----------------------------------------------------
-- Table `Certifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Certifications` (
  `certID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(90) NOT NULL,
  `certOrg` VARCHAR(90) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`certID`),
  UNIQUE INDEX `certID_UNIQUE` (`certID` ASC) VISIBLE)
ENGINE = InnoDB;

-- Inserts into `Certifications` table
INSERT INTO `Certifications` (`name`, `certOrg`, `description`) VALUES
('Safety 101', 'OSHA', 'Intro to Safety'),
('Drawing Reading 101', 'Internal', 'Intro to Drawing Reading Training'),
('Drawing Reading 102', 'Internal', 'Intermediate Level Drawing Reading'),
('Drawing Reading 103', 'Internal', 'Advance Drawing Reading and Generation'),
('Ethics Compliance', 'OSHA', 'Ethics At Workplace Training'),
('Cyber Security 101', 'IT Compliance', 'Intro to Cyber Attack Awareness'),
('Cyber Security 102', 'IT Compliance', 'Intermediate Cyber Attack Awareness'),
('Torque Cert', 'NTSB', 'Intro to Torque Training and Certification'),
('Sealing Cert', 'NTSB', 'Intro to Seal Training and Certification'),
('Crane Cert', 'NTSB', 'Intro to Electrical Crane and Certification');

-- -----------------------------------------------------
-- Table `Employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Employees` (
  `employeeID` INT NOT NULL AUTO_INCREMENT,
  `fName` VARCHAR(145) NOT NULL,
  `lName` VARCHAR(145) NOT NULL,
  `email` VARCHAR(145) NOT NULL,
  `deptID` INT, -- Removed NOT NULL to make department assignment optional
  PRIMARY KEY (`employeeID`),
  INDEX `fk_Employees_Departments` (`deptID` ASC) VISIBLE,
  UNIQUE INDEX `employeeID_UNIQUE` (`employeeID` ASC) VISIBLE,
  CONSTRAINT `Employees_ibfk_1`
    FOREIGN KEY (`deptID`)
    REFERENCES `Departments` (`deptID`)
    ON DELETE SET NULL -- Changed to SET NULL to handle deletion of department
    ON UPDATE CASCADE
)
ENGINE = InnoDB;

-- Inserts into `Employees` table
INSERT INTO `Employees` (`fName`, `lName`, `email`, `deptID`) VALUES
('Vladimir', 'Collier', 'hendrerit.neque@aol.org', 1),
('Donna', 'Lott', 'id.nunc@yahoo.net', 1),
('Athena', 'Fry', 'molestie.sed@hotmail.ca', 2),
('Igor', 'Parks', 'suspendisse.eleifend.cras@yahoo.co.uk', 3),
('Sybill', 'Robles', 'elit.a@protonmail.org', 3),
('Lucian', 'Jordan', 'cubilia.curae@icloud.ca', 3),
('Sharon', 'Murray', 'et.commodo@aol.net', 3),
('Maisie', 'Herman', 'mus.proin@aol.com', NULL); -- Insert Null deptID

-- -----------------------------------------------------
-- Table `TrainingSessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TrainingSessions` (
  `trainingID` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `location` VARCHAR(90) NOT NULL,
  `description` VARCHAR(145) NULL DEFAULT NULL,
  `certID` INT NOT NULL,
  PRIMARY KEY (`trainingID`),
  UNIQUE INDEX `trainingID_UNIQUE` (`trainingID` ASC) VISIBLE,
  INDEX `fk_TrainingSessions_Certifications` (`certID` ASC) VISIBLE,
  CONSTRAINT `TrainingSessions_ibfk_1`
    FOREIGN KEY (`certID`)
    REFERENCES `Certifications` (`certID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
ENGINE = InnoDB;

INSERT INTO `TrainingSessions` (`date`, `location`, `description`, `certID`) VALUES 
('2024-04-10 00:00:00', 'A1', 'Building A - Classroom 1', 1),
('2024-04-12 00:00:00', 'A2', 'Building A - Classroom 1', 2),
('2024-04-14 00:00:00', 'A3', 'Building A - Classroom 2', 3),
('2024-04-16 00:00:00', 'A4', 'Building A - Classroom 3', 4),
('2024-04-18 00:00:00', 'A5', 'Building A - Classroom 4', 5),
('2024-04-20 00:00:00', 'B1', 'Building B - Classroom 1', 6),
('2024-04-22 00:00:00', 'B2', 'Building B - Classroom 2', 7),
('2024-04-24 00:00:00', 'B3', 'Building B - Classroom 3', 8),
('2024-04-26 00:00:00', 'B4', 'Building B - Classroom 4', 9),
('2024-04-28 00:00:00', 'B5', 'Building B - Classroom 5', 10);

-- -----------------------------------------------------
-- Table `EmployeesTrainingSessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EmployeesTrainingSessions` (
  `employeeTrainingID` INT NOT NULL AUTO_INCREMENT,
  `employeeID` INT NOT NULL,
  `trainingID` INT NOT NULL,
  PRIMARY KEY (`employeeTrainingID`),
  UNIQUE INDEX `employeeTrainingID_UNIQUE` (`employeeTrainingID` ASC) VISIBLE,
  INDEX `fk_EmployeesTrainingSessions_TrainingSessions` (`trainingID` ASC) VISIBLE,
  INDEX `fk_EmployeesTrainingSessions_Employees` (`employeeID` ASC) VISIBLE,
  CONSTRAINT `fk_EmployeesTrainingSessions_Employees`
    FOREIGN KEY (`employeeID`)
    REFERENCES `Employees` (`employeeID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_EmployeesTrainingSessions_TrainingSessions`
    FOREIGN KEY (`trainingID`)
    REFERENCES `TrainingSessions` (`trainingID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- Inserts into `EmployeesTrainingSessions` table
INSERT INTO `EmployeesTrainingSessions` (`employeeID`, `trainingID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(3, 1),
(3, 2),
(3, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(5, 1),
(5, 2),
(5, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6);

-- -----------------------------------------------------
-- Table `EmployeesCertifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EmployeesCertifications` (
  `employeeCertID` INT NOT NULL AUTO_INCREMENT,
  `employeeID` INT NOT NULL,
  `certID` INT NOT NULL,
  `dateObtained` DATE NOT NULL,
  `expirationDate` DATE NOT NULL,
  PRIMARY KEY (`employeeCertID`),
  UNIQUE INDEX `employeeCertID_UNIQUE` (`employeeCertID` ASC) VISIBLE,
  INDEX `fk_EmployeesCertifications_Certifications` (`certID` ASC) VISIBLE,
  CONSTRAINT `EmployeesCertifications_ibfk_1`
    FOREIGN KEY (`employeeID`)
    REFERENCES `Employees` (`employeeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `EmployeesCertifications_ibfk_2`
    FOREIGN KEY (`certID`)
    REFERENCES `Certifications` (`certID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Inserts into `EmployeesCertifications` table
INSERT INTO `EmployeesCertifications` (`employeeID`, `certID`, `dateObtained`, `expirationDate`) VALUES 
(1, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(1, 2, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(1, 3, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(1, 4, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(1, 5, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(1, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 2, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 3, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 4, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 5, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(2, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(3, 5, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(3, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(3, 7, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(4, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(4, 2, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(4, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(4, 8, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(5, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(5, 2, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(5, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(5, 9, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(6, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(6, 2, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(6, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(6, 9, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(7, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(7, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(7, 10, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(8, 1, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(8, 6, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR)),
(8, 10, '2023-04-29', DATE_ADD('2023-04-29', INTERVAL 1 YEAR));

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
COMMIT;
SET AUTOCOMMIT = 0;
