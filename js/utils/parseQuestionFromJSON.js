import { parseQuestionAnswers } from './parseQuestionAnswers.js';


export function parseQuestionFromJSON(questions) {

    return JSON.parse(questions).map(question => {
        let q = {};
        q.title = question.question.split('\. ')[1]
        q.code = question.example.slice(1, -1).join('\n');
        q.answers = parseQuestionAnswers(question.answers);
        q.explanation = question.answer.slice(5, -3).join('');
        q.correct = q.answers[question.answer.find(ans => ans.startsWith('####')).slice(-1)]
        return q
    })

}