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
					
					"targetYaw": 121,
					"targetPitch": -7.5,
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
					
					"targetYaw": -180,
					"targetPitch": 2.5,
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
				},
				{ // Down-NE
					"yaw": -55,
					"pitch": -32,
					"type": "scene",
					
					"targetYaw": 126,
					"targetPitch": 8.5,
					"sceneId": "Down-NE"
				},
				{ // Window info
					"yaw": 77.5,
					"pitch": -8.5,
					"type": "info",
					"text": "These windows have been broken an (un)suprising amount of times"
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
				},
				{ // Down-SE
					"yaw": 346.5,
					"pitch": -32,
					"type": "scene",
					
					"targetYaw": 303.5,
					"targetPitch": -6.5,
					"sceneId": "Down-SE"
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
		
		
		"Down-NE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-NE.jpg",
			"hotSpots": [
				{ // Down-CenE
					"yaw": 124.5,
					"pitch": -2,
					"type": "scene",
					
					"targetYaw": 117,
					"targetPitch": 6.5,
					"sceneId": "Down-CenE"
				},
				{ // Mid-NE
					"yaw": 308,
					"pitch": -1.5,
					"type": "scene",
					
					"targetYaw": -222,
					"targetPitch": 0,
					"sceneId": "Mid-NE"
				}
			]
		},
		
		"Down-CenE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-CenE.jpg",
			"hotSpots": [
				{ // Down-NE
					"yaw": 294,
					"pitch": -20.5,
					"type": "scene",
					
					"targetYaw": -53,
					"targetPitch": -18,
					"sceneId": "Down-NE"
				},
				{ // Down-SE
					"yaw": 117.5,
					"pitch": 5,
					"type": "scene",
					
					"targetYaw": 126,
					"targetPitch": 1.5,
					"sceneId": "Down-SE"
				},
				{ // Down-QuadNE
					"yaw": 200,
					"pitch": 7,
					"type": "scene",
					
					"targetYaw": -201.5,
					"targetPitch": 8.5,
					"sceneId": "Down-QuadNE"
				},
				{ // Mid-NE
					"yaw": 296.5,
					"pitch": -5,
					"type": "scene",
					
					"targetYaw": -222,
					"targetPitch": 0,
					"sceneId": "Mid-NE"
				}
			]
		},
		
		"Down-NW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-NW.jpg",
			"hotSpots": [
				
			]
		},
		
		"Down-SE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-SE.jpg",
			"hotSpots": [
				{ // Down-CenE
					"yaw": 303,
					"pitch": -9.5,
					"type": "scene",
					
					"targetYaw": 295,
					"targetPitch": -15,
					"sceneId": "Down-CenE"
				},
				{ // Down-QuadSE
					"yaw": -130.5,
					"pitch": -1.5,
					"type": "scene",
					
					"targetYaw": -163,
					"targetPitch": 5.5,
					"sceneId": "Down-QuadSE"
				},
				{ // Mid-SE
					"yaw": 126,
					"pitch": 12,
					"type": "scene",
					
					"targetYaw": 163,
					"targetPitch": 1.5,
					"sceneId": "Mid-SE"
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
		},
		
		"Down-QuadNE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-QuadNE.jpg",
			"hotSpots": [
				{ // Down-CenE
					"yaw": -16,
					"pitch": -19,
					"type": "scene",
					
					"targetYaw": 15.5,
					"targetPitch": -22.5,
					"sceneId": "Down-CenE"
				},
				{ // Down-QuadCen
					"yaw": -210.5,
					"pitch": 7,
					"type": "scene",
					
					"targetYaw": -217.5,
					"targetPitch": 6.5,
					"sceneId": "Down-QuadCen"
				}
			]
		},
		
		"Down-QuadNW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-QuadNW.jpg",
			"hotSpots": [
				
			]
		},
		
		"Down-QuadSE": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-QuadSE.jpg",
			"hotSpots": [
				{ // Down-SE
					"yaw": 6,
					"pitch": -13.5,
					"type": "scene",
					
					"targetYaw": 45,
					"targetPitch": -12,
					"sceneId": "Down-SE"
				},
				{ // Down-QuadCen
					"yaw": -162,
					"pitch": 2.5,
					"type": "scene",
					
					"targetYaw": -143.5,
					"targetPitch": 7,
					"sceneId": "Down-QuadCen"
				}
			]
		},
		
		"Down-QuadSW": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-QuadSW.jpg",
			"hotSpots": [
				
			]
		},
		
		"Down-QuadCen": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-QuadCen.jpg",
			"hotSpots": [
				{ // Down-QuadNE
					"yaw": -30,
					"pitch": -14.5,
					"type": "scene",
					
					"targetYaw": -32.5,
					"targetPitch": -11,
					"sceneId": "Down-QuadNE"
				},
				{ // Down-QuadSE
					"yaw": 15.5,
					"pitch": -16.5,
					"type": "scene",
					
					"targetYaw": 7,
					"targetPitch": -10,
					"sceneId": "Down-QuadSE"
				}
			]
		},
		
		"Down-Foyer": {
			"type": "equirectangular",
			"panorama": "/streetview/images/Down-Foyer.jpg",
			"hotSpots": [
				
			]
		}
	}
};
// Yes this is a very crappy way to do JSON but I've put
// too many hours into fixing this ultimately
// meaningless thing
