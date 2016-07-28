
	// Array for ids using variable gems. Start at 0 for a value.
	var gems = {

	#blue: 0;	
	#pink: 0;
	#orange: 0;
	#red: 0
};

	// Variables for score, number to guess, and record.
	var currentScore = 0;
	var numberToGuess = 0;
	var playerWins = 0;
	var playerLosses = 0;


     // Function to shuffle numbers from images
    // function shuffle(a) {

    //     var j, x, i;

    //     for (i = a.length; i; i--) {

    //         j = Math.floor(Math.random() * i);

    //         x = a[i - 1];

    //         a[i - 1] = a[j];

    //         a[j] = x;
        

    //     shuffle(numbers);
    //     console.log(numbers);

    //     var retArr = [numberToGuess, numbers];
    //     return retArr;

    //   }


// Game start
var startGame = function() {
	
	yourNumber = 0;

	//  Chooses a random number between 19 and 120
	numberToGuess = Math.floor(Math.random() * 120) + 19 

	// Each gem has a random number value between 1 and 12
	gems.blue.value = Math.floor(Math.random() * 12) + 1  
	gems.pink.value = Math.floor(Math.random() * 12) + 1  
	gems.orange.value = Math.floor(Math.random() * 12) + 1  
	gems.red.value 	= Math.floor(Math.random() * 12) + 1  

	$("#yourNumber").html(currentScore);
	$("#numberToGuess").html(targetScore);

}

// Gives each gem a value and then adds to it
var addValues = function(gems) {
	
	currentScore = currentScore + gems.value;

	$("#yourScore").html(currentScore);
	
	checkWin();

}

	// Function to check if user wins/scores match
var checkWin = function() {

	
	if(currentScore > targetScore) {
		alert("You lost!");
				// Add a loss 
		losses++;

		$("#losses").html(losses);

				// Restart the game
		startGame();
	}

	else if (currentScore == targetScore) {
		alert("You Win!");
		

				// Adds a win
		wins++;

		$("#wins").html(wins);

				// Restarts the game
		startGame();
	}

}

	// Starts the game and uses a function to give a number value to each gem
startGame();

	$("#blue").click(function() {
		addValues(gems.blue);
	});

	$("#pink").click(function() {
		addValues(gems.pink);
	});

	$("#orange").click(function() {
		addValues(gems.orange);
	});

	$("#yellow").click(function() {
		addValues(gems.yellow);
	});