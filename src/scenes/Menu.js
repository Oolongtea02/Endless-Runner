class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {
        this.load.image('background', './assets/bg_layer1.png');
        this.load.image('bunny_bg', './assets/bunny_bg.png');
        //load UI sound effects
        this.load.audio('sfx_start', './assets/sfx/start.wav');
    }

    create() {
        //add menu background image
        this.add.image(0, 0, 'bunny_bg').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        const text = this.add.text(100, 180, 'Bunny Jumper', {
            fontFamily: 'Courier',
            fontSize: '38px',
            color: '#3c91d6',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text1 = this.add.text(50, 240, 'Controls: <-> to move \n player left to right', {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: 'pink',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text2 = this.add.text(50, 340, 'Pick up as many carrots \n as you can to jump faster', {
            fontFamily: 'Courier',
            fontSize: '24px',
            color: '#3c91d6',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text3 = this.add.text(100, 420, 'Press S to start', {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: 'pink',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        menuConfig.backgroundColor = '#65c79b';
        menuConfig.color = '#000';

        //define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.sound.play('sfx_start');
            this.scene.start('game');
        }
    }
}