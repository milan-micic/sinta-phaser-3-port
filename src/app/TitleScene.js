export default class TitleScene extends Phaser.Scene {

	constructor() {
		super("TitleScene");
	}

	preload() {

	}

	create() {
		 var bg = this.add.sprite(0,0,'titleBcg');
		 bg.setOrigin(0,0).setScale(4);


		var startText = this.add.text(490,440, 'Start Game',{
				font: '22px NoviFont',
				fill: '#EEDD88',
				backgroundColor: '#fb8140'});
		startText.setPadding(10, 10, 10, 10);
		startText.setInteractive({ useHandCursor: true });
		startText.on('pointerdown', () => this.startButton());

		var optionText = this.add.text(100,440, 'Instructions',{
				font: '22px NoviFont',
				fill: '#EEDD88',
				backgroundColor: '#fb8140'});
		optionText.setPadding(10, 10, 10, 10);
		optionText.setInteractive({ useHandCursor: true });
		optionText.on('pointerdown', () => this.instructionButton());

		this.input.on('gameobjectover', function (pointer, gameObject) {
      gameObject.setTint(0xffa200);
    });
    this.input.on('gameobjectout', function (pointer, gameObject) {
      gameObject.clearTint();
    });

    var naslov = this.add.text(160, 20, 'Milan Micic', { 
    	font: '72px NoviFont', fill: '#EEDD88' });
    naslov.setShadow(1, 1, '#000', true, true);

    var info = this.add.text(240, 370, 'arrows  -  move  shift   -  jump', { 
    	font: '32px NoviFont', 
    	fill: '#000',
    	wordWrap: { width: 300 } });

	}

	startButton() {
		console.log("starting ...");
		this.scene.start('GameScene');
	}

	instructionButton() {
		console.log("instructions ...");
		this.scene.start('InstructionScene');
	}

}