// Creates an array that lists out all of the options.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to hold the number of wins,losses, guesses left.  Wins and Losses start at 0, guesses left starts at 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = []; //Array for user letter guesses


document.onkeyup = function(event) {
    
    var yourGuess = event.key; //variable to capture the player's guess
    guessedLetters.push(yourGuess); //Collect the letters entered by the user 

    // Computer guesses randomly chosen based on the the var letters array
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    //Tally wins, losses and the guessesLeft.  Restart guessesLeft and guessedLetters with a win or loss.
    if (yourGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessedLetters = [];
    }

    else {
        guessesLeft--;
    }

    //If the guessesLeft equals 0, you lose, and both guessesLeft and guessedLetters restart to 9 guesses and no letters showing.
    if (guessesLeft === 0){
        losses++;
        guessesLeft = 9;
        guessedLetters = [];
    }

    // Found a different way to relay the results with a variable named html
    var html = 
        "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of:</p>" + 
        "<p>Wins: " + wins + 
        "<p>Loses: "+ losses + 
        "<p>Guesses Remaining: " + guessesLeft + 
        "<p>Your Guesses so far: " +  guessedLetters.join(", "); //Shows user guesses with spacing

        document.body.innerHTML = html;
}

