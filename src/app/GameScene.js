export default class GameScene extends Phaser.Scene {

	constructor() {
		super("GameScene");
	}

	init() {
    	this.player;
        this.cursors;
        this.moveCam = false;
        this.wc;
        this.vrata;
	}

	preload() {

	}

	create() {
		// definisanje kontrole uz pomoc tastature
    this.cursors = this.input.keyboard.createCursorKeys();

    // set background color, so the sky is not black    
    this.cameras.main.setBackgroundColor('#FBEF75');
    const bckg = this.add.image(0, 0, 'bckg').setOrigin(0,0);;

    // poruke
    const strug = this.add.image(100, 720, 'strug').setOrigin(0,0);
    const pain = this.add.image(2240, 130, 'pain').setOrigin(0,0);
    const lon = this.add.image(1550, 275, 'lon').setOrigin(0,0);
    const despe = this.add.image(610, 450, 'despe').setOrigin(0,0);

    // velicina word 
    this.physics.world.setBounds(0,0,3200,960);
    
    // make the camera follow the player
    this.cameras.main.setBounds(0, 0, 2880 , 960);
    this.cameras.main.setViewport(0, 0, 640, 480);
    
    // okvir
    var r1 = this.add.rectangle(0, 896, 528, 15, 0x034140).setOrigin(0,0);
    var r2 = this.add.rectangle(512, 768, 15, 140, 0x034140).setOrigin(0,0);
    var r3 = this.add.rectangle(527, 768, 112, 15, 0x034140).setOrigin(0,0);
    var r4 = this.add.rectangle(624, 783, 15, 65, 0x034140).setOrigin(0,0);
    var r5 = this.add.rectangle(639, 833, 80, 15, 0x034140).setOrigin(0,0);
    var r6 = this.add.rectangle(704, 576, 15, 257, 0x034140).setOrigin(0,0);
    var r7 = this.add.rectangle(704, 576, 255, 15, 0x034140).setOrigin(0,0);
    var r8 = this.add.rectangle(944, 576, 15, 208, 0x034140).setOrigin(0,0);
    var r9 = this.add.rectangle(959, 769, 115, 15, 0x034140).setOrigin(0,0);
    var r10 = this.add.rectangle(1072, 769, 15, 79, 0x034140).setOrigin(0,0);
    var r11 = this.add.rectangle(1072, 832, 340, 15, 0x034140).setOrigin(0,0);
    var r12 = this.add.rectangle(1408, 512, 15, 336, 0x034140).setOrigin(0,0);
    var r13 = this.add.rectangle(1408, 512, 144, 15, 0x034140).setOrigin(0,0);
    var r14 = this.add.rectangle(1536, 448, 15, 64, 0x034140).setOrigin(0,0);
    var r15 = this.add.rectangle(1536, 448, 144, 15, 0x034140).setOrigin(0,0);
    var r16 = this.add.rectangle(1665, 384, 15, 64, 0x034140).setOrigin(0,0);
    var r17 = this.add.rectangle(1665, 384, 174, 15, 0x034140).setOrigin(0,0);
    var r18 = this.add.rectangle(1840, 384, 15, 207, 0x034140).setOrigin(0,0);
    var r19 = this.add.rectangle(1840, 576, 415, 15, 0x034140).setOrigin(0,0);
    var r20 = this.add.rectangle(2240, 320, 15, 257, 0x034140).setOrigin(0,0);
    var r21 = this.add.rectangle(2240, 320, 127, 15, 0x034140).setOrigin(0,0);
    var r22 = this.add.rectangle(2352, 320, 15, 385, 0x034140).setOrigin(0,0);
    var r23 = this.add.rectangle(2352, 704, 400, 15, 0x034140).setOrigin(0,0);
    var r24 = this.add.rectangle(2752, 560, 15, 160, 0x034140).setOrigin(0,0);
    var r25 = this.add.rectangle(2500, 560, 265, 15, 0x034140).setOrigin(0,0);
    var r26 = this.add.rectangle(2495, 0, 15, 575, 0x034140).setOrigin(0,0);

    // platforme
    let pl1 = this.add.image(400, 808,'plat');
    let pl2 = this.add.image(580, 675,'plat');
    let pl3 = this.add.image(650, 600,'plat');
    let pl4 = this.add.image(1055, 680,'plat');
    let pl5 = this.add.image(1185, 680,'plat');
    let pl6 = this.add.image(1260, 730,'plat');
    let pl7 = this.add.image(1365, 645,'plat');
    let pl8 = this.add.image(1300, 545,'plat');    
    let pl9 = this.add.image(1960, 485,'plat');
    let pl10 = this.add.image(2060, 400,'plat');
    let pl11 = this.add.image(2170, 350,'plat');

    // grupa dodavanje platforme
    this.platforms = this.physics.add.staticGroup();
    this.platforms.addMultiple([r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,
    		r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,
    		pl1,pl2,pl3,pl4,pl5,pl6,pl7,pl8,pl9,pl10,pl11]);
    // dodavanje interaktivnih sprajtova i kamere koja prati igraca,kao 
    // provera sudara sprajtova
    this.vrata = this.physics.add.staticGroup();
    this.vrata.create(2645, 630, 'bcgVrata').setOrigin(0,0);
    this.wc = this.add.sprite(2560, 576, 'toalet').setOrigin(0,0);
    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.cameras.main.startFollow(this.player);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);  
    this.physics.add.collider(this.player, this.vrata,this.end, null, this);

		// toalet animacija
    this.anims.create({
    	key:'otvoren',
    	frames: this.anims.generateFrameNumbers('toalet', { start: 0, end: 0 }),
    	frameRate: 1,
    	repeat: 0
    });
    this.anims.create({
    	key:'zatvoren',
    	frames: this.anims.generateFrameNumbers('toalet', { start: 1, end: 1 }),
    	frameRate: 1,
    	repeat: 0
    });
    this.wc.anims.play('otvoren',true);

    // Animacija sprajta 'dude'
    this.anims.create({
      key: 'trci',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
        key: 'stoj',
        frames: this.anims.generateFrameNumbers('dude', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

	}

	update() {
		// kretanje
	  if (this.cursors.left.isDown)
    {
      this.player.setVelocityX(-160);
      this.player.anims.play('trci', true);
    }
    else if (this.cursors.right.isDown)
    {
      this.player.setVelocityX(160);
      this.player.anims.play('trci', true);
    }
    else
    {
      this.player.setVelocityX(0);
      this.player.anims.play('stoj');
    }

    if ((this.cursors.up.isDown || this.cursors.shift.isDown) && this.player.body.touching.down)
    {
      this.player.setVelocityY(-250);
    }
	}


	end(player,vrata) {
		const self = this;
		player.disableBody(true, true);
		this.wc.anims.play('zatvoren');
		const kraj = this.physics.add.image(2460, 540, 'kraj').setOrigin(0,0);
		kraj.body.setAllowGravity(false);
		kraj.setVelocity(0,-40);
		var music = this.sound.add('theme');
		music.play();
		music.once('complete', function(music){
			self.scene.start("TitleScene");
		});	
	}
}