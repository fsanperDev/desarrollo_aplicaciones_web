<?php
include 'index.php';
?>
<section>
    <form action="insercion.php" method="post">
        <h3>¿Que deseas introducir en la base de datos?</h3>    
        <select name="tablaSeleccionada">
            <option value="alumno">Alumno</option>
            <option value="asignatura">Asignatura</option>
            <option value="ciclo">Ciclo</option>
            <option value="matricula">Matricula</option>
            <option value="profesor">Profesor</option>
        </select>
        <input type="submit" name="botonTabla" value="Enviar" />
    </form>
</section>
<article>
    <?php
    include 'funciones.inc';

    /* Si el dato a insertar es un Alumno */
    if (isset($_POST['EnviarAlumno'])) {
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $sexo = $_POST['sexo'];
        $dni = $_POST['dni'];
        $fecNacimiento = $_POST['fecNacimiento'];

        $SentenciaSql = "INSERT INTO alumno (nombre, apellidos, sexo, dni, fecha_nacimiento) VALUES ('$nombre', '$apellidos', '$sexo', '$dni', '$fecNacimiento')";
        insertarDatos($SentenciaSql);
    }
    /* Si el dato a insertar es una Asignatura */
    if (isset($_POST['EnviarAsignatura'])) {
        $idAsignatura = $_POST['idAsignatura'];
        $nombreAsignatura = $_POST['nombre'];
        $siglas = $_POST['siglas'];
        $horasSemana = $_POST['horasSemana'];
        $dniProfesor = $_POST['dniProfesor'];
        $idCiclo = $_POST['idCiclo'];
        $curso = $_POST['curso'];
        $anho = $_POST['anho'];
        $logotipoAsignatura = $_POST['urlLogotipo'];

        $SentenciaSql = "INSERT INTO asignatura (idAsignatura, nombre, siglas, horasSemana, dniProfesor, idCiclo,"
                . " curso, anho, urlLogotipo) VALUES ('$idAsignatura','$nombreAsignatura', '$siglas', '$horasSemana', '$dniProfesor',"
                . " '$idCiclo', '$curso', '$anho', '$logotipoAsignatura')";
        insertarDatos($SentenciaSql);
    }
    /* Si el dato a insertar es un Ciclo */
    if (isset($_POST['EnviarCiclo'])) {
        $idCiclo = $_POST['idCiclo'];
        $nombre = $_POST['nombre'];
        $siglas = $_POST['siglas'];
        $logotipoCiclo = $_POST['urlLogotipo'];

        $SentenciaSql = "INSERT INTO ciclo (idCiclo, nombre, siglas, urlLogotipo) VALUES ('$idCiclo', '$nombre', '$siglas', '$logotipoCiclo')";
        insertarDatos($SentenciaSql);
    }
    /* Si el dato a insertar es una Matricula */
    if (isset($_POST['EnviarMatricula'])) {
        $dniAlumno = $_POST['dniAlumno'];
        $idAsignatura = $_POST['idAsignatura'];
        $repetidor = $_POST['repetidor'];
        $notaFinal = $_POST['notaFinal'];

        $SentenciaSql = "INSERT INTO matricula (dniAlumno, idAsignatura, repetidor, notaFinal) VALUES ('$dniAlumno', '$idAsignatura', '$repetidor', '$notaFinal')";
        insertarDatos($SentenciaSql);
    }
    /* Si el dato a insertar es un Alumno */
    if (isset($_POST['EnviarProfesor'])) {
        $dni = $_POST['dni'];
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $sexo = $_POST['sexo'];
        $fecNacimiento = $_POST['fecNacimiento'];

        $SentenciaSql = "INSERT INTO profesor (dni, nombre, apellidos, sexo, fecha_nacimiento) VALUES ('$dni', '$nombre', '$apellidos', '$sexo', '$fecNacimiento')";
        insertarDatos($SentenciaSql);
    }
    /**
     * Si aún no hay un dato para enviar como última opcion entra en un switch en el que despliega una serie
     * de menus segun la opcion escogida anteriormente. 
     */ else {
        if (isset($_REQUEST['botonTabla'])) {
            $tablaSeleccionada = $_REQUEST['tablaSeleccionada'];
            switch ($tablaSeleccionada) {
//---------------------------   OPCION ALUMNO   ------------------------------------------------------------------------
                case 'alumno':
                    ?>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <p>Nombre: <input type="text" name="nombre" required/></p>
                        <p>Apellidos: <input type="text" name="apellidos" required/></p>
                        <p>Sexo: 
                            <label><input type="radio" name="sexo" value="H" checked> Masculino</label>
                            <label><input type="radio" name="sexo" value="M"> Femenino</label></p>
                        <p>DNI: <input type="text" name="dni" maxlength="9" required/></p>
                        <p>Fecha de Nacimiento: <input type="date" name="fecNacimiento" placeholder="YYYY-MM-DD" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])" required/></p>
                        <p><input type="submit" name="EnviarAlumno" value="Enviar"/></p>
                    </form>
                    <?php
                    break;
//---------------------------------------  OPCION ASIGNATURA   ------------------------------------------------------------
                case 'asignatura';
                    ?>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <!-- Hace una conexion a la Base de datos para calcula la nueva idAsignatura. -->
                        <?php
                        $BD = conexionALaBaseDeDAtos();
                        if ($result = mysqli_query($BD, "SELECT `idAsignatura` FROM `asignatura` ORDER BY idAsignatura")) {
                            /* determinar el número de filas del resultado */
                            $row_cnt = mysqli_num_rows($result);
                            $nuevoID = $row_cnt + 1;
                            mysqli_free_result($result);
                        }
                        mysqli_close($BD);
                        ?>
                        <input type="number" name="idAsignatura" value="<?php echo $nuevoID; ?>" hidden/>
                        <p>Nombre: <input type="text" name="nombre" required/></p>
                        <p>Siglas: <input type="text" name="siglas" required/></p>
                        <p>Horas a la semana: <input type="number" name="horasSemana" required maxlength="2"/></p>
                        <p><select name="dniProfesor" required>
                                <?php
                                /*
                                 * Se hará una consulta para mostrar una lista con los profesores de los cuales mostraremos
                                 * su nombre y apellido, y guardamos su DNI.
                                 */
                                $BD = conexionALaBaseDeDAtos();
                                if ($result = mysqli_query($BD, "SELECT `dni`, `nombre`, `apellidos` FROM `profesor`")) {
                                    $row = $result->fetch_assoc();
                                    while ($row != null) {
                                        echo "<option value='${row['dni']}'";
                                        if (isset($producto) && $producto == $row['cod'])
                                            echo " selected='true'";
                                        echo ">${row['nombre']}, ${row['apellidos']}</option>";
                                        $row = $result->fetch_assoc();
                                    }
                                }
                                mysqli_close($BD);
                                ?>
                            </select></p>
                        <p>Ciclo al que pertenece:<select name="idCiclo" required>
                                <?php
                                /*
                                 * Se hará una consulta para mostrar una lista con los ciclo de los cuales mostraremos
                                 * su nombre, y guardamos su idCiclo.
                                 */
                                $BD = conexionALaBaseDeDAtos();
                                if ($result = mysqli_query($BD, "SELECT `idCiclo`, `nombre` FROM `ciclo`")) {
                                    $row = $result->fetch_assoc();
                                    while ($row != null) {
                                        echo "<option value='${row['idCiclo']}'";
                                        if (isset($producto) && $producto == $row['cod'])
                                            echo " selected='true'";
                                        echo ">${row['nombre']}</option>";
                                        $row = $result->fetch_assoc();
                                    }
                                }
                                mysqli_close($BD);
                                ?>
                            </select></p>
                        <p>Curso: <input type="number" name="curso" required maxlength="1"/></p>
                        <p>Año: <input type="text" name="anho" placeholder="yyyy" required maxlength="4" minlength="4"/></p>
                        <p>URL del Logotipo: <input type="text" name="urlLogotipo"/></p>
                        <p><input type="submit" name="EnviarAsignatura" value="Enviar"/></p>
                    </form>
                    <?php
                    break;
//-------------------------------  OPCION CICLO   ----------------------------------------------------------------------
                case 'ciclo';
                    ?>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <!-- Hace una conexion a la Base de datos para calcula la nueva idCiclo. -->
                        <?php
                        $BD = conexionALaBaseDeDAtos();
                        if ($result = mysqli_query($BD, "SELECT `idCiclo` FROM `ciclo` ORDER BY idCiclo")) {
                            /* determinar el número de filas del resultado */
                            $row_cnt = mysqli_num_rows($result);
                            $nuevoID = $row_cnt + 1;
                            mysqli_free_result($result);
                        }
                        mysqli_close($BD);
                        ?>
                        <input type="number" name="idCiclo" value="<?php echo $nuevoID; ?>" hidden/>
                        <p>Nombre del nuevo ciclo: <input type="text" name="nombre" required/></p>
                        <p>Siglas del ciclo: <input type="text" name="siglas" required maxlength="4"/></p>
                        <p>URL del Logotipo: <input type="text" name="urlLogotipo"/></p>
                        <p><input type="submit" name="EnviarCiclo" value="Enviar"/></p>
                    </form>
                    <?php
                    break;
//---------------------------  OPCION MATRICULA   --------------------------------------------------------------------------
                case 'matricula';
                    ?>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <p><select name="dniAlumno" required>
                                <?php
                                /*
                                 * Se hará una consulta para mostrar una lista con los alumnos de los cuales mostraremos
                                 * su nombre y apellido, y guardamos su DNI.
                                 */
                                $BD = conexionALaBaseDeDAtos();
                                if ($result = mysqli_query($BD, "SELECT `dni`, `nombre`, `apellidos` FROM `alumno`")) {
                                    $row = $result->fetch_assoc();
                                    while ($row != null) {
                                        echo "<option value='${row['dni']}'";
                                        if (isset($producto) && $producto == $row['cod'])
                                            echo " selected='true'";
                                        echo ">${row['nombre']}, ${row['apellidos']}</option>";
                                        $row = $result->fetch_assoc();
                                    }
                                }
                                mysqli_close($BD);
                                ?>
                            </select></p>
                        <p>Selecione asignatura:<select name="idAsignatura" required>
                                <?php
                                /*
                                 * Se hará una consulta para mostrar una lista con las asignaturas de las cuales mostraremos
                                 * su nombre, y guardamos su idAsignatura.
                                 */
                                $BD = conexionALaBaseDeDAtos();
                                if ($result = mysqli_query($BD, "SELECT `idAsignatura`, `nombre` FROM `asignatura`")) {
                                    $row = $result->fetch_assoc();
                                    while ($row != null) {
                                        echo "<option value='${row['idAsignatura']}'";
                                        if (isset($producto) && $producto == $row['cod'])
                                            echo " selected='true'";
                                        echo ">${row['nombre']}</option>";
                                        $row = $result->fetch_assoc();
                                    }
                                }
                                mysqli_close($BD);
                                ?>
                            </select></p> 
                        <p>Repetidor: <input type="number" name="repetidor" value="0" maxlength="2" required/></p>
                        <p>Nota final: <input type="number" step="0.1" name="notaFinal"/></p>
                        <p><input type="submit" name="EnviarMatricula" value="Enviar"/></p>
                    </form>
                    <?php
                    break;
//----------------------------------  OPCION PROFESOR  -------------------------------------------------------------------
                case 'profesor';
                    ?>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <p>Nombre: <input type="text" name="nombre" required/></p>
                        <p>Apellidos: <input type="text" name="apellidos" required/></p>
                        <p>Sexo: 
                            <label><input type="radio" name="sexo" value="H" checked> Masculino</label>
                            <label><input type="radio" name="sexo" value="M"> Femenino</label></p>
                        <p>DNI: <input type="text" name="dni" maxlength="9" required/></p>
                        <p>Fecha de Nacimiento: <input type="date" name="fecNacimiento" placeholder="YYYY-MM-DD" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])" required/></p>
                        <p><input type="submit" name="EnviarProfesor" value="Enviar"/></p>
                    </form>
                    <?php
                    break;
                default:
                    break;
            }
        }
    }
    ?>
</article>
