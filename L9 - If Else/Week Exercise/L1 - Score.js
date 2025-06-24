/*
Input Validator
💡 Task:
     * Ask the user to enter their exam mark.
     * If it’s a valid number between 0 and 100, print "Your mark is ___"
     * If it's not valid, print "Invalid input"
 */
const a = require('prompt-sync')()
let b = a('Enter your exam mark: ')
b = Number(b)
if ( !isNaN(b) && (b >= 0 && b <= 100) ) {
    console.log(`You got ${b}!`)
}else{
    console.log(`invalid input!`)
}