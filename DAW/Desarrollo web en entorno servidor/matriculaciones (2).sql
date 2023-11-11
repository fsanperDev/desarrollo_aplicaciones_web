-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2020 a las 14:18:43
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `matriculaciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` text COLLATE utf8_spanish_ci NOT NULL,
  `sexo` enum('H','M') COLLATE utf8_spanish_ci DEFAULT 'H',
  `dni` char(9) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`nombre`, `apellidos`, `sexo`, `dni`, `fecha_nacimiento`) VALUES
('Ana', 'Torres Montero', 'M', '00001531J', '1995-09-21'),
('Emilia', 'Ibáñez Pérez', 'M', '00033780Q', '1985-09-22'),
('Alba', 'Ortega Iglesias', 'M', '00097083T', '2003-09-22'),
('Ignacio', 'León Castro', 'H', '00154729P', '1977-10-01'),
('Amparo', 'Navarro Montero', 'M', '00172036L', '1983-09-10'),
('Gregorio', 'Díez Iglesias', 'H', '00284690L', '1979-04-21'),
('César', 'Suárez Rojas', 'H', '00299022E', '1986-10-21'),
('María Pilar', 'Flores Giménez', 'M', '00826755C', '2004-11-27'),
('Jesús', 'Ortiz Garrido', 'H', '00950696Z', '1995-08-15'),
('José Manuel', 'Marín Castillo', 'H', '00978752X', '1992-09-03'),
('María Josefa', 'Álvarez Ruíz', 'M', '01342678F', '2001-10-27'),
('Daniel', 'Navarro Montero', 'H', '01460169Z', '2002-08-29'),
('Cristina', 'Soler Marín', 'M', '01461887F', '1978-04-03'),
('Julia', 'Muñoz Aguilar', 'M', '01530003C', '1984-05-27'),
('David', 'Vega Bravo', 'H', '01544804D', '1981-11-10'),
('Antonio', 'Carmona Ortega', 'H', '01545301T', '1996-11-01'),
('Manuel', 'Cabrera Estéban', 'H', '01545518X', '2001-01-28'),
('Pablo', 'Suárez Rojas', 'H', '01547299C', '1970-10-19'),
('Julia', 'Crespo Delgado', 'M', '01550381C', '1979-02-10'),
('Lidia', 'Alonso Suárez', 'M', '01551063N', '1998-07-28'),
('Alfonso', 'Suárez Rojas', 'H', '01682977K', '1996-05-05'),
('Gabriel', 'Soler Bravo', 'H', '01702223Q', '1976-03-15'),
('Sandra', 'Morales Gallardo', 'M', '01721061V', '2001-12-16'),
('Julián', 'Martín Reyes', 'H', '01748042L', '1993-03-08'),
('Carlos', 'Gómez Pérez', 'H', '02037559N', '1984-11-16'),
('Jordi', 'Santos Nieto', 'H', '02055919H', '1983-10-21'),
('Amparo', 'Sánchez Martínez', 'M', '02194336K', '1971-07-14'),
('Lucía', 'Ibáñez Ramírez', 'M', '02370636A', '1981-02-28'),
('Ángel', 'Romero Suárez', 'H', '02381096K', '1985-02-26'),
('Hugo', 'Santiago Blanco', 'H', '02395733F', '2003-09-07'),
('Juan Carlos', 'Estéban Rojas', 'H', '03583531Q', '1996-03-10'),
('Alex', 'Ramos Herrera', 'H', '03824729J', '1974-03-08'),
('Paula', 'Marín Domínguez', 'M', '03946833X', '1981-10-18'),
('Paula', 'Vázquez Herrera', 'M', '04084374B', '2000-07-22'),
('Antonio', 'Lozano Molina', 'H', '04282017S', '1987-01-06'),
('Tomás', 'Hidalgo Arias', 'H', '04460170X', '1976-11-10'),
('Xavier', 'Carmona Delgado', 'H', '04808923Z', '1974-11-13'),
('Pedro', 'Álvarez Suárez', 'H', '04891939T', '1997-04-25'),
('Rosario', 'Fernández Domínguez', 'M', '04962129V', '1993-03-14'),
('Lidia', 'Carrasco Flores', 'M', '04962429H', '1972-01-15'),
('Julián', 'Medina Gil', 'H', '05334519Z', '1986-12-25'),
('María', 'Velasco León', 'M', '05486636D', '1986-10-12'),
('Alex', 'Cruz Velasco', 'H', '05506187X', '1976-02-22'),
('Francisca', 'Crespo Moya', 'M', '05591874E', '1970-08-22'),
('María Rosario', 'Arias Cruz', 'M', '05846965C', '2000-01-30'),
('Carlos', 'López Vargas', 'H', '05999659V', '1974-08-03'),
('María Soledad', 'Fernández Vázquez', 'M', '06022398D', '1986-11-19'),
('Alfredo', 'Sánchez Vicente', 'H', '06034354M', '1992-07-23'),
('María Concepción', 'Romero Cruz', 'M', '06168303W', '1990-07-02'),
('Agustín', 'Martínez Ramos', 'H', '06174873V', '1979-06-30'),
('Amparo', 'Garrido Carmona', 'M', '06192567R', '1998-05-06'),
('Alex', 'Bravo Gutiérrez', 'H', '06239827L', '1997-11-01'),
('Ángel', 'Benítez Prieto', 'H', '06360671K', '1978-04-10'),
('Diego', 'Castillo Blanco', 'H', '06847342N', '1993-10-08'),
('Catalina', 'Giménez Blanco', 'M', '06978076Z', '2004-08-16'),
('Roberto', 'Montero Gil', 'H', '06998469Y', '2002-07-17'),
('César', 'Méndez Velasco', 'H', '07341680B', '1992-03-20'),
('Emilio', 'Gallardo Navarro', 'H', '07480753A', '1974-01-12'),
('Margarita', 'Pascual Mora', 'M', '07552316J', '1970-10-31'),
('Hugo', 'Hernández Pastor', 'H', '07677718L', '1994-10-26'),
('Marta', 'López Mora', 'M', '07684411L', '1979-05-18'),
('Andrés', 'Serrano Romero', 'H', '07699833P', '1996-04-06'),
('Irene', 'Carmona Hernández', 'M', '07699999J', '1996-02-11'),
('Daniela', 'Reyes Benítez', 'M', '07885329D', '1971-08-23'),
('Susana', 'Vargas Cruz', 'M', '08058467A', '1971-03-23'),
('José Ramón', 'Vargas Jiménez', 'H', '08059727K', '1977-06-06'),
('Alfredo', 'Durán Prieto', 'H', '08082315T', '1985-08-31'),
('Alejandro', 'Rubio Garrido', 'H', '08094663C', '1993-04-26'),
('José Ignacio', 'Romero Ruíz', 'H', '08100791F', '1975-03-15'),
('Dolores', 'Hernández Gómez', 'M', '08101321P', '2001-06-04'),
('Agustín', 'Herrera Herrero', 'H', '08112852Q', '1996-08-22'),
('Guillermo', 'Castillo Guerrero', 'H', '08232057N', '1974-07-09'),
('Jordi', 'Serrano Ibáñez', 'H', '08282644E', '2004-12-15'),
('Martín', 'Peña Hidalgo', 'H', '08300153M', '2002-08-14'),
('María', 'Mora Jiménez', 'M', '08398322X', '1986-09-17'),
('Cristina', 'Suárez Navarro', 'M', '08885093D', '1972-02-21'),
('Daniela', 'Reyes Benítez', 'M', '08925733P', '1995-06-27'),
('Patricia', 'Blanco Alonso', 'M', '09246958S', '2001-01-11'),
('César', 'Benítez Méndez', 'H', '09252247Z', '1987-09-23'),
('María Carmen', 'Marín Vicente', 'M', '09276188N', '1985-08-10'),
('Irene', 'Carmona Hernández', 'M', '09435475R', '1985-10-11'),
('Ismael', 'Herrero Castillo', 'H', '09453029Y', '1973-02-18'),
('Lidia', 'García Iglesias', 'M', '09637890Q', '1987-10-30'),
('Santiago', 'Hidalgo Guerrero', 'H', '09638077L', '1980-08-22'),
('Alex', 'Lorenzo López', 'H', '09643552C', '1992-04-29'),
('Eduardo', 'Prieto Jiménez', 'H', '09792590H', '1987-01-21'),
('Victoria', 'Aguilar González', 'M', '09829846Z', '1997-01-03'),
('Patricia', 'Saez Ortiz', 'M', '09832043A', '1985-06-16'),
('Catalina', 'Caballero Vargas', 'M', '10132301L', '1998-02-19'),
('Javier', 'Estéban Campos', 'H', '10554290G', '1991-04-11'),
('José Miguel', 'Castillo Morales', 'H', '10565708Z', '1982-07-15'),
('Elena', 'Ramírez Peña', 'M', '10618698N', '1976-09-16'),
('Rocío', 'Montero Serrano', 'M', '10622316L', '2005-01-13'),
('Gregorio', 'Rodríguez Ramos', 'H', '10743042H', '1990-08-05'),
('Albert', 'Rubio Vicente', 'H', '10788850X', '1999-07-14'),
('Álvaro', 'Muñoz Velasco', 'H', '10889056M', '1980-07-21'),
('Esther', 'Giménez Román', 'M', '10939788E', '1996-05-21'),
('Juan Manuel', 'Rodríguez Mora', 'H', '10944749S', '1993-03-03'),
('Mariano', 'Gutiérrez Herrera', 'H', '11134944T', '1995-05-23'),
('María Mar', 'Ferrer Prieto', 'M', '11204807N', '1995-07-26'),
('Gonzalo', 'Ibáñez Soto', 'H', '11454601A', '1991-05-27'),
('Lorena', 'Castillo Soto', 'M', '11454855G', '2001-12-24'),
('Luis', 'Peña Romero', 'H', '11457774W', '2005-01-31'),
('José María', 'Moreno Ruíz', 'H', '12037565D', '1991-11-05'),
('Jesús', 'Suárez Domínguez', 'H', '12782472S', '1973-07-07'),
('Claudia', 'Sánchez Lozano', 'M', '12795038T', '2003-02-02'),
('Diego', 'Cano Calvo', 'H', '12820168Z', '1986-11-23'),
('Marc', 'Cano Calvo', 'H', '12852451M', '1985-04-08'),
('Fátima', 'Martín Cano', 'M', '13054664W', '1983-02-04'),
('Juan Carlos', 'Velasco Ibáñez', 'H', '13105644Z', '2002-09-02'),
('Raquel', 'Ortega Vargas', 'M', '13172918J', '1990-12-24'),
('Juan Carlos', 'Carrasco Iglesias', 'H', '13244069W', '1973-05-26'),
('José Ignacio', 'Peña Alonso', 'H', '13340203L', '1999-06-25'),
('Eva', 'López Santos', 'M', '13482644K', '2001-04-13'),
('Luis', 'Giménez Gómez', 'H', '13551259G', '1982-02-27'),
('Rocío', 'Rubio Castillo', 'M', '13559409N', '1995-12-31'),
('Carlos', 'Parra Núñez', 'H', '13578081P', '1970-03-09'),
('Cristina', 'Giménez Prieto', 'M', '14532227E', '1999-01-12'),
('Rubén', 'Vicente Moreno', 'H', '14545642M', '1974-02-08'),
('Pablo', 'Crespo Hidalgo', 'H', '14699984V', '1997-04-05'),
('María José', 'Ramírez Ferrer', 'M', '14735852M', '1989-06-25'),
('Luis', 'Giménez Gómez', 'H', '14936568T', '2005-03-01'),
('Sofía', 'León Ibáñez', 'M', '15060185S', '1987-05-15'),
('Ángel', 'Díaz Ruíz', 'H', '15075656F', '1999-01-14'),
('Antonio', 'Blanco Núñez', 'H', '15100958D', '1998-09-06'),
('Rodrigo', 'Jiménez Nieto', 'H', '15271474A', '1998-04-26'),
('Alfonso', 'Romero Ortega', 'H', '15436362G', '1980-03-30'),
('Hugo', 'Torres Ortiz', 'H', '15441008G', '1974-06-06'),
('Inmaculada', 'Vázquez Rubio', 'M', '15449599Q', '1970-07-01'),
('Francisco José', 'Pascual Martínez', 'H', '15572173T', '1991-10-20'),
('Martín', 'Prieto Ortega', 'H', '15591871X', '1988-12-27'),
('Salvador', 'Ortega Rodríguez', 'H', '15599859V', '1986-01-02'),
('Francisco Javier', 'Giménez Prieto', 'H', '15904008Z', '1981-06-05'),
('Jorge', 'Herrera Soler', 'H', '16001684D', '1983-11-12'),
('Olga', 'Domínguez Rubio', 'M', '16098586N', '1989-11-16'),
('Juan Francisco', 'Ortiz Santos', 'H', '16436903E', '1994-10-19'),
('María Isabel', 'Ruíz Jiménez', 'M', '16451440T', '1972-01-07'),
('María Teresa', 'Navarro Giménez', 'M', '16619113A', '1980-05-26'),
('Josefa', 'Campos Rojas', 'M', '16660360B', '1987-06-11'),
('Gabriel', 'Martín Nieto', 'H', '16795664Y', '1975-02-25'),
('Félix', 'Guerrero Morales', 'H', '16825100W', '1999-03-21'),
('María', 'González López', 'M', '16843737D', '1997-06-30'),
('Rocío', 'Iglesias Caballero', 'M', '16844148Y', '2002-03-14'),
('Ana Belén', 'Vargas Montero', 'M', '17020670A', '1973-12-23'),
('Pilar', 'Benítez Suárez', 'M', '17204957Z', '1983-05-10'),
('Catalina', 'Peña Núñez', 'M', '17218717C', '1976-04-06'),
('Rodrigo', 'Marín Sánchez', 'H', '17272712B', '1974-04-13'),
('Manuel', 'Pastor Rubio', 'H', '17299845G', '1985-01-05'),
('José Manuel', 'Molina García', 'H', '17337618B', '1995-02-04'),
('Carolina', 'Fernández Martínez', 'M', '17340806W', '1984-03-23'),
('Julia', 'Campos Rojas', 'M', '17487511J', '1987-02-01'),
('María Victoria', 'Domínguez Estéban', 'M', '17546636M', '1984-10-06'),
('Pedro', 'Vega Flores', 'H', '17666990T', '1982-12-03'),
('Ana Belén', 'Aguilar Martínez', 'M', '18491246M', '1972-11-28'),
('Nerea', 'Soto Sanz', 'M', '18525991C', '1971-04-03'),
('Santiago', 'Gallardo Campos', 'H', '18600324V', '1978-07-07'),
('María Soledad', 'Rojas Fernández', 'M', '18658491V', '1970-11-23'),
('Victoria', 'Cortés Pascual', 'M', '18798266K', '1978-04-11'),
('Adrián', 'Peña Gallardo', 'H', '18871342A', '1971-02-10'),
('José Manuel', 'Lorenzo Serrano', 'H', '18903893D', '2002-04-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `idAsignatura` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `siglas` varchar(4) COLLATE utf8_spanish_ci DEFAULT NULL,
  `horasSemana` decimal(2,0) DEFAULT NULL,
  `dniProfesor` char(9) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idCiclo` int(11) NOT NULL,
  `curso` enum('1','2') COLLATE utf8_spanish_ci DEFAULT '1',
  `anho` int(4) NOT NULL,
  `urlLogotipo` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`, `idCiclo`, `curso`, `anho`, `urlLogotipo`) VALUES
