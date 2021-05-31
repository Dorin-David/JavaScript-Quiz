import {shuffleArray} from "../utils/shuffleArray.js";
import {questions} from "../questions/questions.js";
import populateQuestion from "../populateQuestion.js";
import reviewAnswers from "../reviewAnswers.js";

const startButton = document.querySelector('.btn.start');
const nextButton = document.querySelector('.next-btn');
const descriptionBox = document.querySelector('.description');
const codeSandBox = document.querySelector('.sand-box');
const reviewCodeSandbox = document.querySelector('.review')
const score = document.querySelector('.score-wrapper');
const reviewButton = document.querySelector('.btn-review');
const endReviewButton = document.querySelector('.review-btn.end');

/* @Class
* Represents the Game
* */
export class Game {

    constructor() {}

    startGame() {
        const answers = document.querySelectorAll('.answer');
        descriptionBox.classList.add('hidden');
        codeSandBox.classList.toggle('hidden');
        score.classList.add('hidden');

        for (let answer of answers) {
            answer.classList.remove('correct', 'incorrect', 'disabled');
        }
        nextButton.onclick = this.gamePlaying()
    }

    gamePlaying() {
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
                const restartButton = finalScore.nextElementSibling;
                const incorrectAnswers = answers.filter(q => !q.isCorrect);

                codeSandBox.classList.toggle('hidden');
                score.classList.remove('hidden');
                finalScore.textContent = `correct answers: ${correctAnswers}/${answers.length}`

                correctAnswers = 0;
                index = 0;
                answers = shuffleArray([...questions]).slice(0, 2)


                console.log(`incorrect answers: ${incorrectAnswers.length}`)

                if(incorrectAnswers.length > 0){
                    reviewButton.classList.remove('hidden');
                } else {
                    reviewButton.classList.add('hidden')
                }

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

                restartButton.onclick = startGame;
            }
        }
    }


}
