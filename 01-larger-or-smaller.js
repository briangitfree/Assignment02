// This program is recognized the larger of two integers entered by the user
// Comp 648 JavaScript 1
// Author: Brian Dinh


// Assign the variables and Prompt the user for two integers
let numberOne = parseInt(prompt("Enter the first integer:"));
let numberTwo = parseInt(prompt("Enter the second integer:"));

// Compare and display the result
if (numberOne > numberTwo) {
    document.write("The larger number is: " + numberOne);
} else if (numberTwo > numberOne) {
    document.write("The larger number is: " + numberTwo);
} else {
    document.write("Both numbers are equal.");
}