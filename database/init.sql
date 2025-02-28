-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Feb 28, 2025 at 10:00 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giftshop`
--
CREATE DATABASE IF NOT EXISTS `giftshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `giftshop`;

-- --------------------------------------------------------

--
-- Table structure for table `presents`
--

CREATE TABLE `presents` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `presents`
--

INSERT INTO `presents` (`id`, `category_id`, `name`, `description`, `price`, `discount`, `created_at`, `updated_at`) VALUES
('2b39cbaa-f51c-11ef-99af-0242ac110002', 'f27666b7-f51b-11ef-99af-0242ac110002', 'Plush Adventure Backpack', 'Cute plush backpack with hidden compartments', 24.99, 0.00, '2025-02-27 15:04:40', '2025-02-27 15:04:40'),
('2b39d247-f51c-11ef-99af-0242ac110002', 'f27666b7-f51b-11ef-99af-0242ac110002', 'Magic Science Kit', 'Safe chemistry experiments for curious kids', 34.99, 10.00, '2025-02-27 15:04:40', '2025-02-27 15:04:40'),
('2b39d53e-f51c-11ef-99af-0242ac110002', 'f27666b7-f51b-11ef-99af-0242ac110002', 'Illustrated Storybook Collection', 'Set of 5 beautifully illustrated adventure books', 29.99, 0.00, '2025-02-27 15:04:40', '2025-02-27 15:04:40'),
('3cd1e6c3-f51c-11ef-99af-0242ac110002', 'f27920fb-f51b-11ef-99af-0242ac110002', 'Wireless Bluetooth Headphones', 'High-quality sound with noise cancellation', 79.99, 15.00, '2025-02-27 15:05:10', '2025-02-27 15:05:10'),
('3cd1f5c1-f51c-11ef-99af-0242ac110002', 'f27920fb-f51b-11ef-99af-0242ac110002', 'Custom Phone Case Kit', 'Design your own phone case with artistic materials', 19.99, 0.00, '2025-02-27 15:05:10', '2025-02-27 15:05:10'),
('3cd1f93c-f51c-11ef-99af-0242ac110002', 'f27920fb-f51b-11ef-99af-0242ac110002', 'LED Room Lights Strip', 'Customizable RGB lighting for bedroom decoration', 29.99, 5.00, '2025-02-27 15:05:10', '2025-02-27 15:05:10'),
('3cd1fadf-f51c-11ef-99af-0242ac110002', 'f27920fb-f51b-11ef-99af-0242ac110002', 'Skateboard Complete Set', 'Professional skateboard with cool graphics', 59.99, 10.00, '2025-02-27 15:05:10', '2025-02-27 15:05:10'),
('4a2e69aa-f51c-11ef-99af-0242ac110002', 'f27968d5-f51b-11ef-99af-0242ac110002', 'Gourmet Coffee Gift Set', 'Selection of premium coffee beans with brewing accessories', 49.99, 0.00, '2025-02-27 15:05:32', '2025-02-27 15:05:32'),
('4a2e7abf-f51c-11ef-99af-0242ac110002', 'f27968d5-f51b-11ef-99af-0242ac110002', 'Fitness Smartwatch', 'Activity tracker with heart rate monitoring', 129.99, 20.00, '2025-02-27 15:05:32', '2025-02-27 15:05:32'),
('4a2e7c96-f51c-11ef-99af-0242ac110002', 'f27968d5-f51b-11ef-99af-0242ac110002', 'Aromatherapy Essential Oil Diffuser', 'Elegant wood grain design with light options', 39.99, 5.00, '2025-02-27 15:05:32', '2025-02-27 15:05:32'),
('4a2e7ef3-f51c-11ef-99af-0242ac110002', 'f27968d5-f51b-11ef-99af-0242ac110002', 'Wine Tasting Experience Kit', 'Selection of wines with tasting guide and accessories', 89.99, 10.00, '2025-02-27 15:05:32', '2025-02-27 15:05:32'),
('5a5f4d9e-f51c-11ef-99af-0242ac110002', 'f2796bb0-f51b-11ef-99af-0242ac110002', 'Digital Photo Frame', 'Easy-to-use frame that displays photos from phone', 69.99, 10.00, '2025-02-27 15:05:59', '2025-02-27 15:05:59'),
('5a5f7f04-f51c-11ef-99af-0242ac110002', 'f2796bb0-f51b-11ef-99af-0242ac110002', 'Gardening Tool Set', 'Ergonomic gardening tools with comfort grips', 44.99, 5.00, '2025-02-27 15:05:59', '2025-02-27 15:05:59'),
('5a5f8462-f51c-11ef-99af-0242ac110002', 'f2796bb0-f51b-11ef-99af-0242ac110002', 'Classic Novel Collection', 'Set of 10 hardcover classic literature books', 79.99, 15.00, '2025-02-27 15:05:59', '2025-02-27 15:05:59'),
('5a5f8794-f51c-11ef-99af-0242ac110002', 'f2796bb0-f51b-11ef-99af-0242ac110002', 'Cozy Weighted Blanket', 'Therapeutic weighted blanket for better sleep', 59.99, 0.00, '2025-02-27 15:05:59', '2025-02-27 15:05:59'),
('edaac239-a567-46b6-b1e5-76c8e7c54f75', 'f2796bb0-f51b-11ef-99af-0242ac110002', 'Test Present for seniors', 'This is a test present created via Postman', 39.99, 5.00, '2025-02-27 15:16:07', '2025-02-27 15:16:07');

-- --------------------------------------------------------

--
-- Table structure for table `target_markets`
--

CREATE TABLE `target_markets` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `target_markets`
--

INSERT INTO `target_markets` (`id`, `category`, `created_at`, `updated_at`) VALUES
('f27666b7-f51b-11ef-99af-0242ac110002', 'Children (0-12 years)', '2025-02-27 15:03:05', '2025-02-27 15:03:05'),
('f27920fb-f51b-11ef-99af-0242ac110002', 'Teenagers (13-19 years)', '2025-02-27 15:03:05', '2025-02-27 15:03:05'),
('f27968d5-f51b-11ef-99af-0242ac110002', 'Adults (20-59 years)', '2025-02-27 15:03:05', '2025-02-27 15:03:05'),
('f2796bb0-f51b-11ef-99af-0242ac110002', 'Seniors (60+ years)', '2025-02-27 15:03:05', '2025-02-27 15:03:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `presents`
--
ALTER TABLE `presents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `target_markets`
--
ALTER TABLE `target_markets`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `presents`
--
ALTER TABLE `presents`
  ADD CONSTRAINT `presents_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `target_markets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
