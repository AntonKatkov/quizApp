
function nextQuestion() {
  controle();
}

function controle() {
    let x = currentQuestion + 1;
    let y = questionsMenu.length;
    if (x >= y) {
      console.log("Quiz beendet");
      currentQuestion = 0;
      saveData();
      questRender();
    } else {
      console.log("weiter so");
      saveData(currentQuestion++);
      questRender();
    }
  }
  
  
function saveData() {
    localStorage.setItem("Quiz", JSON.stringify(currentQuestion));
    localStorage.setItem("QuizStatus", JSON.stringify(questionsMenu.length));
  }
  
  function loadSavedData() {
    let currentQuestionAsText = localStorage.getItem("Quiz"); 
    if (currentQuestionAsText) currentQuestion = JSON.parse(currentQuestionAsText);
    questRender();
  }
  
  