let a = require('prompt-sync')()
let b, c = 3

do{
    b = a('Enter your score: ')
    c--
    if((isNaN(b) || b < 0 || b > 100) && c !== 0) console.log(`${c} left`)
    else if (c === 0)console.log('you have used all chances')
}while((isNaN(b) || b < 0 || b > 100) && c > 0)

if(b < 40) console.log('F')
else if(b < 50) console.log('D')
else if(b < 60) console.log('C')
else if(b < 70) console.log('B')
else  console.log('A')