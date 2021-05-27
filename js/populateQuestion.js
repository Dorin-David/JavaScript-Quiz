import { shuffleAnswers } from './utils.js';

const questionTitle = document.querySelector('.question-title');
const questionCode = document.querySelector('#question-code');
const options = document.querySelector('.answers-wrapper');

function populateQuestion(question, callback) {

    const { title, code, answers, correct } = question;

    questionTitle.textContent = title;
    questionCode.textContent = code;

    //clear previous options
    options.innerHTML = '';
    //highlight code
    hljs.highlightAll();

    const questionAnswers = Object.keys(answers);

    const shuffledAnswers = shuffleAnswers(answers);


    //populate answers
    questionAnswers.forEach((answer, index) => {
        const { formatedAnswer, rawAnswer } = shuffledAnswers[index];
        const div = document.createElement('div');
       

        div.innerHTML = formatedAnswer
        div.classList.add('answer', answer);
        div.onclick = function () {
            
            if (rawAnswer === correct) {
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