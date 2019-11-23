-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2019 at 11:03 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `career_guide`
--
CREATE DATABASE IF NOT EXISTS `career_guide` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `career_guide`;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `is_active` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `first_name`, `last_name`, `createdAt`, `updatedAt`, `is_active`) VALUES
(7, 'hassan@gmail.com', '$2a$10$zZBJiPxw5EnS/jhdFmIUxutHxBPzzh6GexUf3efs.oJwKs5tlS4tK', 'Hassan', 'Mehmood', '2019-10-18 01:18:16', '2019-10-18 01:18:16', 'true'),
(8, 'hamza@gmail.com', '$2a$10$s0.ZmjGH8b3kxGIL3mmS9eQKhbxJmpeS4qvtbdYPc9wegxxnENvGm', 'Hamza', 'Tariq', '2019-11-02 16:42:27', '2019-11-02 16:42:27', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(150) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `title`, `url`, `subject_id`, `createdAt`) VALUES
(2, 'Cryptographer', '', 1, '2019-11-03 19:12:49'),
(3, 'Mathematician', '', 1, '2019-11-03 19:12:58'),
(4, 'Economist', '', 1, '2019-11-03 19:13:06'),
(5, 'Actuary', '', 1, '2019-11-03 19:13:13'),
(6, 'Financial planner', '', 1, '2019-11-03 19:13:23'),
(7, 'Investment analyst', '', 1, '2019-11-03 19:13:31'),
(8, 'Statistician', '', 1, '2019-11-03 19:13:39'),
(9, ' Operations research analyst', '', 1, '2019-11-03 19:13:49'),
(10, 'Systems engineer', '', 1, '2019-11-03 19:14:00'),
(11, 'Inventory control specialist', '', 1, '2019-11-03 19:14:08'),
(12, 'Social Media Manager', '', 2, '2019-11-03 19:15:12'),
(13, 'Technical Writer', '', 2, '2019-11-03 19:15:21'),
(14, 'Public Relations Specialist', '', 2, '2019-11-03 19:17:21'),
(15, 'Lawyer', '', 2, '2019-11-03 19:17:33'),
(16, 'Grant Writer', '', 2, '2019-11-03 19:17:41'),
(17, 'Librarian', '', 2, '2019-11-03 19:17:52'),
(18, 'Editor and Content Manager', '', 2, '2019-11-03 19:18:08'),
(19, ' Human Resources Specialist', 'alksdjfklasjdfas2', 2, '2019-11-03 19:18:16'),
(20, 'Teaching English as a Second Language', '', 2, '2019-11-03 19:18:24'),
(21, 'Fundraiser', '', 2, '2019-11-03 19:18:32'),
(22, 'Software Developer', '', 9, '2019-11-03 19:19:13'),
(23, 'Software Test Engineer', '', 9, '2019-11-03 19:19:25'),
(24, 'Senior Software Engineer', '', 9, '2019-11-03 19:19:33'),
(25, 'Software Development Manager', '', 9, '2019-11-03 19:19:41'),
(26, 'Software Architect', '', 9, '2019-11-03 19:19:48'),
(27, 'Programmer Analyst', '', 9, '2019-11-03 19:19:56'),
(28, 'Systems Developer', '', 9, '2019-11-03 19:20:03'),
(29, 'Web Developer', '', 9, '2019-11-03 19:20:10'),
(30, 'Software Development Engineer, Test', '', 9, '2019-11-03 19:20:17'),
(31, 'Application Support Analyst', '', 9, '2019-11-03 19:20:24'),
(32, 'Biological Technician', '', 5, '2019-11-03 19:21:34'),
(33, 'Biochemist', '', 5, '2019-11-03 19:21:42'),
(34, 'Genetic Counselor', '', 5, '2019-11-03 19:21:50'),
(35, 'Health Communications Specialist', '', 5, '2019-11-03 19:21:58'),
(36, 'Health Educator', '', 5, '2019-11-03 19:22:07'),
(37, 'Pharmaceutical / Medical Product Sales Representative', '', 5, '2019-11-03 19:22:15'),
(38, 'Physician Assistant', '', 5, '2019-11-03 19:22:23'),
(39, 'Medical and Health Services Manager', '', 5, '2019-11-03 19:22:31'),
(40, 'Attorney', '', 5, '2019-11-03 19:22:39'),
(41, 'Financial Analyst', '', 5, '2019-11-03 19:22:47'),
(42, 'Accelerator Operator', '', 7, '2019-11-03 19:23:22'),
(43, 'Applications Engineer', '', 7, '2019-11-03 19:23:31'),
(44, 'Data Analyst', '', 7, '2019-11-03 19:23:39'),
(45, 'Design Engineer', '', 7, '2019-11-03 19:23:46'),
(46, 'High School Physics Teacher', '', 7, '2019-11-03 19:23:54'),
(47, 'IT Consultant', '', 7, '2019-11-03 19:24:01'),
(48, 'Lab Technician', '', 7, '2019-11-03 19:24:08'),
(49, 'Laser Engineer', '', 7, '2019-11-03 19:24:15'),
(50, 'Optical Engineer', '', 7, '2019-11-03 19:24:22'),
(51, 'Research Associate', '', 7, '2019-11-03 19:24:33'),
(52, 'Analytical Chemist', '', 6, '2019-11-03 19:25:05'),
(53, 'Chemical Engineer', '', 6, '2019-11-03 19:25:12'),
(54, 'Chemistry Teacher', '', 6, '2019-11-03 19:25:19'),
(55, 'Forensic Scientist', '', 6, '2019-11-03 19:25:33'),
(56, 'Geochemist', '', 6, '2019-11-03 19:25:41'),
(57, 'Hazardous Waste Chemist', '', 6, '2019-11-03 19:25:48'),
(58, 'Materials Scientist', '', 6, '2019-11-03 19:25:55'),
(59, 'Pharmacologist', '', 6, '2019-11-03 19:26:04'),
(60, 'Toxicologist', '', 6, '2019-11-03 19:26:11'),
(61, 'Water Chemist', '', 6, '2019-11-03 19:26:18'),
(62, 'Civil Service Careers', '', 10, '2019-11-05 23:23:19'),
(63, 'Community Development Worker', '', 10, '2019-11-05 23:23:36'),
(64, 'Local Government Careers', '', 10, '2019-11-05 23:23:54'),
(65, 'Mediator', '', 10, '2019-11-05 23:24:02'),
(66, 'Social Worker', '', 10, '2019-11-05 23:24:09'),
(67, 'Social Researcher', '', 10, '2019-11-05 23:24:22'),
(68, 'Substance Misuse Worker', '', 10, '2019-11-05 23:24:31'),
(69, 'Teacher/Lecturer/Education Roles', '', 10, '2019-11-05 23:24:39'),
(70, 'Youth Worker', '', 10, '2019-11-05 23:25:25'),
(71, 'Youth Offending Team Officer', '', 10, '2019-11-05 23:25:32'),
(72, 'Environmental Scientist', '', 11, '2019-11-05 23:28:09'),
(73, 'Biotechnician', '', 11, '2019-11-05 23:28:22'),
(74, 'Food Science Technician', '', 11, '2019-11-05 23:28:31'),
(75, 'Conservation Scientist', '', 11, '2019-11-05 23:28:39'),
(76, 'Forensic-Scientist', '', 11, '2019-11-05 23:29:07'),
(77, 'Public Relations Director', '', 11, '2019-11-05 23:29:48'),
(78, 'Social-Worker', '', 11, '2019-11-05 23:30:09'),
(79, 'Geoscientist', '', 11, '2019-11-05 23:31:05'),
(80, 'Hydrologist', '', 11, '2019-11-05 23:31:16');

-- --------------------------------------------------------

--
-- Table structure for table `colleges`
--

CREATE TABLE `colleges` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `colleges`
--

