MyGame.Preloader = function(game){
};
var s;
MyGame.Preloader.prototype = {

    preload: function() {
        s=this;
        this.loadBar = this.add.group();

        this.loadBar.create(0,0,'loadingBar_0');
        this.preloadBar = this.loadBar.create(6,6,'loadingBar_1');
        this.load.setPreloadSprite(this.preloadBar);

        this.loadBar.x = MyGame.GAME_WIDTH / 2 - 166;
        this.loadBar.y = MyGame.GAME_HEIGHT / 2 + 150;

        this.loading_shou = this.add.image(445,550,'loading_shou');
        this.loading_shou.anchor.set(0,1);


        this.Time = this.time.events.loop(Phaser.Timer.SECOND * 2, function(){
            this.add.tween(this.loading_shou).to({angle:20}, 100, Phaser.Easing.Linear.None, true,0,0,true);
            this.loading_xin = this.add.image(495,450,'loading_xin');
            this.loading_xin.anchor.set(0,1);
            this.add.tween(this.loading_xin).to({alpha:0,x:515,y:400}, 1000, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                s.loading_xin.kill();
            })
            this.add.tween(this.loading_xin.scale).to({x:1.5,y:1.5}, 1000, Phaser.Easing.Linear.None, true,0);
        }, this);

        this.loading = this.add.sprite(MyGame.GAME_WIDTH/2 - 200,280, 'loading_json');



        this.loading.animations.add('loading_json');
        this.loading.animations.play('loading_json',5,true);


     this.load.image('blink','assets/blink.gif?1');
     this.load.image('niangniang','assets/niangniang.png?2');
     this.load.image('niangniang2','assets/niangniang2.png?2');
     this.load.image('taiyang','assets/taiyang.png');
     this.load.image('shanzi','assets/shanzi.png');
     this.load.image('jinzhuan','assets/jinzhuan.png');
     this.load.image('dilie1','assets/dilie1.png?1');
     this.load.image('dilie2','assets/dilie2.png');
     this.load.image('hou','assets/hou.png');
     this.load.image('shuang11','assets/shuang11.png');
     this.load.image('jushuo','assets/jushuo.png');

     this.load.image('next','assets/next.png');


     this.load.image('che','assets/che.png');
     this.load.image('lun1','assets/lun1.png');
     this.load.image('lun2','assets/lun2.png');
     this.load.image('kuohao','assets/kuohao.png');
     this.load.image('logo','assets/logo.png');
     this.load.image('f1','assets/f1.png');
     this.load.image('f2','assets/f2.png');
     this.load.image('f3','assets/f3.png');
     this.load.atlasJSONHash('page2_text_json', 'assets/page2_text_json.png?110', 'assets/page2_text_json.json?111');


     this.load.image('hua1','assets/hua1.png');
     this.load.image('hua2','assets/hua2.png');
     this.load.image('hua3','assets/hua3.png');
     this.load.atlasJSONHash('pangzi', 'assets/pangzi_json.png?10', 'assets/pangzi_json.json?11');
     this.load.atlasJSONHash('page3_text_json', 'assets/page3_text_json.png?10', 'assets/page3_text_json.json?11');
     this.load.image('page3_text_small','assets/page3_text_small.png');

     this.load.image('shuangxi','assets/shuangxi.png');
     this.load.image('zmn','assets/zmn.png');
     this.load.image('gaitou_1','assets/gaitou_1.png');
     this.load.image('gaitou_2','assets/gaitou_2.png');
     this.load.image('shoulian','assets/shoulian.png');
     this.load.image('jushi','assets/jushi.png');
     this.load.atlasJSONHash('page4_text_json', 'assets/page4_text_json.png?10', 'assets/page4_text_json.json?11');
     this.load.image('page4_text_small','assets/page4_text_small.png');
     this.load.image('dian','assets/dian.png');

     this.load.image('ltw','assets/ltw.png');
     this.load.image('ltw_shou','assets/ltw_shou.png');
     this.load.image('baota','assets/baota.png');
     this.load.atlasJSONHash('page5_text_json', 'assets/page5_text_json.png?10', 'assets/page5_text_json.json?11');
     this.load.image('page5_text_small','assets/page5_text_small.png');

     this.load.image('haibao','assets/haibao.png');
     this.load.image('pep','assets/pep.png');
     this.load.image('feibiao','assets/feibiao.png');
     this.load.image('piaodai','assets/piaodai.png');
     this.load.image('han1','assets/han1.png');
     this.load.image('han2','assets/han2.png');
     this.load.image('han3','assets/han3.png');

     this.load.image('youchuo','assets/youchuo.png');
     this.load.image('zhang','assets/zhang.png?1');
     this.load.image('zi','assets/zi.png');
     this.load.image('fuli','assets/fuli.png');
     this.load.image('backIndex','assets/backIndex.png');

        this.load.audio('ltw_sound', 'assets/ltw_sound.mp3?1223');
        this.load.audio('jinzhuan', 'assets/jinzhuan.mp3?1223');
        this.load.audio('gaizhang', 'assets/gaizhang.mp3?1223');
        this.load.audio('mache', 'assets/mache.mp3?1223');
        this.load.audio('zmn', 'assets/zmn.mp3?1223');
        this.load.audio('feibiaomusic', 'assets/feibiao.mp3?1223');
        this.load.audio('pangzi', 'assets/pangzi.mp3?1223');

    },
    create: function() {
        this.stage.backgroundColor = '#ff3131';
        this.state.start('s1');
    }
};