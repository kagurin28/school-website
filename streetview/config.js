const panoramas = {
	"default": {
		"firstScene": "Up-NE",
		"sceneFadeDuration": 1000,
		"autoLoad" : true
	},

	"scenes": {
		"Up-NE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NE.jpg",
			
			"yaw": -50,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -5,
					"yaw": -47.5,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NCenE", 0, 0);}
				}
			]
		},

		"Up-NCenE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NCenE.jpg",
			"hotSpots": [
				{
					"pitch": -9,
					"yaw": 177,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NE", -10, 130);}
				},
				{
					"pitch": 2,
					"yaw": -3.5,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NCenW", 0, -5);}
				}
			]
		},
		
		"Up-NCenW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NCenW.jpg",
			"hotSpots": [
				{
					"yaw": 172.5,
					"pitch": -6,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NCenE", -10, 180);}
				}
				{
					"yaw": 0,
					"pitch": -6,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NW", 0, 0);}
				}
			]
		}
		"Up-NCenW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NCenW.jpg",
			"hotSpots": [
				{
					"yaw": 172.5,
					"pitch": -6,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NCenE", -10, 180);}
				}
				{
					"yaw": 0,
					"pitch": -6,
					"type": "scene",
					"sceneId": "",
					"clickHandlerFunc": function() {viewer.loadScene("Up-NW", 0, 0);}
				}
			]
		}
	}
};	// Yes this is a very crappy way to do it but I've put
	// too many hours into fixing this ultimately
	// meaningless thing