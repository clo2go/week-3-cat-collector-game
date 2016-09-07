// GLOABAL VARIABLES
// ------------------------------------------------------------------------------------
  // Cat Variables
  var cats = {
    cat1:
    {
      name:"One",
      value:0
    },
    cat2:
    {
      name: "Two",
      value:0
    },
    cat3:
    {
      name: "Three",
      value:0
    },
    cat4:
    {
      name: "Four",
      value:0
    },

  };

// Scores (Current and Target)
var currentScore = 0;
var targetScore  = 0;

// Wins and Losses
var winCount  = 0;
var lossCount = 0;


// FUNCTIONS
// ------------------------------------------------------------------------------------
// helper function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Starts the game and restarts the game
var startGame = function() {
  //reset current score
  currentScore = 0;
  //set new target score
  targetScore = getRandom(19, 120);
  //set different value for each of the cats (between 1 and 12)
  cats.cat1.value = getRandom(1, 12);
  cats.cat2.value = getRandom(1, 12);
  cats.cat3.value = getRandom(1, 12);
  cats.cat4.value = getRandom(1, 12);
  //change html to reflect all of these changes
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  console.log("--------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Cat 1: " + cats.cat1.value + "  | cat2: " + cats.cat2.value + " | cat 3: " + cats.cat3.value + " | cat4: " + cats.cat4.value);
  console.log("--------------------------");
};
//Respond to clicks on the cats
var addValues = function(cats) {
  // Change currentScore
  currentScore = currentScore + cats.value;
  //Change the html to reflect changes in the current score.
  $("#yourScore").html(currentScore);
  //Call check win 
  checkWin();
  // Testing Console
  console.log("your current score: " + currentScore);

};

var checkWin = function() {
  //Check if current score 

  if (currentScore > targetScore) {
    
    console.log("You lost!");
    alert("Sorry, you lost. :(");
    //add to loss counter
    lossCount++;
    //Change loss count
    $("#lossCount").html(lossCount);

    //Restart the game
    startGame();
  }
  else if (currentScore == targetScore) {
    alert("Congratulations! You won!");
    console.log("You won!");

    //add to the win counter
    winCount++;
    //change win count
    $("#winCount").html(winCount);
    
    //Restart the game
    startGame();

  }
};


// MAIN PROCESSES
// ---------------------------------------------------------------------------------------------
// Starts game the first time
startGame();

$('#one').click(function() {
  addValues(cats.cat1);
});
$('#two').click(function() {
  addValues(cats.cat2);
});
$('#three').click(function() {
  addValues(cats.cat3);
});
$('#four').click(function() {
  addValues(cats.cat4);
});









