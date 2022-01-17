class ChatState {
    constructor(game) {
        this.game = game;
    }
    
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#aaf';
    }

    create() {

    }

    update() {

    }
}

export const createChatState = (game) => {
    const state = new ChatState(game);
    return {
        preload: state.preload,
        create: state.create,
        update: state.update
    };
}