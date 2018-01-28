var currentText;
var chosenOption;
var nextStory;
var text;
var dataUrl =
  'https://raw.githubusercontent.com/veredrec/Game/master/text.json';

// API call to text file (JSON) to retrive the data
function loadData(callback) {
  fetch(dataUrl)
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      text = data;
      currentText = data.a00; // intro story from text data
      $('#mainText').text(currentText.story);
      $('#option1').text(currentText.option1.option);
    })
    .catch(function(err) {
      $('#mainText').text('There was an error, sorry!');
      console.log(err);
    });
}
loadData();

// takes the data from the text file and populate the text and options on the page
function populateData(text) {
  $('#mainText').text(text.story);
  $('#option1').text(text.option1.option);
  if (text.option2) {
    $('#option2').text(text.option2.option);
  }
  if (text.option3) {
    $('#option3').text(text.option3.option);
  }
  if (text.option4) {
    $('#option4').text(text.option4.option);
  }
}

// checks if this is the last part. If yes, redirects to credits page
function checkEnd(nextStory) {
  if (!nextStory) {
    $('#option1').click(function() {
      window.location.href = 'credits.html';
    });
  }
}

// Event listeners for every option
$('#option1').click(function() {
  chosenOption = this.id;
  nextStory = currentText[chosenOption].next;
  checkEnd(nextStory);
  currentText = text[nextStory];
  populateData(currentText);
});

$('#option2').click(function() {
  chosenOption = this.id;
  nextStory = currentText[chosenOption].next;
  currentText = text[nextStory];
  populateData(currentText);
});

$('#option3').click(function() {
  chosenOption = this.id;
  nextStory = currentText[chosenOption].next;
  currentText = text[nextStory];
  populateData(currentText);
});

$('#option4').click(function() {
  chosenOption = this.id;
  nextStory = currentText[chosenOption].next;
  currentText = text[nextStory];
  populateData(currentText);
});

// add music to oprning scene
if (currentText === 'data.a00') {
  var opening = new Audio('file.wav');
  opening.play();
}
// add music to ending scene

// add sound effects to transmitions
