/*
Ask user for their driving speed (km/h). Then:
 * If speed is ≤ 90, print "All good, drive safe!"
 * If speed is > 90 and ≤ 110, print "Caution! Slow down!"
 * If speed is > 110, print, "You are fined RM300!"
 * If input is invalid (negative or not a number), print "Invalid input!"
 */
const a = require('prompt-sync')()
let b = a('Enter your speed(km/h): ')

b = Number(b)

if( !isNaN(b) && b > 0 ){
    if( b <= 90 ){
        console.log('All good, drive safe!')
    }else if( b <= 110 ){
        console.log('Caution! Slow down!')
    }else {
        console.log('You are fined RM300!')
    }
}else{
    console.log('Invalid input!')
}