import { fetchQuestions } from '../utils/fetchQuestions.js'


// import { shuffleArray } from "../utils/shuffleArray.js";
// import { questions } from "../questions/questions.js";
import populateQuestion from "../populateQuestion.js";
import reviewAnswers from "../reviewAnswers.js";

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

    constructor() { }

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
        let questions = fetchQuestions();
        questions.shuffleQuestions()


        function checkAnswer(correct) {
            if (correct) {
                nextButton.classList.add('shake-rotate');
                setTimeout(() => {
                    nextButton.classList.remove('shake-rotate');
                }, 300)
                correctAnswers++
            } else {
                questions.marAnswerkAsIncorrect(index)
            }
            index++
            nextButton.removeAttribute('disabled')
        }

        populateQuestion(questions.getQuestions[index], checkAnswer)

        return () => {
            nextButton.setAttribute('disabled', 'disabled')

            if (index < questions.getQuestions.length) {
                populateQuestion(questions.getQuestions[index], checkAnswer)
            } else {
                const finalScore = score.firstElementChild;
                const restartButton = finalScore.nextElementSibling;
                const incorrectAnswers = questions.getIncorrectAnswers();

                codeSandBox.classList.toggle('hidden');
                score.classList.remove('hidden');
                finalScore.textContent = `correct answers: ${correctAnswers}/${questions.getQuestions.length}`

                correctAnswers = 0;
                index = 0;
                questions.shuffleQuestions()
                
                if (incorrectAnswers.length > 0) {
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
                endReviewButton.onclick = () => {
                    reviewCodeSandbox.classList.add('hidden')
                    this.startGame()
                }

                restartButton.onclick = () => this.startGame();
            }
        }
    }


}