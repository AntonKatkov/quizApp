
function saveData() {
    localStorage.setItem("Quiz", JSON.stringify(currentQuestion));
    localStorage.setItem("QuizStatus", JSON.stringify(questionsMenu.length));
  }
  
  function loadSavedData() {
    let currentQuestionAsText = localStorage.getItem("Quiz");

  
    if (currentQuestionAsText) currentQuestion = JSON.parse(currentQuestionAsText);

    questRender()
  }
  
  