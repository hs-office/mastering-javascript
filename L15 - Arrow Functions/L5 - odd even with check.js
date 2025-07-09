let a = require('prompt-sync')()
let n = a('Enter a number: ')
let b = Number(n)
let c = b => b % 2 === 0 ? 'even' : 'odd'

if (n.trim() !== '' && !isNaN(b)) {
    console.log(c(b))
} else {
    console.log('invalid!')
}
