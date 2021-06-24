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
					
					"targetYaw": 0,
					"targetPitch": 0,
					"sceneId": "Up-NCenE"
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
					
					"targetYaw": 130,
					"targetPitch": -10,
					"sceneId": "Up-NE"
				},
				{
					"pitch": 2,
					"yaw": -3.5,
					"type": "scene",
					"sceneId": "",
					
					"targetYaw": -5,
					"targetPitch": 0,
					"sceneId": "Up-NCenW"
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
					
					"targetYaw": 180,
					"targetPitch": -10,
					"sceneId": "Up-NCenE"
				},
				{
					"yaw": -6.5,
					"pitch": -1.5,
					"type": "scene",
					"sceneId": "",
					
					"targetYaw": 0,
					"targetPitch": 0,
					"sceneId": "Up-NW"
				}
			]
		},
		
		"Up-NW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NW.jpg",
			"hotSpots": [
				{
					"yaw": 180,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 173,
					"targetPitch": -10,
					"sceneId": "Up-NCenE"
				},
				{
					"yaw": 0,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 0,
					"targetPitch": -10,
					"sceneId": "Up-Foyer"
				}
			]
		},
		
		"Up-Foyer": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-Foyer.jpg",
			"hotSpots": [
				{
					"yaw": 180,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 173,
					"targetPitch": -10,
					"sceneId": "Up-NW"
				}
			]
		},
	}
};	// Yes this is a very crappy way to do it but I've put
	// too many hours into fixing this ultimately
	// meaningless thing