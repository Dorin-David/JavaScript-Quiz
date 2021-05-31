/*
The Fisher-Yates algorithm, from https://javascript.info/array-methods (shuffle array task)
*/

/**
 * Shuffle an array by using the Fisher-Yates algorithm.
 * @param {Array<any>} array - The array to shuffle.
 * @retun {Array<any>} the shuffled array.
 */
export function shuffleArray(array) {
    // the for (...) below could be rewritten as: forEach((element, index) => { ... } )
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?retiredLocale=it
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
