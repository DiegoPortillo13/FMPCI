<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["numProyecto"])) {
    exit("No hay id de mascota");
}
$idMascota = $_GET["numProyecto"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select numProyecto, nomProyecto, prioridad, fecha, cliente, descripcion, estatus, cantidad, fRequerida, 
fFinalizacion, fEntrega, numCotizacion from mascotas where numProyecto = ?");
$sentencia->execute([$numProyecto]);
$proyecto = $sentencia->fetchObject();
echo json_encode($proyecto);