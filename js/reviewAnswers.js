const reviewQuestionTitle = document.querySelector('.review-question');
const reviewCode = document.querySelector('#review-code');
const reviewExplanation = document.querySelector('.review-explanation');
const reviewCorrectAnswer = document.querySelector('.correct-answer')
const reviewPrevButton = document.querySelector('.review-btn.previous');
const reviewNextButton = document.querySelector('.review-btn.next');

function reviewAnswers(incorrectAnswers) {
    let index = 0;
    function scrollReviewAnswers() {
        const currentIncorrectAnswer = incorrectAnswers[index];

        reviewQuestionTitle.textContent = currentIncorrectAnswer.getTitle();
        reviewCode.textContent = currentIncorrectAnswer.getCode();
        reviewCorrectAnswer.textContent = `Correct answer: ${currentIncorrectAnswer.getCorrect()}`;
        reviewExplanation.textContent = currentIncorrectAnswer.getExplanation()
        hljs.highlightAll();
    }

    reviewPrevButton.onclick = function () {
        index === 0 ? index = incorrectAnswers.length : index--
        scrollReviewAnswers(); 
    }

    reviewNextButton.onclick = function () {
        index === incorrectAnswers.length ? index = 0 : index++
        scrollReviewAnswers()
    }

    scrollReviewAnswers()

}

export default reviewAnswers