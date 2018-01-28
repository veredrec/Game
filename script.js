var currentText;
var chosenOption;
var nextStory;
var text;
var dataUrl =
  'https://raw.githubusercontent.com/veredrec/Game/master/text.json';

$(document).ready(function() {
  var gameMusic = new Audio('./assets/audio/beginning.mp3');
  gameMusic.play();
});

// start the game
$('#start').click(function() {
  $('#intro').toggleClass('hide');
  $('#main').toggleClass('hide');
});

// API call to text file (JSON) to retrive the data
function loadData(callback) {
  fetch(dataUrl)
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      text = data;
      currentText = data.s0; // intro story from text data
      $('#mainText').text(currentText.story);
      $('#option1').text(currentText.option1.option);
    })
    .catch(function(err) {
      $('#mainText').text('Sorry, there was an error...');
      console.log(err);
    });
}
loadData();

// checks if story got to last moments - if yes, plays the ending music
function checkStoryEnding(text) {
  if (text.indexOf('Communications Officer EZ reporting') >= 0) {
    var endingMusic = new Audio('./assets/audio/ending.mp3');
    endingMusic.play();
  }
}

// takes the data from the text file and populate the text and options on the page
function populateData(text) {
  $('#mainText').text(text.story);
  checkStoryEnding(text.story);
  $('#option1').text(text.option1.option);
  if (text.option2) {
    $('#option2').text(text.option2.option);
  } else {
    $('#option2').text('');
  }
  if (text.option3) {
    $('#option3').text(text.option3.option);
  } else {
    $('#option2').text('');
  }
  if (text.option4) {
    $('#option4').text(text.option4.option);
  } else {
    $('#option2').text('');
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
  var gameMusic = new Audio('./assets/audio/game.mp3');
  gameMusic.play();
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

// add music to ending scene

// add background music

// add sound effects to transmitions
