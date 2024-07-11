function HTML(x) {
    document.getElementById("questionTitelID").innerHTML = "HTML Fragen";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    disableStartButton(x);
    document.getElementById("s1").classList.remove("d-none");

  }
  
  function CSS(x) {
      document.getElementById("questionTitelID").innerHTML = "CCS Fragen";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    disableStartButton(x);
    document.getElementById("s2").classList.remove("d-none");
  }
  
  function JS(x) {
      document.getElementById("questionTitelID").innerHTML = "JS Fragen";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    disableStartButton(x);
    document.getElementById("s3").classList.remove("d-none");
  }
  
  function JAVA(x) {
      document.getElementById("questionTitelID").innerHTML = "JAVA Fragen";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    disableStartButton(x);
    document.getElementById("s4").classList.remove("d-none");
  }
  
  function KEVIN(x) {
      document.getElementById("questionTitelID").innerHTML = "Kevin Fragen";
    document.getElementById("questionTextID").innerHTML = "Drücke Start, um die aktuelle Kategorie zu starten";
    disableStartButton(x);
    document.getElementById("s5").classList.remove("d-none");

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

  function disableStartButton(x) {
    document.getElementById("s1").classList.add("d-none");
    document.getElementById("s2").classList.add("d-none");
    document.getElementById("s3").classList.add("d-none");
    document.getElementById("s4").classList.add("d-none");
    document.getElementById("s5").classList.add("d-none");
  }