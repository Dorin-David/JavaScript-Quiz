import { shuffleAnswers } from "./utils/shuffleAnswers.js";

const questionTitle = document.querySelector('.question-title');
const questionCode = document.querySelector('#question-code');
const options = document.querySelector('.answers-wrapper');

function populateQuestion(question, callback) {

    questionTitle.textContent = question.getTitle()
    questionCode.textContent = question.getCode()

    //clear previous options
    options.innerHTML = '';
    //highlight code
    hljs.highlightAll();

    const questionAnswers = question.getAnswers().map(a => a.getId());

    const shuffledAnswers = shuffleAnswers(question.getAnswers());

    //populate answers
    questionAnswers.forEach((answer, index) => {
        const { formatedAnswer, rawAnswer } = shuffledAnswers[index];

        const div = document.createElement('div');
        div.innerHTML = formatedAnswer;
        div.classList.add('answer', answer);
        
        div.onclick = function () {
            if (rawAnswer.getContent() === question.getCorrect()) {
                this.classList.add('correct')
                callback(true);
            } else {
                this.classList.add('incorrect')
                callback(false)
            }
            [...document.querySelectorAll('.answer')].forEach(answer => {
                answer.onclick = null
                answer.classList.add('disabled')
            })
        }
        options.append((div))
    })

}


export default populateQuestion
