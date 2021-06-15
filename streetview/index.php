<?php
	session_start();
	$skelPath = $_SERVER["DOCUMENT_ROOT"] . "/skeleton.php"; // The skeleton is the basic page features, such as the navbar
	$_SESSION["cntPath"] = dirname(__FILE__) . "/content.html";	// Content is the actual content of the page
	$_SESSION["headPath"] = dirname(__FILE__) . "/head.html"; // The head file is what it appends to the heads
	
	include($skelPath); // Load the skeleton
?>