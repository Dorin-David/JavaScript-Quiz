import { getGameOptions } from './selectGameOptions.js'

const startButton = document.querySelector('.btn.start');

startButton.addEventListener('click', () => {
    const game = getGameOptions();
    game.startGame()

});
