const a = require('prompt-sync')()
let b = a('Enter 4-digit PIN: ')
const correctPIN = '1234'

if (b === correctPIN) {
    console.log('Access granted!')
    console.log('Hello, mosh')
} else {
    console.log('Access denied!')
}
/*
In real ATM logic, a pin like "0123" should not match "123" —
but your code converts it to number, so the zero is dropped.
 */