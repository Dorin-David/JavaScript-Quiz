/* @Class
* Represents the Question
* */
export class Question {

    #title
    #code
    #answers
    #correct
    #explanation

    /**
     * Builds a new question
     * @param {String} title the question's title
     * @param {String} code the question's code
     * @param {Array<Answer>} answers the answers' list
     * @param {String} correct the correct answer
     * @param {String} explanation the answer's explanation
     * */
    constructor(title, code, answers, correct, explanation) {
        this.#title = title
        this.#code = code
        this.#answers = answers
        this.#correct = correct
        this.#explanation = explanation
    }

    /**
     * Returns the question's title
     * @return {String} the question's title
     * */
    getTitle () {
        return this.#title
    }

    /**
     * Returns the question's code
     * @return {String} the question's code
     * */
    getCode () {
        return this.#code
    }

    /**
     * Returns the question's answers
     * @return {Array<Answer>} the question's answers
     * */
    getAnswers () {
        return this.#answers
    }

    /**
     * Returns the question's correct answer
     * @return {String} the question's correct answer
     * */
    getCorrect () {
        return this.#correct
    }

    /**
     * Returns the question's correct answer explanation
     * @return {String} the question's correct answer explanation
     * */
    getExplanation () {
        return this.#explanation
    }

}
