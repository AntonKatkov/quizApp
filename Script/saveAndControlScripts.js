
function nextQuestion() {
  controle();
}

function controle() {
    let x = currentQuestion + 1;
    let y = questionsMenu.length;
    if (x >= y) {
      endScreen(x)
      saveData();
      questRender();
      addProgress(x)
    } else {
      saveData(currentQuestion++);
      questRender();
      addProgress(x)
    }
  }
  
  
function saveData() {
    localStorage.setItem("Quiz", JSON.stringify(currentQuestion));
    localStorage.setItem("QuizStatus", JSON.stringify(questionsMenu.length));
    localStorage.setItem("RightAnswers", JSON.stringify(currentRightAnswerQuestion));
  }
  
  function loadSavedData() {
    let currentQuestionAsText = localStorage.getItem("Quiz"); 
    let currentRightAnswerQuestionAsText = localStorage.getItem("RightAnswers"); 

    if (currentQuestionAsText) currentQuestion = JSON.parse(currentQuestionAsText);
    if (currentRightAnswerQuestionAsText) currentRightAnswerQuestion = JSON.parse(currentRightAnswerQuestionAsText);

    questRender();
    addProgress(currentQuestion)
  }
  
