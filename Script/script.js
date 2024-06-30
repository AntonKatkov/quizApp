
function start() {
  loadSavedData();
}
function questRender() {
  let content = document.getElementById("mainCard");
  content.innerHTML = "";
  content.innerHTML += generateQuestionHTML();
  lodingQuestionText()
}

function lodingQuestionText() {
  let question = questionsMenu[currentQuestion];

  document.getElementById("questionTitel").innerHTML = question.questionTitel;
  document.getElementById("questionText").innerHTML = question.questionText;
  document.getElementById("answer_1").innerHTML = question.answer1;
  document.getElementById("answer_2").innerHTML = question.answer2;
  document.getElementById("answer_3").innerHTML = question.answer3;
  document.getElementById("answer_4").innerHTML = question.answer4;
  document.getElementById("questionLenghtTotal").innerHTML = questionsMenu.length;
  document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
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
    document.getElementById("answer_" + rightAnswer).classList.add("bg-success");
  }
  disableClicks();
  addAndRemoveButton(rightAnswer == x);
}

function addAndRemoveButton(rightAnswer) {
  if (rightAnswer) {
    disable(rightAnswer)
  } else {
    disable()
  }
}


function disable(x) {
if (x) {
    document.getElementById("hideButtonNextDisable").disabled=false;
    document.getElementById("restartButtonDisable").disabled=false;
} else {
    document.getElementById("restartButtonDisable").disabled=false;
}
}

function disableClicks() {

    document.getElementById("answer_1").classList.add("disabled"); 
    
    document.getElementById("answer_2").classList.add("disabled"); 
    
    document.getElementById("answer_3").classList.add("disabled"); 
    
    document.getElementById("answer_4").classList.add("disabled"); 
}

function clickAndDisable(link) {
    // disable subsequent clicks
    link.onclick = function(event) {
       event.preventDefault();
    }
  }
function restartQuestion() {
  let x = document.getElementById("mainCard");
  x.innerHTML = "";
  questRender();
}







