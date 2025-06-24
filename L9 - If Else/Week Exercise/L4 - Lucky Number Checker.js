/*
Ask the user to enter a number. Then check:
     * If the number is divisible by 3 → print "Lucky!"
     * If divisible by 7 → print "Very Lucky!"
     * If divisible by both 3 and 7 → print "Jackpot!"
     * Otherwise → print "Try again"
 */
const a = require('prompt-sync')()
let b = a('Enter a num: ')

// convert
b = Number(b)
if( !isNaN(b) && b > 0 ){
    if( ( b%3 === 0 ) && ( b%7 === 0 ) ){
        console.log('Jackpot!')
    }else if( b%3 === 0 ){
        console.log('Lucky!')
    }else if( b%7 === 0 ){
        console.log('Very Lucky!')
    }else{
        console.log('Try again!')
    }
}else{
    console.log('Try again!')
}