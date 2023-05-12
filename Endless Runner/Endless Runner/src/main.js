

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