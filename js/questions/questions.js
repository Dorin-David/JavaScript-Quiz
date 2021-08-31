import { parseQuestionFromJSON } from '../utils/parseQuestionFromJSON.js';
import data from './questions_EN.json';

const questions = parseQuestionFromJSON(data);

console.log(questions)

export { questions }
