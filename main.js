//First Of All We Have Get All Values
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;

// For Random Number
var randomNumber = Math.floor(Math.random() *100) + 1;

//For Focues Of GuessFields
guessField.focus();


//Make Function To Work For Submittion
function checkGuess() {
    // console.log('test');

    var userGuess = Number(guessField.value);
    // console.log(userGuess);

    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    // If USer Get Numbers
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations!You Got It Right!';
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';
        //Here Also
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! G A M E   O V E R !!!';
        lowOrHi.textContent = '';

        //call SetGameOver
        setGameOver();


    } else {
        lastResult.textContent = 'W   R   O   N   G  ! TRY ANOTHER NUMBER';
        lastResult.style.background = 'red';
        // One Condition If Poosible
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too Low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too High!';
        }
    }

    // For Next Guess Count Increase
    guessCount++;
    guessField.value = '';
    guessField.focus();


}


//Add Event Listener
guessSubmit.addEventListener("click", checkGuess);

// Function For GameOver
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    //Make Reset Game Function
    resetButton.addEventListener('click', resetGame);
}

// For CLick reset Button Work
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.results p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.background = '#fff';
    randomNumber = Math.floor(Math.random() * 100) + 1;

}