function HTML(x) {
    let questionHTML = questionsMenuHTML[currentQuestion];
    document.getElementById("questionTitelID").innerHTML = "HTML";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    document.getElementById("s1").classList.remove("d-none");

  }
  
  function CSS(x) {
    let questionCSS = questionsMenuCSS[currentQuestion];
      document.getElementById("questionTitelID").innerHTML = "CCS";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    lodingQuestionText(questionCSS)
  }
  
  function JS(x) {
    let questionJS = questionsMenuJS[currentQuestion];
      document.getElementById("questionTitelID").innerHTML = "JS";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
        lodingQuestionText(questionJS)
  }
  
  function JAVA(x) {
    let questionJAVA = questionsMenuJAVA[currentQuestion];
      document.getElementById("questionTitelID").innerHTML = "JAVA";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
        lodingQuestionText(questionJAVA)
  }
  
  function KEVIN(x) {
    let questionKevin = questionsMenuKevin[currentQuestion];
      document.getElementById("questionTitelID").innerHTML = "Kevin";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
        lodingQuestionText(questionKevin)
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