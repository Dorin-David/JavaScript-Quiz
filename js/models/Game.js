import { Questions } from '../models/Questions.js';
import { questions as questionsList } from "../questions/questions.js";

import populateQuestion from "../populateQuestion.js";
import reviewAnswers from "../reviewAnswers.js";

const nextButton = document.querySelector('.next-btn');
const descriptionBox = document.querySelector('.description');
const codeSandBox = document.querySelector('.sand-box');
const optionsBox = document.querySelector('.game-options');
const reviewCodeSandbox = document.querySelector('.review')
const score = document.querySelector('.score-wrapper');
const userTimeCounter = document.querySelector('.timer')
const reviewButton = document.querySelector('.btn-review');
const endReviewButton = document.querySelector('.review-btn.end');

/* @Class
* Represents the Game
* */
export class Game {

    constructor(time, numberOfQuestions) {

        if (time) {
            this._time = 60
        } else {
            this._time = Infinity
        }

        this._numberOfQuestions = numberOfQuestions

    }

    startGame() {
        const answers = document.querySelectorAll('.answer');
        descriptionBox.classList.add('hidden');
        optionsBox.classList.add('hidden')
        codeSandBox.classList.toggle('hidden');
        score.classList.add('hidden');
        if(this._time <= 60){
            userTimeCounter.classList.remove('hidden')
        }

        for (let answer of answers) {
            answer.classList.remove('correct', 'incorrect', 'disabled');
        }
        nextButton.onclick = this.gamePlaying()
    }

    gamePlaying() {
        let correctAnswers = 0;
        let index = 0;
        let timeCounter = this._time;
        let timer = setInterval(() => {
            timeCounter--
            userTimeCounter.textContent = timeCounter;
            if(timeCounter === 0) endGame()
        }, 1000)
        let questions = new Questions(questionsList);

        questions.fetchQuestions()
        questions.shuffleQuestions()
        questions.getPortionOfQuestions(this._numberOfQuestions)


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

        const endGame = () => {
            const finalScore = score.firstElementChild;
            const restartButton = finalScore.nextElementSibling;
            const incorrectAnswers = questions.getIncorrectAnswers();

            codeSandBox.classList.toggle('hidden');
            score.classList.remove('hidden');
            userTimeCounter.classList.add('hidden')
            finalScore.textContent = `correct answers: ${correctAnswers}/${questions.getQuestions.length}`

            correctAnswers = 0;
            index = 0;
            timeCounter = this._time;
            userTimeCounter.textContent = 60;
            questions = new Questions(questionsList);
            clearInterval(timer);

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
                timer = setInterval(() => {
                    timeCounter--
                    userTimeCounter.textContent = timeCounter;
                    if(timeCounter === 0) endGame()
                }, 1000)
            }

            restartButton.onclick = () => this.startGame();
        }

        populateQuestion(questions.getQuestions[index], checkAnswer)

        return () => {
            nextButton.setAttribute('disabled', 'disabled')

            if (index < questions.getQuestions.length && timeCounter > 0) {
                populateQuestion(questions.getQuestions[index], checkAnswer)
            } else {
                endGame()
            }
        }
    }


}
