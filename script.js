var currentText;
var chosenOption;
var nextStory;
var dataUrl =
  'https://raw.githubusercontent.com/veredrec/Game/master/text.json';
function loadData(callback) {
  fetch(dataUrl)
    .then(function(data) {
      return data.json();
    })
    .then(function(text) {
      currentText = text.a0; // intro story from text data
      $('#mainText').text(currentText.story);
      $('#option1').text(currentText.option1.option);
    })
    .catch(function(err) {
      $('#mainText').text('There was an error, sorry!');
      console.log(err);
    });
}
loadData();

function populateData(text) {
  $('#mainText').text(text.story);
  $('#option1').text(text.option1.option);
  $('#option2').text(text.option2.option);
  $('#option3').text(text.option3.option);
  $('#option4').text(text.option4.option);
}

$('#option1').click(function() {
  chosenOption = this.id;
  nextStory = currentText[chosenOption].next;
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
