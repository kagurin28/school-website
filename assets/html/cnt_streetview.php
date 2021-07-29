<div id="panorama"></div>
<script>
	var viewer;
</script>
<script><?=$_SESSION["scptConfig"]?></script>
<script>
	viewer = pannellum.viewer("panorama", panoramas);
</script>
<!-- Yes I know this is very spaghetti, but it works -->

<a id="mapBtn" href="javascript:void(0);" onclick="hideMap()">Hide Map</a>
<div id="map" class="mapContainer">
	<img src="/stimages/mapUp.jpg" width="100%"></img>
	<div class="mapIcons" id="mapIcons">
		<?=$_SESSION["mapIcons"]?>
	</div>
</div>
<p id="floorDisplay">Current Floor: Up</p>
<button id="changeFloorBtn" onclick="switchFloorDown()">Change Floor</button>
<script><?=$_SESSION["scptMap"]?></script>
