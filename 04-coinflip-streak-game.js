// This program is coin flip "Coinflip Streak"
// Comp 648 JavaScript 1
// Author: Brian Dinh




// Declare the variable for coin flip without assigning a value
let coinFlip;

// Create a do...while loop for ramdom 0 or 1 and check the condition for Heads or Tails
do {
    // Assign a randomly generated number (0 or 1)
    coinFlip = Math.floor(Math.random() * 2);

    // Use a conditional statement to check the result
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }

// 5. Continue looping while until the result is not Tails
} while (coinFlip !== 1);