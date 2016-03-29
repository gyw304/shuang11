var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 750;
    MyGame.GAME_HEIGHT = 1206;
};
MyGame.Boot.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#ff3131';
        this.load.image('loadingBar_1', 'assets/loadingBar_1.png?23');
        this.load.image('loadingBar_0', 'assets/loadingBar_0.png?22');
        this.load.atlasJSONHash('loading_json', 'assets/loading_json.png?1120', 'assets/loading_json.json?1211');
        this.load.image('loading_shou', 'assets/loading_shou.png?2');
        this.load.image('loading_xin', 'assets/loading_xin.png?2');
    },
    create: function() {
        this.stage.backgroundColor = '#ff3131';
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    }
};