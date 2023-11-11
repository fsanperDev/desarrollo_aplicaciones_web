<?php

/**
 * Funcion que devuelve (si no hay error) la variable $Conexion que contiene la conexion a la base de datos.
 * @return $Conexion
 */
function conexionALaBaseDeDAtos() {
    /* CONEXION A LA BASE DE DATOS */
    include 'db.config';
    @ $Conexion = new mysqli($Server, $User, $Password, $DataBase);
    $error = $Conexion->connect_errno;

    if ($error == null) {
        return $Conexion;
    } else {
        return $error;
        echo "<p>Error $error conectando a la base de datos: $Conexion->connect_error</p>";
        exit();
    }
}

/**
 * Funcion que inserta en la base de datos la sentencia SQL recivida.
 * @param type $SentenciaSql
 */
function insertarDatos($SentenciaSql) {
    $BD = conexionALaBaseDeDAtos();
    if (mysqli_query($BD, $SentenciaSql)) {
        echo'<script type="text/javascript">alert("Dato introducido correctamente en la Base de Datos"); window.location.href="index.php";</script>';
    } else {
        echo "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
    }
    mysqli_close($BD);
}

/**
 * Funcion que sirve para mostrar datos de la Base de Datos, se divide en dos partes la primera selecciona la sentencia
 * SQL y la primera fila de la tabla (Títulos), la segunda parte hace la conexion y según la variable '$TablaSeleccionada'
 * muestra una serie de datos.
 * 
 * @param type $TablaSeleccionada [Variable recogida anteriormente que contiene el nombre de la tabla de la base de datos
 *  que se le va a extraer los datos]
 */
function mostrarDatos($TablaSeleccionada) {
//Primera parte.
    if ($TablaSeleccionada == 'alumno') {
        $camposSeleccionados = "SELECT `nombre`, `apellidos`, `sexo`, `dni`, `fecha_nacimiento` FROM `$TablaSeleccionada`";
        $nombreColumna = "<tr><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Sexo</td><td>Fecha de Nacimiento</td></tr>";
    }
    if ($TablaSeleccionada == 'asignatura') {
        $camposSeleccionados = "SELECT `idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`,`idCiclo`, `curso`, `anho`, `urlLogotipo` FROM `$TablaSeleccionada`";
        $nombreColumna = "<tr><td>ID</td><td>Nombre</td><td>Siglas</td><td>Horas a la semana</td><td>Profesor</td><td>Ciclo</td><td>Curso</td><td>Año</td><td>Logotipo</td></tr>";
    }
    if ($TablaSeleccionada == 'ciclo') {
        $camposSeleccionados = "SELECT `idCiclo`, `nombre`, `siglas`, `urlLogotipo` FROM `$TablaSeleccionada`";
        $nombreColumna = "<tr><td>ID</td><td>Nombre</td><td>Siglas</td><td>Logotipo</td></tr>";
    }
    if ($TablaSeleccionada == 'matricula') {
        $camposSeleccionados = "SELECT `dniAlumno`, `idAsignatura`, `repetidor`, `notaFinal` FROM `$TablaSeleccionada`";
        $nombreColumna = "<tr><td>Nombre</td><td>Asignatura</td><td>Repetidor</td><td>Nota Final</td></tr>";
    }
    if ($TablaSeleccionada == 'profesor') {
        $camposSeleccionados = "SELECT `dni`, `nombre`, `apellidos`, `sexo`,`fecha_nacimiento` FROM `$TablaSeleccionada`";
        $nombreColumna = "<tr><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Sexo</td><td>Fecha de Nacimiento</td></tr>";
    }
//Segunda parte.
    $BD = conexionALaBaseDeDAtos();
    if ($result = mysqli_query($BD, $camposSeleccionados)) {
        $row = $result->fetch_assoc();
        echo $nombreColumna;
        while ($row != null) {
            if ($TablaSeleccionada == 'alumno') {
                $datosAMostrar = "<td>${row['dni']}</td><td>${row['nombre']}</td><td>${row['apellidos']}</td><td>${row['sexo']}</td><td>${row['fecha_nacimiento']}</td>";
            }
            if ($TablaSeleccionada == 'asignatura') {
                $datosAMostrar = "<td>${row['idAsignatura']}</td><td>${row['nombre']}</td><td>${row['siglas']}</td><td>${row['horasSemana']}</td><td>${row['dniProfesor']}</td><td>${row['idCiclo']}</td><td>${row['curso']}</td><td>${row['anho']}</td><td>${row['urlLogotipo']}</td>";
            }
            if ($TablaSeleccionada == 'ciclo') {
                $datosAMostrar = "<td>${row['idCiclo']}</td><td>${row['nombre']}</td><td>${row['siglas']}</td><td>${row['urlLogotipo']}<td>";
            }
            if ($TablaSeleccionada == 'matricula') {
                $datosAMostrar = "<td>${row['dniAlumno']}</td><td>${row['idAsignatura']}</td><td>${row['repetidor']}</td><td>${row['notaFinal']}<td>";
            }
            if ($TablaSeleccionada == 'profesor') {
                $datosAMostrar = "<td>${row['dni']}</td><td>${row['nombre']}</td><td>${row['apellidos']}</td><td>${row['sexo']}</td><td>${row['fecha_nacimiento']}</td>";
            }
            echo "<tr>$datosAMostrar</tr>";
            $row = $result->fetch_assoc();
        }
    }
    mysqli_close($BD);
}

