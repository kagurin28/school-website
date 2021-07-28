<?php

// This is obviously the web gateway to this site

include($_SERVER["DOCUMENT_ROOT"] . "/../src/init.php"); // Script that initiates constants

switch ($_GET["action"]) { // I don't even know if this is a good system for doing this but I can't find anything online about it
	case "site":
		include(SRC_DIR . "siteLoad.php");
		break;
	
	case "function":
		include(SRC_DIR . "functionHandler.php");
		break;
	
	default:
		echo "Welcome to index.php! Why are you here?";
}

?>
