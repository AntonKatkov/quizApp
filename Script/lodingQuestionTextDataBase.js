function HTML(x) {
    document.getElementById("questionTitelID").innerHTML = "HTML";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s1").classList.remove("d-none");

  }
  
  function CSS(x) {
      document.getElementById("questionTitelID").innerHTML = "CCS";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s2").classList.remove("d-none");
  }
  
  function JS(x) {
      document.getElementById("questionTitelID").innerHTML = "JS";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s3").classList.remove("d-none");
  }
  
  function JAVA(x) {
      document.getElementById("questionTitelID").innerHTML = "JAVA";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s4").classList.remove("d-none");
  }
  
  function KEVIN(x) {
      document.getElementById("questionTitelID").innerHTML = "Kevin";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s5").classList.remove("d-none");
  }

  
  function lodingQuestionText() {
    let question = questionsMenuHTML[currentQuestion];
    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer5_1").innerHTML = question.answer1;
    document.getElementById("answer5_2").innerHTML = question.answer2;
    document.getElementById("answer5_3").innerHTML = question.answer3;
    document.getElementById("answer5_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML =
      questionsMenuHTML.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }
  
  function lodingQuestionText2() {
    let question = questionsMenuCSS[currentQuestion];
    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer4_1").innerHTML = question.answer1;
    document.getElementById("answer4_2").innerHTML = question.answer2;
    document.getElementById("answer4_3").innerHTML = question.answer3;
    document.getElementById("answer4_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML =
      questionsMenuCSS.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }
  
  function lodingQuestionText3() {
    let question = questionsMenuJS[currentQuestion];
    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer3_1").innerHTML = question.answer1;
    document.getElementById("answer3_2").innerHTML = question.answer2;
    document.getElementById("answer3_3").innerHTML = question.answer3;
    document.getElementById("answer3_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML =
      questionsMenuJS.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }
  
  function lodingQuestionText4() {
    let question = questionsMenuJAVA[currentQuestion];
    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer2_1").innerHTML = question.answer1;
    document.getElementById("answer2_2").innerHTML = question.answer2;
    document.getElementById("answer2_3").innerHTML = question.answer3;
    document.getElementById("answer2_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML =
      questionsMenuJAVA.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }
  
  function lodingQuestionText5() {
    let question = questionsMenuKevin[currentQuestion];
    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer1_1").innerHTML = question.answer1;
    document.getElementById("answer1_2").innerHTML = question.answer2;
    document.getElementById("answer1_3").innerHTML = question.answer3;
    document.getElementById("answer1_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML =
      questionsMenuKevin.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }


function lodingQuestionText(question) {

    document.getElementById("questionTitel").innerHTML = question.questionTitel;
    document.getElementById("questionText").innerHTML = question.questionText;
    document.getElementById("answer_1").innerHTML = question.answer1;
    document.getElementById("answer_2").innerHTML = question.answer2;
    document.getElementById("answer_3").innerHTML = question.answer3;
    document.getElementById("answer_4").innerHTML = question.answer4;
    document.getElementById("questionLenghtTotal").innerHTML = questionsMenu.length;
    document.getElementById("questionStatusNow").innerHTML = currentQuestion + 1;
  }