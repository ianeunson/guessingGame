// Asks user to enter a number and makes sure it's a number
let maximum = parseInt(prompt("Enter a maximum number"));

//While user has not entered a valid number it asks to enter a valid number
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

//Creates a randomly generated number below the max to be guessed
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

//Prompts user to guess a number and stores it
let guess = parseInt(prompt("Guess a number"));

//Amount of guesses user gets
let guessCount = 5;

//While guess is wrong asks user again and reduces number of remaining guesses
while (guess !== targetNum && guessCount > 0) {

    if (guess < targetNum) {
        guess = parseInt(prompt(`Wrong number, too low, guess again! \nYou have ${guessCount} tries left`));
    } else if (guess > targetNum) {
        guess = parseInt(prompt(`Wrong number, too high, guess again! \nYou have ${guessCount} tries left`));
    }

    if (guess === targetNum) {
        console.log("YOU GOT IT RIGHT");
        break;
    }
    guessCount--;
}
