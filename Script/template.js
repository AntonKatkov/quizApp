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
                <a onclick="" class="button1 hideButton" id="hideButtonNext">
                  
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