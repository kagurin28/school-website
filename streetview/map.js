const mapBtn = document.getElementById("mapBtn");
const map = document.getElementById("map");
const panorama = document.getElementById("panorama");

function showMap() {
	map.style.display = "block";
	panorama.style.height = "300px";
	viewer.resize();
	
	mapBtn.innerHTML = "Hide Map"; // Set text
	mapBtn.setAttribute("onclick", "hideMap()"); // Set function
}
function hideMap() {
	map.style.display = "none";
	panorama.style.height = "600px";
	viewer.resize();
	
	mapBtn.innerHTML = "Show Map"; // Set text
	mapBtn.setAttribute("onclick", "showMap()"); // Set function
}

function updateMarkers() {
	const scene = viewer.getScene();
	const circles = document.getElementById("mapIcons").getElementsByTagName("circle");
	const redCircle = document.getElementById("Mk" + scene);
	Array.from(circles).forEach(function (a) { // Remove the markerRed class from all circles
		a.classList.remove("markerRed");
	});
	redCircle.classList.add("markerRed"); // Add the markerRed class to the red cirle
	
	const regExCheckDown = /Down/;
	if(regExCheckDown.test(scene)) {
		map.getElementsByTagName("img")[0].src = "/streetview/mapDown.jpg";
	} else {
		map.getElementsByTagName("img")[0].src = "/streetview/mapUp.jpg";
	}
}
viewer.on("scenechange", function() {updateMarkers();}); // Don't even ask me why I need to wrap this in an anonymous function