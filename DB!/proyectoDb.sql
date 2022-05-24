-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 24, 2022 at 03:21 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectoDb`
--
CREATE DATABASE IF NOT EXISTS `proyectoDb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectoDb`;

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id` int(100) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'llaves'),
(2, 'candados'),
(3, 'cerraduras'),
(4, 'otros');

-- --------------------------------------------------------

--
-- Table structure for table `colores`
--

CREATE TABLE `colores` (
  `id` int(100) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colores`
--

INSERT INTO `colores` (`id`, `nombre`) VALUES
(1, 'dorado'),
(2, 'plateado'),
(3, 'blanco'),
(4, 'negro');

-- --------------------------------------------------------

--
-- Table structure for table `producto-color`
--

CREATE TABLE `producto-color` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `foto` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `usuario_id`, `categoria_id`, `marca`, `foto`) VALUES
(7, 'sillon', 'sillon esquinero', 45000, 1, 1, 'sillonex', '1651541810916_img_.jpeg'),
(8, 'televisor 52\"', 'smart tv ', 60000, 1, 1, 'samsung', '1651541874786_img_.png'),
(9, 'Heladera', 'heladera patrick 1.8m de alto bla bla', 120000, 1, 1, 'Patrick', '1651541912913_img_.png'),
(10, 'Lavarropas', 'lavarropas samsung ', 100000, 1, 1, 'Samsung', '1651541944530_img_.png'),
(11, 'Cerradura', 'descripcion de cerradura', 1200, 1, 1, 'travex', '1652073171721_img_.jpg'),
(13, 'lalalala', 'dewdewwd', 1234, 1, 1, 'fewfw', '1652583724840_img_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `testeoProductos`
--

CREATE TABLE `testeoProductos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(25) NOT NULL,
  `fechaDeNacimiento` date NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `nombre`, `apellido`, `email`, `fechaDeNacimiento`, `domicilio`, `avatar`, `password`) VALUES
(1, 'carmela', 'carmela', 'iannelli', 'daca@vdfv.com', '2022-04-14', 'cdv dcvdv', 'sdcdscdscs.jpg', 'qwertyui'),
(2, 'carmela2', 'carmela', 'iannelli', 'cewfew@gfre.com', '3333-03-31', 'vrevrebreebe', '1651417027074_img_.jpeg', '$2a$10$8hsJB8gCoh3G.UwjsL4sBOqKW4jqzhN8HCsbcxcRlzTApJGgor.Au'),
(3, 'carmela3', 'caefwf', 'frrfe', 'efew@gmail.com', '1212-12-12', 'rgrwgrww', '1651418270971_img_.jpeg', '$2a$10$xkryXsFfyjEUltSlgvDH6uj7e/TCEW5hW3NQcijpuJ5yozqueyfUK'),
(4, 'carmela12345', 'vrevre', 'veverver', 'egwe@wef.com', '2022-05-10', 'ebtebetbeb', '1651418459622_img_.jpeg', '$2a$10$Vo9sbSfvIT2A7wKcKzXnGeAJGYNRy.w3O72r5bVDhHCVJGRSeQ0Zi'),
(5, 'usuarionuevo', 'efwf', 'fefw', 'vrrgwgrw@efw.com', '1111-01-01', '1bebetb', '1651418783565_img_.jpeg', '$2a$10$ojf0KjpZaRyP5TCBR7PG.OOPLDMwObSdLgbZ534Hyk2vzwPFDrx3u'),
(6, 'usuarioverif', 'cfewf', 'furoreg', 'fbebebg@bfebe.com', '1111-12-12', 'bgeebbeg', '1651418975586_img_.jpeg', '$2a$10$6w7Gllb8L0JVgAQjAAAxguXYtvZbniTDEYtiid6.Jmz/sk5HnZpzK'),
(9, '1', 'fefew', 'fwfew', 'vewev@fwfwe.com', '0011-11-11', 'vrbreb efw', '1651419229282_img_.jpeg', '$2a$10$jm2Bhay/45gGE8xRCDitF.1Ho/MSUbw82yevdvfS8Hqh4ddiD0S1e'),
(10, 'veriffinal', 'efe', 'fwefw', 'fwgrw@ewfewf.com', '1111-11-11', 'grwgrgrwgw', '1651419541680_img_.jpeg', '$2a$10$p4jxqqPrZg7O8g7JtJ.yxOTOxlyauptEvSjTyClf3tvJoYqwcD4ES');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producto-color`
--
ALTER TABLE `producto-color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `testeoProductos`
--
ALTER TABLE `testeoProductos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `producto-color`
--
ALTER TABLE `producto-color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `testeoProductos`
--
ALTER TABLE `testeoProductos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `producto-color`
--
ALTER TABLE `producto-color`
  ADD CONSTRAINT `producto-color_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `producto-color_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
