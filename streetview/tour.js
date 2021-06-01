data = `{   
    "default": {
        "firstScene": "test1",
        "sceneFadeDuration": 1000,
		"autoLoad" : true
    },

    "scenes": {
        "test1": {
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "test1.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "test2",
                    "sceneId": "test2"
                }
            ]
        },

        "test2": {
            "hfov": 110,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "test2.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "test1",
                    "sceneId": "test1",
                    "targetYaw": 0,
                    "targetPitch": 0
                }
            ]
        }
    }
}`;
