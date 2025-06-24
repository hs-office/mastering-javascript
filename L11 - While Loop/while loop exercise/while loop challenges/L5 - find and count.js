//let a = 'pineapple', b = 'p',
let n = require('prompt-sync')()
let a = n('Enter word: '), c = a.length - 1, d = 0
let b = n('Enter char: ')
while(c >= 0){
    //console.log(a[c])
    if(a[c] == b){
        d++
    }
    c--
}console.log(`${b} in ${a} : ${d}`)