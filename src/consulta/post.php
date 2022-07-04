<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonProyecto = json_decode(file_get_contents("php://input"));
if (!$jsonProyecto) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into proyectos(numProyecto, nomProyecto, prioridad, fecha, cliente,
 descripcion, estatus, cantidad, fRequerida, 
fFinalizacion, fEntrega, numCotizacion) values (?,?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonProyecto->numProyecto, $jsonProyecto->nomProyecto, $jsonProyecto->prioridad,
$jsonProyecto->fecha, $jsonProyecto->cliente, $jsonProyecto->descripcion, $jsonProyecto->estatus, $jsonProyecto->cantidad,
$jsonProyecto->fRequerida, $jsonProyecto->fFinalizacion, $jsonProyecto->fEntrega, $jsonProyecto->numCotizacion,]);
echo json_encode([
    "resultado" => $resultado,
]);