const a = require('prompt-sync')()
let b = a('Enter your exam mark: ')
b = Number(b)
if ( !isNaN(b) && (b >= 0 && b <= 100) ) {
    if(b < 40){
        console.log('F')
    }else if(b < 50){
        console.log('D')
    }else if(b < 60){
        console.log('C')
    }else if(b < 80){
        console.log('B')
    }else{
        console.log('A')
    }
}else{
    console.log(`invalid input!`)
}