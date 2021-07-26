<?php

$mysqli = new mysqli("localhost", "root", "gitsucks", "nths");

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}

$result = $mysqli -> query("SELECT url FROM BonusContent");
while($row = $result->fetch_assoc()) {
    echo "link: ". $row["url"] . "<br>";
}

$mysql -> close;

?>
