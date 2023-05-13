//import Phaser from '../lib/phaser.js'

class GameOver extends Phaser.Scene
{
	constructor()
	{
		super('game-over')
	}

	preload() {
		this.load.audio('bg_music', './assets/bgm.mp3')
	}

	create()
	{
		const width = this.scale.width
		const height = this.scale.height

		this.add.text(width * 0.5, height * 0.5, 'Game Over', {
			fontSize: 48
		})
		.setOrigin(0.5)

		const text = this.add.text(100, 420, 'Press Spacebar to restart', {
            fontFamily: 'Courier',
            fontSize: '24px',
            color: 'pink',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

		const text1 = this.add.text(80, 100, 'Credits: \n Programmer, Art, Concept Design: Samuel \n Music: Pond5 \n SFX: Pixabay', {
            fontFamily: 'Courier',
            fontSize: '16px',
            color: 'tan',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
        });


		this.input.keyboard.once('keydown-SPACE', () => {
			this.scene.start('menuScene')
		})
	}
}