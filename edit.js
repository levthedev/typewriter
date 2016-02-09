var text = `A ghost, though invisible, still is like a place\nyour sight can knock on, echoing; but here\nwithin this thick black pelt, your strongest gaze\nwill be absorbed and utterly disappear`

var letters = text.split('');
var count = 0;
var score = 0;
var currentLetter = letters[count];

document.onkeypress = function (e) {
    if ((e.keyCode == 13) && (currentLetter.charCodeAt() == 10)) {
      appendBreakToDOM();
    } else {
      checkLetter(e);
    }
};

function checkLetter(e) {
  e = e || window.event;
  if (e.keyCode == currentLetter.charCodeAt()) {
    count += 1;
    score += 1;
    appendLetterToDOM(currentLetter);
    currentLetter = letters[count];
  } else {
    score -= 1
  }
  updateScore(score);
}

function appendLetterToDOM(letter) {
  var div = document.getElementById("main");
  var node = document.createTextNode(letter);
  div.appendChild(node);
}

function appendBreakToDOM() {
  count += 1;
  score += 1;
  var div = document.getElementById("main");
  var lineBreak = document.createElement("br");
  div.appendChild(lineBreak);
  currentLetter = letters[count];
}

function updateScore(currentScore) {
  var score = document.getElementById("score");
  score.innerHTML = currentScore;
}
