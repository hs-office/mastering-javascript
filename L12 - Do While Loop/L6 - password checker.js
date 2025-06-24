let a = require('prompt-sync')()
let b, c = '111'
do{
    b = a('password: ')

}while(b !== c)
console.log('Welcome!')