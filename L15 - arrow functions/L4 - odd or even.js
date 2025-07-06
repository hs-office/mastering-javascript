let a = require('prompt-sync')()
let b = a('Enter a num: ')
let n = Number(b)
let c = b => b%2 === 0? 'even' : 'odd'
//console.log(`The number is ${c}`)       // print all of c
//console.log(c(b))                       // print even or odd
if(b !== '' && !isNaN(n)){
    console.log(c(n))
}else{
    console.log('invalid')
}