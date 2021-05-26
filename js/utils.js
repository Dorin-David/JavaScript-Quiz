/*
The Fisher-Yates algorithm, from https://javascript.info/array-methods (shuffle array task)
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}


function shuffleAnswers(answers) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const answersToArray = shuffleArray(Object.keys(answers)).map((answer, ind) => {
        return {
            formatedAnswer: `<span class="answer-letter">${letters[ind].toUpperCase()}</span><p>${answers[answer]}</p>`, 
            rawAnswer: answers[answer]
        }
    })

    return answersToArray
}


export { shuffleArray, shuffleAnswers }