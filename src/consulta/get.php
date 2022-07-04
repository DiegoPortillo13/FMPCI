<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select numProyecto, nomProyecto, prioridad, fecha, cliente, descripcion, estatus, cantidad, fRequerida, 
fFinalizacion, fEntrega, numCotizacion from mascotas");
$proyecto = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($proyecto);