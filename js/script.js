import { getGameOptions } from './selectGameOptions.js';

const startButton = document.querySelector('.btn.start');

//get previous selected style from localStorage
(function () {
    const currentStyle = document.querySelector('#code-style');
    const currentThemePath = localStorage.getItem('currentThemePath')
    if (currentThemePath) currentStyle.href = `../code_styles/${currentThemePath}.css`;

}())

startButton.addEventListener('click', () => {
    const game = getGameOptions();
    game.startGame()

});
