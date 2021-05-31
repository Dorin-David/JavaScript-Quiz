import {questions} from "../questions/questions.js";
import {Question} from "../models/Question.js";
import {Questions} from "../models/Questions.js";
import {Answer} from "../models/Answer.js";

/**
 * Map an array of string to an array of Answer
 * @param {Array<String>} answers the list of answers as string
 * @return {Array<Answer>} the array of Answer
 * */
function mapAnswers (answers) {
    return Object.entries(answers).map((a) => new Answer(a[0], a[1]))
}

/**
 * Map an array of string to a Questions object
 * @param {Array <String>} questions the arrya of questions as string
 * @return {Questions} the questions object
 * */
function mapQuestions (questions) {
    return new Questions(questions.map((q) => new Question(q.title, q.code, mapAnswers(q.answers), q.correct, q.explanation)))
}

/**
 * Fetch the questions list
 * @return {Questions} the fetched questions
 * */
export function fetchQuestions() {
    return mapQuestions(questions)
}
