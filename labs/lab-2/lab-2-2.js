// Input a number, print out that number is odd or even

const readlineSync = require('readline-sync');
let number = Number(readlineSync.question("Input a number: "));

if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}