var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var text = `A ghost, though invisible, still is like a place\nyour sight can knock on, echoing; but here\nwithin this thick black pelt, your strongest gaze\nwill be absorbed and utterly disappear `

var letters = text.split('');
var count = 0;
var score = 0;
var currentLetter = letters[count];

document.addEventListener("DOMContentLoaded", function(event) {
  letters.forEach(appendGreyLetter);
  setInterval ('cursorAnimation()', 700);
});

function appendGreyLetter(letter, index, array) {
  var div = document.getElementById("main");
  appendLetterToDOM(letter, index);
};

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
    colorLetter(count, "black");
    count += 1;
    score += 1;
    currentLetter = letters[count];
  } else {
    colorLetter(count, "red")
    score -= 1;
  }
  updateScore(score);
}

function appendLetterToDOM(letter, count) {
  var div = document.getElementById("editor");
  var span = document.createElement("span");
  span.id = count
  span.style.color = "grey";
  div.appendChild(span)
  span.innerHTML = letter;
};

function appendBreakToDOM() {
  count += 1;
  score += 1;
  var div = document.getElementById("editor");
  var lineBreak = document.createElement("br");
  div.appendChild(lineBreak);
  currentLetter = letters[count];
};

function updateScore(currentScore) {
  var score = document.getElementById("score");
  score.innerHTML = currentScore;
};

function colorLetter(index, color) {
  //var oldSpan = document.getElementById(index - 1);
  var oldCursor = document.getElementById("cursor");
  oldCursor.parentElement.removeChild(oldCursor);
  var newSpan = document.getElementById(index);
  var newCursor = document.createElement("span");
  newCursor.innerHTML = "|";
  newCursor.id = "cursor";
  newSpan.appendChild(newCursor);
  newSpan.style.color = color;
};

function cursorAnimation() {
    $("#cursor").animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
