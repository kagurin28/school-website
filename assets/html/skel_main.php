<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style><?=$_SESSION["cssMain"]?></style> <!-- The main css file -->
	<script><?=$_SESSION["jquery"]?></script> <!-- HOLY JQUERY -->
	<?php include($_SESSION["head"]); ?>
	<script>
		function rickroll() {
			$.ajax({
				url: "/index.php?action=function&function=rickroll",
				success: function(data) {
					window.open(data, "_blank");
				}
			});
		}
		// Well done, random person looking in the browser inspect! You have now learned how to get the server to send youtube links to you!
	</script>
</head>
<body>
	<div class="page">
		<div class="navbar">
			<a class="navItem logo" href="/">
				<img src="/favicon.ico" class="logo"></img>
			</a>
			<a class="navItem" href="/streetview">Street View</a>
			<a class="navItem" href="javascript:void(0);" onclick="rickroll()">Bonus Content</a>
			<div class="dropdown">
				<a class="navItem dropBtn" href="/about">About&#9660;</a>
				<div class="dropCnt">
					<a href="/about#Eshays">Eshays</a>
					<a href="/about#Classes">Classes</a>
					<a href="/about#Creators">The Creators</a>
				</div>
			</div>

			<div class="darkmode" title="All hail the holy dark mode (NONFUNCTIONAL CURRENTLY)">
				<a href="javascript:void(0);">
					<?=$_SESSION["darkmodeSvg"]?>
				</a>
			</div>
		</div>
		<div class="content">
			<?php include($_SESSION["content"]); ?>
		</div>
	</div>
</body>
</html>
