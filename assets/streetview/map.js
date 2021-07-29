const mapBtn = document.getElementById("mapBtn");
const map = document.getElementById("map");
const mapImg = map.getElementsByTagName("img")[0];
const panorama = document.getElementById("panorama");
const changeFloorBtn = document.getElementById("changeFloorBtn");
const floorDisplay = document.getElementById("floorDisplay");

const regExCheckDown = /Down/;
const regExCheckUp = /Up/;

const circles = Array.from(document.getElementById("mapIcons").getElementsByTagName("circle"));
var circlesUp = [];
var circlesDown = [];
circles.forEach(function(a) { // Sorts circles into seperate Up and Down lists
	if(regExCheckUp.test(a.id)) {
		circlesUp.push(a);
	} else if(regExCheckDown.test(a.id)) {
		circlesDown.push(a);
	}
});

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

function switchFloorUp() {
	mapImg.src = "/stimages/mapUp.jpg";
		
	circlesUp.forEach(function(a) {
		a.style.display = "block";
	});
	circlesDown.forEach(function(a) {
		a.style.display = "none";
	});

	// Change button and text display
	changeFloorBtn.setAttribute("onclick", "switchFloorDown()");
	floorDisplay.innerHTML = "Current Floor: Up";
}

function switchFloorDown() {
	mapImg.src = "/stimages/mapDown.jpg";

	circlesDown.forEach(function(a) {
		a.style.display = "block";
	});
	circlesUp.forEach(function(a) {
		a.style.display = "none";
	});

	// Change button and text display
	changeFloorBtn.setAttribute("onclick", "switchFloorUp()");
	floorDisplay.innerHTML = "Current Floor: Down";
}

function updateMarkers() {
	const scene = viewer.getScene();
	const redCircle = document.getElementById("Mk" + scene);
	circles.forEach(function(a) { // Remove the markerRed class from all circles
		a.classList.remove("markerRed");
		a.classList.add("markerGrey");
		// Css can't change the r attribute in Firefox, so you have to do it in Javascript
		a.setAttribute("r", 2);
	});
	redCircle.classList.add("markerRed"); // Add the markerRed class to the red cirle
	redCircle.classList.remove("markerGrey");
	redCircle.setAttribute("r", 3);
	
	if(regExCheckUp.test(scene)) { // Change the actual map and show + hide icons
		switchFloorUp();

	} else if(regExCheckDown.test(scene)) {
		switchFloorDown();

	}
}

// Javascript's being a bitch today
function circleHover(a) {
	a.classList.add("markerHover");
	// Because css doesn't support the r tag
	if (!a.classList.contains("red")) {
		a.setAttribute("r", 3);
	}
}
function circleUnhover(a) {
	// Unhover
	a.classList.remove("markerHover");
	if (!a.classList.contains("markerRed")) {
		a.setAttribute("r", 2);
	}
}

viewer.on("scenechange", function() {updateMarkers();}); // Don't even ask me why I need to wrap this in an anonymous function
