<!DOCTYPE html>
<html>
<body>
	<?php
		$skel = fopen("skeleton.php", "r");
		echo fread($skel, filesize("skeleton.php"));
		fclose($skel);
	?>
</body>
</html>