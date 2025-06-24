/*
Task:
 * Ask the user to enter:
 * Their current balance (in RM)
 * Amount they want to withdraw

💡 Rules:
 * If the balance is enough, subtract the amount and show the new balance.
 * If not enough, show "Insufficient funds!"
 * If input is invalid (not a number or less than/equal to zero), show "Invalid input!"
 */

const a = require('prompt-sync')()
let b = a('Enter balance\t: RM ')
let c = a('Enter withdraw amount\t: RM ')
let d = 0

b= Number(b)
c = Number(c)
if( ( !isNaN(b) && b >= 0 ) && ( !isNaN(c) && c >= 0 ) ){
    if( b >= c ){
        d = b - c
        console.log(`Withdraw successful! \nBalance: RM${d}`)
    }else{
        console.log(`Insufficient funds! \nBalance: RM${b}`)
    }
}else{
    console.log('Invalid Input')
}