function showMap() {
	document.getElementById("map").style.display = "block";
	
	document.getElementById("mapBtn").innerHTML = "Hide Map";
	document.getElementById("mapBtn").setAttribute("onclick", "hideMap()");
}
function hideMap() {
	document.getElementById("map").style.display = "none";
	
	document.getElementById("mapBtn").innerHTML = "Show Map";
	document.getElementById("mapBtn").setAttribute("onclick", "showMap()");
}