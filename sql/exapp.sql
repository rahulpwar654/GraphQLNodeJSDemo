-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2019 at 11:49 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `bacons`
--

CREATE TABLE `bacons` (
  `id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bacons`
--

INSERT INTO `bacons` (`id`, `type`, `price`) VALUES
(1, 'musky', '123'),
(4, 'slim', '13'),
(5, 'fatty', '37'),
(6, 'extra chunky', '25'),
(7, 'tender', '25'),
(8, 'smoky', '25'),
(9, 'striped', '27'),
(10, 'musky', '25'),
(11, 'truffy', '99'),
(12, 'Pixel', '20'),
(13, 'BadWay', '23'),
(14, 'truffy', '99'),
(15, 'truffy', '99'),
(16, 'Samual', '45');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `collegeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `firstname`, `lastname`, `collegeid`) VALUES
(1, 'Rahul', 'Pawar', 20),
(2, 'Yash', 'Tiwari', 20),
(3, 'Vaibhav', 'Salagare', 20),
(4, 'Mayank', 'Gupta', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bacons`
--
ALTER TABLE `bacons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bacons`
--
ALTER TABLE `bacons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