INSERT INTO `colleges` (`id`, `title`, `url`, `address`, `phone`, `details`, `createdAt`, `updatedAt`) VALUES
(2, 'Punjab Group of Colleges', 'https://www.pgc.edu', '64-E/1, Gulberg-III, Lahore', '042-35870192-6', '<p>It was established in 1985 and since that time to now it has maintained its various branches in other cities of Pakistan. Punjab Group of Colleges are of Punjab College of Commerce and Punjab College of Science. University of Central Punjab (UCP) is also running under the Punjab Groups of Colleges. The best college for the intermediate level is Punjab College that is best not only for FSc but also for other faculties I Com and ICS. It is a semi government college spreader all over the Pakistan with its various branches. It has developed its separate branches for boys and colleges and different campuses for each faculty.</p>', '2019-11-03 18:49:55', '2019-11-03 18:49:55'),
(3, 'Forman Christian College', 'https://www.fccollege.edu.pk', 'Zahoor Elahi Rd, Gulberg III, Lahore, Punjab 54600', '(042) 99231581', '<p>This is also a college university that was established in 1864 and located in Lahore. It is a co-education study system based College that offers admissions in almost all the academic programs like FA, FSC, ICS and ICom. Every year FCC College Lahore generate highest marks from intermediate students. Forman Christian College is a private college, University. If you want a well-demanded degree in FSc then must choose this college for your pre engineering and pre medical admission. FCC College offers admissions in FA, Fsc, Ics, I.com, Medical and Engineering students, who want to make their future in any field its best college.</p>', '2019-11-03 18:50:54', '2019-11-03 18:50:54'),
(4, 'Fazaia Inter College', 'http:/fazaia.edu.pk', 'Fazia College, Munir Rd, Cantt, Lahore, Punjab', '(042) 99505511', '<p>Fazaia (PAF) College Lahore was established in 1949 as PAF Primary School Lahore. Later upgraded to a PAF Inter College Lahore in 1983. Fazaia (PAF) College Lahore is a coeducational institution. But the classes for both the genders boys and girls are entirely separate. It offers pre-engineering, pre-medical computer science academic computer and biology programs.</p><p><br></p>', '2019-11-03 18:52:28', '2019-11-03 18:52:28'),
(5, 'Aitchison College', 'https://www.aitchison.edu.pk', 'Mall Rd, Garhi Shahu, Lahore, Punjab', '(042) 36317201', '<p>This is a private college founded and established in 1986 for inter level educations. It is also the oldest college in Lahore that offers admission in almost all the faculties of education like. This also invites admission forms from both boys and girls for intermediate admissions every year. So if you are seeking for the best college in Lahore offering FSc pre engineering and pre medical then you should visit the Aitchison College Lahore.</p>', '2019-11-03 18:53:43', '2019-11-03 18:53:43'),
(6, 'The Superior Group of Colleges', 'http:/superior.edu.pk', 'Main Raiwind Road, Lahore', '042-38104221', '<p>Superior Group of Colleges Lahore has revolutionized modern education standards, with commonly celebrated academic excellence and all-round development of students. This institute provides all the facilities to their students that are essential in the instructive setup. Superior College is the best private college in Lahore for FSc pre engineering and pre medical. It is affiliated with the BISE Lahore and also recognized by HEC for its bachelors, masters and postgraduate programs. It is located at 12 A block L Gulberg 3 main Ferozepur road, Model Town Mor, Lahore.</p><p><br></p>', '2019-11-03 18:55:46', '2019-11-03 18:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `full_name`, `email`, `subject`, `message`, `createdAt`) VALUES
(1, 'Hassan Mehmood', 'hassan@gmail.com', 'hassan', 'ajsdkfjaklsdjfkljsdklf', '2019-10-20 23:31:38');

-- --------------------------------------------------------

--
-- Table structure for table `degrees`
--

CREATE TABLE `degrees` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `degrees`
--

INSERT INTO `degrees` (`id`, `title`, `createdAt`) VALUES
(1, 'High School', '2019-10-20 17:22:06'),
(2, 'Matric', '2019-10-20 17:22:06'),
(3, 'Intermediate', '2019-10-20 17:22:18'),
(4, 'Graduation in Pre-Medical', '2019-10-20 17:22:45'),
(5, 'Graduation in Pre-Engineering', '2019-10-20 17:22:45'),
(6, 'Graduation in Computer Science', '2019-10-20 17:22:45'),
(7, 'Graduation in Arts and Humanities', '2019-10-20 17:22:45'),
(8, 'Graduation in Commerce', '2019-10-20 17:22:45');

-- --------------------------------------------------------

--
-- Table structure for table `fields`
--

CREATE TABLE `fields` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(150) NOT NULL,
  `degree_id` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fields`
--

INSERT INTO `fields` (`id`, `title`, `url`, `degree_id`, `createdAt`) VALUES
(1, 'Arts', '', '1', '2019-10-20 17:24:01'),
(2, 'Science', '', '1', '2019-10-20 17:26:45'),
(3, 'Arts', '', '2', '2019-10-20 17:24:01'),
(4, 'Computer Science', '', '2', '2019-10-20 17:26:45'),
(5, 'Biology', '', '2', '2019-10-20 17:26:45'),
(6, 'Fsc Pre-Engineering', '', '3', '2019-10-20 17:28:48'),
(7, 'Fsc Pre-Medical', '', '3', '2019-10-20 17:28:58'),
(8, 'ICS (Physics)', '', '3', '2019-10-20 17:29:06'),
(9, 'ICS (Statistics)', '', '3', '2019-10-20 17:29:06'),
(14, 'Bachelor in Computer Science (BSCS)', '', '9', '2019-10-20 17:34:35'),
(16, 'I.COM', '', '3', '2019-11-03 19:40:53'),
(17, 'F.A', '', '3', '2019-11-03 19:43:35'),
(18, 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', '', '4', '2019-11-03 19:46:35'),
(19, 'Bachelor of Dental Surgery (BDS)', '', '4', '2019-11-03 19:46:47'),
(20, 'BS Medical Laboratory Technology', '', '4', '2019-11-03 19:47:02'),
(21, 'BS Vision Sciences', '', '4', '2019-11-03 19:47:32'),
(22, 'Doctor of Physiotherapy', '', '4', '2019-11-03 19:47:43'),
(23, 'BS Bio-Medical Engineering', '', '4', '2019-11-03 19:47:53'),
(24, 'BS Biotechnology', '', '4', '2019-11-03 19:48:02'),
(25, 'BS Microbiology', '', '4', '2019-11-03 19:48:11'),
(26, 'Doctor of Veterinary Medicine', '', '4', '2019-11-03 19:48:20'),
(27, 'Emergency & Intensive Care Sciences', '', '4', '2019-11-03 19:49:19'),
(28, 'BSc Mechanical engineering', '', '5', '2019-11-03 19:52:22'),
(29, 'BSc Electrical engineering', '', '5', '2019-11-03 19:52:36'),
(30, 'BSc Civil engineering', '', '5', '2019-11-03 19:52:45'),
(31, 'BSc Chemical engineering', '', '5', '2019-11-03 19:53:00'),
(32, 'BSc Petroleum and Gas engineering', '', '5', '2019-11-03 19:53:12'),
(33, 'BSc Environmental engineering', '', '5', '2019-11-03 19:53:24'),
(34, 'BSc product and industrial design', '', '5', '2019-11-03 19:53:34'),
(35, 'Anchoring', '', '7', '2019-11-03 20:00:11'),
(36, ' BFA in Painting', 'adsfsdfas', '7', '2019-11-03 20:00:25'),
(37, ' BFA Graphic Design', 'https://en.wikipedia.org/wiki/Art2', '7', '2019-11-03 20:00:33'),
(38, 'BA Hons. in Marketing Management', '', '7', '2019-11-03 20:00:55'),
(39, 'Bachelors of Electronics Media', '', '7', '2019-11-03 20:02:21'),
(40, 'BFA(bachelors of Fine Arts) in Graphic Designing', '', '7', '2019-11-03 20:04:10'),
(41, 'Advanced Diploma in Multimedia', '', '7', '2019-11-03 20:04:19'),
(42, 'Bachelor of Business Administration(BBA)', '', '8', '2019-11-03 20:05:43'),
(43, 'Chartered Accounted(CA)', '', '8', '2019-11-03 20:05:52'),
(44, 'Diploma in Accounting and Finance', '', '8', '2019-11-03 20:06:01'),
(45, 'Bachelor of Commerce(B.COM)', '', '8', '2019-11-03 20:06:19'),
(46, 'ACCA (Association of Chartered Certified Accountants)', '', '8', '2019-11-03 20:06:28'),
(48, 'Bachelor in Computer Engineering', '', '6', '2019-11-03 20:07:37'),
(49, 'Bachelors in Computer Applications(BCA)', '', '6', '2019-11-03 20:07:47'),
(50, 'Bachelors of Computer Software and Hardware Engineering', '', '6', '2019-11-03 20:07:57'),
(51, 'Bachelors in Software Engineering', '', '6', '2019-11-03 20:08:08'),
(52, 'Bachelor in Computer Science', '', '6', '2019-11-03 20:10:12');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `degree_id` int(11) NOT NULL,
  `priority` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `title`, `subject_id`, `degree_id`, `priority`, `createdAt`) VALUES
(54, 'My house _____ a small garden', 2, 1, 0, '2019-11-03 21:05:50'),
(55, 'She always ______ at 5 AM every day', 2, 1, 0, '2019-11-03 21:06:31'),
(56, 'You can play tennis at the', 2, 1, 0, '2019-11-03 21:07:47'),
(57, 'We  _____ judo on Saturday evenings', 2, 1, 0, '2019-11-03 21:08:52'),
(58, 'he students ________ English and French at school', 2, 1, 0, '2019-11-03 21:09:47'),
(59, 'What is the sum of the first 2 prime numbers', 1, 1, 0, '2019-11-03 21:10:54'),
(60, 'Find the next three terms in the sequence: 1, 1, 2, 4, 7, 13, 24', 1, 1, 0, '2019-11-03 21:11:42'),
(61, 'Cube root of 729 is', 1, 1, 0, '2019-11-03 21:12:11'),
(62, ' What kind of triangle has 3 equal sides', 1, 1, 0, '2019-11-03 21:12:53'),
(63, 'Find the greatest number which exactly divides 26, 52 and 65', 1, 1, 0, '2019-11-03 21:13:23'),
(64, 'Ideology is a set of', 10, 1, 0, '2019-11-03 21:15:26'),
(65, 'Scientific Society bulid for', 10, 1, 0, '2019-11-03 21:16:25'),
(66, 'ALLAMA IQBALis a', 10, 1, 0, '2019-11-03 21:17:06'),
(67, 'Partition of Bengal', 10, 1, 0, '2019-11-03 21:17:47'),
(68, 'Which document Muslims\' demand of Separate Electorate was accepted', 10, 1, 0, '2019-11-03 21:18:44'),
(69, 'The derived SI units of pressure is called', 11, 1, 0, '2019-11-03 21:20:26'),
(70, 'Which system controls co-ordinate', 11, 1, 0, '2019-11-03 21:21:23'),
(71, 'Which of the following is the primary cause of acid rain', 11, 1, 0, '2019-11-03 21:22:04'),
(72, 'The section of DNA that contains sequence of nucleotides for the formation of a protein is called', 11, 1, 0, '2019-11-03 21:22:55'),
(73, 'Solid waste management is the', 11, 1, 0, '2019-11-03 21:23:46'),
(74, 'The rhyming word of motion is  ', 2, 2, 0, '2019-11-03 22:39:22'),
(75, 'The sentence use of correct adjective ', 2, 2, 0, '2019-11-03 22:40:50'),
(76, 'Which of the following word is compound ', 2, 2, 0, '2019-11-03 22:41:35'),
(77, 'Protect ……………. body from the mosquito bites', 2, 2, 0, '2019-11-03 22:42:55'),
(80, 'Two straight lines in same plane which never meet are called', 1, 2, 0, '2019-11-03 22:55:25'),
(81, 'Locus of a point in a plane equidistant from a fixed point is known as', 1, 2, 0, '2019-11-03 22:56:27'),
(82, 'Software programs that allow you to legally copy files and give them away at no cost are called which of the following', 9, 2, 0, '2019-11-03 22:57:28'),
(83, 'What general term describes the physical equipment of a computer system, such as its screen, keyboard, and storage devices', 9, 2, 0, '2019-11-03 22:58:13'),
(86, 'Telecomputing involves the transmission of all of the following except which one', 9, 2, 0, '2019-11-04 00:41:06'),
(87, 'Creating a word processing document would accomplish all of the following tasks except which one', 9, 2, 0, '2019-11-04 00:42:01'),
(88, 'What software is used to make future predictions', 9, 2, 0, '2019-11-04 00:43:06'),
(89, 'Opposite angles of any quadrilateral inscribed in a circle are', 1, 2, 0, '2019-11-04 00:45:14'),
(90, 'Set of all ordered pair (x, y) which satisfies system of equations is called', 1, 2, 0, '2019-11-04 00:47:07'),
(91, 'A line that intersects two lines in different points is known as', 1, 2, 0, '2019-11-04 00:48:12'),
(92, 'who was the first President of the Constitution Assembly of Pakistan', 10, 2, 0, '2019-11-04 00:53:35'),
(93, 'The largest Natural fresh Water Lake in the subcontinent is', 10, 2, 0, '2019-11-04 00:54:36'),
(94, 'Largest city of Pakistan is', 10, 2, 0, '2019-11-04 00:55:15'),
(95, 'Who was the Prime Minister of Pakistan during enforcement of first constitution', 10, 2, 0, '2019-11-04 00:56:11'),
(96, 'When first constitution of Pakistan was enforced', 10, 2, 0, '2019-11-04 00:57:22'),
(97, 'The sentence of present perfect continuous tense is', 2, 2, 0, '2019-11-04 01:25:15'),
(98, 'What happens when a mismatched blood group is injected in recipient', 5, 3, 0, '2019-11-04 01:39:58'),
(99, 'Plasma is made up of water and', 5, 3, 0, '2019-11-04 01:40:59'),
(100, 'Rate of transpiration can he judged by using', 5, 3, 0, '2019-11-04 01:42:05'),
(101, 'Heavy metal pollution of water is caused by ', 6, 3, 0, '2019-11-04 01:44:27'),
(102, 'Atmosphere contains dust particles, salt grains, pollen grains, smoke, etc. which are collecctively known as ', 6, 3, 0, '2019-11-04 01:45:57'),
(103, 'Due to rusting the weight of iron', 6, 3, 0, '2019-11-04 01:46:48'),
(104, 'If the mass of the bob of a pendulum is increased by a factor of 3 the period of the pendulum’s motion will', 7, 3, 0, '2019-11-04 01:48:18'),
(105, 'Waves transfer', 7, 3, 0, '2019-11-04 01:48:54'),
(106, 'The loudness of sound is most closely related to its', 7, 3, 0, '2019-11-04 01:49:34'),
(107, 'Question 1 Another name for pointer is', 9, 3, 0, '2019-11-04 01:50:53'),
(108, 'Which type of drive allows multiple reads and writes to optical storage media', 9, 3, 0, '2019-11-04 01:51:34'),
(109, 'Which of the following is used to convert a person speech into digital data', 9, 3, 0, '2019-11-04 01:52:16'),
(110, 'An equation, which remains unchanged when x is replaced by 1/x is called', 1, 3, 0, '2019-11-04 01:53:55'),
(111, 'Sum of cube roots of unity is', 1, 3, 0, '2019-11-04 01:56:27'),
(112, 'Roots of the equation 4x2 – 4x + 1 are', 1, 3, 0, '2019-11-04 01:57:38'),
(113, 'What are you done in Intermediate ?', 5, 4, 0, '2019-11-05 15:16:05'),
(114, 'Incidence of calcium phosphate stone is', 5, 4, 0, '2019-11-05 15:16:55'),
(115, 'The living cells of the epidermis, cortex and pith of the plant stem take in water by', 5, 4, 0, '2019-11-05 15:17:45'),
(116, 'In phenylketonuria, phenylalanine is not degraded because of defective enzyme', 5, 4, 0, '2019-11-05 15:18:44'),
(117, 'The soul of chemistry is its dealing with', 6, 4, 0, '2019-11-05 15:19:46'),
(118, 'Air can be distilled fractionally because the constituents of the air', 6, 4, 0, '2019-11-05 15:20:25'),
(119, 'Which of the following molecules has the smallest angle between adjacent bonds', 6, 4, 0, '2019-11-05 15:21:11'),
(120, 'What is the S.I unit of modules of elasticity of substances', 7, 4, 0, '2019-11-05 15:22:13'),
(121, 'In the metallic conductor the current is due to flow of ______ charge', 7, 4, 0, '2019-11-05 15:22:49'),
(122, 'The SI units of induced emf is', 7, 4, 0, '2019-11-05 15:23:32'),
(123, 'When b2 – 4ac is not a perfect square then the roots f ax2 + bx + c = 0 will be', 1, 4, 0, '2019-11-05 15:25:59'),
(124, 'lnx dx ', 1, 4, 0, '2019-11-05 15:26:56'),
(125, 'tan x dx =', 1, 4, 0, '2019-11-05 15:27:39'),
(126, 'Synonym of fervor is', 2, 4, 0, '2019-11-05 15:28:51'),
(127, 'Synonym of Decimate is', 2, 4, 0, '2019-11-05 15:29:30'),
(128, 'Antonym of PATHOLOGICAL is', 2, 4, 0, '2019-11-05 15:30:16'),
(129, 'who the hell are you?', 2, 2, 0, '2019-11-13 21:08:35'),
(130, 'kia?', 1, 2, 0, '2019-11-13 21:20:15'),
(131, 'ache fer hun?', 1, 2, 0, '2019-11-13 21:21:13'),
(132, 'Whats your Grade in previous class ?', 22, 1, 2, '2019-11-13 22:44:16'),
(133, 'From the following in which subject your high marks?', 24, 1, 1, '2019-11-13 23:00:23'),
(134, 'What\'s your grade in previous class?', 22, 2, 3, '2019-11-13 23:01:40'),
(135, 'From the following in which subject your marks are high ?', 24, 2, 2, '2019-11-13 23:02:45'),
(136, 'In which field you are interested ?', 23, 2, 1, '2019-11-13 23:03:26'),
(137, 'In which field you completed your matric ?', 21, 3, 3, '2019-11-13 23:04:35'),
(138, 'what\'s your Grade ? ', 22, 3, 2, '2019-11-13 23:05:13'),
(139, 'From the following which field you are interested ?', 23, 3, 1, '2019-11-13 23:13:35');

-- --------------------------------------------------------

--
-- Table structure for table `questions_options`
--

CREATE TABLE `questions_options` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_title` varchar(150) NOT NULL,
  `is_correct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions_options`
--

INSERT INTO `questions_options` (`id`, `question_id`, `option_title`, `is_correct`) VALUES
(181, 54, 'Has got', 1),
(182, 54, 'Have got', 0),
(183, 54, 'Is', 0),
(184, 54, 'Was', 0),
(185, 55, 'Get up', 0),
(186, 55, 'Gets up', 1),
(187, 55, 'Got up', 0),
(188, 55, 'Gotten up', 0),
(189, 56, 'Zoo', 0),
(190, 56, 'Town square', 0),
(191, 56, 'Sport Center', 1),
(192, 56, 'Resturant', 0),
(193, 57, 'Go', 0),
(194, 57, 'Play', 0),
(195, 57, 'going', 0),
(196, 57, 'Do', 1),
(197, 58, 'Study', 1),
(198, 58, 'Studies', 0),
(199, 58, 'Studied', 0),
(200, 58, 'Studying', 0),
(201, 59, '1', 0),
(202, 59, '3', 0),
(203, 59, '5', 1),
(204, 59, '7', 0),
(205, 60, '3, 40, 67 ', 0),
(206, 60, '44, 81, 149', 1),
(207, 60, '13, 7, 4', 0),
(208, 60, '37, 61, 98', 0),
(209, 61, '3', 0),
(210, 61, '9', 1),
(211, 61, '27', 0),
(212, 61, '81', 0),
(213, 62, 'Isoscles', 0),
(214, 62, 'Scalene', 0),
(215, 62, 'Equilateral', 1),
(216, 62, 'Equiangular Triangle', 0),
(217, 63, '13', 1),
(218, 63, '26', 0),
(219, 63, '52', 0),
(220, 63, '65', 0),
(221, 64, 'Beliefs', 1),
(222, 64, 'Islam', 0),
(223, 64, 'Principles', 0),
(224, 64, 'Evolution', 0),
(225, 65, 'Translation of urdu', 0),
(226, 65, 'Translation of arabi', 0),
(227, 65, 'Translation of french', 0),
(228, 65, 'Translation of English works in the native language', 1),
(229, 66, 'POET AND PHILOSOPHER', 1),
(230, 66, 'Politician', 0),
(231, 66, 'Doctor', 0),
(232, 66, 'Engineers', 0),
(233, 67, '1954', 0),
(234, 67, '1905', 1),
(235, 67, '1976', 0),
(236, 67, '1950', 0),
(237, 68, 'Rowlett Act', 0),
(238, 68, 'Lucknow Pact', 1),
(239, 68, 'Nehru Report', 0),
(240, 68, 'Fourteen Points', 0),
(241, 69, 'Newton', 0),
(242, 69, 'Pascal', 1),
(243, 69, 'Joule', 0),
(244, 69, 'Ampere', 0),
(245, 70, 'Excretory system', 0),
(246, 70, 'Circulatory system', 0),
(247, 70, 'respiratory system', 0),
(248, 70, 'Nervous system', 1),
(249, 71, 'Burning tropical forest', 0),
(250, 71, 'CFCs', 0),
(251, 71, 'Nuclear power station', 0),
(252, 71, 'burning high sulphur coal', 1),
(253, 72, 'Chromosome', 0),
(254, 72, 'Chromatid', 0),
(255, 72, 'Gene', 1),
(256, 72, 'Centromere', 0),
(257, 73, 'burning of waste', 0),
(258, 73, 'Disposal of waste', 1),
(259, 73, 'Recycling of waste', 0),
(260, 73, 'Decaying of waste', 0),
(261, 74, 'Moon', 0),
(262, 74, 'Noon', 0),
(263, 74, 'Ocean', 1),
(264, 74, 'Ship', 0),
(265, 75, 'Aslam is intelligent boy of class', 1),
(266, 75, 'Aslam is most intelligent boy of class', 0),
(267, 75, 'Aslam, is most intelligent boy to class', 0),
(268, 75, 'Aslam is most intelligent boy then the class', 0),
(269, 76, 'Look', 1),
(270, 76, 'Wake', 0),
(271, 76, 'Outside', 0),
(272, 76, 'Bats', 0),
(273, 77, 'Your', 1),
(274, 77, 'Theirs', 0),
(275, 77, 'Our', 0),
(276, 77, 'Ours', 0),
(285, 80, 'angles', 0),
(286, 80, 'transversal lines', 0),
(287, 80, 'vertex', 0),
(288, 80, 'parallel lines', 1),
(289, 81, 'triangle', 0),
(290, 81, 'rectangle', 0),
(291, 81, 'hexagon', 0),
(292, 81, 'circle', 1),
(293, 82, 'timeshare', 0),
(294, 82, 'public domain', 1),
(295, 82, 'shareware', 0),
(296, 82, 'probeware', 0),
(297, 83, 'hardware', 1),
(298, 83, 'input', 0),
(299, 83, 'software', 0),
(300, 83, 'output', 0),
(309, 86, 'text', 0),
(310, 86, 'graphics', 0),
(311, 86, 'sound', 0),
(312, 86, 'disks', 1),
(313, 87, 'developing a table of historical events', 0),
(314, 87, 'calculating the expenditures for the candy sale', 1),
(315, 87, 'typing a letter to a friend', 0),
(316, 87, 'writing an essay for history class', 0),
(317, 88, 'word processing', 0),
(318, 88, 'spreadsheet', 1),
(319, 88, 'database', 0),
(320, 88, 'desktop publishing', 0),
(321, 89, 'tangent', 0),
(322, 89, 'supplementary', 1),
(323, 89, 'complementary', 0),
(324, 89, 'reflective', 0),
(325, 90, 'solution set', 1),
(326, 90, 'null set', 0),
(327, 90, 'complex set', 0),
(328, 90, 'subset', 0),
(329, 91, 'angles', 0),
(330, 91, 'transversal lines', 1),
(331, 91, 'vertex', 0),
(332, 91, 'parallel lines', 0),
(333, 92, 'Moulvi Tameez-ud-Din', 0),
(334, 92, 'Sardar Abdur Rab Nishtar', 0),
(335, 92, 'Quaid-e-Azam', 1),
(336, 92, 'Liaquat Ali Khan', 0),
(337, 93, 'Manchar Lake', 1),
(338, 93, 'Keenjar Lake', 0),
(339, 93, 'Hali Lake', 0),
(340, 93, 'None of them', 0),
(341, 94, 'Hyderabad', 0),
(342, 94, 'Karachi', 1),
(343, 94, 'Lahore', 0),
(344, 94, 'Sukkar', 0),
(345, 95, 'Khwaja Nazim Uddin', 0),
(346, 95, 'Ibrahim Ismail Chundrigar', 0),
(347, 95, 'Mohammad Ali Bogra', 0),
(348, 95, 'Choudhry Mohammad Ali', 1),
(349, 96, '8th June 1956', 0),
(350, 96, '23rd March 1956', 1),
(351, 96, '14th August 1956', 0),
(352, 96, '25th December 1956', 0),
(353, 97, 'She learns her lesson by heart', 0),
(354, 97, 'I am travelling to Islamabad', 0),
(355, 97, 'They have been working for an hour', 1),
(356, 97, 'He has already written a letter to his father', 0),
(357, 98, 'Antibodies of the donor\'s blood breakdown recipient\'s RBCs', 0),
(358, 98, 'None of these happens and such transfusion can be safe', 0),
(359, 98, 'Both of these can happen', 1),
(360, 98, 'Antibodies of the recipient\'s blood destroy donor\'s RBCs', 0),
(361, 99, 'Salts and ions', 0),
(362, 99, 'Metabolites and wastes', 0),
(363, 99, 'All of the above', 0),
(364, 99, 'Proteins', 1),
(365, 100, 'starch iodine paper', 0),
(366, 100, 'silver nitrate paper', 0),
(367, 100, 'litmus paper', 0),
(368, 100, 'cobalt chloride paper', 1),
(369, 101, 'Domestic Sewage', 0),
(370, 101, 'Paints', 1),
(371, 101, 'Wood Burning', 0),
(372, 101, 'Acid Plants', 0),
(373, 102, 'Water vapour', 0),
(374, 102, 'Ozone', 0),
(375, 102, 'Aerosols', 1),
(376, 102, 'Layer', 0),
(377, 103, ' decreases', 0),
(378, 103, 'increases', 1),
(379, 103, 'remains the same', 0),
(380, 103, ' uncertain', 0),
(381, 104, 'Be decreased by a factor of 2', 0),
(382, 104, 'Be increased by a factor of 2', 0),
(383, 104, 'Be decreased by a factor of 4', 0),
(384, 104, 'Remain the same', 1),
(385, 105, 'Velocity', 0),
(386, 105, 'frequency', 0),
(387, 105, 'Energy', 1),
(388, 105, 'Wavelength', 0),
(389, 106, 'Amplitude', 1),
(390, 106, 'Period', 0),
(391, 106, 'Wavelength', 0),
(392, 106, 'Frequency', 0),
(393, 107, 'Pixel', 0),
(394, 107, 'Chip', 0),
(395, 107, 'Pen', 0),
(396, 107, 'Arrow', 1),
(397, 108, 'CD-R', 0),
(398, 108, 'CD-ROM', 0),
(399, 108, 'DVD-ROM', 0),
(400, 108, 'CD-RW', 1),
(401, 109, 'Sound recorder', 0),
(402, 109, 'Voice recognition', 1),
(403, 109, 'Sound machine converters', 0),
(404, 109, 'Sound conversion code', 0),
(405, 110, 'Exponential equation', 0),
(406, 110, 'None of these', 0),
(407, 110, 'Reciprocal equation', 1),
(408, 110, 'Radical equation', 0),
(409, 111, '1', 0),
(410, 111, '-1', 0),
(411, 111, '0', 0),
(412, 111, '3', 1),
(413, 112, 'Real, unequal', 0),
(414, 112, 'Real, equal', 0),
(415, 112, 'Irrational', 0),
(416, 112, 'imaginary', 1),
(417, 113, 'Arts', 0),
(418, 113, 'Computer Science', 1),
(419, 113, 'Medical', 0),
(420, 113, 'Other', 0),
(421, 114, '20%', 0),
(422, 114, '10%', 0),
(423, 114, '15%', 1),
(424, 114, '25%', 0),
(425, 115, 'Diffusion', 0),
(426, 115, 'Imbibitions', 0),
(427, 115, 'Osmosis', 1),
(428, 115, 'Plasmolysis', 0),
(429, 116, 'phenylalanine dehydrogenase', 0),
(430, 116, 'phenylalanine oxidase', 0),
(431, 116, 'phenylalanine hydroxylase', 1),
(432, 116, 'phenylalanine catalase', 0),
(433, 117, 'Internal structural changes in matter', 0),
(434, 117, 'Composition of matter', 0),
(435, 117, 'Properties of matter', 0),
(436, 117, 'Composition and properties of matter', 1),
(437, 118, 'can be liquefied', 0),
(438, 118, 'have different boiling points', 1),
(439, 118, 'are gases at room temperature', 0),
(440, 118, 'have different densities', 0),
(441, 119, 'CO2', 0),
(442, 119, 'CH4', 0),
(443, 119, 'H2O', 1),
(444, 119, 'NH3', 0),
(445, 120, 'Nm-2', 1),
(446, 120, 'Jm-2', 0),
(447, 120, 'Nm-1', 0),
(448, 120, 'Being number, it has no unit', 0),
(449, 121, 'Positive', 0),
(450, 121, 'Negative', 1),
(451, 121, 'Proton', 0),
(452, 121, 'None', 0),
(453, 122, 'Ohm', 0),
(454, 122, 'Tesla', 0),
(455, 122, 'Henry', 0),
(456, 122, 'Volt', 1),
(457, 123, 'Equal ', 0),
(458, 123, 'Real and equal', 0),
(459, 123, 'Irrational ', 1),
(460, 123, 'Rational', 0),
(461, 124, '1 / x ', 0),
(462, 124, '1 / x lnx', 0),
(463, 124, '1 / x log10x ', 0),
(464, 124, 'None', 1),
(465, 125, 'ln Sinx', 0),
(466, 125, 'ln Cosx ', 0),
(467, 125, 'Sec2x ', 0),
(468, 125, 'ln Secx + c', 1),
(469, 126, 'Excitement', 1),
(470, 126, 'Class', 0),
(471, 126, 'Realization', 0),
(472, 126, 'Swiftness', 0),
(473, 127, 'Destroy', 1),
(474, 127, 'Promote', 0),
(475, 127, 'Disfigure', 0),
(476, 127, 'Dissipate', 0),
(477, 128, 'Healthy', 1),
(478, 128, 'diseased', 0),
(479, 128, 'morbid', 0),
(480, 128, 'None of these', 0),
(481, 129, 'seriously?', 1),
(482, 129, 'abc', 0),
(483, 129, 'def', 0),
(484, 129, 'ghd', 0),
(485, 130, 'dsa', 1),
(486, 130, 'dasd', 0),
(487, 130, 'asdsa', 0),
(488, 130, 'dasdas', 0),
(489, 131, 'dsad', 0),
(490, 131, 'das', 1),
(491, 131, 'dasd', 0),
(492, 131, 'asda', 0),
(493, 132, 'A ', 1),
(494, 132, 'B', 0),
(495, 132, 'C', 0),
(496, 132, 'D / E', 0),
(497, 133, 'Computer Science', 0),
(498, 133, 'General Science', 0),
(499, 133, 'Mathematics', 0),
(500, 133, 'Pakistan Studies', 1),
(501, 134, 'A', 0),
(502, 134, 'B', 0),
(503, 134, 'C', 0),
(504, 134, 'D/E', 1),
(505, 135, 'Computer Science', 1),
(506, 135, 'General Science', 0),
(507, 135, 'Mathematics', 0),
(508, 135, 'Pak Studies', 0),
(509, 136, 'Computer Science', 1),
(510, 136, 'Biology', 0),
(511, 136, 'Arts', 0),
(512, 136, 'Other', 0),
(513, 137, 'Computer Science', 1),
(514, 137, 'Biology', 0),
(515, 137, 'Arts', 0),
(516, 137, 'Other', 0),
(517, 138, 'A', 1),
(518, 138, 'B', 0),
(519, 138, 'C', 0),
(520, 138, 'D/E', 0),
(521, 139, 'Medical', 0),
(522, 139, 'Computer Science', 1),
(523, 139, 'Engineering', 0),
(524, 139, 'Fine Arts / Commerce', 0);

-- --------------------------------------------------------

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`id`, `title`, `url`, `address`, `phone`, `details`, `createdAt`, `updatedAt`) VALUES
(6, 'Crescent Model Higher Secondary School', 'www.crescentschool.edu.pk', '352, Shadman 1 Shadman, Lahore, Punjab 54000', '(042) 37421361', '<p>The Crescent Model Higher Secondary School is one of the oldest school of Pakistan which was established in the year of&nbsp;1968.&nbsp;Crescent school was established at&nbsp;<strong><em>Qaddafi stadium Lahore</em></strong>&nbsp;at the time there were only 35 students enrolled under the supervision of Principal Ashfaq Ahmed Qureshi. Crescent Model School is in the heart of&nbsp;Lahore.</p>', '2019-11-03 19:04:06', '2019-11-03 19:04:06'),
(7, 'Army Public School and College', 'www.apsacssectt.edu.pk', 'Shuhada Town Lahore, Punjab', '(042) 37102816', '<p>Army Public School and College or<strong>&nbsp;(APSACS),&nbsp;</strong>is one of the best school in Pakistan<strong>.&nbsp;</strong>It was established in&nbsp;<strong>1975</strong>. With the motto of “&nbsp;<strong>I shall rise and shine</strong>”. It has more than 35 branches located in all five provinces of Pakistan.</p>', '2019-11-03 19:05:10', '2019-11-03 19:05:10'),
(8, 'Dar-e-Arqam School', 'https://dar-e-arqam.org.pk/', ' Airport Road, Eden Avenue, Lahore, Punjab', '(042) 35731270', '<p>Dar-e-Arqam School System is one of the best private schooling networks in Pakistan, it was established in the year 1991. The First Dar-e-Arqam was built in&nbsp;Sargodha nowadays&nbsp;Dar-e-Arqam school is one of the largest growing school systems with more than&nbsp;<strong>170,000 students</strong>&nbsp;and more than&nbsp;<strong>660 branches</strong>&nbsp;all over Pakistan.</p>', '2019-11-03 19:05:46', '2019-11-03 19:05:46'),
(9, 'LAHORE GRAMMAR SCHOOLS', 'http:/lgs.edu.pk', '55 Main Boulevard Gulberg, Main Gulberg, Lahore, Punjab', '(042) 35712566', '<p>Lahore Grammar School or commonly referred to as&nbsp;<strong>LGS</strong>&nbsp;is one of the best private school systems in Lahore, Getting admission in LGS is one the tough part.</p><p>The best part about getting admission in LGS is the environment and education of LGS, also&nbsp;<strong>it is affiliated with the Cambridge Board</strong>&nbsp;of International Examinations for the O and A Level programs.</p>', '2019-11-03 19:06:31', '2019-11-03 19:06:31'),
(10, 'Lawrence College', 'https://lawrencecollege.edu.pk', 'Lawrence College Rd, Murree, Rawalpindi, Punjab', '(051) 3751001', '<p>Lawrence College (LC) was established in 1860 in the memory of Sir Henry Lawrence who served in the Bengal Artillery as a Brigadier General and helped the British-Indian government in many other matters of concern such as revenue system, canal system, roads, and orphanages.</p><p>LC is one of the few schools in Pakistan that pays a special focus to mental as well as physical development. LC is popular for its sports fixtures with different schools and known to have among the most skilled sports teams.</p>', '2019-11-03 19:08:30', '2019-11-03 19:08:30');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `display` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `title`, `display`, `createdAt`) VALUES
(1, 'Math', 1, '2019-10-25 20:59:42'),
(2, 'English', 1, '2019-10-27 13:15:22'),
(5, 'Biology', 1, '2019-11-01 20:46:33'),
(6, 'Chemistry', 1, '2019-11-01 20:46:42'),
(7, 'Physics', 1, '2019-11-01 21:39:01'),
(9, 'Computer Science', 1, '2019-11-01 22:21:59'),
(10, 'Pak Studies', 1, '2019-11-03 21:14:16'),
(11, 'Science', 1, '2019-11-03 21:19:43'),
(17, 'After Matric', 0, '2019-11-13 21:57:25'),
(18, 'After Intermediate', 0, '2019-11-13 21:57:36'),
(19, 'Others', 0, '2019-11-13 21:57:42'),
(21, 'Previous Qualification', 1, '2019-11-13 22:32:19'),
(22, 'Grades', 1, '2019-11-13 22:32:26'),
(23, 'Interest', 1, '2019-11-13 22:32:31'),
(24, 'Marks', 1, '2019-11-13 22:40:27');

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `details` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `title`, `url`, `address`, `phone`, `details`, `createdAt`, `updatedAt`) VALUES
(9, 'University of Punjab', 'http://www.pu.edu.pk/', 'Canal Rd, Quaid-i-Azam Campus, Lahore, Punjab', '(042) 99231098', '<p>Established in 1882 as one of the first in the Muslim Majority subcontinent, the University of Punjab has been serving quality education for many years. The university has 4 branch campuses in Lahore, Gujranwala, and Jhelum, each providing 4 disciplines namely:</p><ul><li>Business Administration</li><li>Commerce</li><li>Law</li><li>Information Tech</li></ul><p>The 2 Nobel Laureates: Mr. H. Gobind Khorana and Mr. Abdus Salam, who studied from this university, speaks volumes about the standard of education here.</p>', '2019-11-03 18:16:04', '2019-11-03 18:16:04'),
(10, 'National University of Science and Technology', 'http://www.nust.edu.pk/Pages/Default.aspx', '44000? NUST HQ? Scholars Avenue? H-12, Islamabad, Islamabad Capital Territory', '(051) 111 116 878', '<p>This was founded in the year 1991 as a non-profit higher education institution. Located in Islamabad, NUST also has branch campuses in Karachi, Rawalpindi and Rizal Pur. The enrollment range here is estimated to be from 9000 to 10,000, which makes it a highly selective university that considers acceptance after a strict entrance exam. The programmatic accreditations of this university are as follows:</p><ul><li>Government of Pakistan</li><li>Pak Eng Council (PEC)</li><li>Pak Council for Art and Design (PCAD)</li><li>National Computing Education Accreditation Council (NCEAC)</li><li>National Business Education Accreditation Council (NBEAC)</li></ul><p>NUST has many departments that give degrees ranging from undergraduate to Doctorate programs. The faculties here include:</p><ul><li>Engineering</li><li>Humanities and Social Studies</li><li>National and Applied sciences</li><li>Business studies</li></ul><p><br></p>', '2019-11-03 18:18:28', '2019-11-03 18:18:28'),
(11, 'University of Management and Technology', 'https://www.umt.edu.pk', 'Street No. 2, Block C Block C 2 Phase 1 Johar Town, Lahore, Punjab 54770', '(042) 111 300 200', '<p>This university was established in 1990 as a private higher education institution. A mentioned by bloggers providing<a href=\"https://thesiswritinghelp.com.pk/\" rel=\"noopener noreferrer\" target=\"_blank\">&nbsp;thesis writing help in Pakistan,</a>&nbsp;even though the main campus of this university is situated in Lahore, it has branch campuses in Sialkot that accepts 8000 to 9000 candidates every year.</p><p>Its accreditations include:</p><ul><li>National Business Education Accreditation Council (NBEAC)</li><li>National Computing Education Accreditation Council (NCEAC)</li><li>Pakistan Council of Architects and Town Planners (PCATP)</li><li>Pakistan Engineering Council (PEC)</li><li>South Asian Quality Assurance System (SAQAS)</li></ul><p><br></p>', '2019-11-03 18:34:45', '2019-11-03 18:34:45'),
(12, 'COMSATS Institute of Information Technology', 'https://www.comsats.edu.pk', 'Park Rd, Islamabad, Islamabad Capital Territory 45550', '(051) 9247000', '<p>Founded in the year 2000, this is a relatively new university that was aimed to provide non-profit public higher education to the public and has come a long way to mark its position amongst the top rated universities in Pakistan. With its main campus located in Islamabad, it has branch campuses in Abbottabad, Attock, Lahore, and Sahiwal. Each year, COMSATS enrolls 30,000 to 35,000 students and thus, considered to have a high acceptance rate. The faulty departments are the following:</p><ul><li>Faculty of Sciences</li><li>Faculty of Engineering</li><li>Faculty of Business Administration</li><li>Faculty of information sciences and tech</li><li>Faculty of Architecture and Design</li></ul><p><br></p>', '2019-11-03 18:35:44', '2019-11-03 18:35:44'),
(13, 'Bahauddin Zakariya University', 'https://bzu.edu.pk', 'Bosan Rd, Bahauddin Zakariya University, Multan, Punjab 60000', '(061) 9210071', '<p>This was established in 1975 as a non-profit higher education institution in Multan and its branch campus was later developed in Layyah. Providing degrees ranging in undergraduate to doctoral level, this university has many departments including:</p><ul><li>Faculty of Arts, social sciences</li><li>Faculty of Science and Agriculture</li><li>Faculty of Islamic Studies and Arabic language</li><li>Faculty of Commerce, Law and Business administration</li><li>Faculty of Engineering</li><li>Faculty of Pharmacy&nbsp;</li></ul><p><br></p>', '2019-11-03 18:36:53', '2019-11-03 18:36:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `createdAt`, `updatedAt`) VALUES
(8, 'hassan@gmail.com', '$2a$10$Uil8GkG1kZTvc8ZMiNWWgOlqf09EObHo5fiw7n932AoazATSBzuKK', 'Hassan', 'Mehmood', '2019-10-20 23:37:26', '2019-10-20 23:37:26'),
(9, 'Hamza@gmail.com', '$2a$10$ucFeSl.0M69S9F4wf78hEu42w7o/i8BW8BKgI/NXg.NBdc.3tFGO.', 'Hamza', 'Tariq', '2019-11-03 20:23:39', '2019-11-03 20:23:39'),
(10, 'ibrar@gmail.com', '$2a$10$qNv3eYLXYTJzmszBi97WfO.B0jOW7m/hgv9qDtLsoEMbPGA38vrUS', 'Ibrar', 'ahmed', '2019-11-04 12:22:10', '2019-11-04 12:22:10'),
(11, 'bilal@gmail.com', '$2a$10$0GDh3PIEbgHc6iFtZATlxenlI0eAKTEAflYkFZqp4VAu.R5dP3bfW', 'bilal', 'sheikh', '2019-11-04 13:04:28', '2019-11-04 13:04:28'),
(12, 'Usman1@gmail.com', '$2a$10$31KYr0xbloGwc9AzS6BPw.3adyucSUgKnybBNb7snlU1B5C8oiQ9m', 'Usman', 'Sheikh', '2019-11-06 12:30:32', '2019-11-06 12:30:32');

-- --------------------------------------------------------

--
-- Table structure for table `users_test`
--

CREATE TABLE `users_test` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `degree` int(11) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pending',
  `result` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_test`
--

INSERT INTO `users_test` (`id`, `user_id`, `degree`, `status`, `result`, `createdAt`) VALUES
(1, 8, 1, 'complete', 'Arts', '2019-11-02 11:13:33'),
(2, 8, 1, 'complete', 'Science', '2019-11-02 11:14:48'),
(3, 8, 1, 'complete', 'Science', '2019-11-02 11:16:24'),
(4, 8, 2, 'complete', 'Computer Science', '2019-11-02 11:18:37'),
(5, 8, 3, 'complete', 'Fsc Pre-Medical', '2019-11-02 11:19:34'),
(7, 8, 1, 'pending', '', '2019-11-02 11:46:21'),
(8, 8, 2, 'pending', '', '2019-11-02 11:46:23'),
(9, 8, 3, 'pending', '', '2019-11-02 11:46:26'),
(10, 14, 1, 'complete', 'Arts', '2019-11-02 16:40:15'),
(11, 14, 1, 'complete', 'Arts', '2019-11-02 16:40:25'),
(12, 14, 1, 'pending', '', '2019-11-02 16:40:41'),
(13, 14, 2, 'complete', 'Arts', '2019-11-02 16:40:46'),
(14, 14, 2, 'pending', '', '2019-11-02 16:40:55'),
(15, 14, 3, 'complete', 'FA', '2019-11-02 16:40:59'),
(16, 14, 3, 'pending', '', '2019-11-02 16:41:25'),
(17, 9, 3, 'complete', 'FA', '2019-11-03 20:23:56'),
(18, 9, 2, 'complete', 'Arts', '2019-11-03 20:23:57'),
(19, 9, 2, 'complete', 'Arts', '2019-11-03 20:24:05'),
(20, 9, 2, 'complete', 'Arts', '2019-11-03 20:24:10'),
(21, 9, 3, 'complete', 'FA', '2019-11-03 20:25:37'),
(22, 9, 3, 'complete', 'FA', '2019-11-03 20:52:29'),
(23, 9, 1, 'complete', 'Arts', '2019-11-03 20:52:33'),
(24, 9, 3, 'complete', 'Fsc Pre-Engineering', '2019-11-03 20:55:27'),
(25, 9, 1, 'complete', 'Arts', '2019-11-03 20:58:29'),
(26, 9, 1, 'complete', 'Arts', '2019-11-03 21:24:22'),
(27, 9, 1, 'complete', 'Science', '2019-11-03 21:24:58'),
(28, 9, 2, 'complete', 'Arts', '2019-11-03 22:44:15'),
(29, 9, 2, 'complete', 'Arts', '2019-11-03 22:50:58'),
(30, 9, 2, 'complete', 'Arts', '2019-11-03 22:51:04'),
(31, 9, 2, 'complete', 'Arts', '2019-11-03 22:51:10'),
(32, 9, 2, 'complete', 'Arts', '2019-11-03 22:51:24'),
(33, 9, 2, 'complete', 'Arts', '2019-11-03 22:58:45'),
(34, 9, 2, 'complete', 'Computer Science', '2019-11-03 23:32:10'),
(35, 9, 2, 'complete', 'Arts', '2019-11-03 23:41:20'),
(36, 9, 2, 'complete', 'Arts', '2019-11-03 23:41:30'),
(37, 9, 2, 'complete', 'Arts', '2019-11-03 23:54:10'),
(38, 9, 2, 'complete', 'Arts', '2019-11-03 23:54:23'),
(39, 9, 2, 'complete', 'Arts', '2019-11-04 01:08:41'),
(40, 9, 2, 'complete', 'Arts', '2019-11-04 01:32:07'),
(41, 9, 2, 'complete', 'Arts', '2019-11-04 01:37:58'),
(42, 9, 1, 'complete', 'Arts', '2019-11-04 01:59:09'),
(43, 9, 3, 'complete', 'FA', '2019-11-04 01:59:11'),
(44, 9, 3, 'complete', 'FA', '2019-11-04 02:28:22'),
(45, 9, 3, 'complete', 'FA', '2019-11-04 02:29:21'),
(46, 9, 1, 'complete', 'Arts', '2019-11-04 11:48:06'),
(47, 9, 3, 'complete', 'FA', '2019-11-04 11:48:25'),
(48, 9, 2, 'complete', 'Arts', '2019-11-04 11:49:48'),
(49, 9, 3, 'complete', 'FA', '2019-11-04 11:49:51'),
(50, 9, 1, 'complete', 'Arts', '2019-11-04 11:59:49'),
(51, 9, 2, 'complete', 'Arts', '2019-11-04 12:00:55'),
(52, 9, 1, 'complete', 'Arts', '2019-11-04 12:00:56'),
(53, 9, 3, 'complete', 'Fsc Pre-Engineering', '2019-11-04 12:25:52'),
(54, 11, 2, 'pending', '', '2019-11-04 13:04:42'),
(55, 9, 1, 'complete', 'Arts', '2019-11-05 09:47:55'),
(56, 9, 1, 'complete', 'Arts', '2019-11-05 09:48:49'),
(57, 9, 1, 'complete', 'Arts', '2019-11-05 09:49:32'),
(58, 9, 2, 'complete', 'Arts', '2019-11-05 15:00:25'),
(59, 9, 3, 'complete', 'FA', '2019-11-05 15:00:26'),
(60, 9, 1, 'complete', 'Arts', '2019-11-05 15:07:59'),
(61, 9, 1, 'complete', 'Arts', '2019-11-05 20:11:04'),
(62, 9, 1, 'complete', 'Arts', '2019-11-05 20:14:17'),
(63, 9, 1, 'complete', 'Arts', '2019-11-05 20:14:51'),
(64, 9, 1, 'complete', 'Arts', '2019-11-05 21:13:59'),
(65, 9, 1, 'complete', 'Arts', '2019-11-05 23:31:42'),
(66, 9, 3, 'complete', 'FA', '2019-11-05 23:31:44'),
(67, 9, 3, 'complete', 'FA', '2019-11-05 23:36:06'),
(68, 9, 3, 'complete', 'FA', '2019-11-05 23:36:56'),
(69, 9, 3, 'complete', 'FA', '2019-11-05 23:37:34'),
(70, 9, 3, 'complete', 'FA', '2019-11-05 23:38:02'),
(71, 9, 3, 'complete', 'FA', '2019-11-05 23:39:24'),
(72, 9, 3, 'complete', 'FA', '2019-11-05 23:39:52'),
(73, 9, 3, 'complete', 'FA', '2019-11-05 23:40:23'),
(74, 9, 3, 'complete', 'ICS', '2019-11-05 23:40:39'),
(75, 9, 3, 'complete', 'FA', '2019-11-05 23:41:15'),
(76, 9, 3, 'complete', 'FA', '2019-11-05 23:41:28'),
(77, 9, 1, 'complete', 'Arts', '2019-11-06 11:05:00'),
(78, 9, 1, 'complete', 'Arts', '2019-11-06 12:25:46'),
(79, 9, 1, 'complete', 'Arts', '2019-11-06 12:27:10'),
(80, 12, 1, 'pending', '', '2019-11-06 12:30:45'),
(81, 12, 2, 'complete', 'Arts', '2019-11-06 12:30:46'),
(82, 12, 3, 'complete', 'FA', '2019-11-06 12:30:48'),
(83, 12, 3, 'complete', 'FA', '2019-11-06 12:48:59'),
(84, 12, 2, 'pending', '', '2019-11-06 13:11:35'),
(85, 9, 3, 'complete', 'FA', '2019-11-11 21:46:14'),
(86, 9, 3, 'complete', 'FA', '2019-11-11 21:46:28'),
(87, 9, 3, 'complete', 'FA', '2019-11-11 21:49:59'),
(88, 9, 3, 'complete', 'FA', '2019-11-11 22:02:56'),
(89, 9, 3, 'complete', 'FA', '2019-11-11 22:03:24'),
(90, 9, 3, 'complete', 'FA', '2019-11-11 22:03:55'),
(91, 9, 3, 'complete', 'FA', '2019-11-11 22:04:32'),
(92, 9, 3, 'complete', 'FA', '2019-11-11 22:06:18'),
(93, 9, 3, 'complete', 'FA', '2019-11-11 22:08:27'),
(94, 9, 3, 'complete', 'FA', '2019-11-11 22:09:32'),
(95, 9, 3, 'complete', 'FA', '2019-11-11 22:10:10'),
(96, 9, 2, 'complete', 'Arts', '2019-11-13 21:15:42'),
(97, 9, 2, 'complete', 'Arts', '2019-11-13 21:17:12'),
(98, 9, 3, 'complete', 'FA', '2019-11-13 21:18:01'),
(99, 9, 3, 'complete', 'FA', '2019-11-13 21:18:23'),
(100, 9, 3, 'complete', 'FA', '2019-11-13 21:18:47'),
(101, 9, 1, 'complete', 'Arts', '2019-11-13 21:21:19'),
(102, 9, 2, 'complete', 'Arts', '2019-11-13 21:21:45'),
(103, 9, 1, 'complete', 'Arts', '2019-11-13 22:24:54'),
(104, 9, 2, 'complete', 'Arts', '2019-11-13 23:13:40'),
(105, 12, 3, 'complete', 'FA', '2019-11-13 23:27:48'),
(106, 12, 3, 'complete', 'FA', '2019-11-13 23:28:19'),
(107, 12, 3, 'complete', 'FA', '2019-11-13 23:31:42'),
(108, 12, 3, 'complete', 'FA', '2019-11-13 23:32:13'),
(109, 12, 3, 'complete', 'FA', '2019-11-13 23:34:45'),
(110, 12, 3, 'complete', 'FA', '2019-11-13 23:35:51'),
(111, 9, 1, 'complete', 'Arts', '2019-11-14 02:19:33'),
(112, 9, 1, 'complete', 'Arts', '2019-11-14 02:23:11'),
(113, 9, 3, 'complete', 'FA', '2019-11-14 02:23:35'),
(114, 9, 2, 'complete', 'Arts', '2019-11-14 02:23:37'),
(115, 9, 3, 'complete', 'FA', '2019-11-14 02:27:55'),
(116, 9, 1, 'complete', 'Arts', '2019-11-14 02:32:35'),
(117, 9, 3, 'complete', 'FA', '2019-11-14 02:36:03'),
(118, 9, 3, 'complete', 'FA', '2019-11-14 02:37:27'),
(119, 9, 3, 'complete', 'FA', '2019-11-14 02:38:19'),
(120, 9, 3, 'complete', 'FA', '2019-11-14 02:39:49'),
(121, 9, 3, 'complete', 'FA', '2019-11-14 02:42:12'),
(122, 9, 3, 'complete', 'FA', '2019-11-14 02:43:28'),
(123, 9, 3, 'complete', 'FA', '2019-11-14 02:44:47'),
(124, 9, 3, 'complete', 'FA', '2019-11-14 02:46:13'),
(125, 9, 3, 'complete', 'FA', '2019-11-14 02:46:51'),
(126, 9, 3, 'complete', 'FA', '2019-11-14 02:47:41'),
(127, 9, 3, 'complete', 'FA', '2019-11-14 02:52:15'),
(128, 9, 3, 'complete', 'FA', '2019-11-14 02:54:15'),
(129, 9, 3, 'complete', 'FA', '2019-11-14 02:56:00'),
(130, 9, 3, 'complete', 'FA', '2019-11-14 02:58:20'),
(131, 9, 3, 'complete', 'FA', '2019-11-14 02:59:08'),
(132, 9, 3, 'complete', 'FA', '2019-11-14 02:59:32'),
(133, 9, 3, 'complete', 'FA', '2019-11-14 03:00:36'),
(134, 9, 3, 'complete', 'FA', '2019-11-14 21:07:21'),
(135, 9, 3, 'complete', 'FA', '2019-11-14 21:10:00'),
(136, 9, 3, 'complete', 'FA', '2019-11-14 22:14:45'),
(137, 9, 1, 'complete', 'Arts', '2019-11-14 22:51:07'),
(138, 9, 2, 'complete', 'Arts', '2019-11-14 23:01:36'),
(139, 9, 2, 'complete', 'Arts', '2019-11-14 23:02:23'),
(140, 9, 3, 'complete', 'FA', '2019-11-14 23:03:25'),
(141, 9, 1, 'complete', 'Arts', '2019-11-14 23:05:00'),
(142, 9, 3, 'complete', 'FA', '2019-11-14 23:08:24'),
(143, 9, 2, 'complete', 'Arts', '2019-11-14 23:09:15'),
(144, 9, 3, 'complete', 'FA', '2019-11-14 23:20:46'),
(145, 9, 2, 'complete', 'Arts', '2019-11-14 23:21:04'),
(146, 9, 2, 'pending', '', '2019-11-14 23:51:59'),
(147, 9, 3, 'pending', '', '2019-11-14 23:52:20'),
(148, 9, 1, 'complete', 'Arts', '2019-11-14 23:53:03'),
(149, 9, 1, 'pending', '', '2019-11-16 01:09:05');

-- --------------------------------------------------------

--
-- Table structure for table `users_test_answers`
--

CREATE TABLE `users_test_answers` (
  `id` int(11) NOT NULL,
  `test_id` int(11) NOT NULL,
  `questions_options_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_test_answers`
--

INSERT INTO `users_test_answers` (`id`, `test_id`, `questions_options_id`) VALUES
(1, 1, 24),
(2, 1, 38),
(3, 1, 41),
(4, 1, 46),
(5, 1, 54),
(6, 1, 58),
(7, 1, 63),
(8, 1, 65),
(9, 1, 72),
(10, 1, 73),
(11, 2, 24),
(12, 2, 38),
(13, 2, 41),
(14, 2, 46),
(15, 2, 54),
(16, 2, 58),
(17, 2, 62),
(18, 2, 68),
(19, 2, 69),
(20, 2, 74),
(21, 3, 24),
(22, 3, 38),
(23, 3, 41),
(24, 3, 46),
(25, 3, 54),
(26, 3, 58),
(27, 3, 62),
(28, 3, 68),
(29, 3, 69),
(30, 3, 74),
(31, 4, 80),
(32, 4, 82),
(33, 4, 85),
(34, 4, 90),
(35, 4, 94),
(36, 4, 98),
(37, 4, 102),
(38, 4, 106),
(39, 4, 112),
(40, 4, 115),
(41, 5, 119),
(42, 5, 121),
(43, 5, 128),
(44, 5, 132),
(45, 5, 134),
(46, 5, 140),
(47, 5, 141),
(48, 5, 147),
(49, 5, 149),
(50, 5, 153),
(51, 5, 159),
(52, 5, 164),
(53, 5, 167),
(54, 5, 170),
(55, 5, 174),
(56, 10, 23),
(57, 10, 37),
(58, 10, 42),
(59, 10, 46),
(60, 10, 55),
(61, 10, 60),
(62, 10, 62),
(63, 10, 67),
(64, 10, 71),
(65, 10, 74),
(66, 11, 23),
(67, 11, 39),
(68, 11, 43),
(69, 11, 46),
(70, 11, 55),
(71, 11, 60),
(72, 11, 62),
(73, 11, 65),
(74, 11, 71),
(75, 11, 73),
(76, 13, 79),
(77, 13, 82),
(78, 13, 88),
(79, 13, 90),
(80, 13, 95),
(81, 13, 99),
(82, 13, 103),
(83, 13, 107),
(84, 13, 110),
(85, 13, 116),
(86, 15, 118),
(87, 15, 122),
(88, 15, 126),
(89, 15, 132),
(90, 15, 133),
(91, 15, 137),
(92, 15, 141),
(93, 15, 147),
(94, 15, 151),
(95, 15, 155),
(96, 15, 159),
(97, 15, 163),
(98, 15, 166),
(99, 15, 171),
(100, 15, 173),
(101, 18, 80),
(102, 18, 84),
(103, 18, 86),
(104, 18, 91),
(105, 18, 93),
(106, 19, 79),
(107, 19, 81),
(108, 19, 88),
(109, 19, 91),
(110, 19, 96),
(111, 17, 120),
(112, 17, 122),
(113, 17, 128),
(114, 17, 132),
(115, 17, 134),
(116, 17, 139),
(117, 17, 141),
(118, 17, 148),
(119, 17, 151),
(120, 17, 154),
(121, 17, 157),
(122, 17, 162),
(123, 17, 167),
(124, 17, 171),
(125, 17, 173),
(126, 21, 120),
(127, 21, 123),
(128, 21, 127),
(129, 21, 132),
(130, 21, 133),
(131, 21, 137),
(132, 21, 144),
(133, 21, 147),
(134, 21, 151),
(135, 21, 153),
(136, 21, 158),
(137, 21, 163),
(138, 21, 165),
(139, 21, 170),
(140, 21, 173),
(141, 22, 118),
(142, 22, 123),
(143, 22, 126),
(144, 22, 132),
(145, 22, 135),
(146, 22, 140),
(147, 22, 143),
(148, 22, 146),
(149, 22, 151),
(150, 22, 154),
(151, 22, 160),
(152, 22, 163),
(153, 22, 167),
(154, 22, 172),
(155, 22, 174),
(156, 23, 22),
(157, 23, 38),
(158, 23, 43),
(159, 23, 45),
(160, 23, 54),
(161, 25, 182),
(162, 25, 187),
(163, 25, 192),
(164, 25, 194),
(165, 25, 200),
(166, 25, 203),
(167, 25, 205),
(168, 25, 209),
(169, 25, 215),
(170, 25, 218),
(171, 25, 221),
(172, 25, 225),
(173, 25, 230),
(174, 25, 235),
(175, 25, 240),
(176, 25, 243),
(177, 25, 245),
(178, 25, 251),
(179, 25, 253),
(180, 25, 259),
(181, 26, 181),
(182, 26, 183),
(183, 26, 191),
(184, 26, 195),
(185, 26, 197),
(186, 26, 203),
(187, 26, 207),
(188, 26, 209),
(189, 26, 216),
(190, 26, 217),
(191, 26, 223),
(192, 26, 227),
(193, 26, 231),
(194, 26, 236),
(195, 26, 238),
(196, 26, 243),
(197, 26, 248),
(198, 26, 250),
(199, 26, 253),
(200, 26, 260),
(201, 27, 181),
(202, 27, 186),
(203, 27, 191),
(204, 27, 196),
(205, 27, 197),
(206, 27, 203),
(207, 27, 206),
(208, 27, 210),
(209, 27, 215),
(210, 27, 217),
(211, 27, 221),
(212, 27, 228),
(213, 27, 229),
(214, 27, 234),
(215, 27, 238),
(216, 27, 242),
(217, 27, 248),
(218, 27, 252),
(219, 27, 255),
(220, 27, 258),
(221, 20, 261),
(222, 20, 268),
(223, 20, 271),
(224, 20, 275),
(225, 28, 264),
(226, 28, 265),
(227, 28, 270),
(228, 28, 274),
(229, 29, 263),
(230, 29, 266),
(231, 29, 272),
(232, 29, 274),
(233, 30, 262),
(234, 30, 268),
(235, 30, 271),
(236, 30, 274),
(237, 31, 263),
(238, 31, 265),
(239, 31, 269),
(240, 31, 273),
(241, 32, 263),
(242, 32, 267),
(243, 32, 269),
(244, 32, 273),
(245, 32, 277),
(246, 32, 283),
(247, 32, 287),
(248, 32, 291),
(249, 32, 296),
(250, 32, 297),
(251, 33, 263),
(252, 33, 267),
(253, 33, 269),
(254, 33, 273),
(255, 33, 278),
(256, 33, 283),
(257, 33, 285),
(258, 33, 292),
(259, 33, 296),
(260, 33, 297),
(261, 34, 263),
(262, 34, 265),
(263, 34, 269),
(264, 34, 273),
(265, 34, 278),
(266, 34, 283),
(267, 34, 288),
(268, 34, 292),
(269, 34, 296),
(270, 34, 297),
(271, 34, 303),
(272, 35, 263),
(273, 35, 265),
(274, 35, 272),
(275, 35, 273),
(276, 35, 277),
(277, 35, 283),
(278, 35, 285),
(279, 35, 290),
(280, 35, 294),
(281, 35, 300),
(282, 35, 302),
(283, 36, 263),
(284, 36, 268),
(285, 36, 269),
(286, 36, 276),
(287, 36, 280),
(288, 36, 284),
(289, 36, 285),
(290, 36, 290),
(291, 36, 293),
(292, 36, 299),
(293, 36, 304),
(294, 37, 263),
(295, 37, 267),
(296, 37, 272),
(297, 37, 274),
(298, 37, 280),
(299, 37, 284),
(300, 37, 285),
(301, 37, 291),
(302, 37, 294),
(303, 37, 299),
(304, 37, 303),
(305, 38, 263),
(306, 38, 265),
(307, 38, 269),
(308, 38, 273),
(309, 38, 288),
(310, 38, 292),
(311, 38, 296),
(312, 38, 297),
(313, 38, 303),
(314, 38, 310),
(315, 38, 316),
(316, 38, 318),
(317, 38, 321),
(318, 38, 325),
(319, 38, 332),
(320, 38, 335),
(321, 38, 337),
(322, 38, 341),
(323, 38, 347),
(324, 38, 352),
(325, 39, 263),
(326, 39, 265),
(327, 39, 269),
(328, 39, 273),
(329, 39, 286),
(330, 39, 292),
(331, 39, 294),
(332, 39, 297),
(333, 39, 312),
(334, 39, 314),
(335, 39, 318),
(336, 39, 322),
(337, 39, 325),
(338, 39, 330),
(339, 39, 335),
(340, 39, 337),
(341, 39, 342),
(342, 39, 348),
(343, 39, 350),
(344, 39, 355),
(345, 40, 263),
(346, 40, 265),
(347, 40, 269),
(348, 40, 273),
(349, 40, 286),
(350, 40, 292),
(351, 40, 294),
(352, 40, 297),
(353, 40, 312),
(354, 40, 314),
(355, 40, 318),
(356, 40, 322),
(357, 40, 325),
(358, 40, 330),
(359, 40, 335),
(360, 40, 337),
(361, 40, 342),
(362, 40, 348),
(363, 40, 350),
(364, 40, 355),
(365, 24, 359),
(366, 24, 364),
(367, 24, 368),
(368, 24, 370),
(369, 24, 375),
(370, 24, 379),
(371, 24, 384),
(372, 24, 387),
(373, 24, 389),
(374, 24, 396),
(375, 24, 400),
(376, 24, 401),
(377, 24, 407),
(378, 24, 409),
(379, 24, 416),
(380, 43, 359),
(381, 43, 364),
(382, 43, 368),
(383, 43, 369),
(384, 43, 376),
(385, 43, 380),
(386, 43, 382),
(387, 43, 388),
(388, 43, 390),
(389, 43, 393),
(390, 43, 397),
(391, 43, 402),
(392, 43, 408),
(393, 43, 412),
(394, 43, 415),
(395, 44, 357),
(396, 44, 361),
(397, 44, 366),
(398, 44, 370),
(399, 44, 375),
(400, 44, 379),
(401, 44, 382),
(402, 44, 387),
(403, 44, 391),
(404, 44, 396),
(405, 44, 400),
(406, 44, 404),
(407, 44, 406),
(408, 44, 409),
(409, 44, 416),
(410, 45, 357),
(411, 45, 363),
(412, 45, 366),
(413, 45, 369),
(414, 45, 373),
(415, 45, 380),
(416, 45, 384),
(417, 45, 387),
(418, 45, 389),
(419, 45, 396),
(420, 45, 400),
(421, 45, 401),
(422, 45, 408),
(423, 45, 409),
(424, 45, 413),
(425, 42, 181),
(426, 42, 186),
(427, 42, 190),
(428, 42, 193),
(429, 42, 199),
(430, 42, 203),
(431, 42, 207),
(432, 42, 211),
(433, 42, 213),
(434, 42, 220),
(435, 42, 223),
(436, 42, 227),
(437, 42, 229),
(438, 42, 234),
(439, 42, 237),
(440, 42, 243),
(441, 42, 245),
(442, 42, 251),
(443, 42, 253),
(444, 42, 260),
(445, 41, 262),
(446, 41, 265),
(447, 41, 271),
(448, 41, 275),
(449, 41, 288),
(450, 41, 289),
(451, 41, 293),
(452, 41, 298),
(453, 41, 312),
(454, 41, 314),
(455, 41, 318),
(456, 41, 324),
(457, 41, 326),
(458, 41, 331),
(459, 41, 334),
(460, 41, 338),
(461, 41, 343),
(462, 41, 346),
(463, 41, 350),
(464, 41, 356),
(465, 47, 360),
(466, 47, 361),
(467, 47, 368),
(468, 47, 370),
(469, 47, 374),
(470, 47, 379),
(471, 47, 383),
(472, 47, 388),
(473, 47, 392),
(474, 47, 395),
(475, 47, 399),
(476, 47, 401),
(477, 47, 407),
(478, 47, 411),
(479, 47, 416),
(480, 46, 184),
(481, 46, 187),
(482, 46, 190),
(483, 46, 196),
(484, 46, 198),
(485, 46, 202),
(486, 46, 205),
(487, 46, 212),
(488, 46, 214),
(489, 46, 219),
(490, 46, 224),
(491, 46, 225),
(492, 46, 230),
(493, 46, 236),
(494, 46, 237),
(495, 46, 244),
(496, 46, 248),
(497, 46, 250),
(498, 46, 255),
(499, 46, 257),
(500, 50, 182),
(501, 50, 185),
(502, 50, 190),
(503, 50, 193),
(504, 50, 199),
(505, 50, 201),
(506, 50, 207),
(507, 50, 209),
(508, 50, 215),
(509, 50, 217),
(510, 50, 222),
(511, 50, 225),
(512, 50, 231),
(513, 50, 234),
(514, 50, 238),
(515, 50, 243),
(516, 50, 247),
(517, 50, 249),
(518, 50, 254),
(519, 50, 257),
(520, 48, 263),
(521, 48, 268),
(522, 48, 270),
(523, 48, 274),
(524, 48, 288),
(525, 48, 290),
(526, 48, 295),
(527, 48, 298),
(528, 48, 310),
(529, 48, 314),
(530, 48, 319),
(531, 48, 323),
(532, 48, 327),
(533, 48, 331),
(534, 48, 336),
(535, 48, 339),
(536, 48, 343),
(537, 48, 345),
(538, 48, 349),
(539, 48, 353),
(540, 49, 357),
(541, 49, 361),
(542, 49, 365),
(543, 49, 370),
(544, 49, 374),
(545, 49, 380),
(546, 49, 381),
(547, 49, 388),
(548, 49, 389),
(549, 49, 393),
(550, 49, 398),
(551, 49, 403),
(552, 49, 405),
(553, 49, 409),
(554, 49, 415),
(555, 52, 181),
(556, 52, 188),
(557, 52, 191),
(558, 52, 193),
(559, 52, 197),
(560, 52, 202),
(561, 52, 205),
(562, 52, 209),
(563, 52, 216),
(564, 52, 220),
(565, 52, 222),
(566, 52, 228),
(567, 52, 229),
(568, 52, 236),
(569, 52, 239),
(570, 52, 241),
(571, 52, 245),
(572, 52, 250),
(573, 52, 254),
(574, 52, 259),
(575, 51, 261),
(576, 51, 268),
(577, 51, 269),
(578, 51, 273),
(579, 51, 285),
(580, 51, 289),
(581, 51, 294),
(582, 51, 297),
(583, 51, 311),
(584, 51, 313),
(585, 51, 320),
(586, 51, 321),
(587, 51, 325),
(588, 51, 331),
(589, 51, 336),
(590, 51, 337),
(591, 51, 341),
(592, 51, 347),
(593, 51, 351),
(594, 51, 354),
(595, 53, 359),
(596, 53, 364),
(597, 53, 368),
(598, 53, 370),
(599, 53, 375),
(600, 53, 379),
(601, 53, 384),
(602, 53, 387),
(603, 53, 389),
(604, 53, 396),
(605, 53, 400),
(606, 53, 401),
(607, 53, 407),
(608, 53, 409),
(609, 53, 413),
(610, 55, 181),
(611, 55, 188),
(612, 55, 191),
(613, 55, 196),
(614, 55, 199),
(615, 55, 204),
(616, 55, 207),
(617, 55, 212),
(618, 55, 213),
(619, 55, 219),
(620, 55, 221),
(621, 55, 228),
(622, 55, 229),
(623, 55, 234),
(624, 55, 237),
(625, 55, 241),
(626, 55, 245),
(627, 55, 252),
(628, 55, 256),
(629, 55, 260),
(630, 56, 181),
(631, 56, 185),
(632, 56, 190),
(633, 56, 195),
(634, 56, 197),
(635, 56, 202),
(636, 56, 205),
(637, 56, 209),
(638, 56, 214),
(639, 56, 218),
(640, 56, 224),
(641, 56, 228),
(642, 56, 232),
(643, 56, 235),
(644, 56, 237),
(645, 56, 244),
(646, 56, 246),
(647, 56, 250),
(648, 56, 254),
(649, 56, 258),
(650, 57, 183),
(651, 57, 186),
(652, 57, 192),
(653, 57, 196),
(654, 57, 199),
(655, 57, 204),
(656, 57, 206),
(657, 57, 209),
(658, 57, 215),
(659, 57, 220),
(660, 57, 224),
(661, 57, 225),
(662, 57, 230),
(663, 57, 233),
(664, 57, 237),
(665, 57, 244),
(666, 57, 248),
(667, 57, 250),
(668, 57, 256),
(669, 57, 260),
(670, 60, 183),
(671, 60, 186),
(672, 60, 191),
(673, 60, 196),
(674, 60, 199),
(675, 60, 204),
(676, 60, 206),
(677, 60, 209),
(678, 60, 215),
(679, 60, 219),
(680, 60, 222),
(681, 60, 228),
(682, 60, 232),
(683, 60, 233),
(684, 60, 239),
(685, 60, 242),
(686, 60, 246),
(687, 60, 249),
(688, 60, 256),
(689, 60, 260),
(690, 61, 183),
(691, 61, 185),
(692, 61, 191),
(693, 61, 195),
(694, 61, 198),
(695, 61, 204),
(696, 61, 205),
(697, 61, 211),
(698, 61, 215),
(699, 61, 218),
(700, 61, 221),
(701, 61, 228),
(702, 61, 229),
(703, 61, 234),
(704, 61, 238),
(705, 61, 242),
(706, 61, 247),
(707, 61, 251),
(708, 61, 255),
(709, 61, 260),
(710, 62, 182),
(711, 62, 187),
(712, 62, 192),
(713, 62, 196),
(714, 62, 198),
(715, 62, 201),
(716, 62, 205),
(717, 62, 211),
(718, 62, 216),
(719, 62, 220),
(720, 62, 224),
(721, 62, 227),
(722, 62, 229),
(723, 62, 234),
(724, 62, 237),
(725, 62, 242),
(726, 62, 246),
(727, 62, 249),
(728, 62, 255),
(729, 62, 259),
(730, 63, 181),
(731, 63, 185),
(732, 63, 192),
(733, 63, 196),
(734, 63, 199),
(735, 63, 204),
(736, 63, 208),
(737, 63, 210),
(738, 63, 215),
(739, 63, 218),
(740, 63, 224),
(741, 63, 227),
(742, 63, 230),
(743, 63, 235),
(744, 63, 239),
(745, 63, 242),
(746, 63, 246),
(747, 63, 251),
(748, 63, 253),
(749, 63, 259),
(750, 59, 360),
(751, 59, 363),
(752, 59, 366),
(753, 59, 372),
(754, 59, 374),
(755, 59, 378),
(756, 59, 381),
(757, 59, 387),
(758, 59, 389),
(759, 59, 396),
(760, 59, 400),
(761, 59, 401),
(762, 59, 406),
(763, 59, 410),
(764, 59, 414),
(765, 64, 181),
(766, 64, 187),
(767, 64, 191),
(768, 64, 194),
(769, 64, 198),
(770, 64, 202),
(771, 64, 207),
(772, 64, 211),
(773, 64, 213),
(774, 64, 219),
(775, 64, 224),
(776, 64, 225),
(777, 64, 229),
(778, 64, 236),
(779, 64, 240),
(780, 64, 241),
(781, 64, 248),
(782, 64, 249),
(783, 64, 256),
(784, 64, 258),
(785, 58, 263),
(786, 58, 266),
(787, 58, 270),
(788, 58, 276),
(789, 58, 285),
(790, 58, 292),
(791, 58, 294),
(792, 58, 298),
(793, 58, 312),
(794, 58, 315),
(795, 58, 319),
(796, 58, 321),
(797, 58, 325),
(798, 58, 329),
(799, 58, 336),
(800, 58, 338),
(801, 58, 341),
(802, 58, 346),
(803, 58, 350),
(804, 58, 354),
(805, 66, 357),
(806, 66, 362),
(807, 66, 365),
(808, 66, 370),
(809, 66, 373),
(810, 66, 380),
(811, 66, 384),
(812, 66, 388),
(813, 66, 390),
(814, 66, 394),
(815, 66, 398),
(816, 66, 401),
(817, 66, 408),
(818, 66, 409),
(819, 66, 414),
(820, 67, 359),
(821, 67, 363),
(822, 67, 367),
(823, 67, 370),
(824, 67, 373),
(825, 67, 379),
(826, 67, 383),
(827, 67, 386),
(828, 67, 392),
(829, 67, 394),
(830, 67, 397),
(831, 67, 402),
(832, 67, 407),
(833, 67, 409),
(834, 67, 414),
(835, 68, 358),
(836, 68, 361),
(837, 68, 365),
(838, 68, 372),
(839, 68, 376),
(840, 68, 377),
(841, 68, 384),
(842, 68, 388),
(843, 68, 392),
(844, 68, 394),
(845, 68, 400),
(846, 68, 403),
(847, 68, 406),
(848, 68, 411),
(849, 68, 413),
(850, 69, 357),
(851, 69, 364),
(852, 69, 367),
(853, 69, 371),
(854, 69, 373),
(855, 69, 378),
(856, 69, 384),
(857, 69, 385),
(858, 69, 389),
(859, 69, 393),
(860, 69, 399),
(861, 69, 401),
(862, 69, 405),
(863, 69, 411),
(864, 69, 416),
(865, 70, 357),
(866, 70, 364),
(867, 70, 366),
(868, 70, 370),
(869, 70, 373),
(870, 70, 377),
(871, 70, 381),
(872, 70, 387),
(873, 70, 391),
(874, 70, 395),
(875, 70, 400),
(876, 70, 401),
(877, 70, 406),
(878, 70, 412),
(879, 70, 415),
(880, 71, 359),
(881, 71, 361),
(882, 71, 366),
(883, 71, 370),
(884, 71, 375),
(885, 71, 379),
(886, 71, 384),
(887, 71, 388),
(888, 71, 391),
(889, 71, 396),
(890, 71, 398),
(891, 71, 402),
(892, 71, 406),
(893, 71, 409),
(894, 71, 416),
(895, 72, 358),
(896, 72, 362),
(897, 72, 365),
(898, 72, 371),
(899, 72, 376),
(900, 72, 379),
(901, 72, 383),
(902, 72, 388),
(903, 72, 392),
(904, 72, 395),
(905, 72, 398),
(906, 72, 403),
(907, 72, 407),
(908, 72, 411),
(909, 72, 413),
(910, 73, 360),
(911, 73, 363),
(912, 73, 367),
(913, 73, 372),
(914, 73, 374),
(915, 73, 380),
(916, 73, 384),
(917, 73, 386),
(918, 73, 390),
(919, 73, 395),
(920, 73, 399),
(921, 73, 401),
(922, 73, 407),
(923, 73, 410),
(924, 73, 415),
(925, 74, 359),
(926, 74, 363),
(927, 74, 365),
(928, 74, 371),
(929, 74, 375),
(930, 74, 378),
(931, 74, 383),
(932, 74, 387),
(933, 74, 389),
(934, 74, 396),
(935, 74, 399),
(936, 74, 402),
(937, 74, 408),
(938, 74, 409),
(939, 74, 416),
(940, 75, 358),
(941, 75, 364),
(942, 75, 368),
(943, 75, 370),
(944, 75, 375),
(945, 75, 380),
(946, 75, 384),
(947, 75, 386),
(948, 75, 390),
(949, 75, 394),
(950, 75, 398),
(951, 75, 401),
(952, 75, 408),
(953, 75, 411),
(954, 75, 413),
(955, 76, 358),
(956, 76, 364),
(957, 76, 365),
(958, 76, 372),
(959, 76, 373),
(960, 76, 379),
(961, 76, 381),
(962, 76, 386),
(963, 76, 392),
(964, 76, 394),
(965, 76, 399),
(966, 76, 403),
(967, 76, 408),
(968, 76, 411),
(969, 76, 415),
(970, 65, 182),
(971, 65, 186),
(972, 65, 192),
(973, 65, 196),
(974, 65, 197),
(975, 65, 204),
(976, 65, 205),
(977, 65, 211),
(978, 65, 216),
(979, 65, 217),
(980, 65, 224),
(981, 65, 226),
(982, 65, 232),
(983, 65, 234),
(984, 65, 239),
(985, 65, 241),
(986, 65, 245),
(987, 65, 252),
(988, 65, 256),
(989, 65, 259),
(990, 77, 182),
(991, 77, 186),
(992, 77, 191),
(993, 77, 194),
(994, 77, 198),
(995, 77, 203),
(996, 77, 208),
(997, 77, 211),
(998, 77, 215),
(999, 77, 217),
(1000, 77, 221),
(1001, 77, 228),
(1002, 77, 229),
(1003, 77, 234),
(1004, 77, 238),
(1005, 77, 244),
(1006, 77, 248),
(1007, 77, 249),
(1008, 77, 254),
(1009, 77, 260),
(1010, 78, 181),
(1011, 78, 185),
(1012, 78, 192),
(1013, 78, 193),
(1014, 78, 198),
(1015, 78, 201),
(1016, 78, 208),
(1017, 78, 209),
(1018, 78, 216),
(1019, 78, 218),
(1020, 78, 223),
(1021, 78, 227),
(1022, 78, 231),
(1023, 78, 234),
(1024, 78, 237),
(1025, 78, 244),
(1026, 78, 247),
(1027, 78, 249),
(1028, 78, 254),
(1029, 78, 260),
(1030, 82, 359),
(1031, 82, 363),
(1032, 82, 366),
(1033, 82, 369),
(1034, 82, 376),
(1035, 82, 378),
(1036, 82, 384),
(1037, 82, 386),
(1038, 82, 391),
(1039, 82, 396),
(1040, 82, 400),
(1041, 82, 403),
(1042, 82, 407),
(1043, 82, 411),
(1044, 82, 413),
(1045, 83, 358),
(1046, 83, 362),
(1047, 83, 365),
(1048, 83, 370),
(1049, 83, 375),
(1050, 83, 378),
(1051, 83, 381),
(1052, 83, 387),
(1053, 83, 390),
(1054, 83, 396),
(1055, 83, 400),
(1056, 83, 403),
(1057, 83, 408),
(1058, 83, 409),
(1059, 83, 416),
(1060, 81, 262),
(1061, 81, 268),
(1062, 81, 272),
(1063, 81, 274),
(1064, 81, 286),
(1065, 81, 291),
(1066, 81, 293),
(1067, 81, 297),
(1068, 81, 312),
(1069, 81, 316),
(1070, 81, 317),
(1071, 81, 322),
(1072, 81, 328),
(1073, 81, 331),
(1074, 81, 336),
(1075, 81, 340),
(1076, 81, 343),
(1077, 81, 347),
(1078, 81, 350),
(1079, 81, 354),
(1080, 85, 357),
(1081, 85, 362),
(1082, 85, 367),
(1083, 85, 371),
(1084, 85, 376),
(1085, 85, 380),
(1086, 85, 382),
(1087, 85, 385),
(1088, 85, 390),
(1089, 85, 394),
(1090, 85, 398),
(1091, 85, 402),
(1092, 85, 407),
(1093, 85, 410),
(1094, 85, 413),
(1095, 86, 358),
(1096, 86, 364),
(1097, 86, 368),
(1098, 86, 370),
(1099, 86, 375),
(1100, 86, 379),
(1101, 86, 384),
(1102, 86, 388),
(1103, 86, 391),
(1104, 86, 395),
(1105, 86, 399),
(1106, 86, 401),
(1107, 86, 407),
(1108, 86, 409),
(1109, 86, 413),
(1110, 87, 359),
(1111, 87, 363),
(1112, 87, 366),
(1113, 87, 372),
(1114, 87, 375),
(1115, 87, 377),
(1116, 87, 381),
(1117, 87, 387),
(1118, 87, 392),
(1119, 87, 393),
(1120, 87, 399),
(1121, 87, 404),
(1122, 87, 407),
(1123, 87, 409),
(1124, 87, 414),
(1125, 88, 360),
(1126, 88, 364),
(1127, 88, 366),
(1128, 88, 371),
(1129, 88, 376),
(1130, 88, 380),
(1131, 88, 381),
(1132, 88, 385),
(1133, 88, 391),
(1134, 88, 394),
(1135, 88, 399),
(1136, 88, 401),
(1137, 88, 408),
(1138, 88, 409),
(1139, 88, 413),
(1140, 89, 358),
(1141, 89, 361),
(1142, 89, 368),
(1143, 89, 372),
(1144, 89, 374),
(1145, 89, 379),
(1146, 89, 383),
(1147, 89, 387),
(1148, 89, 390),
(1149, 89, 393),
(1150, 89, 397),
(1151, 89, 403),
(1152, 89, 406),
(1153, 89, 412),
(1154, 89, 413),
(1155, 90, 360),
(1156, 90, 361),
(1157, 90, 366),
(1158, 90, 370),
(1159, 90, 373),
(1160, 90, 377),
(1161, 90, 382),
(1162, 90, 388),
(1163, 90, 389),
(1164, 90, 395),
(1165, 90, 400),
(1166, 90, 403),
(1167, 90, 406),
(1168, 90, 409),
(1169, 90, 415),
(1170, 91, 358),
(1171, 91, 361),
(1172, 91, 367),
(1173, 91, 370),
(1174, 91, 376),
(1175, 91, 379),
(1176, 91, 384),
(1177, 91, 387),
(1178, 91, 392),
(1179, 91, 393),
(1180, 91, 398),
(1181, 91, 401),
(1182, 91, 407),
(1183, 91, 410),
(1184, 91, 415),
(1185, 92, 357),
(1186, 92, 363),
(1187, 92, 368),
(1188, 92, 371),
(1189, 92, 374),
(1190, 92, 379),
(1191, 92, 384),
(1192, 92, 386),
(1193, 92, 389),
(1194, 92, 393),
(1195, 92, 398),
(1196, 92, 402),
(1197, 92, 408),
(1198, 92, 412),
(1199, 92, 413),
(1200, 93, 357),
(1201, 93, 361),
(1202, 93, 368),
(1203, 93, 369),
(1204, 93, 374),
(1205, 93, 378),
(1206, 93, 384),
(1207, 93, 386),
(1208, 93, 390),
(1209, 93, 393),
(1210, 93, 400),
(1211, 93, 404),
(1212, 93, 407),
(1213, 93, 409),
(1214, 93, 414),
(1215, 94, 359),
(1216, 94, 362),
(1217, 94, 368),
(1218, 94, 370),
(1219, 94, 376),
(1220, 94, 380),
(1221, 94, 384),
(1222, 94, 386),
(1223, 94, 389),
(1224, 94, 395),
(1225, 94, 398),
(1226, 94, 404),
(1227, 94, 405),
(1228, 94, 410),
(1229, 94, 414),
(1230, 95, 360),
(1231, 95, 362),
(1232, 95, 367),
(1233, 95, 371),
(1234, 95, 374),
(1235, 95, 379),
(1236, 95, 382),
(1237, 95, 388),
(1238, 95, 389),
(1239, 95, 395),
(1240, 95, 398),
(1241, 95, 403),
(1242, 95, 406),
(1243, 95, 410),
(1244, 95, 413),
(1245, 96, 261),
(1246, 96, 265),
(1247, 96, 269),
(1248, 96, 273),
(1249, 96, 285),
(1250, 96, 289),
(1251, 96, 293),
(1252, 96, 297),
(1253, 96, 309),
(1254, 96, 313),
(1255, 96, 317),
(1256, 96, 321),
(1257, 96, 325),
(1258, 96, 329),
(1259, 96, 333),
(1260, 96, 337),
(1261, 96, 341),
(1262, 96, 345),
(1263, 96, 349),
(1264, 96, 353),
(1265, 96, 481),
(1266, 79, 181),
(1267, 79, 185),
(1268, 79, 189),
(1269, 79, 193),
(1270, 79, 197),
(1271, 79, 201),
(1272, 79, 205),
(1273, 79, 209),
(1274, 79, 213),
(1275, 79, 217),
(1276, 79, 221),
(1277, 79, 225),
(1278, 79, 229),
(1279, 79, 233),
(1280, 79, 237),
(1281, 79, 241),
(1282, 79, 245),
(1283, 79, 249),
(1284, 79, 253),
(1285, 79, 257),
(1286, 98, 261),
(1287, 98, 265),
(1288, 98, 269),
(1289, 98, 273),
(1290, 98, 285),
(1291, 98, 289),
(1292, 98, 313),
(1293, 98, 321),
(1294, 98, 325),
(1295, 98, 329),
(1296, 98, 353),
(1297, 98, 397),
(1298, 98, 401),
(1299, 98, 409),
(1300, 98, 481),
(1301, 99, 357),
(1302, 99, 361),
(1303, 99, 365),
(1304, 99, 369),
(1305, 99, 373),
(1306, 99, 377),
(1307, 99, 381),
(1308, 99, 385),
(1309, 99, 389),
(1310, 99, 393),
(1311, 99, 397),
(1312, 99, 401),
(1313, 99, 405),
(1314, 99, 409),
(1315, 99, 413),
(1316, 97, 262),
(1317, 97, 266),
(1318, 97, 270),
(1319, 97, 274),
(1320, 97, 286),
(1321, 97, 289),
(1322, 97, 294),
(1323, 97, 298),
(1324, 97, 310),
(1325, 97, 314),
(1326, 97, 318),
(1327, 97, 322),
(1328, 97, 326),
(1329, 97, 330),
(1330, 97, 334),
(1331, 97, 338),
(1332, 97, 342),
(1333, 97, 346),
(1334, 97, 350),
(1335, 97, 354),
(1336, 97, 482),
(1337, 97, 485),
(1338, 97, 490),
(1339, 101, 181),
(1340, 101, 185),
(1341, 101, 189),
(1342, 101, 193),
(1343, 101, 197),
(1344, 101, 201),
(1345, 101, 205),
(1346, 101, 209),
(1347, 101, 213),
(1348, 101, 217),
(1349, 101, 221),
(1350, 101, 225),
(1351, 101, 229),
(1352, 101, 233),
(1353, 101, 237),
(1354, 101, 241),
(1355, 101, 245),
(1356, 101, 249),
(1357, 101, 253),
(1358, 101, 257),
(1359, 100, 201),
(1360, 100, 205),
(1361, 100, 209),
(1362, 100, 213),
(1363, 100, 217),
(1364, 100, 369),
(1365, 100, 373),
(1366, 100, 377),
(1367, 100, 381),
(1368, 100, 385),
(1369, 100, 389),
(1370, 100, 393),
(1371, 100, 397),
(1372, 100, 401),
(1373, 100, 405),
(1374, 102, 261),
(1375, 102, 265),
(1376, 102, 269),
(1377, 102, 273),
(1378, 102, 285),
(1379, 102, 289),
(1380, 102, 293),
(1381, 102, 297),
(1382, 102, 309),
(1383, 102, 313),
(1384, 102, 317),
(1385, 102, 321),
(1386, 102, 325),
(1387, 102, 329),
(1388, 102, 333),
(1389, 102, 337),
(1390, 102, 341),
(1391, 102, 345),
(1392, 102, 349),
(1393, 102, 353),
(1394, 102, 481),
(1395, 102, 485),
(1396, 102, 489),
(1397, 103, 181),
(1398, 103, 185),
(1399, 103, 189),
(1400, 103, 193),
(1401, 103, 197),
(1402, 103, 201),
(1403, 103, 205),
(1404, 103, 209),
(1405, 103, 213),
(1406, 103, 217),
(1407, 103, 221),
(1408, 103, 225),
(1409, 103, 229),
(1410, 103, 233),
(1411, 103, 237),
(1412, 103, 241),
(1413, 103, 245),
(1414, 103, 249),
(1415, 103, 253),
(1416, 103, 257),
(1417, 103, 495),
(1418, 103, 500),
(1419, 104, 261),
(1420, 104, 265),
(1421, 104, 269),
(1422, 104, 273),
(1423, 104, 285),
(1424, 104, 289),
(1425, 104, 293),
(1426, 104, 297),
(1427, 104, 309),
(1428, 104, 313),
(1429, 104, 317),
(1430, 104, 321),
(1431, 104, 325),
(1432, 104, 329),
(1433, 104, 333),
(1434, 104, 337),
(1435, 104, 341),
(1436, 104, 345),
(1437, 104, 349),
(1438, 104, 353),
(1439, 104, 481),
(1440, 104, 485),
(1441, 104, 489),
(1442, 104, 501),
(1443, 104, 505),
(1444, 104, 509),
(1445, 105, 359),
(1446, 105, 363),
(1447, 105, 367),
(1448, 105, 371),
(1449, 105, 375),
(1450, 105, 379),
(1451, 105, 383),
(1452, 105, 387),
(1453, 105, 391),
(1454, 105, 395),
(1455, 105, 399),
(1456, 105, 403),
(1457, 105, 408),
(1458, 105, 412),
(1459, 105, 415),
(1460, 105, 515),
(1461, 105, 519),
(1462, 105, 523),
(1463, 106, 357),
(1464, 106, 361),
(1465, 106, 365),
(1466, 106, 369),
(1467, 106, 373),
(1468, 106, 377),
(1469, 106, 381),
(1470, 106, 385),
(1471, 106, 389),
(1472, 106, 393),
(1473, 106, 397),
(1474, 106, 401),
(1475, 106, 405),
(1476, 106, 409),
(1477, 106, 413),
(1478, 106, 513),
(1479, 106, 517),
(1480, 106, 521),
(1481, 107, 360),
(1482, 107, 364),
(1483, 107, 368),
(1484, 107, 372),
(1485, 107, 376),
(1486, 107, 380),
(1487, 107, 384),
(1488, 107, 388),
(1489, 107, 392),
(1490, 107, 396),
(1491, 107, 400),
(1492, 107, 404),
(1493, 107, 408),
(1494, 107, 412),
(1495, 107, 416),
(1496, 107, 516),
(1497, 107, 520),
(1498, 107, 524),
(1499, 108, 360),
(1500, 108, 364),
(1501, 108, 368),
(1502, 108, 372),
(1503, 108, 376),
(1504, 108, 380),
(1505, 108, 384),
(1506, 108, 388),
(1507, 108, 392),
(1508, 108, 396),
(1509, 108, 400),
(1510, 108, 404),
(1511, 108, 408),
(1512, 108, 412),
(1513, 108, 416),
(1514, 108, 516),
(1515, 108, 520),
(1516, 108, 524),
(1517, 109, 360),
(1518, 109, 364),
(1519, 109, 368),
(1520, 109, 372),
(1521, 109, 376),
(1522, 109, 380),
(1523, 109, 384),
(1524, 109, 388),
(1525, 109, 392),
(1526, 109, 396),
(1527, 109, 400),
(1528, 109, 404),
(1529, 109, 408),
(1530, 109, 412),
(1531, 109, 416),
(1532, 109, 516),
(1533, 109, 520),
(1534, 109, 524),
(1535, 110, 358),
(1536, 110, 362),
(1537, 110, 366),
(1538, 110, 370),
(1539, 110, 374),
(1540, 110, 378),
(1541, 110, 382),
(1542, 110, 386),
(1543, 110, 390),
(1544, 110, 394),
(1545, 110, 398),
(1546, 110, 402),
(1547, 110, 405),
(1548, 110, 410),
(1549, 110, 414),
(1550, 110, 514),
(1551, 110, 518),
(1552, 110, 522),
(1553, 111, 181),
(1554, 111, 185),
(1555, 111, 189),
(1556, 111, 193),
(1557, 111, 197),
(1558, 111, 201),
(1559, 111, 205),
(1560, 111, 209),
(1561, 111, 213),
(1562, 111, 217),
(1563, 111, 221),
(1564, 111, 225),
(1565, 111, 229),
(1566, 111, 233),
(1567, 111, 237),
(1568, 111, 241),
(1569, 111, 245),
(1570, 111, 249),
(1571, 111, 253),
(1572, 111, 257),
(1573, 111, 493),
(1574, 111, 497),
(1575, 113, 358),
(1576, 113, 362),
(1577, 113, 366),
(1578, 113, 370),
(1579, 113, 374),
(1580, 113, 378),
(1581, 113, 382),
(1582, 113, 386),
(1583, 113, 390),
(1584, 113, 394),
(1585, 113, 398),
(1586, 113, 402),
(1587, 113, 406),
(1588, 113, 410),
(1589, 113, 414),
(1590, 113, 514),
(1591, 113, 518),
(1592, 113, 522),
(1593, 115, 360),
(1594, 115, 364),
(1595, 115, 368),
(1596, 115, 369),
(1597, 115, 376),
(1598, 115, 377),
(1599, 115, 381),
(1600, 115, 385),
(1601, 115, 389),
(1602, 115, 393),
(1603, 115, 397),
(1604, 115, 401),
(1605, 115, 408),
(1606, 115, 412),
(1607, 115, 416),
(1608, 115, 513),
(1609, 115, 517),
(1610, 115, 521),
(1611, 112, 181),
(1612, 112, 185),
(1613, 112, 189),
(1614, 112, 193),
(1615, 112, 197),
(1616, 112, 201),
(1617, 112, 205),
(1618, 112, 209),
(1619, 112, 213),
(1620, 112, 217),
(1621, 112, 221),
(1622, 112, 225),
(1623, 112, 229),
(1624, 112, 233),
(1625, 112, 237),
(1626, 112, 241),
(1627, 112, 245),
(1628, 112, 249),
(1629, 112, 253),
(1630, 112, 257),
(1631, 112, 493),
(1632, 112, 497),
(1633, 117, 360),
(1634, 117, 364),
(1635, 117, 368),
(1636, 117, 372),
(1637, 117, 376),
(1638, 117, 380),
(1639, 117, 384),
(1640, 117, 388),
(1641, 117, 392),
(1642, 117, 396),
(1643, 117, 400),
(1644, 117, 404),
(1645, 117, 408),
(1646, 117, 412),
(1647, 117, 416),
(1648, 117, 516),
(1649, 117, 520),
(1650, 117, 524),
(1651, 118, 357),
(1652, 118, 361),
(1653, 118, 365),
(1654, 118, 369),
(1655, 118, 373),
(1656, 118, 377),
(1657, 118, 381),
(1658, 118, 385),
(1659, 118, 389),
(1660, 118, 393),
(1661, 118, 397),
(1662, 118, 401),
(1663, 118, 405),
(1664, 118, 409),
(1665, 118, 413),
(1666, 118, 513),
(1667, 118, 517),
(1668, 118, 521),
(1669, 119, 357),
(1670, 119, 361),
(1671, 119, 365),
(1672, 119, 369),
(1673, 119, 373),
(1674, 119, 377),
(1675, 119, 381),
(1676, 119, 385),
(1677, 119, 389),
(1678, 119, 393),
(1679, 119, 397),
(1680, 119, 401),
(1681, 119, 405),
(1682, 119, 409),
(1683, 119, 413),
(1684, 119, 513),
(1685, 119, 517),
(1686, 119, 521),
(1687, 120, 357),
(1688, 120, 361),
(1689, 120, 365),
(1690, 120, 369),
(1691, 120, 373),
(1692, 120, 377),
(1693, 120, 381),
(1694, 120, 385),
(1695, 120, 389),
(1696, 120, 393),
(1697, 120, 397),
(1698, 120, 401),
(1699, 120, 405),
(1700, 120, 409),
(1701, 120, 413),
(1702, 120, 513),
(1703, 120, 517),
(1704, 120, 521),
(1705, 121, 357),
(1706, 121, 361),
(1707, 121, 365),
(1708, 121, 369),
(1709, 121, 373),
(1710, 121, 377),
(1711, 121, 381),
(1712, 121, 385),
(1713, 121, 389),
(1714, 121, 393),
(1715, 121, 397),
(1716, 121, 401),
(1717, 121, 405),
(1718, 121, 409),
(1719, 121, 413),
(1720, 121, 513),
(1721, 121, 517),
(1722, 121, 521),
(1723, 122, 357),
(1724, 122, 361),
(1725, 122, 365),
(1726, 122, 369),
(1727, 122, 373),
(1728, 122, 377),
(1729, 122, 381),
(1730, 122, 385),
(1731, 122, 389),
(1732, 122, 393),
(1733, 122, 397),
(1734, 122, 401),
(1735, 122, 405),
(1736, 122, 409),
(1737, 122, 413),
(1738, 122, 513),
(1739, 122, 517),
(1740, 122, 521),
(1741, 123, 357),
(1742, 123, 361),
(1743, 123, 365),
(1744, 123, 369),
(1745, 123, 373),
(1746, 123, 377),
(1747, 123, 381),
(1748, 123, 385),
(1749, 123, 389),
(1750, 123, 393),
(1751, 123, 397),
(1752, 123, 401),
(1753, 123, 405),
(1754, 123, 409),
(1755, 123, 413),
(1756, 123, 513),
(1757, 123, 517),
(1758, 123, 521),
(1759, 124, 357),
(1760, 124, 361),
(1761, 124, 365),
(1762, 124, 369),
(1763, 124, 373),
(1764, 124, 377),
(1765, 124, 381),
(1766, 124, 385),
(1767, 124, 389),
(1768, 124, 393),
(1769, 124, 397),
(1770, 124, 401),
(1771, 124, 405),
(1772, 124, 409),
(1773, 124, 413),
(1774, 124, 513),
(1775, 124, 517),
(1776, 124, 521),
(1777, 125, 357),
(1778, 125, 361),
(1779, 125, 365),
(1780, 125, 369),
(1781, 125, 373),
(1782, 125, 377),
(1783, 125, 381),
(1784, 125, 385),
(1785, 125, 389),
(1786, 125, 393),
(1787, 125, 397),
(1788, 125, 401),
(1789, 125, 405),
(1790, 125, 409),
(1791, 125, 413),
(1792, 125, 513),
(1793, 125, 517),
(1794, 125, 521),
(1795, 126, 357),
(1796, 126, 361),
(1797, 126, 365),
(1798, 126, 369),
(1799, 126, 373),
(1800, 126, 377),
(1801, 126, 381),
(1802, 126, 385),
(1803, 126, 389),
(1804, 126, 393),
(1805, 126, 397),
(1806, 126, 401),
(1807, 126, 405),
(1808, 126, 409),
(1809, 126, 413),
(1810, 126, 513),
(1811, 126, 517),
(1812, 126, 521),
(1813, 127, 357),
(1814, 127, 361),
(1815, 127, 365),
(1816, 127, 369),
(1817, 127, 373),
(1818, 127, 377),
(1819, 127, 381),
(1820, 127, 385),
(1821, 127, 389),
(1822, 127, 393),
(1823, 127, 397),
(1824, 127, 401),
(1825, 127, 405),
(1826, 127, 409),
(1827, 127, 413),
(1828, 127, 513),
(1829, 127, 517),
(1830, 127, 521),
(1831, 128, 357),
(1832, 128, 361),
(1833, 128, 365),
(1834, 128, 369),
(1835, 128, 373),
(1836, 128, 377),
(1837, 128, 381),
(1838, 128, 385),
(1839, 128, 389),
(1840, 128, 393),
(1841, 128, 397),
(1842, 128, 401),
(1843, 128, 405),
(1844, 128, 409),
(1845, 128, 413),
(1846, 128, 513),
(1847, 128, 517),
(1848, 128, 521),
(1849, 129, 360),
(1850, 129, 364),
(1851, 129, 368),
(1852, 129, 372),
(1853, 129, 376),
(1854, 129, 380),
(1855, 129, 384),
(1856, 129, 388),
(1857, 129, 392),
(1858, 129, 396),
(1859, 129, 400),
(1860, 129, 404),
(1861, 129, 408),
(1862, 129, 412),
(1863, 129, 416),
(1864, 129, 516),
(1865, 129, 520),
(1866, 129, 524),
(1867, 130, 357),
(1868, 130, 361),
(1869, 130, 365),
(1870, 130, 369),
(1871, 130, 373),
(1872, 130, 377),
(1873, 130, 381),
(1874, 130, 385),
(1875, 130, 389),
(1876, 130, 393),
(1877, 130, 397),
(1878, 130, 401),
(1879, 130, 405),
(1880, 130, 409),
(1881, 130, 413),
(1882, 130, 513),
(1883, 130, 517),
(1884, 130, 521),
(1885, 131, 357),
(1886, 131, 361),
(1887, 131, 365),
(1888, 131, 369),
(1889, 131, 373),
(1890, 131, 377),
(1891, 131, 381),
(1892, 131, 385),
(1893, 131, 389),
(1894, 131, 393),
(1895, 131, 397),
(1896, 131, 401),
(1897, 131, 405),
(1898, 131, 409),
(1899, 131, 413),
(1900, 131, 513),
(1901, 131, 517),
(1902, 131, 521),
(1903, 132, 357),
(1904, 132, 361),
(1905, 132, 365),
(1906, 132, 369),
(1907, 132, 373),
(1908, 132, 377),
(1909, 132, 381),
(1910, 132, 385),
(1911, 132, 389),
(1912, 132, 393),
(1913, 132, 397),
(1914, 132, 401),
(1915, 132, 405),
(1916, 132, 409),
(1917, 132, 413),
(1918, 132, 513),
(1919, 132, 517),
(1920, 132, 521),
(1921, 133, 360),
(1922, 133, 364),
(1923, 133, 368),
(1924, 133, 372),
(1925, 133, 376),
(1926, 133, 380),
(1927, 133, 384),
(1928, 133, 388),
(1929, 133, 392),
(1930, 133, 396),
(1931, 133, 400),
(1932, 133, 404),
(1933, 133, 408),
(1934, 133, 412),
(1935, 133, 416),
(1936, 133, 516),
(1937, 133, 520),
(1938, 133, 524),
(1939, 134, 357),
(1940, 134, 361),
(1941, 134, 365),
(1942, 134, 369),
(1943, 134, 373),
(1944, 134, 377),
(1945, 134, 381),
(1946, 134, 385),
(1947, 134, 389),
(1948, 134, 393),
(1949, 134, 397),
(1950, 134, 401),
(1951, 134, 405),
(1952, 134, 409),
(1953, 134, 413),
(1954, 134, 513),
(1955, 134, 517),
(1956, 134, 521),
(1957, 135, 357),
(1958, 135, 361),
(1959, 135, 365),
(1960, 135, 369),
(1961, 135, 373),
(1962, 135, 377),
(1963, 135, 381),
(1964, 135, 385),
(1965, 135, 389),
(1966, 135, 393),
(1967, 135, 397),
(1968, 135, 401),
(1969, 135, 405),
(1970, 135, 409),
(1971, 135, 413),
(1972, 135, 513),
(1973, 135, 517),
(1974, 135, 521),
(1975, 116, 181),
(1976, 116, 185),
(1977, 116, 189),
(1978, 116, 193),
(1979, 116, 197),
(1980, 116, 201),
(1981, 116, 205),
(1982, 116, 209),
(1983, 116, 213),
(1984, 116, 217),
(1985, 116, 221),
(1986, 116, 225),
(1987, 116, 229),
(1988, 116, 233),
(1989, 116, 237),
(1990, 116, 241),
(1991, 116, 245),
(1992, 116, 249),
(1993, 116, 253),
(1994, 116, 257),
(1995, 116, 493),
(1996, 116, 497),
(1997, 114, 261),
(1998, 114, 265),
(1999, 114, 269),
(2000, 114, 273),
(2001, 114, 285),
(2002, 114, 289),
(2003, 114, 293),
(2004, 114, 297),
(2005, 114, 309),
(2006, 114, 313),
(2007, 114, 317),
(2008, 114, 321),
(2009, 114, 325),
(2010, 114, 329),
(2011, 114, 333),
(2012, 114, 337),
(2013, 114, 341),
(2014, 114, 345),
(2015, 114, 349),
(2016, 114, 353),
(2017, 114, 481),
(2018, 114, 485),
(2019, 114, 489),
(2020, 114, 501),
(2021, 114, 505),
(2022, 114, 509),
(2023, 137, 181),
(2024, 137, 185),
(2025, 137, 189),
(2026, 137, 193),
(2027, 137, 197),
(2028, 137, 201),
(2029, 137, 205),
(2030, 137, 209),
(2031, 137, 213),
(2032, 137, 217),
(2033, 137, 221),
(2034, 137, 225),
(2035, 137, 229),
(2036, 137, 233),
(2037, 137, 237),
(2038, 137, 241),
(2039, 137, 245),
(2040, 137, 249),
(2041, 137, 253),
(2042, 137, 257),
(2043, 137, 493),
(2044, 137, 497),
(2045, 138, 261),
(2046, 138, 265),
(2047, 138, 269),
(2048, 138, 273),
(2049, 138, 285),
(2050, 138, 289),
(2051, 138, 293),
(2052, 138, 297),
(2053, 138, 309),
(2054, 138, 313),
(2055, 138, 317),
(2056, 138, 321),
(2057, 138, 325),
(2058, 138, 329),
(2059, 138, 333),
(2060, 138, 337),
(2061, 138, 341),
(2062, 138, 345),
(2063, 138, 349),
(2064, 138, 353),
(2065, 138, 481),
(2066, 138, 485),
(2067, 138, 489),
(2068, 138, 501),
(2069, 138, 505),
(2070, 138, 509),
(2071, 136, 357),
(2072, 136, 361),
(2073, 136, 365),
(2074, 136, 369),
(2075, 136, 373),
(2076, 136, 377),
(2077, 136, 381),
(2078, 136, 385),
(2079, 136, 389),
(2080, 136, 393),
(2081, 136, 397),
(2082, 136, 401),
(2083, 136, 405),
(2084, 136, 409),
(2085, 136, 413),
(2086, 136, 513),
(2087, 136, 517),
(2088, 136, 521),
(2089, 140, 357),
(2090, 140, 361),
(2091, 140, 365),
(2092, 140, 369),
(2093, 140, 373),
(2094, 140, 377),
(2095, 140, 381),
(2096, 140, 385),
(2097, 140, 389),
(2098, 140, 393),
(2099, 140, 397),
(2100, 140, 401),
(2101, 140, 405),
(2102, 140, 409),
(2103, 140, 413),
(2104, 140, 513),
(2105, 140, 517),
(2106, 140, 521),
(2107, 139, 261),
(2108, 139, 265),
(2109, 139, 269),
(2110, 139, 273),
(2111, 139, 285),
(2112, 139, 289),
(2113, 139, 293),
(2114, 139, 297),
(2115, 139, 309),
(2116, 139, 313),
(2117, 139, 317),
(2118, 139, 321),
(2119, 139, 325),
(2120, 139, 329),
(2121, 139, 333),
(2122, 139, 337),
(2123, 139, 346),
(2124, 139, 349),
(2125, 139, 353),
(2126, 139, 481),
(2127, 139, 485),
(2128, 139, 489),
(2129, 139, 501),
(2130, 139, 513),
(2131, 139, 517),
(2132, 139, 521),
(2133, 142, 357),
(2134, 142, 361),
(2135, 142, 365),
(2136, 142, 369),
(2137, 142, 373),
(2138, 142, 377),
(2139, 142, 381),
(2140, 142, 385),
(2141, 142, 389),
(2142, 142, 393),
(2143, 142, 397),
(2144, 142, 401),
(2145, 142, 405),
(2146, 142, 409),
(2147, 142, 413),
(2148, 142, 513),
(2149, 142, 517),
(2150, 142, 521),
(2151, 143, 262),
(2152, 143, 266),
(2153, 143, 270),
(2154, 143, 274),
(2155, 143, 286),
(2156, 143, 290),
(2157, 143, 294),
(2158, 143, 298),
(2159, 143, 310),
(2160, 143, 314),
(2161, 143, 318),
(2162, 143, 322),
(2163, 143, 326),
(2164, 143, 330),
(2165, 143, 334),
(2166, 143, 338),
(2167, 143, 342),
(2168, 143, 346),
(2169, 143, 350),
(2170, 143, 354),
(2171, 143, 482),
(2172, 143, 486),
(2173, 143, 490),
(2174, 143, 501),
(2175, 143, 506),
(2176, 143, 510),
(2177, 145, 261),
(2178, 145, 265),
(2179, 145, 269),
(2180, 145, 273),
(2181, 145, 285),
(2182, 145, 289),
(2183, 145, 293),
(2184, 145, 297),
(2185, 145, 309),
(2186, 145, 313),
(2187, 145, 317),
(2188, 145, 321),
(2189, 145, 325),
(2190, 145, 329),
(2191, 145, 333),
(2192, 145, 337),
(2193, 145, 341),
(2194, 145, 345),
(2195, 145, 349),
(2196, 145, 353),
(2197, 145, 481),
(2198, 145, 485),
(2199, 145, 489),
(2200, 145, 501),
(2201, 145, 505),
(2202, 145, 509),
(2203, 144, 357),
(2204, 144, 361),
(2205, 144, 365),
(2206, 144, 369),
(2207, 144, 373),
(2208, 144, 377),
(2209, 144, 381),
(2210, 144, 385),
(2211, 144, 389),
(2212, 144, 393),
(2213, 144, 397),
(2214, 144, 401),
(2215, 144, 405),
(2216, 144, 409),
(2217, 144, 413),
(2218, 144, 513),
(2219, 144, 517),
(2220, 144, 521),
(2221, 141, 181),
(2222, 141, 185),
(2223, 141, 189),
(2224, 141, 193),
(2225, 141, 197),
(2226, 141, 201),
(2227, 141, 205),
(2228, 141, 209),
(2229, 141, 213),
(2230, 141, 217),
(2231, 141, 221),
(2232, 141, 225),
(2233, 141, 229),
(2234, 141, 233),
(2235, 141, 237),
(2236, 141, 241),
(2237, 141, 245),
(2238, 141, 249),
(2239, 141, 253),
(2240, 141, 257),
(2241, 141, 493),
(2242, 141, 497),
(2243, 148, 182),
(2244, 148, 185),
(2245, 148, 192),
(2246, 148, 195),
(2247, 148, 199),
(2248, 148, 204),
(2249, 148, 208),
(2250, 148, 210),
(2251, 148, 214),
(2252, 148, 217),
(2253, 148, 222),
(2254, 148, 225),
(2255, 148, 232),
(2256, 148, 236),
(2257, 148, 239),
(2258, 148, 241),
(2259, 148, 246),
(2260, 148, 252),
(2261, 148, 254),
(2262, 148, 258),
(2263, 148, 494),
(2264, 148, 498);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colleges`
--
ALTER TABLE `colleges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `degrees`
--
ALTER TABLE `degrees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions_options`
--
ALTER TABLE `questions_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_test`
--
ALTER TABLE `users_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_test_answers`
--
ALTER TABLE `users_test_answers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `colleges`
--
ALTER TABLE `colleges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `degrees`
--
ALTER TABLE `degrees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fields`
--
ALTER TABLE `fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `questions_options`
--
ALTER TABLE `questions_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=525;

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users_test`
--
ALTER TABLE `users_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `users_test_answers`
--
ALTER TABLE `users_test_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2265;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"career_guide\",\"table\":\"degrees\"},{\"db\":\"career_guide\",\"table\":\"admins\"},{\"db\":\"career_guide\",\"table\":\"questions\"},{\"db\":\"career_guide\",\"table\":\"careers\"},{\"db\":\"career_guide\",\"table\":\"fields\"},{\"db\":\"career_guide\",\"table\":\"colleges\"},{\"db\":\"career_guide\",\"table\":\"subjects\"},{\"db\":\"career_guide\",\"table\":\"users\"},{\"db\":\"career_guide\",\"table\":\"users_test\"},{\"db\":\"career_guide\",\"table\":\"schools\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- Dumping data for table `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'career_guide', 'questions_options', '{\"sorted_col\":\"`question_id`  DESC\"}', '2019-11-03 16:01:12');

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2019-11-17 10:02:53', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
