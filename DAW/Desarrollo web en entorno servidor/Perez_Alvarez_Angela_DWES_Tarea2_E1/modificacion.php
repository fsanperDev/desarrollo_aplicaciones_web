<?php
include 'funciones.inc';
include 'index.php';
if (isset($_REQUEST['update'])) {
    switch ($_POST['tabla']) {
        case 'alumno':
            $id = $_POST['dniActualizado'];
            $nombre = $_POST['nombreActualizado'];
            $apellidos = $_POST['apellidosActualizado'];
            $sexo = $_POST['sexoActualizado'];
            $nacimiento = $_POST['nacimientoActualizado'];
            $SQL = "UPDATE `alumno` SET `nombre` = '$nombre', `apellidos` = '$apellidos', `sexo` = '$sexo', `fecha_nacimiento` = '$nacimiento' WHERE `alumno`.`dni` = $id";
            insertarDatos($SQL);
            break;
        case 'asignatura':
            $id = $_POST['idActualizado'];
            $idAsignatura = $_POST['idActualizado'];
            $nombre = $_POST['nombreActualizado'];
            $siglas = $_POST['siglasActualizado'];
            $horasSemana = $_POST['horasActualizado'];
            $dniProfesor = $_POST['dniProfesor'];
            $idCiclo = $_POST['idCicloActualizado'];
            $curso = $_POST['cursoActualizado']; 
            $anho = $_POST['anhoActualizado'];
            $urlLogotipo = $_POST['logotipoActualizado'];
            
            $SQL = "UPDATE `asignatura` SET `idAsignatura` = '$idAsignatura', `nombre` = '$nombre', `siglas` = '$siglas', `horasSemana`= '$horasSemana', `dniProfesor` = '$dniProfesor', `idCiclo` = '$idCiclo', `curso` = '$curso', `anho` = '$anho', `urlLogotipo` = '$urlLogotipo' FROM `asignatura` WHERE `asignatura`.`idAsignatura` = $id";
            break;
        case 'ciclo':
            $id = $_POST['idActualizado'];
            $nombre = $_POST['nombreActualizado'];
            $siglas = $_POST['siglasActualizado'];
            $urlLogotipo = $_POST['logotipoActualizado'];
            $SQL = "UPDATE `ciclo` SET `nombre` = '$nombre', `siglas` = '$siglas', `urlLogotipo` = '$urlLogotipo' WHERE `ciclo`.`idCiclo` = $id";
            insertarDatos($SQL);
            break;
        case 'matricula':
            $id = $_POST['dniActualizado'];
            $idAsignatura = $_POST['asignaturaActualizado'];
            $repetidor = $_POST['repetidorActualizado'];
            $notaFinal = $_POST['notaFinalActualizado'];
            $SQL = "UPDATE `matricula` SET `dniAlumno` = '$id', `idAsignatura` = '$idAsignatura', `repetidor` = '$repetidor', `notaFinal` = '$notaFinal' WHERE `matricula`.`idAsignatura` = $id";
            break;
        case 'profesor':
            $id = $_POST['dniActualizado'];
            $nombre = $_POST['nombreActualizado'];
            $apellidos = $_POST['apellidosActualizado'];
            $sexo = $_POST['sexoActualizado'];
            $nacimiento = $_POST['nacimientoActualizado'];
            $SQL = "UPDATE `profesor` SET `nombre` = '$nombre', `apellidos` = '$apellidos', `sexo` = '$sexo', `fecha_nacimiento` = '$nacimiento' WHERE `profesor`.`dni` = $id";
            insertarDatos($SQL);
            break;
        default:
            break;
    }
}
?>
<section>
<h2>Categorias</h2>
<form action="actualizarDatos.php" method="post">
    <input type="radio" name="radio" value="alumno">Alumno<br>
    <input type="radio" name="radio" value="asignatura">Asignatura<br>
    <input type="radio" name="radio" value="ciclo">Ciclo<br>
    <input type="radio" name="radio" value="matricula">Matricula<br>
    <input type="radio" name="radio" value="profesor">Profesor<br>
    <input type="submit" name="submit" value="Seleccionar" />
