/*
Ask the user to enter a positive number, and
then use a while loop to count how many digits are in that number.
eg:
Enter a number: 52103
The number 52103 has 5 digits.
 */
let a = require('prompt-sync')()
let b = a('Enter a num: '), c = 0
while(c < b.length){
    c++
}console.log(`The number ${b} has ${c} digits`)
