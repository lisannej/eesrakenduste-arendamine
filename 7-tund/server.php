<?php
    if(isset($_POST["save"]) && !empty($_POST["save"])){
        saveToFile($_POST["save"]);
    }
    function saveToFile(){
        $object = new StdClass();
        $object->last_modified = time();
        $object->content = $StringToSave;
        $jsonString = json_encode($object);
        file_put_contents("database.txt", $jsonString);
    }

?>