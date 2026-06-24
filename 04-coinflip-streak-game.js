// This program is coin flip "Coinflip Streak"
// Comp 648 JavaScript 1
// Author: Brian Dinh




// 1. Declare the variable without assigning a value
let coinFlip;

// 2. Create a do...while loop
do {
    // 3. Assign a randomly generated number (0 or 1)
    coinFlip = Math.floor(Math.random() * 2);

    // 4. Use a conditional statement to check the result
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }

// 5. Continue looping while the result is NOT "Tails"
} while (coinFlip !== 1);