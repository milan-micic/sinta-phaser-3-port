export default class EndScene extends Phaser.Scene {

	constructor() {
		super("EndScene");
	}

	create() {
		 var bg = this.add.sprite(0,0,'background_1');
		 bg.setOrigin(0,0);

		 var text = 'Game Over'

		 var startText = this.add.text(100,100, text,{fill: '#000'});

		 // Add go back button to title screen
		var backText = this.add.text(100,500, 'Go Back',{
				fill: '#000',backgroundColor: '#f0f'});
		backText.setInteractive({ useHandCursor: true });
		backText.on('pointerdown', () => this.backButton());
		this.input.on('gameobjectover', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
    });
    this.input.on('gameobjectout', function (pointer, gameObject) {
      gameObject.clearTint();
    });
	}

	backButton() {
		this.scene.start('TitleScene');
	}

}