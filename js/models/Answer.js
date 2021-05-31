/* @Class
* Represents the Answer
* */
export class Answer {
    #id
    #content

    /**
     * Builds a new answer
     * @param {String} id the answer's id
     * @param {String} content the answer
     * */
    constructor(id, content) {
        this.#id = id
        this.#content = content
    }

    /**
     * Return the answer's id
     * @return {String} the answer's id
     * */
    getId () {
        return this.#id
    }

    /**
     * Return the answer's content
     * @return {String} the answer's content
     * */
    getContent () {
        return this.#content
    }

}
