<?php
include 'data.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript grafikart</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <section class="container">
        <h3>AJAX - GET data from text file : </h3>
        <button id="btn">get text file</button>
        <div id="dataText" class="result"></div>
        <hr>
        <h3>AJAX - GET JSON data from GitHub REST API :</h3>
        <div id="dataJSON" class="result divUser"></div>
        <hr>
        <h3>AJAX - POST data to PHP file : </h3>
        <form action="data.php" method="POST">
            <label for="name">name : </label>
            <input type="text" name="name" id="name">
            <input type="submit" value="submit" id="btnSubmit">
        </form>
        <div id="postData" class="result"></div>
        <hr>
        <h3>AJAX - POST data to DB : </h3>
        <form action="data.php" method="POST">
            <label for="newUser">new username : </label>
            <input type="text" name="newUser" id="newUser">
            <input type="submit" value="submit" id="newUserBtn">
        </form>
        <div class="result" id="dbData">users in database :
            <ul id='resDb'>
                <?php if (isset($results)): { ?>
                    <?php foreach($results as $result) : ?>
                        <li><?= $result ?></li>
                    <?php endforeach ?>
                <?php } endif; ?>
            </ul>
        </div>
        <hr>
    </section>
    <script src="js/textfile.js"></script>
    <script src="js/json_github.js"></script>
    <script src="js/post_to_php.js"></script>
    <script src="js/post_to_db.js"></script>
</body>
</html>

