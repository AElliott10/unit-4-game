
console.log("javascript is loaded")

// Create all my variables for game logic

// Display beginning Random Number
var displayRandomNum = "";

var playerScore = [];

// Crystal 
var crystalPink = "";
var crystalBlue= "";
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

//   Create onkeyup event 
document.onkeyup = function (event) {
  //on every key press you want to push the user guess into the letters guessed array
  var userGuess = event.key;
  // push every leter from the even into our alreadyGuessed array
  alreadyGuessed.push(userGuess);
  //grab element to update page
  //to pass the value of userGuess use the method.text and include the parameter that is passed
  $("#alreadyGuessed").append(userGuess);

  //THIS IS YOUR WIN CONDITION!!!
  // Start if statements for your win;if the user's letter
  if (userGuess === compGuess.toLowerCase()) {
    // increase wins by 1
    wins++;
    // run reset function you wrote above
    newGame();
    // update your HTML here / wins section
    $("#wins").text(wins);
  }
  // else!
  //you also want to decrement your guessesLeft variable and update HTML
  else {
    userGuesses--;
    // update html with userGuessess
    $("#userGuesses").text(userGuesses);
  }

  //THIS IS YOUR LOSS CONDITION
  if (userGuesses === 0) {
    losses++;
    newGame();

    // update our page with lossess using Jquery
  }
  //since you are decrementing the guessesLeft on every keypress your loss condition is here

  //increment losses

  // start a new game using the function you wrote above

  // update your HTML here / wins section
  $("#losses").text(losses);

}

newGame();

   //run new game function,  you start your newgame function or restart whatever you called it here should be the last thing on the page so every time a user logs in it will start a new game.  Let me know if you need help we can always do a zoom session and i can walk you through if you get stuck
