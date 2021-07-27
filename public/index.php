<?php

switch ($_GET["action"]) { // I don't even know if this is a good system for doing this but I can't find anything online about it
	case "site":
		
		session_start();

		define("ASSETS_DIR", $_SERVER["DOCUMENT_ROOT"] . "/../assets/");

		define("HEAD_DIR", ASSETS_DIR . "html/head_");
		define("CNT_DIR", ASSETS_DIR . "html/cnt_");
		define("CSS_DIR", ASSETS_DIR . "css/");

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

		include(ASSETS_DIR . "html/skel_main.php"); // Includes the skeleton

		break;
	
	case "function":

		define("SRC_DIR", $_SERVER["DOCUMENT_ROOT"] . "/../src/");
		
		switch ($_GET["function"]) {
			case "rickroll": // For the "bonus content" link
				include(SRC_DIR . "rickroll.php");
				break;
			default:
				echo "Can you stop trying to hack this site?";
		}
		break;
	
	default:
		echo "Welcome to index.php! Why are you here?";
}

?>
