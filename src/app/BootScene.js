export default class BootScene extends Phaser.Scene {

	constructor() {
		super('BootScene');
	}

	preload() {
		this.load.image('titleBcg', 'assets/img/sinta_menu.png');
	}

	create() {
		this.scene.start("PreloadScene");
	}

}