(1, 'PROGRAMACION', 'PROG', '8', '01677381Z', 1, '1', 2019, 'https://puntoequis.com.ar/wp-content/uploads/2016/06/logos_pgm.jpg'),
(2, 'DESARROLLO WEB EN ENTORNO SERVIDOR', 'DWES', '8', '03571664V', 2, '2', 2019, 'http://formatium.com/wp-content/uploads/2015/11/uf1846-desarrollo-de-aplicaciones-web-distribuidas-online_1.jpg'),
(3, 'DESARROLLO WEB EN ENTORNO CLIENTE', 'DWEC', '5', '20408095B', 2, '2', 2019, 'https://www.campusaula.com/wp-content/uploads/2016/11/coding-924920-495x400.jpg'),
(4, 'BASES DE DATOS', 'BD', '6', '06376291R', 2, '1', 2018, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG3TyIUni2jmh5TLIjNndRtOzolojkEqPh7yBrbMcScA-k0Kk&s');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

CREATE TABLE `ciclo` (
  `idCiclo` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `siglas` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `urlLogotipo` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`idCiclo`, `nombre`, `siglas`, `urlLogotipo`) VALUES
(1, 'DESARROLLO DE APLIACIONES WEB', 'DAW', 'https://efaoretana.org/wp-content/uploads/2018/05/daw.png'),
(2, 'DESARROLLO DE APLIACIONES MULTIPLATAFORMA', 'DAM', 'https://spiradreams.com/wp-content/uploads/2018/10/desarrollo-de-aplicaciones-multiplataforma.png'),
(3, 'SERVICIO MICROINFORMATICOS Y REDES', 'SMR', 'https://pbs.twimg.com/media/Dc5fCmlW4AAQUdL.png'),
(4, 'ADMINISTRACION DE SISTEMAS INFORMATICOS EN RED', 'ASIR', 'http://asirtenerife.com/wp-content/uploads/2013/07/logo-s-300x171.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

CREATE TABLE `matricula` (
  `dniAlumno` char(9) COLLATE utf8_spanish_ci NOT NULL,
  `idAsignatura` int(11) NOT NULL,
  `repetidor` tinyint(4) DEFAULT 0,
  `notaFinal` decimal(2,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `matricula`
--

INSERT INTO `matricula` (`dniAlumno`, `idAsignatura`, `repetidor`, `notaFinal`) VALUES
('00001531J', 1, 0, NULL),
('00001531J', 3, 0, NULL),
('00033780Q', 4, 0, NULL),
('00097083T', 1, 0, NULL),
('00172036L', 1, 0, NULL),
('00172036L', 3, 0, NULL),
('00284690L', 4, 0, NULL),
('00299022E', 3, 0, NULL),
('00299022E', 4, 0, NULL),
('00978752X', 4, 0, NULL),
('01461887F', 4, 0, NULL),
('01530003C', 4, 0, NULL),
('01544804D', 4, 0, NULL),
('01682977K', 1, 0, NULL),
('01702223Q', 4, 0, NULL),
('02194336K', 1, 0, NULL),
('02194336K', 3, 0, NULL),
('02381096K', 1, 0, NULL),
('03824729J', 1, 0, NULL),
('03824729J', 3, 0, NULL),
('04962129V', 4, 0, NULL),
('05591874E', 4, 0, NULL),
('05846965C', 4, 0, NULL),
('06034354M', 1, 0, NULL),
('06034354M', 3, 0, NULL),
('06174873V', 1, 0, NULL),
('06192567R', 1, 0, NULL),
('06192567R', 3, 0, NULL),
('06239827L', 1, 0, NULL),
('06360671K', 1, 0, NULL),
('06360671K', 3, 0, NULL),
('08082315T', 2, 0, NULL),
('08082315T', 3, 0, NULL),
('08094663C', 2, 0, NULL),
('08112852Q', 2, 0, NULL),
('08112852Q', 3, 0, NULL),
('09637890Q', 4, 0, NULL),
('09643552C', 2, 0, NULL),
('09829846Z', 4, 0, NULL),
('10788850X', 3, 0, NULL),
('10889056M', 2, 0, NULL),
('12782472S', 4, 0, NULL),
('15075656F', 3, 0, NULL),
('15436362G', 2, 0, NULL),
('17020670A', 2, 0, NULL),
('17020670A', 3, 0, NULL),
('17020670A', 4, 0, NULL),
('17272712B', 4, 0, NULL),
('18491246M', 2, 0, NULL),
('18525991C', 4, 0, NULL),
('18871342A', 2, 0, NULL),
('18871342A', 3, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `dni` char(9) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` text COLLATE utf8_spanish_ci NOT NULL,
  `sexo` enum('H','M') COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento`) VALUES
('01677381Z', 'José', 'Cabrera Estéban', 'H', '2002-11-22'),
('03571664V', 'César', 'Prieto Pastor', 'H', '1983-05-03'),
('06376291R', 'Santiago', 'Rodríguez Vargas', 'H', '1995-04-17'),
('11201851T', 'Patricia', 'Garrido Pastor', 'M', '1980-06-13'),
('11488700Q', 'José María', 'León Álvarez', 'H', '1980-05-19'),
('19380761H', 'Jorge', 'Díaz Soto', 'H', '1995-07-25'),
('20408095B', 'María Soledad', 'Rojas López', 'M', '2002-04-30'),
('29916963N', 'Alejandra', 'Giménez Ruíz', 'M', '2002-06-07'),
('43167768B', 'Míriam', 'Díaz Marín', 'M', '1982-03-13'),
('49433946T', 'Jesús', 'Márquez Garrido', 'H', '1999-08-20'),
('52660344G', 'Ramón', 'López Díaz', 'H', '1993-09-01'),
('54891074X', 'María Isabel', 'Fuentes Nieto', 'M', '2001-05-02'),
('56503599M', 'Ángel', 'Ruíz Estéban', 'H', '2005-01-13'),
('62449553E', 'José Luis', 'Santos García', 'H', '1973-05-15'),
('66038911T', 'Ramón', 'Cabrera Pastor', 'H', '1979-09-01'),
('78180400L', 'Sara', 'Rojas Ortiz', 'M', '2001-03-22'),
('78852831E', 'Ignacio', 'Jiménez Rodríguez', 'H', '1996-06-07'),
('87491127R', 'María Antonia', 'Velasco Hernández', 'M', '1978-03-08'),
('97756571Q', 'Diego', 'Ramos Delgado', 'H', '1987-06-15'),
('99641460D', 'María Luisa', 'Guerrero Nieto', 'M', '1984-07-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `Departamento` varchar(100) NOT NULL,
  `fecha_alta` date NOT NULL,
  `dni` char(9) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `pwd`, `email`, `Departamento`, `fecha_alta`, `dni`, `nombre`, `apellidos`, `fecha_nacimiento`) VALUES
(1, 'admin', '$2y$10$fRKNAsajWuBprttdXzTrA.J3uaHvF.UqylvDqTCNq4ojym7djYlhy', 'adm@adm.es', '', '2020-03-02', '01677381Z', '', '', '0000-00-00'),
(2, 'evaH', '$2y$10$z7dMCLR48Rs4K52yK93pE.UomcQDHFji3D6VrVKwmKnCart4g4.rW', 'evah@h.eva', '', '0000-00-00', '', '', '', '0000-00-00'),
(3, 'hola', '$2y$10$ZAjOGplNjJ7UwS3gihCgVe09sTcc07wjNvxIU76z2u4y9CpEXUStC', 'hola@mail.com', '', '0000-00-00', '', '', '', '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`idAsignatura`),
  ADD KEY `fk_asignatura_1_idx` (`dniProfesor`),
  ADD KEY `fk_asignatura_2_idx` (`idCiclo`);

--
-- Indices de la tabla `ciclo`
--
ALTER TABLE `ciclo`
  ADD PRIMARY KEY (`idCiclo`);

--
-- Indices de la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`dniAlumno`,`idAsignatura`),
  ADD KEY `fk_matricula_1_idx` (`dniAlumno`),
  ADD KEY `fk_matricula_2_idx` (`idAsignatura`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD CONSTRAINT `fk_asignatura_1` FOREIGN KEY (`dniProfesor`) REFERENCES `profesor` (`dni`),
  ADD CONSTRAINT `fk_asignatura_2` FOREIGN KEY (`idCiclo`) REFERENCES `ciclo` (`idCiclo`);

--
-- Filtros para la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `fk_matricula_1_idx` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno` (`dni`),
  ADD CONSTRAINT `fk_matricula_2_idx` FOREIGN KEY (`idAsignatura`) REFERENCES `asignatura` (`idAsignatura`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
