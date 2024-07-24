#! /usr/bin/env node
import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 10) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "guessedNumber",
    message: "Guess a number between 1 - 10"
});
if (userInput.guessedNumber === roundNumber) {
    console.log(`Congratulations! You guessed it correctly!`);
}
else {
    console.log(`Sorry! Try again. Correct answer is: ${roundNumber}`);
}