</form>
</section>
<article>
<?php
if (isset($_POST['datoModificar'])) {
    $id = $_POST['datoModificar'];
    $tablaSeleccionada = $_POST['tablaSeleccionada'];

    switch ($tablaSeleccionada) {
        case 'alumno':
            $SQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `alumno` WHERE `dni` = '$id'";
            break;
        case 'asignatura':
            $SQL = "SELECT `idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`, `idCiclo`, `curso`, `anho`, `urlLogotipo` FROM `asignatura` WHERE `idAsignatura` = $id ";
            break;
        case 'ciclo':
            $SQL = "SELECT `idCiclo`, `nombre`, `siglas`, `urlLogotipo` FROM `ciclo` WHERE `idCiclo` = $id";
            break;
        case 'matricula':
            $SQL = "SELECT `dniAlumno`, `idAsignatura`, `repetidor`, `notaFinal` FROM `matricula` WHERE `dniAlumno` = '$id'";
            break;
        case 'profesor':
            $SQL = "SELECT `dni`, `nombre`, `apellidos`, `sexo`, `fecha_nacimiento` FROM `profesor` WHERE `dni` = '$id'";
            break;
        default:
            break;
    }
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <?php
        switch ($tablaSeleccionada) {
            case 'alumno':
                $BD = conexionALaBaseDeDAtos();
                if ($result = mysqli_query($BD, $SQL)) {
                    $row = $result->fetch_assoc();
                    echo "<input type='hidden' name='tabla' value=$tablaSeleccionada>";
                    echo "<input type='hidden' name='dniActualizado' value='${row['dni']}'>";
                    echo "Nombre: <input type='text'name='nombreActualizado' value='${row['nombre']}' required><br>";
                    echo "Apellidos: <input type='text'name='apellidosActualizado' value='${row['apellidos']}' required><br>";
                    echo "Sexo: <input type='text'name='sexoActualizado' value='${row['sexo']}' maxlength='1' required><br>";
                    echo "Fecha de Nacimiento: <input type='date' name='nacimientoActualizado'placeholder='YYYY-MM-DD' pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])' value='${row['fecha_nacimiento']}' required><br>";
                    $row = $result->fetch_assoc();
                } else {
                    echo "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
                }
                mysqli_close($BD);
                break;
            case 'asignatura':
                $SQL = "SELECT `idAsignatura`, `nombre`, `siglas`, `horasSemana`, `dniProfesor`, `idCiclo`, `curso`, `anho`, `urlLogotipo` FROM `asignatura` WHERE 'idAsignatura' = $id ";
                echo "<input type='hidden' name='tabla' value=$tablaSeleccionada>";
                echo "<input type='hidden' name='idActualizado' value='${row['idAsignatura']}'>";
                echo "Nombre: <input type='text'name='nombreActualizado' value='${row['nombre']}' required><br>";
                echo "Siglas: <input type='text'name='siglasActualizado' value='${row['siglas']}' required><br>";
                echo "Horas a la semana: <input type='number' maxlength='2' name='horasActualizado' value='${row['horasSemana']}' required><br>";
                echo "Profesor: <input type='text' name='dniProfActualizado' value='${row['dniProfesor']}' required>";
                echo "Ciclo: <input type='text' name='idCicloActualizado' value='${row['idCiclo']}' required>";
                echo "Curso: <input type='number' name='cursoActualizado' required maxlength='1' value='${row['curso']}'/>";
                echo "Año: <input type='text' name='anhoActualizado' placeholder='yyyy' required maxlength='4' minlength='4' value='${row['anho']}'/>";
                echo "URL Logotipo: <input type='text'name='logotipoActualizado' value='${row['urlLogotipo']}'><br>";     
                break;
            case 'ciclo':
                $BD = conexionALaBaseDeDAtos();
                if ($result = mysqli_query($BD, $SQL)) {
                    $row = $result->fetch_assoc();
                    echo "<input type='hidden' name='tabla' value=$tablaSeleccionada>";
                    echo "<input type='hidden' name='idActualizado' value='${row['idCiclo']}'>";
                    echo "Nombre: <input type='text'name='nombreActualizado' value='${row['nombre']}' required><br>";
                    echo "Siglas: <input type='text'name='siglasActualizado' value='${row['siglas']}' required><br>";
                    echo "URL Logotipo: <input type='text'name='logotipoActualizado' value='${row['urlLogotipo']}'><br>";
                    $row = $result->fetch_assoc();
                } else {
                    echo "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
                }
                mysqli_close($BD);
                break;
            case 'matricula':
                $BD = conexionALaBaseDeDAtos();
                if ($result = mysqli_query($BD, $SQL)) {
                    $row = $result->fetch_assoc();
                    echo "<input type='hidden' name='tabla' value=$tablaSeleccionada>";
                    echo "<input type='hidden' name='dniActualizado' value='${row['dniAlumno']}'>";
                    echo "Asignatura: <input type='text'name='asignaturaActualizado' value='${row['idAsignatura']}' required><br>";
                    echo "Repetidor: <input type='text'name='repetidorActualizado' value='${row['repetidor']}' required><br>";
                    echo "Nota Final: <input type='number' step='0.1' name='notaFinalActualizado' value='${row['notaFinal']}'><br>";
                    $row = $result->fetch_assoc();
                } else {
                    echo "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
                }
                mysqli_close($BD);
                break;
            case 'profesor':
                $BD = conexionALaBaseDeDAtos();
                if ($result = mysqli_query($BD, $SQL)) {
                    $row = $result->fetch_assoc();
                    echo "<input type='hidden' name='tabla' value=$tablaSeleccionada>";
                    echo "<input type='hidden' name='dniActualizado' value='${row['dni']}'>";
                    echo "Nombre: <input type='text'name='nombreActualizado' value='${row['nombre']}' required><br>";
                    echo "Apellidos: <input type='text'name='apellidosActualizado' value='${row['apellidos']}' required><br>";
                    echo "Sexo: <input type='text'name='sexoActualizado' value='${row['sexo']}' maxlength='1' required><br>";
                    echo "Fecha de Nacimiento: <input type='date' name='nacimientoActualizado'placeholder='YYYY-MM-DD' pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])' value='${row['fecha_nacimiento']}' required><br>";
                    $row = $result->fetch_assoc();
                } else {
                    echo "Error: " . $SentenciaSql . "<br>" . mysqli_error($BD);
                }
                mysqli_close($BD);
                break;
            default:
                break;
        }
        ?>
        <p><input type="submit" name="update" value="Actualizar"/></p>
    </form>
</article>
    <?php
}
?>