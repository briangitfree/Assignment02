// This program is Odd or Even
// Comp 648 JavaScript 1
// Author: Brian Dinh


// set the for loop for 15 times and use the modulus operation to check 
// the remainder of the number when divided by 2 to determine if it is odd or even number

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}