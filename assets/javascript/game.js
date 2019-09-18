
console.log("javascript is loaded")

// Create all my variables for game logic

// Display beginning Random Number
var displayRandomNum = "";

var playerScore = [];

// Crystal 
var crystalPink = "";
var crystalBlue = "";
var crystalPurple = "";
var crystalWhite = "";

//wins (number)
var wins = 0;

//losses (number)
var losses = 0;

//create a function to start/reset the game
function newGame() {
  //  created random number for display
  displayRandomNum = Math.floor((Math.random() * 102) + 19);
  $("#displayRandomNum").text(displayRandomNum);

  crystalPink = Math.floor((Math.random() * 12) + 1);
  $("#crystalPink").text(crystalPink);

  crystalBlue = Math.floor((Math.random() * 12) + 1);
  // $("#crystalBlue").text(crystalBlue);
  crystalPurple = Math.floor((Math.random() * 12) + 1);
  //$("#crystalPurple").text(crystalPurple);

  crystalWhite = Math.floor((Math.random() * 12) + 1);
  //$("#crystalWhite").text(crystalWhite);
}

function playerClick() {
  //record random number from crystal in the playerScore[]

  playerClick.push(playerScore);

  function sum(playerScore) {
    var i = 0;
    for (var index = 0; index < playerScore.length; index++) {
      return index += playerScore[i];
    }
  }


  /*  for some reason this code though none of the vars are related to the html makes the random numbers generate???
  document.click = function (event) {
    //on every key press you want to push the user guess into the letters guessed array
    var userGuess = event.key;
    // push every leter from the even into our alreadyGuessed array
    alreadyGuessed.push(userGuess);
    //grab element to update page
    //to pass the value of userGuess use the method.text and include the parameter that is passed
    $("#alreadyGuessed").append(userGuess);
*/

    //THIS IS YOUR WIN CONDITION!!!
    // Start if statements for your win;if the user's letter
    if (playerScore === displayRandomNum()) {
      // increase wins by 1
      wins++;
      // run reset function you wrote above
      newGame();
      // update your HTML here / wins section
      $("#wins").text(wins);
    }
    //add playerScores together
    else {
      playerScore--;
      // update html with userGuessess
      $("playerScore").text(playerScore);
    }
    //THIS IS YOUR LOSS CONDITION
    // if playerScore exceeds displayRandom number then log a loss

    if (playerScore > displayRandomNum()) {
      losses++;

      // run reset function you wrote above
      newGame();

      // update your HTML here / loss section 
      $("#losses").text(losses);
    }

    newGame();