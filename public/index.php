<?php

session_start();

switch ($_GET["page"]) { // Essentially picks which site you wanted to load and sets variables appropriatly
	case "home":
		$_SESSION["head"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_home.html");
		$_SESSION["content"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_home.html");
		break;
	
	case "about":
		$_SESSION["head"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_about.html");
		$_SESSION["content"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_about.html");
		break;

	case "streetview":
		$_SESSION["head"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/head_streetview.html");
		$_SESSION["content"] = file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/cnt_streetview.html");
		break;

	default:
		$_SESSION["content"] = "Uh oh, looks like there's no page here!";
}


include($_SERVER["DOCUMENT_ROOT"] . "/../assets/html/skel_main.html"); // Includes the skeleton

?>
