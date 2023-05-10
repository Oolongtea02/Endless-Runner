//import Phaser from './lib/phaser.js'

//import Game from './scenes/Game.js'
//import GameOver from './scenes/GameOver.js'

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

/*let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        }
    },
    scene: [ PlayScene ]
}

let game = new Phaser.Game(config); */

