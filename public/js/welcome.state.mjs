class WelcomeState {
    constructor(game) {
        this.game = game;
    }
    
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#faa';
    }

    create() {

    }

    update() {

    }
}

export const createWelcomeState = (game) => {
    const state = new WelcomeState(game);
    return {
        preload: state.preload,
        create: state.create,
        update: state.update
    };
}