<?php
var_dump($_POST);

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    var_dump($name);
}


// echo $_GET['name'];
// $db = mysqli_connect('localhost','root','','testajax');

// if(isset($_POST['name'])){
//     $name = mysqli_real_escape_string($db, $_POST['name']);

//     $query = "INSERT INTO users(name) VALUES('$name')";

//     if(mysqli_query($db,$query)){
//        echo 'User added'; 
//     } else {
//         echo 'ERROR: ' . mysqli_error($conn);
//     }
// }
?>
