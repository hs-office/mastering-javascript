/*
Tasks:
 * Ask user for weight (kg) and height (m) using prompt-sync
 * Calculate BMI using this formula:
 * BMI = weight / (height * height)
 * Print the BMI category based on the value:
    | BMI Value     | Category    |
    | ------------- | ----------- |
    | < 18.5        | Underweight |
    | 18.5–24.9     | Normal      |
    | 25.0–29.9     | Overweight  |
    | 30.0 or above | Obese       |
 */
const a = require('prompt-sync')();
console.log('Enter your: ');

// Get inputs and convert
let b = Number(a('1. weight(kg): '));
let c = Number(a('2. height(cm): ')) / 100; // convert to meters

// Validate
if (!isNaN(b) && b > 0 && !isNaN(c) && c > 0) {
    let d = b / (c * c);

    if (d < 18.5) {
        console.log(`${d.toFixed(2)}     Underweight`);
    } else if (d < 25) {
        console.log(`${d.toFixed(2)}     Normal`);
    } else if (d < 30) {
        console.log(`${d.toFixed(2)}     Overweight`);
    } else {
        console.log(`${d.toFixed(2)}     Obese`);
    }
} else {
    console.log('Invalid input. Try again.');
}
