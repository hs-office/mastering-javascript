let a ='mosh', b = 23, c = require('prompt-sync')()
let d, e = 'mosh123', i = 0

do{
    d = c('Enter password: ')
    i++
    if(d === e){
        console.log('welcome '+ a)
        console.log('name: '+ a)
        console.log('age: '+ b)
        break
    }

}while(i != 3)
if(i==3){
    console.log('Too many attempts!')
}

