import {Game} from "./models/Game.js";

const startButton = document.querySelector('.btn.start');
const game = new Game()

startButton.addEventListener('click', () => game.startGame());
