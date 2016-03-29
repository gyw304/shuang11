MyGame.s3 = function(game) {

};
MyGame.s3.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';

        self.mache.pause();

        self.pangzimusic = this.add.audio('pangzi');
        self.pangzimusic.loop = true;
        self.pangzimusic.play();

        this.huaGroup = this.add.group();

        this.hua1 = this.huaGroup.create(550,700,'hua1');
        this.hua1.anchor.set(0.5);
        this.add.tween(this.hua1).to({angle:360}, 3500, Phaser.Easing.Linear.None, true,0,-1,false);
        this.hua3 = this.huaGroup.create(180,870,'hua3');
        this.hua3.anchor.set(0.5);
        this.add.tween(this.hua3).to({angle:-360}, 3000, Phaser.Easing.Linear.None, true,0,-1,false);
        this.hua2 = this.huaGroup.create(230,750,'hua2');
        this.hua2.anchor.set(0.5);
        this.add.tween(this.hua2).to({angle:360}, 3200, Phaser.Easing.Linear.None, true,0,-1,false);


        this.pangzi = this.add.sprite(MyGame.GAME_WIDTH/2,1090, 'pangzi');
        this.pangzi.anchor.set(0.5,1);
        this.add.tween(this.pangzi).to({y:1050}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
        this.add.tween(this.pangzi.scale).to({y:.97}, 500, Phaser.Easing.Linear.None, true,0,-1,true);

        this.pangzi.animations.add('pangzi');
        this.pangzi.animations.play('pangzi',2,true);


        this.start = true;
        this.kuohao = this.add.sprite(0,300,'kuohao');
        this.mask = this.add.graphics(0, 0);
        this.size = 0
        this.kuohao.mask = this.mask;

        this.logo = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 20,'logo');
        this.logo.anchor.set(0.5,1);


        this.time.events.add(Phaser.Timer.SECOND * 1.2,function(){
            this.textJson = this.add.sprite(MyGame.GAME_WIDTH/2,40, 'page3_text_json');
            this.textJson.anchor.set(0.5,0);

            this.textJson.animations.add('page3_text_json');
            this.textJson.animations.play('page3_text_json',10,false);
        }, this);

        this.textSmall = this.add.image(MyGame.GAME_WIDTH/2,270,'page3_text_small');
        this.textSmall.anchor.set(0.5,0);
        this.add.tween(this.textSmall).from({alpha:0}, 400, Phaser.Easing.Linear.None, true,1500).onComplete.add(function(){
            goto('s4')
        },this)


        this.blink = this.add.sprite(0,0,"blink");
        this.fadeTween = this.add.tween(this.blink);
        this.fadeTween.to({
            alpha:0
        },2000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            this.blink.kill()
        },this);

    },
    update: function() {
        if(!this.start || this.size>=1350) return;
        this.mask.clear();
        this.size+=20;
        this.mask.beginFill(0xFF0000, 1);
        this.mask.drawCircle(639, 516, this.size);
    }
};

