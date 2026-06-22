// This program is recognized the larger of two integers entered by the user
// Comp 648 JavaScript 1
// Author: Brian Dinh


// Prompt the user for two integers
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

// Compare and display the result
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} else if (num2 > num1) {
    document.write("The larger number is: " + num2);
} else {
    document.write("Both numbers are equal.");
}