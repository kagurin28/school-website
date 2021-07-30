const panoramas = {
	"default": {
		"firstScene": "Up-NE",
		"sceneFadeDuration": 500,
		"autoLoad" : true,
		"preview": "/stimages/loadimage.jpg",
		"hotSpotDebug": true
	},

	"scenes": {
		"Up-NE": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-NE.jpg",
			
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
			"panorama": "/stimages/Up-NCenE.jpg",
			"hotSpots": [
				{ // Up-NE
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
				{ // Up-DTClass1
					"pitch": -20,
					"yaw": -95,
					"type": "scene",
					"text": "Probably the best computer lab in the school, 16GB ram in each computer (also where this website was coded)",
					
					"targetYaw": -69,
					"targetPitch": -14,
					"sceneId": "Up-DTClass1"
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
			"panorama": "/stimages/Up-NCenW.jpg",
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
				},
				{ // Up-Science
					"yaw": -182.5,
					"pitch": -5,
					"type": "scene",
					"text": "A tiny, sliver of a door is visble here...",

					"targetYaw": 92,
					"targetPitch": -4,
					"sceneId": "Up-Science"
				}
			]
		},
		
		"Up-NW": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-NW.jpg",
			"hotSpots": [
				{ // Up-NCenW
					"yaw": 180,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 173,
					"targetPitch": -10,
					"sceneId": "Up-NCenW"
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
					
					"targetYaw": 167.5,
					"targetPitch": -14.5,
					"sceneId": "Mid-NW"
				}
			]
		},
		
		"Up-SE": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-SE.jpg",
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
			"panorama": "/stimages/Up-SCen.jpg",
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
				},
				{ // Up-DTClass2
					"yaw": 17,
					"pitch": -18,
					"type": "scene",
					
					"targetYaw": 74.5,
					"targetPitch": -5,
					"sceneId": "Up-DTClass2"
				},
			]
		},
		
		"Up-SW": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-SW.jpg",
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
					
					"targetYaw": -208,
					"targetPitch": -26,
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
		
		"Up-DTClass1": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-DTClass1.jpg",
			"hotSpots": [
				{ // Up-NCenE
					"pitch": 5,
					"yaw": 147,
					"type": "scene",
					
					"targetYaw": 102.5,
					"targetPitch": -12.5,
					"sceneId": "Up-NCenE"
				}
			]
		},

		"Up-DTClass2": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-DTClass2.jpg",
			"hotSpots": [
				{ // Up-SCen
					"yaw": -98,
					"pitch": -13.5,
					"type": "scene",
					
					"targetYaw": -181.5,
					"targetPitch": -15.5,
					"sceneId": "Up-SCen"
				},
			]
		},

		"Up-Science": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-Science.jpg",
			"hotSpots": [
				{ // Up-NCenW
					"yaw": 309.5,
					"pitch": 4.5,
					"type": "scene",
					
					"targetYaw": -8,
					"targetPitch": -4,
					"sceneId": "Up-NCenW"
				}
			]
		},
		
		"Up-Foyer": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-Foyer.jpg",
			"hotSpots": [
				{ // Up-NW
					"yaw": 137,
					"pitch": -12,
					"type": "scene",
					
					"targetYaw": 180,
					"targetPitch": -10,
					"sceneId": "Up-NW"
				},
				{ // Up-Art
					"yaw": -45.5,
					"pitch": -2.5,
					"type": "scene",
					"text": "This way to the art classrooms, as well as a good computer lab that is split over 2 rooms, making it easy to hide whatever you're doing",
					
					"targetYaw": -98.5,
					"targetPitch": -2.5,
					"sceneId": "Up-Art"
				}
			]
		},

		"Up-Art": {
			"type": "equirectangular",
			"panorama": "/stimages/Up-Art.jpg",
			"hotSpots": [
				{ // Up-Foyer
					"yaw": 85.5,
					"pitch": -5.5,
					"type": "scene",
					
					"targetYaw": 136.5,
					"targetPitch": -10,
					"sceneId": "Up-Foyer"
				},
				{ // My boy Mike Wazowski
					"yaw": -95.5,
					"pitch": 3.5,
					"type": "info",
					"text": "My boy Mike Wazowski"
				}
			]
		},
		
		
		"Mid-NE": {
			"type": "equirectangular",
			"panorama": "/stimages/Mid-NE.jpg",
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
			"panorama": "/stimages/Mid-NW.jpg",
			"hotSpots": [
				{ // Up-NW
					"yaw": -23.5,
					"pitch": 3.5,
					"type": "scene",
					
					"targetYaw": 258.5,
					"targetPitch": 8.5,
					"sceneId": "Up-NW"
				},
				{ // Down-NW
					"yaw": -3,
					"pitch": -37,
					"type": "scene",
					
					"targetYaw": 35.5,
					"targetPitch": -15.5,
					"sceneId": "Down-NW"
				}
			]
		},
		
		"Mid-SE": {
			"type": "equirectangular",
			"panorama": "/stimages/Mid-SE.jpg",
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
			"panorama": "/stimages/Mid-SW.jpg",
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
					
					"targetYaw": 124.5,
					"targetPitch": 5.5,
					"sceneId": "Down-SW"
				}
			]
		},
		
		
		"Down-NE": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-NE.jpg",
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
			"panorama": "/stimages/Down-CenE.jpg",
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
			"panorama": "/stimages/Down-NW.jpg",
			"hotSpots": [
				{ // Down-QuadNW
					"yaw": -57.5,
					"pitch": -13.5,
					"type": "scene",
					
					"targetYaw": 195.5,
					"targetPitch": 5.5,
					"sceneId": "Down-QuadNW"
				},
				{ // Down-Foyer
					"yaw": 130.5,
					"pitch": 2.5,
					"type": "scene",
					
					"targetYaw": -97,
					"targetPitch": 0,
					"sceneId": "Down-Foyer"
				},
				{ // Mid-NW
					"yaw": 214.5,
					"pitch": 26,
					"type": "scene",
					
					"targetYaw": 183.5,
					"targetPitch": -3,
					"sceneId": "Mid-NW"
				}
			]
		},
		
		"Down-SE": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-SE.jpg",
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
			"panorama": "/stimages/Down-SW.jpg",
			"hotSpots": [
				{ // Down-QuadSW
					"yaw": 340,
					"pitch": -25.5,
					"type": "scene",
					
					"targetYaw": 44,
					"targetPitch": -13,
					"sceneId": "Down-QuadSW"
				},
				{ // Down-QuadNW
					"yaw": 348.5,
					"pitch": -22,
					"type": "scene",
					
					"targetYaw": 64,
					"targetPitch": -3.5,
					"sceneId": "Down-QuadNW"
				},
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
			"panorama": "/stimages/Down-QuadNE.jpg",
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
				},
				{ // Down-QuadNW
					"yaw": 176,
					"pitch": 10,
					"type": "scene",
					
					"targetYaw": -1,
					"targetPitch": -11.5,
					"sceneId": "Down-QuadNW"
				}
			]
		},
		
		"Down-QuadNW": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-QuadNW.jpg",
			"hotSpots": [
				{ // Down-QuadNE
					"yaw": 182.5,
					"pitch": 8,
					"type": "scene",
					
					"targetYaw": 355.5,
					"targetPitch": -12.5,
					"sceneId": "Down-QuadNE"
				},
				{ // Down-QuadSW
					"yaw": 257,
					"pitch": -4,
					"type": "scene",
					
					"targetYaw": -95.5,
					"targetPitch": -1.5,
					"sceneId": "Down-QuadSW"
				},
				{ // Down-NW
					"yaw": 29.5,
					"pitch": -12.5,
					"type": "scene",
					
					"targetYaw": 125.5,
					"targetPitch": 8.5,
					"sceneId": "Down-NW"
				},
				{ // Down-SW
					"yaw": 251.5,
					"pitch": 2.5,
					"type": "scene",
					
					"targetYaw": 165,
					"targetPitch": 14,
					"sceneId": "Down-SW"
				}
			]
		},
		
		"Down-QuadSE": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-QuadSE.jpg",
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
			"panorama": "/stimages/Down-QuadSW.jpg",
			"hotSpots": [
				{ // Down-QuadNW
					"yaw": 78,
					"pitch": -10,
					"type": "scene",
					
					"targetYaw": 95,
					"targetPitch": -9.5,
					"sceneId": "Down-QuadNW"
				},
				{ // Down-QuadCen
					"yaw": 168.5,
					"pitch": 13,
					"type": "scene",
					
					"targetYaw": -15.5,
					"targetPitch": -13.5,
					"sceneId": "Down-QuadCen"
				},
				{ // Down-SW
					"yaw": 237,
					"pitch": 3.5,
					"type": "scene",
					
					"targetYaw": 130,
					"targetPitch": 7.5,
					"sceneId": "Down-SW"
				}
			]
		},
		
		"Down-QuadCen": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-QuadCen.jpg",
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
				},
				{ // Down-QuadSW
					"yaw": -191,
					"pitch": 9,
					"type": "scene",
					
					"targetYaw": -9,
					"targetPitch": -16.5,
					"sceneId": "Down-QuadSW"
				}
			]
		},
		
		"Down-Foyer": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-Foyer.jpg",
			"hotSpots": [
				{ // Down-NW
					"yaw": 96,
					"pitch": -6.5,
					"type": "scene",
					
					"targetYaw": -33,
					"targetPitch": -21.5,
					"sceneId": "Down-NW"
				},
				{ // Down-HallN
					"yaw": 170,
					"pitch": 9,
					"type": "scene",
					
					"targetYaw": 169.5,
					"targetPitch": 10.5,
					"sceneId": "Down-HallN"
				}
			]
		},

		"Down-HallN": {
			"type": "equirectangular",
			"panorama": "/stimages/Down-HallN.jpg",
			"hotSpots": [
				{ // Down-Foyer
					"yaw": -12.5,
					"pitch": -31,
					"type": "scene",
					
					"targetYaw": -3.5,
					"targetPitch": -25.5,
					"sceneId": "Down-Foyer"
				}
			]
		},
	}
};
// Yes this is a very crappy way to do JSON but I've put
// too many hours into fixing this ultimately
// meaningless thing
