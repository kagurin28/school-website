<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style><?=$_SESSION["cssMain"]?></style> <!-- The main css file -->
	<?php include($_SESSION["head"]); ?> <!-- It must include() this as it may have PHP -->
	<!-- Also, if you are looking at these comments in browser inspect and have no idea what they mean, they're intended for people looking at the actual files so yea :/ -->
</head>
<body>
	<div class="page">
		<div class="navbar">
			<a class="navItem logo" href="/">
				<img src="/favicon.ico" class="logo"></img>
			</a>
			<a class="navItem" href="/streetview">Street View</a>
			<a class="navItem" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Bonus Content</a>
			<div class="dropdown">
				<a class="navItem" href="/about">About&#9660;</a>
				<div class="dropCnt">
					<a href="/about#Eshays">Eshays</a>
					<a href="/about#Classes">Classes</a>
					<a href="/about#Creators">The Creators</a>
				</div>
			</div>
		</div>
		<div class="content">
			<?php include($_SESSION["content"]); ?> <!-- Likewise with this one -->
		</div>
	</div>
</body>
</html>
