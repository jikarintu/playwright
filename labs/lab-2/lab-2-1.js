// Input height (m) and weight (kg) -> BMI
// Underweight: <18.5
// Normal weight: 18.5 – 24.9
// Overweight: 25–29.9
// Obesity: BMI of 30 or greater
// Suggest for user action

const readlineSync = require('readline-sync');
let userHeight = Number(readlineSync.question("Input your height: "));
let userWeight = Number(readlineSync.question("Input your weight: "));
let BMI = userWeight / (userHeight * userHeight);


if (BMI < 18.5) {
    console.log("You are Underweight!");
    let idealW = 18.5 * (userHeight * userHeight);
    let weightNeed = idealW - userWeight;
    console.log(`You need to gain weight ${weightNeed} kg`);
} else if (BMI < 25) {
    console.log("You are Normal!");
} else if (BMI < 30) {
    console.log("You are Overweight!");
    let idealW = 29.9 * (userHeight * userHeight);
    let weightNeed= userWeight - idealW;
    console.log(`You need to lose weight ${weightNeed} kg`);
} else if (BMI > 30) {
    console.log("You are Obesity!");
    let idealW = 29.9 * (userHeight * userHeight);
    let weightNeed = userWeight - idealW;
    console.log(`You need to lose weight ${weightNeed} kg`);
}
