-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 15, 2020 at 09:17 PM
-- Server version: 5.7.21-20-beget-5.7.21-20-1-log
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `d95119z7_rat`
--

-- --------------------------------------------------------

--
-- Table structure for table `guests`
--
-- Creation: Dec 10, 2020 at 01:55 PM
--

DROP TABLE IF EXISTS `guests`;
CREATE TABLE `guests` (
  `ID` int(2) NOT NULL,
  `LoginG` varchar(50) DEFAULT NULL,
  `PhoneNumG` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `guests`
--

INSERT INTO `guests` (`ID`, `LoginG`, `PhoneNumG`, `email`) VALUES
(108, 'Опель', '+380714035078', 'otmorozilsya@irisha.ru'),
(109, 'апрапаапап', '3808555555555', '380958604296asd@asd');

-- --------------------------------------------------------

--
-- Table structure for table `hall`
--
-- Creation: Dec 10, 2020 at 01:55 PM
--

DROP TABLE IF EXISTS `hall`;
CREATE TABLE `hall` (
  `ID` int(2) NOT NULL,
  `NameHall` varchar(50) NOT NULL,
  `inventory` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hall`
--

INSERT INTO `hall` (`ID`, `NameHall`, `inventory`) VALUES
(1, 'Cyberpunk', 1),
(2, 'Witcher', 2),
(3, 'Gachi', 3),
(4, 'Street', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--
-- Creation: Dec 10, 2020 at 01:55 PM
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE `inventory` (
  `ID` int(2) NOT NULL,
  `NameInventory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`ID`, `NameInventory`) VALUES
(1, 'Веник'),
(2, 'Масло'),
(3, 'Leather Whip');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--
-- Creation: Dec 10, 2020 at 01:55 PM
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `ID` int(2) NOT NULL,
  `Guest_id` int(2) DEFAULT NULL,
  `Hall` int(2) DEFAULT NULL,
  `Time` int(11) DEFAULT NULL,
  `wishes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `Guest_id`, `Hall`, `Time`, `wishes`) VALUES
(89, 108, 1, NULL, 'Нужна мадам со второй фотографии, 100 литров бензина и красный дошик. Плачу 200 рублей.'),
(90, 109, 1, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--
-- Creation: Dec 10, 2020 at 01:55 PM
--

DROP TABLE IF EXISTS `workers`;
CREATE TABLE `workers` (
  `ID` int(2) NOT NULL,
  `LoginW` varchar(50) DEFAULT NULL,
  `PhoneNumW` varchar(20) NOT NULL,
  `Post` varchar(50) DEFAULT NULL,
  `hall` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`ID`, `LoginW`, `PhoneNumW`, `Post`, `hall`) VALUES
(1, 'Владикавказ Шпаклев', '380714005852', 'Официант', 1),
(2, 'Руслан Уткин', '380713913830', 'Официант', 2),
(3, 'Юлия Билиберда', '380712283741', 'Администратор', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `hall`
--
ALTER TABLE `hall`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `inventory` (`inventory`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Hall` (`Hall`),
  ADD KEY `Guest_id` (`Guest_id`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `hall` (`hall`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guests`
--
ALTER TABLE `guests`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `hall`
--
ALTER TABLE `hall`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
  MODIFY `ID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hall`
--
ALTER TABLE `hall`
  ADD CONSTRAINT `hall_ibfk_1` FOREIGN KEY (`inventory`) REFERENCES `inventory` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `hall` (`inventory`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`Guest_id`) REFERENCES `guests` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`Hall`) REFERENCES `hall` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `workers_ibfk_1` FOREIGN KEY (`hall`) REFERENCES `hall` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
