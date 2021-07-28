<?php

// This script loads the site that is requested. It is run when index.php gets a site request in the url.

session_start();

$_SESSION["cssMain"] = file_get_contents(CSS_DIR . "main.css"); // Sets the main css file
$_SESSION["darkmodeSvg"] = file_get_contents(ASSETS_DIR . "darkmode.svg"); // The darkmode svg file
$_SESSION["jquery"] = file_get_contents(ASSETS_DIR . "jquery-3.6.0.min.js"); // The magical library of Jquery

switch ($_GET["page"]) { // Essentially picks which site you wanted to load and sets variables appropriatly
    case "home":
        $_SESSION["head"] = HEAD_DIR . "home.php";
        $_SESSION["content"] = CNT_DIR . "home.php";
        break;
    
    case "about":
        $_SESSION["head"] = HEAD_DIR . "about.php";
        $_SESSION["content"] = CNT_DIR . "about.php";
        break;

    case "streetview":
        $_SESSION["head"] = HEAD_DIR . "streetview.php";
        $_SESSION["content"] = CNT_DIR . "streetview.php";

        define("ST_DIR", ASSETS_DIR . "streetview/");
        
        $_SESSION["cssPnl"] = file_get_contents(CSS_DIR . "streetview/pannellum.css"); // Yes you have to do this for every individual file, it's painful
        $_SESSION["cssStv"] = file_get_contents(CSS_DIR . "streetview/streetview.css");
        $_SESSION["scptPannellum"] = file_get_contents(ST_DIR . "pannellum.js");
        $_SESSION["scptConfig"] = file_get_contents(ST_DIR . "config.js");
        $_SESSION["scptMap"] = file_get_contents(ST_DIR . "map.js");
        $_SESSION["mapIcons"] = file_get_contents(ST_DIR . "mapIcons.svg");

        break;
    
    case "400":
        header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
        $_SESSION["head"] = HEAD_DIR . "400.php";
        $_SESSION["content"] = CNT_DIR . "400.php";

        break;
    
    case "401":
        header($_SERVER["SERVER_PROTOCOL"] . " 401 Unauthorized");
        $_SESSION["head"] = HEAD_DIR . "401.php";
        $_SESSION["content"] = CNT_DIR . "401.php";

        break;
    
    case "403":
        header($_SERVER["SERVER_PROTOCOL"] . " 403 Forbidden");
        $_SESSION["head"] = HEAD_DIR . "403.php";
        $_SESSION["content"] = CNT_DIR . "403.php";

        break;
    
    case "404":
        header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
        $_SESSION["head"] = HEAD_DIR . "404.php";
        $_SESSION["content"] = CNT_DIR . "404.php";

        break;

    case "500":
        header($_SERVER["SERVER_PROTOCOL"] . " 500 Internal Server Error");
        $_SESSION["head"] = HEAD_DIR . "500.php";
        $_SESSION["content"] = CNT_DIR . "500.php";

        break;

    default:
        // I think this is a shit way to do it, but there is basically no documentation on basic php shit so idk
        header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
        $_SESSION["head"] = HEAD_DIR . "404.php";
        $_SESSION["content"] = CNT_DIR . "404.php";
}

include(ASSETS_DIR . "html/skel_main.php"); // Includes the skeleton

?>
