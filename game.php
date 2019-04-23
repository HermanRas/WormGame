<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
    <script src="js/p5.min.js"></script>
    <script src="js/p5.dom.min.js"></script>
    <script src="js/food.js"></script>
    <script src="js/Worm.js"></script>
    <script src="js/score.js"></script>
    <script src="js/game.js"></script>
    <title>Worm - Game</title>
</head>

<body>
    <h1>Worm !</h1>
    USE YOUR ARROWS...
    <form name="scoreboard" id="scoreboard" method="POST" action="index.php">
        SCORE: <input type="text" name="score" id="score" readonly value="0">
        <input type="hidden" name="name" value="<?php echo $_GET["name"]; ?>">
        <input type="submit" value="Save">

    </form> <br>
</body>

</html>