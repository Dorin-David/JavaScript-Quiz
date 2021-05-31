import {shuffleArray} from "../utils/shuffleArray.js";


/* @Class
* Represents the Questions' list
* */
export class Questions {
    #questions

    /**
     * Builds a new questions list
     * @param {Array<Question>} questions the questions list
     * */
    constructor(questions) {
        if (questions)
            this.#questions = questions
        else
            this.#questions = []
    }

    /**
     * Returns the questions list
     * @return {Array<Question>} the questions list
     * */
    getQuestions () {
        return this.#questions
    }

    /**
     * Returns the question at the given index
     * @param {Number} index the index of the desired question
     * @return {Question} the question
     * */
    getQuestion (index) {
        return this.#questions[index]
    }

    /**
     * Add a new question to the list
     * @param {Question} question the new question to add
     * */
    addQuestion (question) {
        this.#questions.push(question)
    }

    /**
     * Shuffles the current questions list
     * */
    shuffleQuestions () {
        this.#questions = shuffleArray([...this.#questions])
    }
}
