<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Town High</title>
	<link rel="icon" type="image/png" href="/icon.png">
	<link rel="stylesheet" href="/main.css"></link>
</head>
<body>
	<div class="page">
		<div class="navbar">
			<a href="/" class="logo-container">
				<img src="/icon.png" class="logo"></img>
			</a>
			<a href="/streetview">Street View</a>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Bonus Content</a>
			<div class="dropdown">
				<div class="dropbtn"> <!-- I have to have a div here because CSS -->
					<a href="javascript:void(0);">About&#9660;</a>
				</div>
				<div class="dropCnt">
					<a href="javascript:void(0);">Eshays</a>
					<a href="javascript:void(0);">Classes</a>
				</div>
			</div>
		</div>
		<div class="content">
			<?php
				$dir = $_SERVER["DOCUMENT_ROOT"];
				
				$content = fopen($dir . "/content.html", "r");
				echo fread($content, filesize($dir . "/content.html"));
				fclose($content);
			?>
		</div>
	</div>
</body>
</html>