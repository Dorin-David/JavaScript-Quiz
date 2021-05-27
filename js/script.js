import populateQuestion from './populateQuestion.js';
import reviewAnswers from './reviewAnswers.js';
import { shuffleArray } from './utils.js'
import { questions } from './questions.js';

const startButton = document.querySelector('.btn.start');
const nextButton = document.querySelector('.next-btn');
const descriptionBox = document.querySelector('.description');
const codeSandBox = document.querySelector('.sand-box');
const reviewCodeSandbox = document.querySelector('.review')
const score = document.querySelector('.score-wrapper');
const reviewButton = document.querySelector('.btn-review');
const endReviewButton = document.querySelector('.review-btn.end')

function startGame() {
    const answers = document.querySelectorAll('.answer');
    descriptionBox.classList.add('hidden');
    codeSandBox.classList.toggle('hidden');
    score.classList.add('hidden');

    //clean previous attempts
    for (let answer of answers) {
        answer.classList.remove('correct', 'incorrect', 'disabled')
    }
}

function gamePlaying() {
    let correctAnswers = 0;
    let index = 0;
    let answers = shuffleArray([...questions]).slice(0, 2);

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
            const restartButton = finalScore.nextElementSibling;
            const incorrectAnswers = answers.filter(q => !q.isCorrect);

            codeSandBox.classList.toggle('hidden');
            score.classList.remove('hidden');
            finalScore.textContent = `correct answers: ${correctAnswers}/${answers.length}`

            correctAnswers = 0;
            index = 0;
            answers = shuffleArray([...questions]).slice(0, 2)

            restartButton.onclick = startGame;
            reviewButton.onclick = function () {
                reviewCodeSandbox.classList.remove('hidden')
                score.classList.add('hidden')
                if (incorrectAnswers.length > 0) {
                    reviewAnswers(incorrectAnswers);
                    //highlight code
                    hljs.highlightAll();
                }
            }
            endReviewButton.onclick = function () {
                reviewCodeSandbox.classList.add('hidden')
                startGame()
            }

        }
    }
}

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', gamePlaying())
