import populateQuestion from './populateQuestion.js';
import {shuffleArray} from './utils.js'
import { questions } from './questions.js';

const startButton = document.querySelector('.btn.start');
const nextButton = document.querySelector('.next-btn');
const descriptionBox = document.querySelector('.description');
const sandBox = document.querySelector('.sand-box');
const score = document.querySelector('.score-wrapper');

function startGame() {
    // const answers = document.querySelector('')
    descriptionBox.classList.add('hidden');
    sandBox.classList.toggle('hidden');
    score.classList.add('hidden');

}

function gamePlaying() {
    let correctAnswers = 0;
    let index = 0;
    let answers = shuffleArray([...questions]);

    function checkAnswer(correct) {
        if (correct) {
            nextButton.classList.add('shake-rotate');
            setTimeout(() => {
                nextButton.classList.remove('shake-rotate');
            }, 300)
            correctAnswers++
            answers[index].isCorrect = true
        }
        index++
        nextButton.removeAttribute('disabled')
    }

    populateQuestion(answers[index], checkAnswer)

    return function () {
        nextButton.setAttribute('disabled', 'disabled')

        if (index < answers.length) {
            populateQuestion(answers[index], checkAnswer)
        } else {
            const finalScore = score.firstElementChild;
            const restartButton = score.lastElementChild;

            sandBox.classList.toggle('hidden');
            score.classList.remove('hidden');
            finalScore.textContent = `correct answers: ${correctAnswers}/${answers.length}`

            correctAnswers = 0;
            index = 0;
            restartButton.onclick = function () {
                startGame()
            }

        }
    }
}

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', gamePlaying())
