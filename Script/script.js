let currentQuestion = 0;

function start() {
    loding()
}


function loding() {
    document.getElementById('questionLenghtTotal').innerHTML = questionsMenu.length;
    lodingQuestionText()
}

function lodingQuestionText() {
    let question = questionsMenu[currentQuestion];

    document.getElementById('questionTitel').innerHTML = question.questionTitel;
    document.getElementById('questionText').innerHTML = question.questionText;
    document.getElementById('answer_1').innerHTML = question.answer1;
    document.getElementById('answer_2').innerHTML = question.answer2;
    document.getElementById('answer_3').innerHTML = question.answer3;
    document.getElementById('answer_4').innerHTML = question.answer4;
}

function answer(x) {

    let rightAnswer = questionsMenu[currentQuestion].rightAnswer;

    if (rightAnswer == x) {

        console.log("Richtig");
        document.getElementById('answer_' + x).classList.add('bg-success');

    } else {
        console.log("Falsch");
        document.getElementById('answer_' + x).classList.add('bg-danger');
        document.getElementById('answer_' + rightAnswer).classList.add('bg-success');
        
    }

}