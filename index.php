<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript grafikart</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <section class="container">
        <!-- <ul>
            <li class="meteo"><a href="demo.php?city=Paris">Paris</a></li>
            <li class="meteo"><a href="demo.php?city=Courbevoie">Courbevoie</a></li>
        </ul>
        <div id="result"></div>
        <hr> -->
        <h3>Ajax - GET data from text file : </h3>
        <button id="btn">get text file</button>
        <div id="dataText" class="result"></div>
        <hr>
        <h3>Ajax - GET data from JSON :</h3>
        <div id="dataJSON" class="result divUser"></div>
        <hr>
        <h3>Ajax - POST data to DB : </h3>
        <form action="demo.php" method="POST">
            <label for="name">name : </label>
            <input type="text" name="name" id="name">
            <input type="submit" value="submit" id="btnSubmit">
        </form>
        <div id="postData" class="result">
            <?php if (isset($name)){
                 echo $name;
                 }?>
        </div>
        <hr>
    </section>
    <!-- <script src="app.js"></script> -->
    <script src="ajax.js"></script>
</body>
</html>

