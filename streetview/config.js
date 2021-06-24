const panoramas = {
	"default": {
		"firstScene": "Up-NE",
		"sceneFadeDuration": 500,
		"autoLoad" : true,
		"preview": "/streetview/loadimage.jpg",
		"hotSpotDebug": true
	},

	"scenes": {
		"Up-NE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NE.jpg",
			
			"yaw": -50,
			"pitch": -10,
			"hotSpots": [
				{ // Up-NCenE
					"pitch": -5,
					"yaw": -47.5,
					"type": "scene",
					
					"targetYaw": -5,
					"targetPitch": 0,
					"sceneId": "Up-NCenE"
				},
				{ // Up-SE
					"pitch": 0,
					"yaw": -136.5,
					"type": "scene",
					
					"targetYaw": -130,
					"targetPitch": -10,
					"sceneId": "Up-SE"
				},
				{ // Mid-NE
					"pitch": -16,
					"yaw": 41,
					"type": "scene",
					
					"targetYaw": 90,
					"targetPitch": -15,
					"sceneId": "Mid-NE"
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
				{ // Up-NCenW
					"pitch": 2,
					"yaw": -3.5,
					"type": "scene",
					
					"targetYaw": -8,
					"targetPitch": -4,
					"sceneId": "Up-NCenW"
				},
				{ // Classroom
					"pitch": -20,
					"yaw": -95,
					"type": "scene",
					"text": "Probably the best computer lab in the school, 16GB ram in each computer (also where this website was coded)",
					
					"targetYaw": 0,
					"targetPitch": -10,
					"sceneId": "Up-Classroom"
				},
				{
					"pitch": -12,
					"yaw": 152,
					"type": "info",
					"text": "Easily the worst lab, shit computers and not even enough for a whole class"
				}
			]
		},
		
		"Up-NCenW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NCenW.jpg",
			"hotSpots": [
				{ // Up-NCenE
					"yaw": 173,
					"pitch": -6,
					"type": "scene",
					
					"targetYaw": 180,
					"targetPitch": -10,
					"sceneId": "Up-NCenE"
				},
				{ // Up-NW
					"yaw": -6.5,
					"pitch": -1.5,
					"type": "scene",
					
					"targetYaw": 0,
					"targetPitch": 0,
					"sceneId": "Up-NW"
				},
				{ // Library info
					"yaw": 82.5,
					"pitch": -10,
					"type": "info",
					"text": "The school library (very noice)"
				}
			]
		},
		
		"Up-NW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-NW.jpg",
			"hotSpots": [
				{ // Up-NCenE
					"yaw": 180,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 173,
					"targetPitch": -10,
					"sceneId": "Up-NCenE"
				},
				{ // Up-Foyer
					"yaw": 0,
					"pitch": -2,
					"type": "scene",
					
					"targetYaw": -50,
					"targetPitch": -10,
					"sceneId": "Up-Foyer"
				},
				{ // Mid-NW
					"yaw": 71,
					"pitch": -27.5,
					"type": "scene",
					
					"targetYaw": 89,
					"targetPitch": -20,
					"sceneId": "Mid-NW"
				}
			]
		},
		
		"Up-SE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-SE.jpg",
			"hotSpots": [
				{ // Up-NE
					"yaw": 50,
					"pitch": -9,
					"type": "scene",
					
					"targetYaw": 40,
					"targetPitch": -10,
					"sceneId": "Up-NE"
				},
				{ // Up-SCen
					"yaw": -40.5,
					"pitch": -12,
					"type": "scene",
					
					"targetYaw": 80,
					"targetPitch": -5,
					"sceneId": "Up-SCen"
					
				},
				{ // Mid-SE
					"yaw": -130,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": -111,
					"targetPitch": -5,
					"sceneId": "Mid-SE"
				},
				{ // Stanley waves to the camera
					"yaw": 95,
					"pitch": -30,
					"type": "info",
					"text": "Stanley waves to you!"
				}
			]
		},
		
		"Up-SCen": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-SCen.jpg",
			"hotSpots": [
				{ // Up-SE
					"yaw": -104,
					"pitch": -6,
					"type": "scene",
					
					"targetYaw": 135,
					"targetPitch": 0,
					"sceneId": "Up-SE"
				},
				{ // Up-SW
					"yaw": 75.5,
					"pitch": -2.5,
					"type": "scene",
					
					"targetYaw": -105,
					"targetPitch": 0,
					"sceneId": "Up-SW"
				}
			]
		},
		
		"Up-SW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-SW.jpg",
			"hotSpots": [
				{ // Up-SCen
					"yaw": 75.25,
					"pitch": -4.5,
					"type": "scene",
					
					"targetYaw": -103,
					"targetPitch": -10,
					"sceneId": "Up-SCen"
				},
				{ // Mid-SW
					"yaw": -60,
					"pitch": -30,
					"type": "scene",
					"text": "People call this the \"iron stairwell\", for obvious reasons",
					
					"targetYaw": -135,
					"targetPitch": -10,
					"sceneId": "Mid-SW"
				},
				{ // Stanley smacks you
					"yaw": 105,
					"pitch": -20,
					"type": "info",
					"text": "Calm down Stanley, it was just a prank"
				},
				{ // No
					"yaw": 175,
					"pitch": 0,
					"type": "info",
					"text": "90% of students: How about no"
				}
			]
		},
		
		"Up-Classroom": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-Classroom.jpg",
			"hotSpots": [
				{ // Up-NCenE
					"pitch": 5,
					"yaw": 147,
					"type": "scene",
					
					"targetYaw": 0,
					"targetPitch": 0,
					"sceneId": "Up-NCenE"
				}
			]
		},
		
		"Up-Foyer": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Up-Foyer.jpg",
			"hotSpots": [
				{ // Up-NW
					"yaw": 137,
					"pitch": -12,
					"type": "scene",
					
					"targetYaw": 180,
					"targetPitch": -10,
					"sceneId": "Up-NW"
				},
				{ // Art class info
					"yaw": -47,
					"pitch": 0,
					"type": "info",
					"text": "This way to the art classrooms, as well as a good computer lab that is split over 2 rooms, making it easy to hide whatever you're doing"
				}
			]
		},
		
		"Mid-NE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Mid-NE.jpg",
			"hotSpots": [
				{ // Up-NE
					"yaw": -58,
					"pitch": -3.5,
					"type": "scene",
					
					"targetYaw": -136.5,
					"targetPitch": 0,
					"sceneId": "Up-NE"
				}
			]
		},
		
		"Mid-NW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Mid-NW.jpg",
			"hotSpots": [
				{ // Up-NW
					"yaw": -27,
					"pitch": 4,
					"type": "scene",
					
					"targetYaw": 180,
					"targetPitch": -10,
					"sceneId": "Up-NW"
				}
			]
		},
		
		"Mid-SE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Mid-SE.jpg",
			"hotSpots": [
				{ // Up-SE
					"yaw": -7,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 50,
					"targetPitch": -10,
					"sceneId": "Up-SE"
				}
			]
		},
		
		"Mid-SW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Mid-SW.jpg",
			"hotSpots": [
				{ // Up-SW
					"yaw": -40,
					"pitch": -5,
					"type": "scene",
					
					"targetYaw": 75,
					"targetPitch": -10,
					"sceneId": "Up-SW"
				},
				{ // Down-SW
					"yaw": -65,
					"pitch": -35,
					"type": "scene",
					
					"targetYaw": 0,
					"targetPitch": 0,
					"sceneId": "Down-SW"
				}
			]
		},
		
		"Down-SW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-SW.jpg",
			"hotSpots": [
				{ // Mid-SW
					"yaw": -55,
					"pitch": -4,
					"type": "scene",
					"text": "People call this the \"iron stairwell\", for obvious reasons",
					
					"targetYaw": 50,
					"targetPitch": -20,
					"sceneId": "Mid-SW"
				},
				{ // Computer lab
					"yaw": 150,
					"pitch": 5,
					"type": "info",
					"text": "This computer lab is fairly good, 8GB if I remember"
				}
			]
		}
	}
};
// Yes this is a very crappy way to do JSON but I've put
// too many hours into fixing this ultimately
// meaningless thing