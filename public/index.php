<?php

session_start();

$_SESSION["cssMain"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/css/main.css"); // Sets the main css file

switch ($_GET["page"]) { // Essentially picks which site you wanted to load and sets variables appropriatly
	case "home":
		$_SESSION["head"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_home.html";
		$_SESSION["content"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_home.html";
		break;
	
	case "about":
		$_SESSION["head"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_about.html";
		$_SESSION["content"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_about.html";
		break;

	case "streetview":
		$_SESSION["head"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_streetview.php";
		$_SESSION["content"] = $_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_streetview.php";
		
		$_SESSION["cssPnl"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/css/streetview/pannellum.css"); // Yes you have to do this for every individual file, it's painful
		$_SESSION["cssStv"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/css/streetview/streetview.css");
		$_SESSION["scptPannellum"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/streetview/pannellum.js");
		$_SESSION["scptConfig"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/streetview/config.js");
		$_SESSION["scptMap"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/streetview/map.js");
		break;

	default:
		$_SESSION["content"] = "Uh oh, looks like there's no page here!";
}


include($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/skel_main.php"); // Includes the skeleton

?>
