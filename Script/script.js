
function start() {
  gameStartRender()
}

function questRender() {
  let content = document.getElementById("mainCard");
  content.innerHTML = "";
  content.innerHTML += generateQuestionHTML();
  lodingQuestionText()
}

function gameStartRender() {
  let content = document.getElementById("gameMenu");
  content.innerHTML = "";
  content.innerHTML += gameStartHTML();
}

function finishRender() {
  let content = document.getElementById("finalCard");
  content.innerHTML = "";
  content.innerHTML += finalScreenHTML();
  document.getElementById("tropy1").classList.remove("d-none");
}

function StartQuiz(x) {
if (x>1) {
  document.getElementById("mainCard").classList.remove("hideButton");
  document.getElementById("gameMenu").classList.add("d-none");
  loadSavedData();
  saveData();
} else {
  document.getElementById("mainCard").classList.remove("hideButton");
  document.getElementById("gameMenu").classList.add("d-none");
  saveData();
  questRender();
}
  }
  
// function lodingQuestionText() {
//   let question = questionsMenu[currentQuestion];
//   document.getElementById("questionTitel").innerHTML = question.questionTitel;
//   document.getElementById("questionText").innerHTML = question.questionText;
//   document.getElementById("answer_1").innerHTML = question.answer1;
//   document.getElementById("answer_2").innerHTML = question.answer2;
//   document.getElementById("answer_3").innerHTML = question.answer3;
//   document.getElementById("answer_4").innerHTML = question.answer4;
//   document.getElementById("questionLenghtTotal").innerHTML = questionsMenu.length;
//   document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
// }
function answer(x) {
  let rightAnswer = questionsMenu[currentQuestion].rightAnswer;


  if (rightAnswer == x) {
    document.getElementById("answer_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton(rightAnswer);
  } else {
    document.getElementById("answer_" + x).classList.add("bg-danger");
    document.getElementById("answer_" + rightAnswer).classList.add("bg-success");
  }
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
    // document.getElementById("restartButtonDisable").disabled=false;
} else {
    // document.getElementById("restartButtonDisable").disabled=false;
    document.getElementById("hideButtonNextDisable").disabled=false;
}
disableClicks();
}
function disableClicks() {
    document.getElementById("answer_1").classList.add("disabled"); 
    document.getElementById("answer_2").classList.add("disabled"); 
    document.getElementById("answer_3").classList.add("disabled"); 
    document.getElementById("answer_4").classList.add("disabled"); 
}
function restartQuestion() {
  let x = document.getElementById("mainCard");
  x.innerHTML = "";
  questRender();
}

function endScreen(x) {
  if (x) {
    currentQuestion = 0;
  }
  document.getElementById("mainCard").classList.add("hideButton");
  document.getElementById("finalCard").classList.remove("hideButton");
  finishRender() 
}


function addProgress(x) {
  let i = questionsMenu.length ;
document.getElementById("progress-bar").style.width = ( x / i) *100 + "%";

}

function restartGame() {
  location.reload();
}



