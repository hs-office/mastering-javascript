/*
 Task:
  * Their age
  * The day they’re watching (e.g., "Monday")
 */
const a = require('prompt-sync')()
let b = a('Enter your age: ')
let c = a('Day: ' +
    '\n1. Weekday' +
    '\n2. weekend' +
    '\nEnter day(num): ')
b = Number(b)
c = Number(c)
if( (!isNaN(b) && b >0) && (!isNaN(c) && (c === 1 || c === 2)) ) {
    if( b <= 12 ){
        console.log('Child ticket: RM 8')
    }else if( b >= 60 ){
        console.log('Senior ticket: RM 6')
    }else{
        if( c === 1){
            console.log('Standard ticket: RM 10')
        }else if( c === 2 ){
            console.log('Weekend ticket: RM 12')
        }
    }
}else{
    console.log('Contact customer service')
}