MyGame.s6 = function(game) {

};
MyGame.s6.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';
        self.feibiaomusci = this.add.audio('feibiaomusic');



        this.haibao = this.add.image(MyGame.GAME_WIDTH/2,80,'haibao');
        this.haibao.anchor.set(0.5,0);

        this.pep = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT,'pep');
        this.pep.anchor.set(0.5,1);

        this.feibiao = this.add.image(600,130,'feibiao');
        this.feibiao.anchor.set(0,1);

        this.time.events.add(Phaser.Timer.SECOND * 1.5,function(){
            self.feibiaomusci.play();
        }, this);



        this.add.tween(this.feibiao).from({x:900,y:0}, 200, Phaser.Easing.Linear.None, true,1500).onComplete.add(function(){
            this.add.tween(this.feibiao).to({angle:20}, 20, Phaser.Easing.Linear.None, true,0,5,true);
        },this);

        this.han1 = this.add.image(160,930,'han1');
        this.add.tween(this.han1).from({alpha:0,y:920}, 1000, Phaser.Easing.Linear.None, true,2000)
        this.han2 = this.add.image(380,780,'han2');
        this.add.tween(this.han2).from({alpha:0,y:770}, 1000, Phaser.Easing.Linear.None, true,2000)
        this.han3 = this.add.image(605,935,'han3');
        this.add.tween(this.han3).from({alpha:0,y:925}, 1000, Phaser.Easing.Linear.None, true,2000).onComplete.add(function(){
            goto('s7')
        },this)


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

    }
};

