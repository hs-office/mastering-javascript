const a = require('prompt-sync')()
let b = Number(a('Enter a num: '))
if (!isNaN(b)){
    if (b%2 === 0){
        console.log('Even')
    }
    else{
        console.log('Odd')
    }
}else {
    console.log('Not a num')
}
