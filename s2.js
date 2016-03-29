MyGame.s2 = function(game) {

};
MyGame.s2.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';

        self.mache = this.add.audio('mache');
        self.mache.play();

        this.carGroup = this.add.group();

        this.carGroup.x = 20;
        this.carGroup.y = 460;

        this.lun2 = this.carGroup.create(320,460,'lun2');
        this.lun2.anchor.set(0.5);
        this.che = this.carGroup.create(MyGame.GAME_WIDTH/2,600,'che');
        this.che.anchor.set(0.5,1);
        this.add.tween(this.che.scale).to({y:.99}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
        this.lun1 = this.carGroup.create(200,480,'lun1');
        this.lun1.anchor.set(0.5);
        this.add.tween(this.lun1).to({angle:360}, 500, Phaser.Easing.Linear.None, true,0,-1,false);
        this.add.tween(this.lun2).to({angle:360}, 500, Phaser.Easing.Linear.None, true,0,-1,false);

        this.start = true;
        this.kuohao = this.add.sprite(0,300,'kuohao');
        this.mask = this.add.graphics(0, 0);
        this.size = 0
        this.kuohao.mask = this.mask;

        this.logo = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 20,'logo');
        this.logo.anchor.set(0.5,1);

        this.time.events.add(Phaser.Timer.SECOND * 1.2,function(){
            this.textJson = this.add.sprite(MyGame.GAME_WIDTH/2-50,40, 'page2_text_json');
            this.textJson.anchor.set(0.5,0);

            this.textJson.animations.add('page2_text_json');
            this.textJson.animations.play('page2_text_json',10,false);
        }, this);

        this.f1 = this.add.image(400,30,'f1');
        this.add.tween(this.f1).from({y:-200}, 200, Phaser.Easing.Linear.None, true,1700)
        this.f2 = this.add.image(515,30,'f2');
        this.add.tween(this.f2).from({y:-200}, 200, Phaser.Easing.Linear.None, true,1900);
        this.f3 = this.add.image(630,30,'f3');
        this.add.tween(this.f3).from({y:-300}, 200, Phaser.Easing.Linear.None, true,2100).onComplete.add(function(){
            goto('s3')
        },this)


        this.blink = this.add.sprite(0,0,"blink");
        this.fadeTween = this.add.tween(this.blink);
        this.fadeTween.to({
            alpha:0
        },1000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            this.blink.kill();
        },this)

    },
    update: function() {
        if(!this.start || this.size>=1350) return;
        this.mask.clear();
        this.size+=20;
        this.mask.beginFill(0xFF0000, 1);
        this.mask.drawCircle(639, 516, this.size);
    }
};

