/* @Class
* Represents the Question
* */
export class Question {

    /**
     * Builds a new question
     * @param {String} title the question's title
     * @param {String} code the question's code
     * @param {Array<Answer>} answers the answers' list
     * @param {String} correct the correct answer
     * @param {String} explanation the answer's explanation
     * */
    constructor(title, code, answers, correct, explanation) {
        this._title = title
        this._code = code
        this._answers = answers
        this._correct = correct
        this._explanation = explanation
    }

    /**
     * Returns the question's title
     * @return {String} the question's title
     * */
    getTitle () {
        return this._title
    }

    /**
     * Returns the question's code
     * @return {String} the question's code
     * */
    getCode () {
        return this._code
    }

    /**
     * Returns the question's answers
     * @return {Array<Answer>} the question's answers
     * */
    getAnswers () {
        return this._answers
    }

    /**
     * Returns the question's correct answer
     * @return {String} the question's correct answer
     * */
    getCorrect () {
        return this._correct
    }

    /**
     * Returns the question's correct answer explanation
     * @return {String} the question's correct answer explanation
     * */
    getExplanation () {
        return this._explanation
    }

}
