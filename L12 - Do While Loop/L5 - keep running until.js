/*
Task:
 * Ask the user to enter a number.
 * Keep asking until they enter a number greater than 100.
 */
let a = require('prompt-sync')()
let b
do{
    b = Number(a('Enter a num: '))

}while(isNaN(b) || b <= 100)