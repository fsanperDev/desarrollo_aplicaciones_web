<?php
if (isset($_POST['submitted']) == 1) {

//VARIABLES
    $contadorRondas = $_POST['contadorRondas'];
    $marcadorGanadas = $_POST['marcadorGanadas'];
    $marcadorPerdidas = $_POST['marcadorPerdidas'];
    $marcadorEmpatadas = $_POST['marcadorEmpatadas'];
    $jugador = $_POST['EleccionJugador'];

//JUGADA DE LA MÁQUINA
    $accionesOrdenador = array("PIEDRA", "PAPEL", "TIJERAS");
    $ordenador = $accionesOrdenador[rand(0, 2)];

//RESOLUCION DE LA PARTIDA
    if ($ordenador == $jugador) {
        $winlossdraw = "EMPATE";
        $marcadorEmpatadas++;
    }

    if ($ordenador == "PIEDRA" && $jugador == "PAPEL") {
        $winlossdraw = "GANASTE";
        $marcadorGanadas++;
    }

    if ($ordenador == "PAPEL" && $jugador == "TIJERAS") {
        $winlossdraw = "GANASTE";
        $marcadorGanadas++;
    }

    if ($ordenador == "TIJERAS" && $jugador == "PIEDRA") {
        $winlossdraw = "GANASTE";
        $marcadorGanadas++;
    }

    if ($ordenador == "TIJERAS" && $jugador == "PAPEL") {
        $winlossdraw = "PERDISTE";
        $marcadorPerdidas++;
    }

    if ($ordenador == "PAPEL" && $jugador == "PIEDRA") {
        $winlossdraw = "PERDISTE";
        $marcadorPerdidas++;
    }

    if ($ordenador == "PIEDRA" && $jugador == "TIJERAS") {
        $winlossdraw = "PERDISTE";
        $marcadorPerdidas++;
    }

    $contadorRondas++;
} else {

//REINICIAR VARIABLES
    $contadorRondas = 0;
    $marcadorGanadas = 0;
    $marcadorPerdidas = 0;
    $marcadorEmpatadas = 0;
    $winlossdraw = "";
    $jugador = "N/A";
    $ordenador = "N/A";
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Tarea online UD1</title>
    </head>
    <body>

        <form action="" method="post" style="">

            <input name="submitted" type="hidden" value="1" />
            <input name="contadorRondas" type="hidden" value="<?php echo $contadorRondas; ?>" />
            <input name="marcadorGanadas" type="hidden" value="<?php echo $marcadorGanadas; ?>" />
            <input name="marcadorPerdidas" type="hidden" value="<?php echo $marcadorPerdidas; ?>" />
            <input name="marcadorEmpatadas" type="hidden" value="<?php echo $marcadorEmpatadas; ?>" />

            <label><input type="submit" name="EleccionJugador" value="PIEDRA"></label>
            <label><input type="submit" name="EleccionJugador" value="PAPEL"></label>
            <label><input type="submit" name="EleccionJugador" value="TIJERAS"></label>

        </form>

        <p><h1>MARCADOR</h1></p>
    <p>ESTADO DE LA RONDA: <?php echo $winlossdraw; ?></p>
    <p>Tú eliges: <?php echo $jugador; ?></p>
    <p>La máquina elige: <?php echo $ordenador; ?></p>
    <p>Ganadas: <?php echo $marcadorGanadas; ?></p>
    <p>Perdidas: <?php echo $marcadorPerdidas; ?></p>
    <p>Empatadas: <?php echo $marcadorEmpatadas; ?></p>

    <form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <input type="submit" value="Reiniciar Juego">
    </form>

</body>
</html>

