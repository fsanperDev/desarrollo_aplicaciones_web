<?php
include 'funciones.inc';
include 'index.php';


if (isset($_POST['confirmarEliminacion']) && ($_POST['confirmarEliminacion'] == 'Yes')) {
    $tabla = $_POST['tabla'];
    $clave = $_POST['clave'];
    switch ($tabla) {
        case 'alumno':
            $SentenciaSql = "DELETE FROM `matricula` WHERE `matricula`.`dniAlumno` = $clave";
            eliminarDatos($SentenciaSql);
            $SentenciaSql = "DELETE FROM `alumno` WHERE `alumno`.`dni` = $clave";
            eliminarDatos($SentenciaSql);
            break;
        case 'asignatura':
            $SentenciaSql = "DELETE FROM `matricula` WHERE `matricula`.`idAsignatura` = $clave";
            eliminarDatos($SentenciaSql);
            $SentenciaSql = "DELETE FROM `asignatura` WHERE `asignatura`.`idAsignatura` = $clave";
            eliminarDatos($SentenciaSql);
            break;
        default:
            break;
    }
}
?>
<section>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
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
if (isset($_REQUEST['submit'])) {
    if (isset($_POST['radio'])) {
        $tablaSeleccionada = $_POST['radio'];
        eliminarMostrarOpciones($tablaSeleccionada);
    }
}
?>
</article>


