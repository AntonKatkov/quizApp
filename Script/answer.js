

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

function answer1(x) {
  let rightAnswer = questionsMenuHTML[currentQuestion].rightAnswer;
  if (rightAnswer == x) {
    document.getElementById("answer12_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton1(rightAnswer);
  } else {
    document.getElementById("answer12_" + x).classList.add("bg-danger");
    document
      .getElementById("answer12_" + rightAnswer)
      .classList.add("bg-success");
  }
  addAndRemoveButton1(rightAnswer == x);
}

function answer2(x) {
  let rightAnswer = questionsMenuCSS[currentQuestion].rightAnswer;


  if (rightAnswer == x) {
    document.getElementById("answer2_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton2(rightAnswer);
  } else {
    document.getElementById("answer2_" + x).classList.add("bg-danger");
    document
      .getElementById("answer2_" + rightAnswer)
      .classList.add("bg-success");
  }
  addAndRemoveButton2(rightAnswer == x );
}


function answer3(x) {
  let rightAnswer = questionsMenuJS[currentQuestion].rightAnswer;

  if (rightAnswer == x) {
    document.getElementById("answer3_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton3(rightAnswer);
  } else {
    document.getElementById("answer3_" + x).classList.add("bg-danger");
    document
      .getElementById("answer3_" + rightAnswer)
      .classList.add("bg-success");
  }
  addAndRemoveButton3(rightAnswer == x,);
}

function answer4(x) {
  let rightAnswer = questionsMenuJAVA[currentQuestion].rightAnswer;

  if (rightAnswer == x) {
    document.getElementById("answer4_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton4(rightAnswer);
  } else {
    document.getElementById("answer4_" + x).classList.add("bg-danger");
    document
      .getElementById("answer4_" + rightAnswer)
      .classList.add("bg-success");
  }
  addAndRemoveButton4(rightAnswer == x, );
}

function answer5(x) {
  const rightAnswer = questionsMenuKevin[currentQuestion].rightAnswer;

  if (rightAnswer == x) {
    document.getElementById("answer5_" + x).classList.add("bg-success");
    saveData(currentRightAnswerQuestion++);
    addAndRemoveButton5(rightAnswer);
  } else {
    document.getElementById("answer5_" + x).classList.add("bg-danger");
    document
      .getElementById("answer5_" + rightAnswer)
      .classList.add("bg-success");
  }

  addAndRemoveButton5(rightAnswer == x );
}





function addAndRemoveButton1(rightAnswer ) {
    if (rightAnswer) {
      disable1(rightAnswer )
    } else {
      disable1()
    }
  }

  function addAndRemoveButton2(rightAnswer ) {
    if (rightAnswer) {
      disable2(rightAnswer )
    } else {
      disable2()
    }
  }

  function addAndRemoveButton3(rightAnswer ) {
    if (rightAnswer) {
      disable3(rightAnswer )
    } else {
      disable3()
    }
  }


  function addAndRemoveButton4(rightAnswer ) {
    if (rightAnswer) {
      disable4(rightAnswer )
    } else {
      disable4()
    }
  }


  function addAndRemoveButton5(rightAnswer ) {
    if (rightAnswer) {
      disable5(rightAnswer )
    } else {
      disable5()
    }
  }



  function disable1(x) {
    if (x) {
        document.getElementById("hideButtonNextDisable").disabled=false;
        // document.getElementById("restartButtonDisable").disabled=false;
    } else {
        // document.getElementById("restartButtonDisable").disabled=false;
        document.getElementById("hideButtonNextDisable").disabled=false;
    }
    disableClicks1();
    }



  function disable2(x) {
  if (x) {
      document.getElementById("hideButtonNextDisable").disabled=false;
      // document.getElementById("restartButtonDisable").disabled=false;
  } else {
      // document.getElementById("restartButtonDisable").disabled=false;
      document.getElementById("hideButtonNextDisable").disabled=false;
  }
  disableClicks2();
  }



  function disable3(x) {
  if (x) {
      document.getElementById("hideButtonNextDisable").disabled=false;
      // document.getElementById("restartButtonDisable").disabled=false;
  } else {
      // document.getElementById("restartButtonDisable").disabled=false;
      document.getElementById("hideButtonNextDisable").disabled=false;
  }
  disableClicks3();
  }

  function disable4(x) {
  if (x) {
      document.getElementById("hideButtonNextDisable").disabled=false;
      // document.getElementById("restartButtonDisable").disabled=false;
  } else {
      // document.getElementById("restartButtonDisable").disabled=false;
      document.getElementById("hideButtonNextDisable").disabled=false;
  }
  disableClicks4();
  }

  function disable5(x) {
  if (x) {
      document.getElementById("hideButtonNextDisable").disabled=false;
      // document.getElementById("restartButtonDisable").disabled=false;
  } else {
      // document.getElementById("restartButtonDisable").disabled=false;
      document.getElementById("hideButtonNextDisable").disabled=false;
  }
  disableClicks5();
  }


  function disableClicks1() {
    let z = 1 
    document.getElementById("answer1_1").classList.add("disabled"); 
    document.getElementById("answer1_2").classList.add("disabled"); 
    document.getElementById("answer1_3").classList.add("disabled"); 
    document.getElementById("answer1_4").classList.add("disabled"); 
}

  function disableClicks2() {
    document.getElementById("answer2_1").classList.add("disabled"); 
    document.getElementById("answer2_2").classList.add("disabled"); 
    document.getElementById("answer2_3").classList.add("disabled"); 
    document.getElementById("answer2_4").classList.add("disabled"); 
}

  function disableClicks3() {
    document.getElementById("answer3_1").classList.add("disabled"); 
    document.getElementById("answer3_2").classList.add("disabled"); 
    document.getElementById("answer3_3").classList.add("disabled"); 
    document.getElementById("answer3_4").classList.add("disabled"); 
}

  function disableClicks4() {
    document.getElementById("answer4_1").classList.add("disabled"); 
    document.getElementById("answer4_2").classList.add("disabled"); 
    document.getElementById("answer4_3").classList.add("disabled"); 
    document.getElementById("answer4_4").classList.add("disabled"); 
}
    
  function disableClicks5() {
    document.getElementById("answer5_1").classList.add("disabled"); 
    document.getElementById("answer5_2").classList.add("disabled"); 
    document.getElementById("answer5_3").classList.add("disabled"); 
    document.getElementById("answer5_4").classList.add("disabled"); 
}















