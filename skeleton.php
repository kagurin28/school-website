<?php
	session_start();
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/png" href="/icon.png">
	<link rel="stylesheet" href="/main.css"></link>
	<?php
		include($_SESSION["headPath"]);
	?>
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
				include($_SESSION["cntPath"]);
				session_unset();
				session_destroy();
			?>
		</div>
	</div>
</body>
</html>