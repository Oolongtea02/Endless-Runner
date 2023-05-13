/* 
Game Development Experience CMPM120
Name: Samuel Zhang
Game Title: Bunny Jumper
Hours spent: Approximately 22 hours
*/

/*
Justification on Creative Tilt: 
For technical, 
I made a jumping mechanic that I can edit freely to adjust the velocity at which the bunny can go upwards, 
as well as the ability to gain more jumping power from collecting carrots.

For visual, I made the platforms visually pleasing to look at, by adding shading and almost real life grass coming through.
*/

let config = ({
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	scene: [Menu, Game, GameOver],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 200
			},
			debug: true
		}
	}
})

let game = new Phaser.Game(config);

// reserve keyboard variables
let keyS;