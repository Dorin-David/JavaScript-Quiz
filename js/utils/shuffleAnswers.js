import {shuffleArray} from "./shuffleArray.js";

/**
 * Shuffle a list of answers.
 * @param {Array<Object>} answers - The array of answers to shuffle.
 * @retun {Array<Object>} the array of shuffled answers.
 */
export function shuffleAnswers(answers) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

    return shuffleArray(Object.keys(answers)).map((answer, ind) => {
        return {
            formatedAnswer: `<span class="answer-letter">${letters[ind].toUpperCase()}</span><p>${answers[answer].getContent()}</p>`,
            rawAnswer: answers[answer]
        }
    })

}
