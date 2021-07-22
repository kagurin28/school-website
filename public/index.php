<?php

session_start();

$assetsDir = $_SERVER["DOCUMENT_ROOT"] . "/../assets/";

$headDir = $assetsDir . "html/head_";
$cntDir = $assetsDir . "html/cnt_";
$cssDir = $assetsDir . "css/";

$_SESSION["cssMain"] = file_get_contents($cssDir . "main.css"); // Sets the main css file

switch ($_GET["page"]) { // Essentially picks which site you wanted to load and sets variables appropriatly
	case "home":
		$_SESSION["head"] = $headDir . "home.php";
		$_SESSION["content"] = $cntDir . "home.php";
		break;
	
	case "about":
		$_SESSION["head"] = $headDir . "about.php";
		$_SESSION["content"] = $cntDir . "about.php";
		break;

	case "streetview":
		$_SESSION["head"] = $headDir . "streetview.php";
		$_SESSION["content"] = $cntDir . "streetview.php";

		$stDir = $assetsDir . "streetview/";
		
		$_SESSION["cssPnl"] = file_get_contents($cssDir . "streetview/pannellum.css"); // Yes you have to do this for every individual file, it's painful
		$_SESSION["cssStv"] = file_get_contents($cssDir . "streetview/streetview.css");
		$_SESSION["scptPannellum"] = file_get_contents($stDir . "pannellum.js");
		$_SESSION["scptConfig"] = file_get_contents($stDir . "config.js");
		$_SESSION["scptMap"] = file_get_contents($stDir . "map.js");
		
		$usrAgent = $_SERVER["HTTP_USER_AGENT"];
		if (preg_match("/Firefox/", $usrAgent)) { // Checks if the user is using Firefox
			$_SESSION["browserMsg"] = "<p>It appears you are using Firefox (or just changed your user agent header, you scumbag). Firefox is a very shit browser that has many inconsistencies, and currently does not  display the map icons properly. Please consider using Chrome, or if you hate Google, ungoogled chromium.</p>";
		} else {
			$_SESSION["browserMsg"] = "";
		}
		break;
	default:
		$_SESSION["content"] = "Uh oh, looks like there's no page here!";
}


include($assetsDir . "html/skel_main.php"); // Includes the skeleton

?>
