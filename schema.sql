-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema camping
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema camping
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `camping` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `camping` ;

-- -----------------------------------------------------
-- Table `camping`.`activities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`activities` (
  `ActivityID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Difficulty` VARCHAR(255) NULL DEFAULT NULL,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  `Category` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ActivityID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`users` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `DisplayName` VARCHAR(255) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `ProfilePictureURL` VARCHAR(255) NULL DEFAULT NULL,
  `AuthenticationProvider` VARCHAR(255) NULL DEFAULT NULL,
  `RegistrationDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `LastLogin` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`campsites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`campsites` (
  `CampsiteID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `Latitude` DECIMAL(10,8) NULL DEFAULT NULL,
  `Longitude` DECIMAL(11,8) NULL DEFAULT NULL,
  `LocationName` VARCHAR(255) NULL DEFAULT NULL,
  `Type` VARCHAR(255) NULL DEFAULT NULL,
  `Difficulty` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `EventStatus` VARCHAR(255) NULL DEFAULT NULL,
  `EventID` INT NULL DEFAULT NULL,
  `Rating` DECIMAL(3,2) NULL DEFAULT NULL,
  `Distance` DECIMAL(10,2) NULL DEFAULT NULL,
  `Price` DECIMAL(10,2) NULL DEFAULT NULL,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  `FeaturesAndActivities` TEXT NULL DEFAULT NULL,
  `Audience` VARCHAR(255) NULL DEFAULT NULL,
  `PaidStatus` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`CampsiteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`bookings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`bookings` (
  `BookingID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NULL DEFAULT NULL,
  `CampsiteID` INT NULL DEFAULT NULL,
  `StartDate` DATE NULL DEFAULT NULL,
  `EndDate` DATE NULL DEFAULT NULL,
  `TotalPrice` DECIMAL(10,2) NULL DEFAULT NULL,
  `BookingStatus` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`BookingID`),
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  INDEX `CampsiteID` (`CampsiteID` ASC) VISIBLE,
  CONSTRAINT `bookings_ibfk_1`
    FOREIGN KEY (`UserID`)
    REFERENCES `camping`.`users` (`UserID`),
  CONSTRAINT `bookings_ibfk_2`
    FOREIGN KEY (`CampsiteID`)
    REFERENCES `camping`.`campsites` (`CampsiteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`events` (
  `EventID` INT NOT NULL AUTO_INCREMENT,
  `CampsiteID` INT NULL DEFAULT NULL,
  `OrganizerID` INT NULL DEFAULT NULL,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `DateTime` DATETIME NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  `Category` VARCHAR(255) NULL DEFAULT NULL,
  `ActivityID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`EventID`),
  INDEX `CampsiteID` (`CampsiteID` ASC) VISIBLE,
  INDEX `OrganizerID` (`OrganizerID` ASC) VISIBLE,
  INDEX `fk_activity` (`ActivityID` ASC) VISIBLE,
  CONSTRAINT `events_ibfk_1`
    FOREIGN KEY (`CampsiteID`)
    REFERENCES `camping`.`campsites` (`CampsiteID`),
  CONSTRAINT `events_ibfk_2`
    FOREIGN KEY (`OrganizerID`)
    REFERENCES `camping`.`users` (`UserID`),
  CONSTRAINT `fk_activity`
    FOREIGN KEY (`ActivityID`)
    REFERENCES `camping`.`activities` (`ActivityID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`products` (
  `ProductID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Price` DECIMAL(10,2) NULL DEFAULT NULL,
  `Availability` TINYINT(1) NULL DEFAULT NULL,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  `Category` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ProductID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`orders` (
  `OrderID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NULL DEFAULT NULL,
  `ProductID` INT NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `TotalPrice` DECIMAL(10,2) NULL DEFAULT NULL,
  `OrderDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`OrderID`),
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  INDEX `ProductID` (`ProductID` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`UserID`)
    REFERENCES `camping`.`users` (`UserID`),
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`ProductID`)
    REFERENCES `camping`.`products` (`ProductID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`posts` (
  `PostID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NULL DEFAULT NULL,
  `Content` TEXT NULL DEFAULT NULL,
  `Timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  `LikesCount` INT NULL DEFAULT '0',
  `CommentsCount` INT NULL DEFAULT '0',
  PRIMARY KEY (`PostID`),
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  CONSTRAINT `posts_ibfk_1`
    FOREIGN KEY (`UserID`)
    REFERENCES `camping`.`users` (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`resources` (
  `ResourceID` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Category` VARCHAR(255) NULL DEFAULT NULL,
  `ImageURL` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ResourceID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `camping`.`wishlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camping`.`wishlist` (
  `WishListID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NULL DEFAULT NULL,
  `CampsiteID` INT NULL DEFAULT NULL,
  `DateAdded` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`WishListID`),
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  INDEX `CampsiteID` (`CampsiteID` ASC) VISIBLE,
  CONSTRAINT `wishlist_ibfk_1`
    FOREIGN KEY (`UserID`)
    REFERENCES `camping`.`users` (`UserID`),
  CONSTRAINT `wishlist_ibfk_2`
    FOREIGN KEY (`CampsiteID`)
    REFERENCES `camping`.`campsites` (`CampsiteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
