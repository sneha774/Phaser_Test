import { createWelcomeState } from "./welcome.state.mjs";
import { createGameState } from "./game.state.mjs";
import { createChatState } from "./chat.state.mjs";
import { createLinksState } from "./links.state.mjs";

const game = new Phaser.Game(600, 400, Phaser.CANVAS, null);
game.state.add('welcome', createWelcomeState());
game.state.add('game', createGameState());
game.state.add('chat', createChatState());
game.state.add('links', createLinksState());
game.state.start('welcome');

