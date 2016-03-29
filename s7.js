MyGame.s7 = function(game) {

};
MyGame.s7.prototype = {
    create: function() {
        this.stage.backgroundColor = '#ff3131';


        this.youchuo = this.add.image(0,700,'youchuo');

        /**/

        this.dian = this.add.image(380,790,'dian');
        this.dian.alpha = .8
        this.dian.anchor.set(0.5)
        this.dian2 = this.add.image(0,0,'dian');
        this.dian2.anchor.set(0.5)
        this.dian.addChild(this.dian2);
        this.add.tween(this.dian2).to({alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);
        this.add.tween(this.dian2.scale).to({x:1.6,y:1.6}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);


        this.dian.inputEnabled = true; //开启用户输入事件
        this.dian.events.onInputDown.add(function(){

            this.dian.kill();
            this.gaizhang = this.add.audio('gaizhang');
            this.gaizhang.play();
            this.zhang = this.add.image(220,310,'zhang');
            this.fuli = this.add.image(165,540,'fuli');
            this.fuli.anchor.set(0.5);
            this.zhang.addChild(this.fuli);
            this.add.tween(this.zhang).from({y:-600}, 400, Phaser.Easing.Cubic.In, true,0).onComplete.add(function(){
                this.shake(this,this.youchuo,10,0);
                this.shake(this,this.zhang,10,0);
                this.zi = this.add.image(MyGame.GAME_WIDTH/2,80,'zi');
                this.zi.anchor.set(0.5,0);
                this.add.tween(this.zi).from({alpha:0}, 400, Phaser.Easing.Cubic.In, true,0)
                this.add.tween(this.fuli.scale).to({x:.95,y:.95}, 400,  Phaser.Easing.Cubic.Out, true,0,-1,true);



                this.fuli.inputEnabled = true;
                this.fuli.events.onInputDown.add(function(){
                    window.location.href = 'http://www.baidu.com';
                },this);

                this.add.button(MyGame.GAME_WIDTH/2,1000,'backIndex',function(){
                    this.state.start('s1');
                },this).anchor.set(0.5,0);

            },this)

        }, this);




        this.blink = this.add.sprite(0,0,"blink");
        this.fadeTween = this.add.tween(this.blink);
        this.fadeTween.to({
            alpha:0
        },2000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            this.blink.kill()
        },this);

    },
    shake : function(self,obj,shakeSpeed,later){

        var oX = obj.x;
        var oY = obj.y;

        self.add.tween(obj).to({
            x:oX+2,y:oY-7,angle:1.5
        },shakeSpeed,Phaser.Easing.Cubic.Out,true,later).onComplete.add(function(){
                self.add.tween(obj).to({
                    x:oX-8,y:oY-8,angle:.5
                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                        self.add.tween(obj).to({
                            x:oX-8,y:oY+5,angle:-.5
                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                self.add.tween(obj).to({
                                    x:oX-7,y:oY+1,angle:-3.5
                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                        self.add.tween(obj).to({
                                            x:oX-7,y:oY+5,angle:-2.5
                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                self.add.tween(obj).to({
                                                    x:oX-3,y:oY+2,angle:-.5
                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                        self.add.tween(obj).to({
                                                            x:oX-8,y:oY-1,angle:-3.5
                                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                self.add.tween(obj).to({
                                                                    x:oX-5,y:oY+3,angle:2.5
                                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                        self.add.tween(obj).to({
                                                                            x:oX+2,y:oY+7,angle:.5
                                                                        },shakeSpeed,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                                                                                self.add.tween(obj).to({
                                                                                    x:oX,y:oY,angle:0
                                                                                },shakeSpeed,Phaser.Easing.Cubic.Out,true)
                                                                            })
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    }
};

