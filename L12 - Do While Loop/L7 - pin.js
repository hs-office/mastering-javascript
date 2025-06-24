let a = require('prompt-sync')()
let b, c = '234'
do{
    b = a('Enter a pin: ')
    if(b !== c){
        console.log('Wrong pin!try again')
    }

}while(b !== c)
console.log('Welcome!')