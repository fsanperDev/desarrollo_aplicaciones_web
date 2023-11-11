<?php
include 'index.php';
?>
<section>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <select name="tablaSeleccionada">
            <option value="alumno">Alumno</option>
            <option value="asignatura">Asignatura</option>
            <option value="ciclo">Ciclo</option>
            <option value="matricula">Matricula</option>
            <option value="profesor">Profesor</option>
        </select>
        <input type="submit" name="submit" value="Mostrar Datos" />
    </form>
</section>

<article>
<?php
include 'funciones.inc';
if (isset($_POST['submit'])) {
    $TablaSeleccionada = $_POST['tablaSeleccionada'];
    ?>
    <table name="consultas">
        <?php mostrarDatos($TablaSeleccionada); ?>
    </table>
    <?php
}
?>
</article>
    