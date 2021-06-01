import { Game } from './models/Game.js'

const optionsTime = document.querySelectorAll('.option-btn.time');
const optionsQuestions = document.querySelectorAll('.option-btn.difficulty button');

function selectTimeOption(event) {
    const target = event.target;
    for (let timeOption of optionsTime) {
        timeOption.classList.remove('selected')
    }
    target.classList.add('selected')

}

function selectDifficultyOption(event) {
    const target = event.target;
    for (let difficulty of optionsQuestions) {
        difficulty.closest('.option-btn').classList.remove('selected')
    }
    target.closest('.option-btn').classList.add('selected')
}

[...optionsTime].forEach(timeOption => timeOption.onclick = selectTimeOption);
[...optionsQuestions].forEach(questionOption => questionOption.onclick = selectDifficultyOption)


function getGameOptions() {
    const timeOption = document.querySelector('.option-btn.time.selected');
    const difficultyOption = document.querySelector('.option-btn.difficulty.selected');

    const timeValue = timeOption.dataset.time ? true : false;
    const questionsNumber = +difficultyOption.dataset.questions

    return new Game(timeValue, questionsNumber)
}

export { getGameOptions }