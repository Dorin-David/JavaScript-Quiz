import { shuffleAnswers } from "./utils/shuffleAnswers.js";

const questionTitle = document.querySelector('.question-title');
const questionCode = document.querySelector('#question-code');
const options = document.querySelector('.answers-wrapper');

function populateQuestion(question, callback) {

    // const { title, code, answers, correct } = question;
    // questionTitle.textContent = title;
    questionTitle.textContent = question.getTitle()

    // questionCode.textContent = code;
    questionCode.textContent = question.getCode()

    //clear previous options
    options.innerHTML = '';
    //highlight code
    hljs.highlightAll();

    // const questionAnswers = Object.keys(answers);
    const questionAnswers = question.getAnswers().map(a => a.getId());


    //should outsource the shuffleAnswers function to the function?
    const shuffledAnswers = shuffleAnswers(question.getAnswers());

    //populate answers
    questionAnswers.forEach((answer, index) => {
        const { formatedAnswer, rawAnswer } = shuffledAnswers[index];
        //Answer {#id: "a", #content: "`Lydia` and `undefined`"}

        const div = document.createElement('div');
        div.innerHTML = formatedAnswer;
        div.classList.add('answer', answer);
        div.onclick = function () {
            // if (rawAnswer === correct) {
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
