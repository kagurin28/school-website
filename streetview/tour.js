data = `{   
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
                    "sceneId": "Up-NE"
                },
				{
					"pitch": 2,
					"yaw": -3.5,
					"type": "scene",
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
					"sceneId": "Up-NCenE"
				}
			]
		}
    }
}`;
