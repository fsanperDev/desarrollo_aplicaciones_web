<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="estilo.css" />
        <title></title>        
    </head>
    <body>    
        <header>
            <h1>Universidad de Sevilla</h1>
            <form action="index.php" method="post">
                <input type="submit" name="consulta" value="Consulta">
                <input type="submit" name="insertar" value="Insercion">
                <input type="submit" name="modificar" value="Modificacion">
                <input type="submit" name="eliminar" value="Eliminacion">
            </form> 
        </header>
        <?php
//---------  Boton CONSULTA seleccionado  ---------------------------------------------------
        if (isset($_REQUEST['consulta'])) {
            header('Location: consulta.php');
        }
//---------  Boton INSERTAR seleccionado  ---------------------------------------------------
        if (isset($_REQUEST['insertar'])) {
            header('Location: insercion.php');
        }
//---------  Boton INSERTAR seleccionado  ---------------------------------------------------
        if (isset($_REQUEST['modificar'])) {
            header('Location: modificacion.php');
        }
//---------  Boton ELIMINAR seleccionado  ---------------------------------------------------
        if (isset($_REQUEST['eliminar'])) {
            header('Location: eliminacion.php'); 
        }
        ?>
    </body>
</html>
