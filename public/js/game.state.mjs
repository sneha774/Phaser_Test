class GameState {
    constructor(game) {
        this.game = game;
    }
    
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#afa';
    }

    create() {

    }

    update() {

    }
}

export const createGameState = (game) => {
    const state = new GameState(game);
    return {
        preload: state.preload,
        create: state.create,
        update: state.update
    };
}