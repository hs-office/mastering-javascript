let a = require('prompt-sync')()
let b = a('weight(kg): ')
let c = a('height(cm): '), d = 0
if (isNaN(b) || b < 0){
    console.log('Invalid input')
}else{
    d = b / ((c/100)**2)
    if(d < 18.5) console.log('underweight')
    else if (d < 24.9) console.log('normal')
    else if (d < 29.9) console.log('overweight')
    else console.log('obese')
}