/**
 * Funcion que recibe una consulta SQL y la ejecuta.
 * @param type $SentenciaSql
 */
function eliminarDatos($SentenciaSql) {
    $BD = conexionALaBaseDeDAtos();    
      if (mysqli_query($BD, $SentenciaSql)) {
      echo'<script type="text/javascript">alert("Dato eliminado correctamente en la Base de Datos"); window.location.href="eliminacion.php";</script>';
      } else {
      echo  "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
      } 
    mysqli_close($BD);
}


/**
 * Funcion en la que devuelve los posibles valores que se pueden eliminar según lo que reciba de la variable $tablaSeleccionada.
 * @param type $tablaSeleccionada
 */
function eliminarMostrarOpciones($tablaSeleccionada) {
    switch ($tablaSeleccionada) {
        case 'alumno':
            $tituloDeConsulta = "<h3>Alumno</h3>";
            $sentenciaSQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `alumno`";
            break;
        case 'asignatura':
            $tituloDeConsulta = "<h3>Asignatura</h3>";
            $sentenciaSQL = "SELECT `idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`, `idCiclo`, `curso`, `anho`, `urlLogotipo` FROM `asignatura`";
            break;
        case 'ciclo':
            $tituloDeConsulta = "<h3>Ciclo</h3>";
            $sentenciaSQL = "SELECT `idCiclo`, `nombre`, `siglas`, `urlLogotipo` FROM `ciclo`";
            break;
        case 'matricula':
            $tituloDeConsulta = "<h3>Matricula</h3>";
            $sentenciaSQL = "SELECT `dniAlumno`, `idAsignatura`, `repetidor`, `notaFinal` FROM `matricula`";
            break;
        case 'profesor':
            $tituloDeConsulta = "<h3>Profesor</h3>";
            $sentenciaSQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `profesor`";
            break;
        default:
            break;
    }
    ?>
    <div id="seleccionEliminar">
        <form action="seguridad.php" method="post">
        <input type="hidden" name="tablaSeleccionada" value="<?php echo $tablaSeleccionada; ?>">
        <h2>Seleccione el/la <?php echo $tablaSeleccionada; ?> que desea eliminar</h2>
        <select name="datoAEliminar">
            <?php
            $BD = conexionALaBaseDeDAtos();
            if ($result = mysqli_query($BD, $sentenciaSQL)) {
                $row = $result->fetch_assoc();
                while ($row != null) {
                   if ($tablaSeleccionada == 'alumno') {
                        echo "<option value='${row['dni']}'>Nombre: ${row['nombre']} ${row['apellidos']} | DNI: ${row['dni']} | Sexo: ${row['sexo']} | Fecha de nacimiento: ${row['fecha_nacimiento']}</option>";
                    }
                    if ($tablaSeleccionada == 'asignatura') {
                        echo "<option value='${row['idAsignatura']}'> ID: ${row['idAsignatura']} | Nombre: ${row['nombre']} - ${row['siglas']} | Horas: ${row['horasSemana']} | Profesor: ${row['dniProfesor']} | Ciclo: ${row['idCiclo']} Curso: ${row['curso']} | Año: ${row['anho']} | Logotipo: ${row['urlLogotipo']}</option>";
                    }
                    if ($tablaSeleccionada == 'ciclo') {
                        echo "<option value='${row['idCiclo']}'>ID: ${row['idCiclo']} | ${row['nombre']} - ${row['siglas']} | Logotipo: ${row['urlLogotipo']}</option>";
                    }
                    if ($tablaSeleccionada == 'matricula') {
                        echo "<option value='${row['dniAlumno']}'>Alumno:${row['dniAlumno']}  | Asignatura: ${row['idAsignatura']} | Repetidor: ${row['repetidor']} | Nota Final: ${row['notaFinal']}</option>";
                    }
                    if ($tablaSeleccionada == 'profesor') {
                        echo "<option value='${row['dni']}'>Nombre: ${row['nombre']} ${row['apellidos']} | DNI: ${row['dni']} | Sexo: ${row['sexo']} | Fecha de nacimiento: ${row['fecha_nacimiento']}</option>";
                    }
                    $row = $result->fetch_assoc();
                }
            }
            mysqli_close($BD);
            ?>
        </select>
        <p><input type="submit" name="EliminarDato" value="Eliminar"/></p>
        </form>
    </div>
    <?php
}


/**
 * Esta funcion sirve para devolver una sentencia SQL para buscar en la base de datos segun lo que 
 * reciba de la variable $tablaSeleccionada.
 * @param type $tablaSeleccionada
 * @return type
 */
function seleccionarSentenciaSQL($tablaSeleccionada){
        switch ($tablaSeleccionada) {
        case 'alumno':
             return $sentenciaSQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `alumno`";
            break;
        case 'asignatura':
            return $sentenciaSQL = "SELECT `idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`, `idCiclo`, `curso`, `anho`, `urlLogotipo` FROM `asignatura`";
            break;
        case 'ciclo':
            return $sentenciaSQL = "SELECT `idCiclo`, `nombre`, `siglas`, `urlLogotipo` FROM `ciclo`";
            break;
        case 'matricula':
            return $sentenciaSQL = "SELECT `dniAlumno`, `idAsignatura`, `repetidor`, `notaFinal` FROM `matricula`";
            break;
        case 'profesor':
            return $sentenciaSQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `profesor`";
            break;
        default:
            break;
    }
}

