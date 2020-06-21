export default class PreloadScene extends Phaser.Scene {

	constructor() {
		super('PreloadScene');
	}

	preload() {

		this.cameras.main.setBackgroundColor('#FB8140');

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x034140, 0.8);
    progressBox.fillRect(100, 210, 440, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
            font: '20px monospace',
            fill: '#FBEF75'
        }
    });
    loadingText.setOrigin(0.5, 0.5);
    
    var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#FBEF75'
        }
    });
    percentText.setOrigin(0.5, 0.5);
    
    var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#FBEF75'
        }
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff,1);
        progressBar.fillRect(110, 220, 420 * value, 30);
    });
    
    this.load.on('fileprogress', this.updateBar, {
      assetText:assetText
    });

    this.load.on('complete', this.complete, {
    	scene:this.scene,
    	progressBar:progressBar,
	    progressBox:progressBox,
	    loadingText:loadingText,
	    percentText:percentText,
	    assetText:assetText
    });

		// Any Assets you want to load in
		this.load.image('bckg', 'assets/img/level.png');
		this.load.spritesheet('dude', 'assets/img/player.png',{ 
    	frameWidth: 56, frameHeight: 72 });
		this.load.image('plat', 'assets/img/platform.png');
		this.load.image('despe', 'assets/img/desperation.png');
		this.load.image('lon', 'assets/img/longing.png');
		this.load.image('pain', 'assets/img/pain.png');
		this.load.image('strug', 'assets/img/struggle.png');
		this.load.spritesheet('toalet', 'assets/img/toiletFilmStrip.png',{ 
    	frameWidth: 192, frameHeight: 128 });
		this.load.image('bcgVrata', 'assets/img/play.png');
		this.load.image('kraj', 'assets/img/release.png');
		this.load.audio('theme', 'assets/audio/toilet.mp3');

		for(var i =0;i<300;i++) {
			this.load.image('background_'+i, 'assets/img/bg.png');
		}
	}

	updateBar(file) {
		this.assetText.setText('Loading asset: ' + file.key);
	}

	complete() {
		// console.log("COMPLETE!");
    this.progressBar.destroy();
    this.progressBox.destroy();
    this.loadingText.destroy();
    this.percentText.destroy();
    this.assetText.destroy();
		this.scene.start("TitleScene");
	}
}