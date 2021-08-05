export function parseQuestionAnswers(answers){
    let answr = {}
    let option;
    for(let i = 0; i < answers.length; i++){
        option = String.fromCharCode(65 + i);
        answr[option] = answers[i].split(': ')[1]
    }

    return answr
}
