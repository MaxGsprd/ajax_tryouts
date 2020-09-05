<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    echo "username :  $name";
}

if(isset($_POST['newUser'])) {
    $newUser = $_POST['newUser'];
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=testAjax', 'root', '' );

        $sql = "INSERT INTO `users`(`name`) VALUES (:newUser)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(':newUser', $newUser);
        $inserted = $statement->execute();

    } catch (PDOException $e) {
        print "PDOException : $e->getMessage()";
        die();
    }
    $statement = null;
    $pdo = null;
}

try {
    $pdo = new PDO('mysql:host=localhost;dbname=testAjax', 'root', '' );

    $stmt = $pdo->prepare('SELECT * FROM users');
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_COLUMN, 1);
   
} catch (PDOException $e){
    print "PDOException : $e->getMessage()";
    die();
}
$stmt = null;
$pdo = null;
?>
