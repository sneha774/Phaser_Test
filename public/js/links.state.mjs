class LinksState {
    constructor(game) {
        this.game = game;
    }
    
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#aaa';
    }

    create() {

    }

    update() {

    }
}

export const createLinksState = (game) => {
    const state = new LinksState(game);
    return {
        preload: state.preload,
        create: state.create,
        update: state.update
    };
}