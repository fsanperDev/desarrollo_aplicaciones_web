<?php
include 'funciones.inc';
include 'index.php';

if (isset($_POST['radio'])) {
    $tablaSeleccionada = $_POST['radio'];
    $SQL = seleccionarSentenciaSQL($tablaSeleccionada);
    ?>
    <article>
        <form action="modificacion.php" method="post">
            <h2>Seleccione el/la <?php echo $tablaSeleccionada; ?> que desea modificar</h2>
            <select name="datoModificar">
                <?php
                $BD = conexionALaBaseDeDAtos();
                if ($result = mysqli_query($BD, $SQL)) {
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
            <input type="hidden" name="tablaSeleccionada" value="<?php echo $tablaSeleccionada; ?>">
            <p><input type="submit" name="modificarDato" value="Modificar"/></p>
        </form>
    </article>
    <?php
}

