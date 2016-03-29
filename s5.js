MyGame.s5 = function(game) {

};
MyGame.s5.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';


        this.start = true;
        this.kuohao = this.add.sprite(0,300,'kuohao');
        this.mask = this.add.graphics(0, 0);
        this.size = 0
        this.kuohao.mask = this.mask;
        this.tasound = this.add.audio('ltw_sound');

        this.time.events.add(Phaser.Timer.SECOND * 1.2,function(){
            this.textJson = this.add.sprite(MyGame.GAME_WIDTH/2,50, 'page5_text_json');
            this.textJson.anchor.set(0.5,0);

            this.textJson.animations.add('page5_text_json');
            this.textJson.animations.play('page5_text_json',10,false);
        }, this);

        this.textSmall = this.add.image(MyGame.GAME_WIDTH/2,280,'page5_text_small');
        this.textSmall.anchor.set(0.5,0);
        this.add.tween(this.textSmall).from({alpha:0}, 400, Phaser.Easing.Linear.None, true,1500).onComplete.add(function(){
           goto('s6')
        },this)


        this.baota = this.add.image(160,660,'baota');
        this.baota.anchor.set(0.5);

        this.Time2 = this.time.events.loop(Phaser.Timer.SECOND * 2, function(){
            this.add.tween(this.baota).to({y:560}, 400, Phaser.Easing.Linear.None, true,0,0,true);
            this.add.tween(this.baota).to({angle:360}, 400, Phaser.Easing.Linear.None, true,0,0,false);
            this.tasound.play();

        }, this);



        this.ltw_shou = this.add.image(255,780,'ltw_shou');
        this.ltw_shou.anchor.set(1,0.5);


        this.Time = this.time.events.loop(Phaser.Timer.SECOND * 2, function(){
            this.add.tween(this.ltw_shou).to({angle:20}, 100, Phaser.Easing.Linear.None, true,0,0,true);
        }, this);



        this.ltw = this.add.image(MyGame.GAME_WIDTH/2+10,440,'ltw');
        this.ltw.anchor.set(0.5,0);


        this.logo = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 20,'logo');
        this.logo.anchor.set(0.5,1);


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

