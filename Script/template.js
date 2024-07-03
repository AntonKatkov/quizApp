// function progressBarHTML() {
// return /*html*/ `

//     `;
// }

function generateQuestionHTML() {
  return /*html*/ `
        <div class="card-body" id="mainCard" >
          <h5 class="card-title" id="questionTitel">Question Title</h5>
          <p class="card-text" id="questionText">Question Text</p>
          <div class="selfgroupbutton">
            <div id="quizSelectionGroup" class="list-group">
              <a 
                href="#"
                id="answer_1"
                onclick="answer(1)"
                class="self-group list-group-item list-group-item-action list-group-item-dark"
                >
                <button>Answer 1</button disable>
                </a
              >
              <a 
                href="#"
                id="answer_2"
                onclick="answer(2)"
                class="self-group list-group-item list-group-item-action list-group-item-dark"
                >
                <button>Answer 2</button disable>
                </a
              >
              <a          
                href="#"
                id="answer_3"
                onclick="answer(3)"
                class="  self-group list-group-item list-group-item-action list-group-item-dark"
                >
                <button >Answer 3</button disable>
                </a
              >
              <a 
                href="#"
                id="answer_4"
                onclick="answer(4)"
                class="self-group list-group-item list-group-item-action list-group-item-dark"
                >
                <button class="">Answer 4</button disable>
                </a
              >
            </div>
            <div class="card-footer">
              <div><b id="questionStatusNow">1</b> von <b id="questionLenghtTotal">5</b></div>

              <div id="hideButtonX">
                <a
                  onclick=""
                  class="button1 restartQuestion"
                  id="restartButton"
                >
                  <!-- <button disabled id="restartButtonDisable" onclick="restartQuestion()" type="button" class="btn btn-warning">
                    Frage neu laden
                  </button> -->
                </a>
                <a onclick="" class="button1" id="hideButtonNext">
                  
                  <button disabled id="hideButtonNextDisable" onclick="nextQuestion()" type="button" class="btn btn-warning">
                    Nechste Frage
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
    `;
}

function gameStartHTML() {
  let a = 1;
  let b = 2;
  let c = 3;
  let d = 4;
  let e = 5;
  let f = 6;
  let g = 7;
  return /*html*/ `
<div class="card-header">
        </div>
        <div class="card-body selfHeader">
<div>
          <h5 id="questionTitelID" class="card-title">Quiz Game</h5>
          <p  id="questionTextID" class="card-text">Willkommen zu Quiz-App Wähle links die Kategorie  wo du dich gerne testen möchtest

          </p>

          <div>
           <a href="#" id="s1" onclick="StartQuiz(6)" class=" d-none  btn btn-primary">Starten</a>
           <a href="#" id="s2" onclick="StartQuiz(7)" class=" d-none btn btn-primary">Fortsetzen</a>
           </div>
</div>
        </div>
        <div class="card-footer text-body-secondary">
        </div>
        <ul class="nav selfNav flex-column">
        <div><img class="selfImg" src="./quizapp/logo.png" alt=""></div>
        <li class=" selfa nav-item">
          <button type="button" class="selfButton btn btn-light"onclick="HTML(1)">HTML</button>
          </li>
          <li class="selfa nav-item">
          <button type="button" class="selfButton btn btn-light"onclick="CSS(2)">CSS</button>
          </li>
          <li class="selfa nav-item">
          <button type="button" class="selfButton btn btn-light"onclick="JS(3)">JS</button>
          </li>
          <li class="selfa nav-item">
          <button type="button" class="selfButton btn btn-light"onclick="JAVA(4)">Java</button>
          </li>
          <li class="selfa nav-item">
          <button type="button" class="selfButton btn btn-light"onclick="KEVIN(5)">Kevin Frage</button>
          </li>
          <div><img src="" alt=""></div>
        </ul>
        `;
}







// function gameStartHTML() {
//   let x = 1;
//   let y = 2;
//   return /*html*/ `
// <div class="card-header">
//         </div>
//         <div class="card-body selfHeader">
// <div>
//           <h5 class="card-title">Quiz Game</h5>
//           <p class="card-text">Bist Du bereit, Dein Wissen zu testen?
//           </p>
//           <div>
//           <a href="#" id="" onclick="StartQuiz(1)" class="btn btn-primary">Starten</a>
//           <a href="#" id="" onclick="StartQuiz(2)" class="btn btn-primary">Fortsetzen</a>
//           </div>
// </div>
//         </div>
//         <div class="card-footer text-body-secondary">
//         </div>

//         <ul class="nav selfNav flex-column">
//         <div><img class="selfImg" src="./quizapp/logo.png" alt=""></div>
//         <li class=" selfa nav-item">
//           <button type="button" class="selfButton btn btn-light"onclick="HTML()">HTML</button>

//           </li>
//           <li class="selfa nav-item">

//           <button type="button" class="selfButton btn btn-light"onclick="CSS()">CSS</button>
//           </li>
//           <li class="selfa nav-item">

//           <button type="button" class="selfButton btn btn-light"onclick="JS()">JS</button>
//           </li>
//           <li class="selfa nav-item">
//           <button type="button" class="selfButton btn btn-light"onclick="Java()">Java</button>
//           </li>
//           <li class="selfa nav-item">
//           <button type="button" class="selfButton btn btn-light"onclick="Kevin()">Kevin Frage</button>
//           </li>
//           <div><img src="" alt=""></div>
//         </ul>
        
//         `;
// }

function finalScreenHTML() {
  let x = currentRightAnswerQuestion;
  let y = questionsMenu.length;
  return /*html*/ `
<div class="card-header"></div>
   <div class="card-body selfHeader3">
        <div class="self4">   
          <img class="" src="./quizapp/brainresult.png" alt="brain">
          <h5 class="card-title">Herzlichen Glückwunsch</h5>
      </div>

        <div class="self3">
        <p class="card-text">Dein Scrore ist <b>${x}</b>/<b>${y}</b>

        </div>
        <div>

        </p>
          <a href="#" id="" onclick="restartGame()" class="btn btn-primary">Starten</a>
      </div>
</div></div>
        <div class="card-footer text-body-secondary">
        </div>

        <ul class="nav selfNav flex-column">
        <div><img class="selfImg" src="./quizapp/logo.png" alt=""></div>
        <li class=" selfa nav-item">
          <button type="button" class="selfButton btn btn-light">Light</button>

          </li>
          <li class="selfa nav-item">

          <button type="button" class="selfButton btn btn-light">Light</button>
          </li>
          <li class="selfa nav-item">

          <button type="button" class="selfButton btn btn-light">Light</button>
          </li>
          <li class="selfa nav-item">
          <button type="button" class="selfButton btn btn-light">Light</button>
          </li>
          <div><img src="" alt=""></div>
        </ul>
        
        `;
}
