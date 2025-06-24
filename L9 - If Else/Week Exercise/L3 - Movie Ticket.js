const n = require('prompt-sync')()
let a = n('Enter your age: ')
a = Number(a)

if( !isNaN(a) && a >= 0 ) {
    if(a <= 12){
        console.log(`Age: ${a} ~ Price: Rm 5`)
    }else if(a <= 17 ){
        console.log(`Age: ${a} ~ Price: Rm 8`)
    }else if(a <= 59 ){
        console.log(`Age: ${a} ~ Price: Rm 12`)
    }else{
        console.log(`Age: ${a} ~ Price: Rm 6`)
    }
}else{
    console.log('Invalid age')
}