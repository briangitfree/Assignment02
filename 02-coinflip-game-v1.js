// This program is coin flip (Heads or Tails)
// Comp 648 JavaScript 1
// Author: Brian Dinh



// Generate a random number (0 or 1)
let coinFlip = Math.round(Math.random());

// Prompt the user for Heads or Tails
let outPut = prompt("Choose Heads or Tails:");

// Convert user input to lowercase for consistency
outPut = outPut.toLowerCase();
// Nested conditionals to check results
if (coinFlip === 0) {
    // Result is Heads
    if (outPut === "heads") {
        console.log("The flip was heads and you chose heads...you win!");
    } else {
        console.log("The flip was heads but you chose tails...you lose!");
    }
} else {
    // Result is Tails
    if (outPut === "heads") {
        console.log("The flip was tails but you chose heads...you lose!");
    } else {
        console.log("The flip was tails and you chose tails...you win!");
    }
}