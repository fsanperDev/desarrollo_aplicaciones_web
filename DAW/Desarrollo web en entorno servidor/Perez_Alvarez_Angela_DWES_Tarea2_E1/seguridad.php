<?php
include 'funciones.inc';
include 'index.php';
if (isset($_POST['confirm']) && ($_POST['confirm'] == 'Yes')) {
    $tabla = $_POST['tabla'];
    $clave = $_POST['clave'];
    switch ($tabla) {
        case 'alumno':
            //Comprueba si existe una matricula con ese alumno.
            $BD = conexionALaBaseDeDAtos();
            if ($result = mysqli_query($BD, "SELECT * FROM matricula WHERE `dniAlumno` = '$clave' ")) {
                $row_cnt = mysqli_num_rows($result);
                mysqli_free_result($result);
            }
            mysqli_close($BD);
            if ($row_cnt > 0) {
                ?>
                <form action="eliminacion.php" method="post">
                    <h2>Al eliminar este Alumno borraras su matricula ¿Deseas continuar?</h2>
                    <input type="submit" name="confirmarEliminacion" value="Yes"><br>
                    <input type="submit" name="confirmarEliminacion" value="No"><br>
                    <input type="hidden" name="clave" value="<?php echo $clave; ?>">
                    <input type="hidden" name="tabla" value="<?php echo $tabla; ?>">
                </form>
                <?php
            } else {
                $SentenciaSql = "DELETE FROM `alumno` WHERE `alumno`.`dni` = $clave";
                eliminarDatos($SentenciaSql);
            }
            break;
        case 'asignatura':
            //Comprueba si existe una matricula con esa asignatura.
            $BD = conexionALaBaseDeDAtos();
            if ($result = mysqli_query($BD, "SELECT * FROM matricula WHERE `dniAlumno` = '$clave' ")) {
                $row_cnt = mysqli_num_rows($result);
                mysqli_free_result($result);
            }
            mysqli_close($BD);
            if ($row_cnt > 0) {
                ?>
                <form action="eliminacion.php" method="post">
                    <h2>Al eliminar esta Asignatura borraras tambien a todos los alumnos matriculados a esta ¿Deseas continuar?</h2>
                    <input type="submit" name="confirmarEliminacion" value="Yes"><br>
                    <input type="submit" name="confirmarEliminacion" value="No"><br>
                    <input type="hidden" name="clave" value="<?php echo $clave; ?>">
                    <input type="hidden" name="tabla" value="<?php echo $tabla; ?>">
                </form>
                <?php
            } else {
                $SentenciaSql = "DELETE FROM `asignatura` WHERE `asignatura`.`idAsignatura` = $clave";
                eliminarDatos($SentenciaSql);
            }
            break;
        case 'ciclo':
            //Comprueba si existe una asignatura con ese ciclo.
            $BD = conexionALaBaseDeDAtos();
            if ($result = mysqli_query($BD, "SELECT * FROM asignatura WHERE `idCiclo` = '$clave' ")) {
                $row_cnt = mysqli_num_rows($result);
                mysqli_free_result($result);
            }
            mysqli_close($BD);
            if ($row_cnt > 0) {
                ?>
                <h2>No puedes eliminar este ciclo mientras existan asignaturas asociadas a el.</h2>
                <?php
            } else {
                $SentenciaSql = "DELETE FROM `ciclo` WHERE `ciclo`.`idCiclo` = $clave";
                eliminarDatos($SentenciaSql);
            }
            break;
        case 'matricula':
            $SentenciaSql = "DELETE FROM `matricula` WHERE `matricula`.`dniAlumno` = $clave";
            eliminarDatos($SentenciaSql);
            break;
        case 'profesor':
            //Comprueba si existe una asignatura que imparta este profesor.
            $BD = conexionALaBaseDeDAtos();
            if ($result = mysqli_query($BD, "SELECT * FROM asignatura WHERE `dniProfesor` = '$clave' ")) {
                $row_cnt = mysqli_num_rows($result);
                mysqli_free_result($result);
            }
            mysqli_close($BD);
            if ($row_cnt > 0) {
                ?>
                <form action="modificacion.php" method="post">
                    <h2>Hay asignatiras asociadas a este profesor, si deseas eliminarlo primero deberas de cambiar los profesores de la asignaturas ¿Deseas continuar?</h2>
                    <input type="submit" name="confirmarEliminacion" value="Yes"><br>
                    <input type="submit" name="confirmarEliminacion" value="No"><br>
                    <input type="hidden" name="datoModificar" value="<?php echo $clave; ?>">
                    <input type="hidden" name="tablaSeleccionada" value="<?php echo $tabla; ?>">
                </form>
                <?php
            } else {
                $SentenciaSql = "DELETE FROM `profesor` WHERE `profesor`.`dni` = $clave";
                eliminarDatos($SentenciaSql);
            }
            break;
        default:
            break;
    }
}

/**
 * Pregunta si desea eliminar de la base de datos.
 */
if (isset($_POST['datoAEliminar'])) {
    $clave = $_POST['datoAEliminar'];
    $tabla = $_POST['tablaSeleccionada'];
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <h2>¿Estas seguro de que deseas eliminarlo?</h2>
        <input type="submit" name="confirm" value="Yes"><br>
        <input type="submit" name="confirm" value="No"><br>
        <input type="hidden" name="clave" value="<?php echo $clave; ?>">
        <input type="hidden" name="tabla" value="<?php echo $tabla; ?>">
    </form>
    <?php
}

