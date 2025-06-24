/*
    Ask the user for their score (0–100) using prompt-sync
    Convert the input to a number
    Use if...else if...else to print the grade:

    | Score Range | Grade Output |
    | ----------- | ------------ |
    | 90–100      | A            |
    | 80–89       | B            |
    | 70–79       | C            |
    | 60–69       | D            |
    | below 60    | F            |
 */
const a = require('prompt-sync')();

let b = a('Enter your marks: ');
let c = Number(b);

if (!isNaN(c)) {
    if (c > 100) {
        console.log('bullshit');  // or "Invalid score"
    } else if (c >= 90) {
        console.log('A');
    } else if (c >= 80) {
        console.log('B');
    } else if (c >= 70) {
        console.log('C');
    } else if (c >= 60) {
        console.log('D');
    } else if (c >= 0) {
        console.log('F');
    } else {
        console.log('not processing!');
    }
} else {
    console.log('Unacceptable');
}
