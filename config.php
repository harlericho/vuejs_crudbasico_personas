<?php
class Conexion
{
    public static function __conectar()
    {
        try {
            $con = new PDO("mysql:host=localhost;dbname=db_crud_persons", "charlie", "charlie");
            return $con;
        } catch (\Throwable $th) {
            die("Fallo conexion: " . $th->getMessage());
        }
    }
}