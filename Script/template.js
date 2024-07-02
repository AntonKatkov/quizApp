function progressBarHTML() {
return /*html*/ `
 <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
    `;
}


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
                  <button disabled id="restartButtonDisable" onclick="restartQuestion()" type="button" class="btn btn-warning">
                    Frage neu laden
                  </button>
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
  let x = 1;
  let y = 2;
  return /*html*/ `
<div class="card-header">
        </div>
        <div class="card-body selfHeader">
<div>
          <h5 class="card-title">Quiz Game</h5>
          <p class="card-text">Bist Du bereit Dein Wissen zu Testen?
          </p>
          <div>
          <a href="#" id="" onclick="StartQuiz(1)" class="btn btn-primary">Starten</a>
          <a href="#" id="" onclick="StartQuiz(2)" class="btn btn-primary">Fortsetzen</a>
          </div>
</div>
        </div>
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

function finalScreenHTML() {
  return /*html*/ `
<div class="card">
  <h5 class="card-header">Herzlichen Glückwunsch</h5>
  <div class="card-body">
    <h5 class="card-title">Sie Haben es geschafft</h5>
    <p class="card-text">sie haben ihre bestes gegeben</p>
    <a href="#" class="btn btn-primary">Neu start</a>
  </div>
</div>
        `;
}
