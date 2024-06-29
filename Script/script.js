let currentQuestion = 0;

function start() {
    questRender()
}


function questRender() {
    let content = document.getElementById("mainCard");
    content.innerHTML = "";
    content.innerHTML += generateQuestionHTML();
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


    
function hideText() {
    let x = document.getElementById('hideButtonX');
    x.classList.add("restartQuestion");
}
  

function answer(x) {
    let rightAnswer = questionsMenu[currentQuestion].rightAnswer;

  if (rightAnswer == x) {
    console.log("Richtig");
    document.getElementById("answer_" + x).classList.add("bg-success");
    addAndRemoveButton(rightAnswer);
  } else {
    console.log("Falsch");
    document.getElementById("answer_" + x).classList.add("bg-danger");
    document
      .getElementById("answer_" + rightAnswer)
      .classList.add("bg-success");
  }
  addAndRemoveButton(rightAnswer == x);
}

function addAndRemoveButton(rightAnswer) {
    if (rightAnswer) {
        let x = document.getElementById("hideButtonNext");
        x.classList.remove("hideButton");   
    } else {
        let y  = document.getElementById("restartButton");
        y.classList.remove("restartQuestion");  
    }
}


function restartQuestion() {
let x = document.getElementById("mainCard");
x.innerHTML = "";
    questRender()
}

function nextQuestion() {
    currentQuestion++;
    questRender()
    }