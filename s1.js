MyGame.s1 = function(game) {

};

var next;
var next2;
var self;

MyGame.s1.prototype = {
    create: function() {
        self = this;
        this.stage.backgroundColor = '#ff3131';

        this.taiyang = this.add.image(MyGame.GAME_WIDTH/2,550,'taiyang');
        this.taiyang.anchor.set(0.5);
        this.add.tween(this.taiyang).to({angle:145}, 1000, Phaser.Easing.Cubic.Out, true,0);

        this.jushuo = this.add.image(140,590,'jushuo');

        this.add.tween(this.jushuo).from({alpha:0}, 1000, Phaser.Easing.Cubic.InOut, true,1000)

        this.niangniang = this.add.image(139,-800,'niangniang');
        this.shanzi = this.add.image(181,416,'shanzi');
        this.shanzi.anchor.set(0.58,.93);
        this.niangniang.addChild(this.shanzi);
        this.add.tween(this.shanzi).to({angle:10}, 500, Phaser.Easing.Linear.None, true,0,-1,true);

        this.add.tween(this.niangniang).to({y:230}, 250, Phaser.Easing.Cubic.InOut, true,2000).onComplete.add(function(){
            this.add.tween(this.niangniang).to({y:210}, 300, Phaser.Easing.Cubic.InOut, true,0)
        },this);

        this.dilie1 = this.add.sprite(MyGame.GAME_WIDTH/2,825,'dilie1');
        this.dilie1.anchor.set(0.5,0);

        this.jinzhuan = this.add.image(MyGame.GAME_WIDTH/2,850,'jinzhuan');
        this.jinzhuan.anchor.set(0.5,0);

        this.dilie2 = this.add.image(200,963,'dilie2');

        this.shuang11 = this.add.image(MyGame.GAME_WIDTH/2,635,'shuang11');
        this.shuang11.anchor.set(0.5,0);
        this.add.tween(this.shuang11).from({alpha:0}, 1000, Phaser.Easing.Cubic.InOut, true,1500)

        this.start = false;

        this.add.tween(this.jinzhuan).from({y:-200}, 200, Phaser.Easing.Cubic.InOut, true,2850).onComplete.add(function(){
            this.start = true;
            this.niangniang.loadTexture('niangniang2', 0, false);
            this.hou = this.add.image(380,490,'hou');
            this.hou.anchor.set(1,0.5);
            this.add.tween(this.hou.scale).from({x:0,y:0}, 400, Phaser.Easing.Cubic.InOut, true).onComplete.add(function(){
                this.add.tween(this.hou).to({x:385}, 50, Phaser.Easing.Linear.None, true,0,-1,true)
            },this);

            this.shake(this,this.jinzhuan,10,0);
            this.shake(this,this.shuang11,10,0);
            this.shake(this,this.taiyang,10,0);
            this.shake(this,this.niangniang,10,0);
            this.shake(this,this.jushuo,10,0);
            this.shake(this,this.dilie1,10,0);
            this.shake(this,this.dilie2,10,0);

            this.jinzhuan = this.add.audio('jinzhuan');
            this.jinzhuan.play();

            goto('s2')

        },this);

        /*this.add.tween(this.dilie1).from({alpha:0}, 200, Phaser.Easing.Cubic.InOut, true,2880);*/
        this.add.tween(this.dilie2).from({alpha:0}, 200, Phaser.Easing.Cubic.InOut, true,2880);


        this.mask = this.add.graphics(0, 0);
        this.size = 0
        this.dilie1.mask = this.mask;



        this.blink = this.add.sprite(0,0,"blink");
        this.fadeTween = this.add.tween(this.blink);
        this.fadeTween.to({
            alpha:0
        },2000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                this.blink.kill()
            },this)

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
    },
    update: function() {
        if(!this.start || this.size>=750) return;
        this.mask.clear();
        this.size+=50;
        this.mask.beginFill(0xFF0000, 1);
        this.mask.drawCircle(MyGame.GAME_WIDTH/2, 1050, this.size);
    }
};

function goto(s)
{
    self.next = self.add.image(660,1130,'next');
    self.next.anchor.set(0.5);
    self.next2 = self.add.image(0,0,'next');
    self.next2.anchor.set(0.5);
    self.next.addChild(self.next2);
    self.add.tween(self.next2).to({alpha:0}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);
    self.add.tween(self.next2.scale).to({x:1.5,y:1.5}, 1000, Phaser.Easing.Cubic.Out, true,0,-1,false);
    self.next.inputEnabled = true;
    self.next.events.onInputDown.add(function(){
        self.state.start(s);
    }, this);

}

