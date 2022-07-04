<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["numProyecto"])) {
    exit("No hay un proyecto con ese ID");
}
$numProyecto = $_GET["numProyecto"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM proyectos WHERE numProyecto = ?");
$resultado = $sentencia->execute([$numProId]);
echo json_encode($resultado);