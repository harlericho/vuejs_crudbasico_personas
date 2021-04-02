<?php
require_once "config.php";

class Crud
{
    public static function __listado()
    {
        try {
            $sql = "SELECT * FROM crud WHERE estado= 'A'";
            $query = Conexion::__conectar()->prepare($sql);
            $query->execute();
            return $query->fetchAll();
        } catch (\Throwable $th) {
            die("Fallo query: " . $th->getMessage());
        }
    }

    public static function __guardar($data)
    {
        try {
            $sql = "INSERT INTO crud(nombres,direccion,edad)
            VALUES(:nombres,:direccion,:edad)";
            $query = Conexion::__conectar()->prepare($sql);
            $query->bindParam(':nombres', $data['nombres'], PDO::PARAM_STR);
            $query->bindParam(':direccion', $data['direccion'], PDO::PARAM_STR);
            $query->bindParam(':edad', $data['edad'], PDO::PARAM_INT);
            return $query->execute();
        } catch (\Throwable $th) {
            die("Fallo query: " . $th->getMessage());
        }
    }
    public static function __editar($data)
    {
        try {
            $sql = "UPDATE crud SET nombres=:nombres,direccion=:direccion,edad=:edad WHERE id=:id";
            $query = Conexion::__conectar()->prepare($sql);
            $query->bindParam(':nombres', $data['nombres'], PDO::PARAM_STR);
            $query->bindParam(':direccion', $data['direccion'], PDO::PARAM_STR);
            $query->bindParam(':edad', $data['edad'], PDO::PARAM_INT);
            $query->bindParam(':id', $data['id'], PDO::PARAM_INT);
            return $query->execute();
        } catch (\Throwable $th) {
            die("Fallo query: " . $th->getMessage());
        }
    }
    public static function __eliminar($id)
    {
        try {
            $sql = "UPDATE crud SET estado='I' WHERE id=:id";
            $query = Conexion::__conectar()->prepare($sql);
            $query->bindParam(':id', $id, PDO::PARAM_INT);
            return $query->execute();
        } catch (\Throwable $th) {
            die("Fallo query: " . $th->getMessage());
        }
    }
}
