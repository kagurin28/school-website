<?php

/* 
This script will send back a link to a random youtube video. It is normally
prompted with the "Bonus Content" link on the front end. The database that
stores these links is BonusContent.
*/

$mysqli = new mysqli("localhost", "root", "kazooky", "nths");

// Connection error detection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}

$query = "SELECT url FROM BonusContent;";
$result = $mysqli -> query($query);

// Generates random number from the number of rows
$numRows = $result -> num_rows;
$randNum = rand(0, $numRows - 1);

$query = "SELECT url FROM BonusContent WHERE idx =" . $randNum . ";";
$result = $mysqli -> query($query);

$link = $result -> fetch_assoc();
echo $link["url"]; // Yes, it is an array, even though it has only 1 thing

$mysqli -> close();

?>
