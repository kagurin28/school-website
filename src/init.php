<?php

// This script simply initalizes constants. Very handy.

define("ROOT_DIR", $_SERVER["DOCUMENT_ROOT"] . "/../"); // The main root directory

define("ASSETS_DIR", ROOT_DIR . "assets/");
define("SRC_DIR", ROOT_DIR . "src/");

define("HEAD_DIR", ASSETS_DIR . "html/head_");
define("CNT_DIR", ASSETS_DIR . "html/cnt_");
define("CSS_DIR", ASSETS_DIR . "css/");

?>