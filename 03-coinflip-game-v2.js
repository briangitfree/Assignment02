// This program is coin flip (Heads or Tails) Version 2
// Comp 648 JavaScript 1
// Author: Brian Dinh


// Declare variable for coin flip
let coinFlip;

// Prompt user for enter the number of times to flip the coin
 numTimesFlips = parseInt(prompt("How many times do you like to flip the coin?"));

// Create for loop for the user's input number of times to flip the coin
for (var i = 0; i < numTimesFlips; i++) {

    // Assign random number (0 or 1)
    coinFlip = Math.floor(Math.random() * 2);

    // Conditional check for Heads or Tails
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
