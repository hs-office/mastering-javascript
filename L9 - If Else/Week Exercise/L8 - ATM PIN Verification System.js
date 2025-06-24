/*
Task:
Create a simple ATM system where:
 * User is asked to enter a 4-digit PIN.
 * If the entered PIN is correct (let's say the correct PIN is 1234),
   show "Access granted!".
 * If wrong, show "Access denied!".
 */
const a = require('prompt-sync')()
let b = a('Enter 4 digits pin: ')
let c = 1234
// assume username: mosh
let d = 'mosh'

b = Number(b)
if( !isNaN(b) && b === c){
    console.log('Access granted!')
    console.log(`Hello, ${d}`)
}else{
    console.log('Access denied!')
}

