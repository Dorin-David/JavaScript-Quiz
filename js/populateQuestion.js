function populateQuestion(question, callback) {
    const questionTitle = document.querySelector('.question-title');
    const questionCode = document.querySelector('#question-code');
    const options = document.querySelector('.answers-wrapper');
    const { title, code, answers, correct } = question;

    questionTitle.textContent = title + '?';
    questionCode.textContent = code;

    const questionAnswers = Object.keys(answers);

    //clear previous options
    options.innerHTML = ''; 
    //highlight code
    hljs.highlightAll();

    //populate answers
    questionAnswers.forEach(answer => {
        const div = document.createElement('div');
        div.classList.add('answer', answer);
        div.innerHTML = `<span class="answer-letter">${answer.toUpperCase()}</span><p>${answers[answer]}</p>`;
        div.onclick = function () {
            if (answer === correct) {
                this.classList.add('correct')
                callback(true)
            } else {
                this.classList.add('incorrect')
                callback(false)
            }
            [...document.querySelectorAll('.question')].forEach(answer => {
                answer.onclick = null
                answer.classList.add('disabled')
            })
        }
        options.append((div))
    })


}


export default populateQuestion