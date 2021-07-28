<?php

// This script handles requests for 'functions', stuff like the rickroll bonus content link

switch ($_GET["function"]) {

    case "rickroll": // For the "bonus content" link
        include(SRC_DIR . "rickroll.php");
        break;

    default:
        echo "Can you stop trying to hack this site?";
}

?>