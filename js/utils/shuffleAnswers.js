import {shuffleArray} from "./shuffleArray.js";

/**
 * Shuffle a list of answers.
 * @param {Array<Object>} answers - The array of answers to shuffle.
 * @retun {Array<Object>} the array of shuffled answers.
 */
export function shuffleAnswers(answers) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

    // here you can directly return the mapped array, there is no need to store in a variabile before, and then return it
    // save some bits
    const answersToArray = shuffleArray(Object.keys(answers)).map((answer, ind) => {
        return {
            formatedAnswer: `<span class="answer-letter">${letters[ind].toUpperCase()}</span><p>${answers[answer]}</p>`,
            rawAnswer: answers[answer]
        }
    })

    return answersToArray
}
