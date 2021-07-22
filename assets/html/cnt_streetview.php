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
		<svg height="100%" width="100%" viewBox="0 0 250 250">
			<circle id="MkUp-NE" class="marker markerRed" cx="320" cy="58"/>
			<circle id="MkUp-NCenE" class="marker" cx="255" cy="58"/>
			<circle id="MkUp-NCenW" class="marker" cx="159" cy="58"/>
			<circle id="MkUp-NW" class="marker" cx="101" cy="57"/>
			<circle id="MkUp-SE" class="marker" cx="320" cy="142"/>
			<circle id="MkUp-SCen" class="marker" cx="283" cy="141"/>
			<circle id="MkUp-SW" class="marker" cx="170" cy="138"/>
			<circle id="MkUp-Classroom" class="marker" cx="238" cy="72"/>
			<circle id="MkUp-Foyer" class="marker" cx="71" cy="58"/>
			
			
			<circle id="MkDown-NE" class="marker markerDown" cx="317" cy="53"/>
			<circle id="MkDown-NW" class="marker markerDown" cx="98" cy="57"/>
			<circle id="MkDown-CenE" class="marker markerDown" cx="319" cy="75"/>
			<circle id="MkDown-SE" class="marker markerDown" cx="319" cy="133"/>
			<circle id="MkDown-SW" class="marker markerDown" cx="173" cy="133"/>
			<circle id="MkDown-Foyer" class="marker markerDown" cx="71" cy="55"/>
			
			<circle id="MkDown-QuadNE" class="marker markerDown" cx="297" cy="78"/>
			<circle id="MkDown-QuadNW" class="marker markerDown" cx="149" cy="70"/>
			<circle id="MkDown-QuadSE" class="marker markerDown" cx="284" cy="122"/>
			<circle id="MkDown-QuadSW" class="marker markerDown" cx="160" cy="105"/>
			<circle id="MkDown-QuadCen" class="marker markerDown" cx="233" cy="100"/>
			
			
			<circle id="MkMid-NE" class="marker" cx="319" cy="31"/>
			<circle id="MkMid-NW" class="marker" cx="98" cy="42"/>
			<circle id="MkMid-SE" class="marker" cx="319" cy="165"/>
			<circle id="MkMid-SW" class="marker" cx="158" cy="124"/>
		</svg>
	</div>
</div>
<script><?=$_SESSION["scptMap"]?></script>
<?=$_SESSION["browserMsg"]?>
