console.log("javascript is loaded");
// Create all my variables for game logic
// Display beginning Random Number
var displayRandomNum = "";
var playerScore = 0;
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



 //created random number for display
 displayRandomNum = Math.floor((Math.random() * 102) + 19);
 $("#displayRandomNum").text(displayRandomNum);

 crystalPink = Math.floor((Math.random() * 12) + 1);
//  $("#crystalPink").text(crystalPink);
 crystalBlue = Math.floor((Math.random() * 12) + 1);
 // $("#crystalBlue").text(crystalBlue);
 crystalPurple = Math.floor((Math.random() * 12) + 1);
 //$("#crystalPurple").text(crystalPurple);

 crystalWhite = Math.floor((Math.random() * 12) + 1);
 //$("#crystalWhite").text(crystalWhite);

$("#playerScore").text(playerScore);

$("#crystalPink").click(function() {
  // console.log(crystalPink)
  addPoints(crystalPink);
});
$("#crystalBlue").click(function() {
  // console.log(crystalBlue)
  addPoints(crystalBlue);
});
$("#crystalPurple").click(function() {
  // console.log(crystalPurple)
  addPoints(crystalPurple);
});
$("#crystalWhite").click(function() {
  // console.log(crystalWhite)
  addPoints(crystalWhite);
});

function addPoints(crystal) {
  playerScore += crystal;
  $("#playerScore").text(playerScore);
};

function newGame() {
  //when a player wins or loses the game reset random number 
  
 playerScore >= displayRandomNum;

//reset player score to 0
playerScore = 0;

//create new random numbers
 }

  //wins get updated and loss gets update - below

  //crystal random resets


  //  THIS IS YOUR WIN CONDITION!!!
  //  Start if statements for your win;if the user's letter
   if (playerScore === displayRandomNum) {
     // increase wins by 1
     wins++;
     // run reset function you wrote above
     newGame();
     // update your HTML here / wins section
     $("#wins").text(wins);
   }

   //THIS IS YOUR LOSS CONDITION
   // if playerScore exceeds displayRandom number then log a loss
   if (playerScore > displayRandomNum) {
     losses++;
     // run reset function you wrote above
     newGame();
     // update your HTML here / loss section
     $("#losses").text(losses);
   }

   newGame();
   //run new game function,  you start your newgame function or restart whatever you called it here should be the last thing on the page so every time a user logs in it will start a new game.