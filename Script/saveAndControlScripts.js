function nextQuestion(x) {
  controleCheck(x);
}

function controleCheck(x) {
  if (x <= 1) {
    let y = questionsMenuHTML.length;
    let yx = currentRightAnswerQuestionHTML
    let b = 4;
    controle(y, b, yx);
  } else if (x <= 2) {
    let y = questionsMenuCSS.length;
    let yx = currentRightAnswerQuestionCSS
    let b = 4;
    controle(y, b, yx);
  } else if (x <= 3) {
    let y = questionsMenuJS.length;
    let yx = currentRightAnswerQuestionJS
    let b = 4;
    controle(y, b, yx);
  } else if (x <= 4) {
    let y = questionsMenuJAVA.length;
    let yx = currentRightAnswerQuestionJAVA
    let b = 4;
    controle(y, b, yx);

  } else if (x <= 5) {
    let y = questionsMenuKevin.length;
    let yx = currentRightAnswerQuestionKevin
    let b = 5;
    controle(y, b, yx);
  }
}

function questRenderControl(x, b) {
  if (b <= 1) {
    let y = questionsMenuHTML.length;
    questRender(b);
    addProgress(x, y);
  } else if (b <= 2) {
    let y = questionsMenuCSS.length;
    questRender(b);
    addProgress(x, y);
  } else if (b <= 3) {
    let y = questionsMenuJS.length;
    questRender(b);
    addProgress(x, y);
  } else if (b <= 4) {
    let y = questionsMenuJAVA.length;
    questRender(b);
    addProgress(x, y);
  } else if (b <= 5) {
    let y = questionsMenuKevin.length;
    questRender(b);
    addProgress(x, y);
  }
}

function controle(z, b ,yx) {
  let x = currentQuestion + 1;

  if (x >= z) {
    endScreen(x,z,yx);
    saveData();
    questRenderControl(x, b);
  } else {
    saveData(currentQuestion++);
    questRenderControl(x, b);
  }
}

function addProgress(x, y) {
  document.getElementById("progress-bar").style.width = (x / y) * 100 + "%";
}

function saveData() {
  localStorage.setItem("Quiz",JSON.stringify(currentQuestion));

  localStorage.setItem("QuizStatusHTML",JSON.stringify(questionsMenuHTML.length));
  localStorage.setItem("QuizStatusCSS",JSON.stringify(questionsMenuCSS.length));
  localStorage.setItem("QuizStatusJS",JSON.stringify(questionsMenuJS.length));
  localStorage.setItem("QuizStatusJAVA",JSON.stringify(questionsMenuJAVA.length));
  localStorage.setItem("QuizStatusKevin",JSON.stringify(questionsMenuKevin.length));

  localStorage.setItem("RightAnswersHTML",JSON.stringify(currentRightAnswerQuestionHTML));
  localStorage.setItem("RightAnswersCSS",JSON.stringify(currentRightAnswerQuestionCSS));
  localStorage.setItem("RightAnswersJS",JSON.stringify(currentRightAnswerQuestionJS));
  localStorage.setItem("RightAnswersJAVA",JSON.stringify(currentRightAnswerQuestionJAVA));
  localStorage.setItem("RightAnswersKevin",JSON.stringify(currentRightAnswerQuestionKevin));

}

// function loadSavedData() {
//   let currentQuestionAsText = localStorage.getItem("Quiz");
//   let currentRightAnswerQuestionAsText = localStorage.getItem("RightAnswers");

//   if (currentQuestionAsText) currentQuestion = JSON.parse(currentQuestionAsText);
//   if (currentRightAnswerQuestionAsText) currentRightAnswerQuestion = JSON.parse(currentRightAnswerQuestionAsText);

//   questRender();
//   addProgress(currentQuestion)
// }
