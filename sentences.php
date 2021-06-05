<?php
require_once "crud.php";
require_once "cors.php";

if ($_GET) {
    $opcion = $_GET['opcion'];

    switch ($opcion) {
        case 'listar':
            $data = Crud::__listado();
            break;
        case 'guardar':
            $arrayName = array(
                'nombres' => $_POST['nombres'],
                'direccion' => $_POST['direccion'],
                'edad' => $_POST['edad'],
            );
            $data = Crud::__guardar($arrayName);
            break;
        case 'editar':
            $arrayName = array(
                'nombres' => $_POST['nombres'],
                'direccion' => $_POST['direccion'],
                'edad' => $_POST['edad'],
                'id' => $_POST['id'],
            );
            $data = Crud::__editar($arrayName);
            break;
        case 'eliminar':
            echo "<script>alert('api-php')</script>";
            $id = $_POST['id'];
            $data = Crud::__eliminar($id);
            break;
        default:
            # code...
            break;
    }
    echo json_encode($data);
}
