export default class InstructionScene extends Phaser.Scene {

	constructor() {
		super("InstructionScene");
	}

	preload() {
		 this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
	}

	create() {
		 this.cameras.main.setBackgroundColor('#AAFFFF');
		 var add = this.add;
		 var text = [
		 'Welcome to the game.',
		 'Here are the instructions on how to play the game.',
		 '',''];
		 var text2 = [
		 "Arrow keys - moving character",
		 "",
		 "Shift key  - jump"
		 ];

		  WebFont.load({
        google: {
            families: [ 'Freckle Face', 'Finger Paint', 'Nosifer' ]
        },
        active: function ()
        {
		 			add.text(75,10, text,{
		 					fontFamily: 'Freckle Face',fontSize: 40, color: '#ffffff',
		 					wordWrap: { width: 540 },align:'center'})
		 			.setShadow(2, 2, "#333333", 2, false, true);
		 			add.text(35, 200, text2,
		 			 { fontFamily: 'Finger Paint', fontSize: 36, color: '#5656ee',align:'center',lineSpacing: 50 });
        }
    	});


		 // Add go back button to title screen
		var backText = this.add.text(100,400, 'Go Back',{
				// font: '22px NoviFont',
				fill: '#AAFFFF',
				backgroundColor: '#0055FF'});

		backText.setPadding(10, 10, 10, 10);
		backText.setInteractive({ useHandCursor: true });

		this.input.on('gameobjectover', function (pointer, gameObject) {
      gameObject.setTint(0xffa200);
    });
    this.input.on('gameobjectout', function (pointer, gameObject) {
      gameObject.clearTint();
    });
		backText.on('pointerdown', () => this.backButton());
	}

	backButton() {
		this.scene.start('TitleScene');
	}

}