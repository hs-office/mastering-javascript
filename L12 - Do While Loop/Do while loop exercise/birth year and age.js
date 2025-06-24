let a = require('prompt-sync')()
let b, c = 2026

do{
    b = Number(a('Birth year: '))

}while(isNaN(b) || b < 1700 )

c = c - b
console.log(`Next year you will be ${c}`)