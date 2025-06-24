const a = require('prompt-sync')()
let b = Number(a('Enter a num: '))
let c = 0, d = 0
while( c <= b){
    d += c
    c++
}console.log(d)