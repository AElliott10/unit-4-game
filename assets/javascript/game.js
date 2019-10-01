console.log('javascript is loaded');
// Create all my variables for game logic
// Display beginning Random Number
var displayRandomNum = '';
var playerScore = 0;
// var crystal = crystalRandom();
var wins = 0;
var losses = 0;
//create a function to start/reset the game
//created random number for display
function resetRandomNum() {
  displayRandomNum = Math.floor(Math.random() * 102 + 19);
  $('#displayRandomNum').text(displayRandomNum);
}
var crystalPink = '';
var crystalBlue = '';
var crystalPurple = '';
var crystalWhite = '';
//jquery to display on the dom
$('#playerScore').text(playerScore);

function crystalRandom() {
  crystalPink = Math.floor(Math.random() * 12 + 1);
  crystalBlue = Math.floor(Math.random() * 12 + 1);
  crystalPurple = Math.floor(Math.random() * 12 + 1);
  crystalWhite = Math.floor(Math.random() * 12 + 1);
}

/*Crystal button OnClick Function
- when the crystal is clicked the random value is added to the previous value recorded in player score
*/
//update score one click
$('#crystalPink').on('click', function() {
  playerScore += crystalPink;
  $('#playerScore').text(playerScore);
  console.log(crystalPink);
  checkWin();
});
$('#crystalBlue').on('click', function() {
  playerScore += crystalBlue;
  $('#playerScore').text(playerScore);
  console.log(crystalBlue);
  checkWin();
});
$('#crystalPurple').on('click', function() {
  playerScore += crystalPurple;
  $('#playerScore').text(playerScore);
  console.log(crystalPurple);
  checkWin();
});
$('#crystalWhite').on('click', function() {
  playerScore += crystalWhite;
  $('#playerScore').text(playerScore);
  console.log(crystalWhite);
  checkWin();
});

//  Start if statements for your win;if the user's letter

function checkWin() {
  if (playerScore === displayRandomNum) {
    // increase wins by 1
    wins++;
    // update your HTML here / wins section
    $('#wins').text(wins);
    
    // run reset function you wrote above
    newGame();
  }
  //THIS IS YOUR LOSS CONDITION Make else
  // if playerScore exceeds displayRandom number then log a loss
  else if (playerScore > displayRandomNum) {
    losses++;
    // update your HTML here / loss section
    $('#losses').text(losses);
    
    // run reset function you wrote above
    newGame();
  }
}
//grab just crystal values; and make a onclick function for entire game -whole page is listening for a click event make one click event and put in win/loss condition in the onclick event. remove all the individual click events.
//Reset Game
//when a player wins or loses the game reset random number
function newGame() {
  //reset player score to 0
  playerScore = 0;
  //reset crystal values
  $('#playerScore').text(playerScore);
  crystalRandom();
  resetRandomNum();
}
newGame();
//run new game function,  you start your newgame function or restart whatever you called it here should be the last thing on the page ??//so every time a user logs in it will start a new game