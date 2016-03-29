MyGame.s4 = function(game) {

};
MyGame.s4.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';

        self.pangzimusic.pause();

        self.zmnmusic = this.add.audio('zmn');



        this.shuangxi = this.add.image(MyGame.GAME_WIDTH/2,1100,'shuangxi');
        this.shuangxi.anchor.set(0.5,1);





        this.kuohao = this.add.sprite(0,300,'kuohao');
        this.mask = this.add.graphics(0, 0);
        this.size = 0
        this.kuohao.mask = this.mask;

        this.gaitou_2 = this.add.image(199,507,'gaitou_2');
        this.zmn = this.add.image(MyGame.GAME_WIDTH/2,1120,'zmn').anchor.set(0.5,1);

        this.gaitou_1 = this.add.image(MyGame.GAME_WIDTH,1200,'gaitou_1');
        this.gaitou_1.anchor.set(1);


        this.shoulian = this.add.image(215,783,'shoulian');




        this.dian = this.add.image(700,980,'dian');
        this.dian.anchor.set(0.5)
        this.dian2 = this.add.image(0,0,'dian');
        this.dian2.anchor.set(0.5)
        this.dian.addChild(this.dian2);
        this.add.tween(this.dian2).to({alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);
        this.add.tween(this.dian2.scale).to({x:1.6,y:1.6}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);

        this.dian.inputEnabled = true; //开启用户输入事件
        this.dian.events.onInputDown.add(function(){

            this.dian.kill();
            self.zmnmusic.play();
            this.add.tween(this.gaitou_1).to({y:1050}, 1000, Phaser.Easing.Cubic.Out, true,0);
            this.add.tween(this.gaitou_2).to({y:357}, 1000, Phaser.Easing.Cubic.Out, true,0).onComplete.add(function(){
                this.jueshi = this.add.image(255,829,'jushi');
                this.add.tween(this.jueshi).from({alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,0);
            },this)

            this.start = true;


            this.time.events.add(Phaser.Timer.SECOND * 1.2,function(){
                this.textJson = this.add.sprite(MyGame.GAME_WIDTH/2,40, 'page4_text_json');
                this.textJson.anchor.set(0.5,0);

                this.textJson.animations.add('page4_text_json');
                this.textJson.animations.play('page4_text_json',10,false);
            }, this);

            this.textSmall = this.add.image(MyGame.GAME_WIDTH/2,270,'page4_text_small');
            this.textSmall.anchor.set(0.5,0);
            this.add.tween(this.textSmall).from({alpha:0}, 400, Phaser.Easing.Linear.None, true,1500).onComplete.add(function(){
                goto('s5')
            },this)


        }, this);




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

