-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2020 a las 18:45:18
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coches`
--
DROP DATABASE if exists coches;
CREATE DATABASE IF NOT EXISTS coches DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE coches;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--

CREATE TABLE `coches` (
  `marca` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `modelo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `año` smallint(4) NOT NULL,
  `puertas` tinyint(4) NOT NULL,
  `combustible` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `potencia` smallint(6) NOT NULL,
  `precio` mediumint(9) NOT NULL,
  `foto` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`marca`, `modelo`, `año`, `puertas`, `combustible`, `potencia`, `precio`, `foto`) VALUES
('Bentley', 'Flying Spur Flying Spur W12', 2020, 5, 'Gasolina', 635, 248340, 'https://a.ccdn.es/nuevos/400/bentley/flyingspur/2020/4sa-4_45.jpg'),
('Bentley', 'Mulsanne Mulsane Extended Wheelbase', 2020, 4, 'Gasolina', 512, 420780, 'https://a.ccdn.es/nuevos/400/bentley/mulsanne/2020/4sa.jpg'),
('Ferrari', 'GTC4 Lusso DCT', 2018, 3, 'Gasolina', 690, 307210, 'https://a.ccdn.es/nuevos/400/ferrari/gtc4/2018/3ha-4_0.jpg'),
('Mercedes', 'CLA MercedesAMG 35 4MATIC', 2019, 5, 'Gasolina', 306, 59190, 'https://a.ccdn.es/nuevos/400/mercedes/cla/2019/4sa_45.jpg'),
('Porche', 'Taycan Turbo S', 2020, 4, 'Gasolina', 716, 189528, 'https://a.ccdn.es/nuevos/400/porsche/taycan/2020/4sa-4_0.jpg'),
('Tesla', 'Model 3 Gran Autonomia AWD', 2019, 3, 'eléctrico', 476, 59680, 'https://a.ccdn.es/nuevos/400/tesla/model3/2019/4sa.jpg'),
('Tesla', 'Model 3 Gran Autonomia RWD', 2019, 3, 'eléctrico', 306, 55480, 'https://a.ccdn.es/nuevos/400/tesla/model3/2019/4sa_0.jpg'),
('Tesla', 'Model S Autonomia Estandar 4WD', 2019, 5, 'eléctrico', 525, 80180, 'https://a.ccdn.es/nuevos/400/tesla/models/2019/5ha-4_45.jpg'),
('Tesla', 'Model S Performance', 2019, 5, 'elétrico', 796, 105680, 'https://a.ccdn.es/nuevos/400/tesla/models/2019/5ha-4_0.jpg'),
('Tesla', 'Model X Autonomia Estandar 4WD', 2019, 3, 'eléctrico', 525, 85980, 'https://a.ccdn.es/nuevos/400/tesla/modelx/2019/5od-4_45.jpg'),
('Tesla', 'Model X Performance', 2019, 3, 'eléctrico', 796, 110780, 'https://a.ccdn.es/nuevos/400/tesla/modelx/2019/5od-4_135.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coches`
--
ALTER TABLE `coches`
  ADD PRIMARY KEY (`marca`,`modelo`,`año`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
