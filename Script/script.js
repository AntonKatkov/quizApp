
function start() {
  gameStartRender()
}

function questRender(x) {
  let content = document.getElementById("mainCard");
  content.innerHTML = "";
  content.innerHTML += generateQuestionHTML();
  if (x <= 1) {
    content.innerHTML = generateQuestionHTML();
    lodingQuestionText5()
  } else if (x <= 2) {
    content.innerHTML = generateQuestionCSS();
    lodingQuestionText4()
  } else if (x <= 3) {
    content.innerHTML = generateQuestionJS();
    lodingQuestionText3()
  } else if (x <= 4) {
    content.innerHTML = generateQuestionJAVA();
    lodingQuestionText2()
  } else if (x <= 5) {
    content.innerHTML = generateQuestionKvin();
    lodingQuestionText()
  }
    
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

if (x <= 5) {
  document.getElementById("mainCard").classList.remove("hideButton");
  document.getElementById("gameMenu").classList.add("d-none");
  questRender(x);
  // loadSavedData();
  // saveData();
} else {
  document.getElementById("mainCard").classList.remove("hideButton");
  document.getElementById("gameMenu").classList.add("d-none");
  // saveData();
  // questRender();
}
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



