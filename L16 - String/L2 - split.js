// split()
/*
    It splits a string into an array using a character or
    symbol you choose as the "split point."
 */
let a = 'hello, world!'
let b = a.split(' ')        // [ 'hello,', 'world!' ]
let n = a.split('')
console.log(b)
console.log(n)                      // split every char

let c = 'orange,pine,watermelon'
let d = c.split(',')        // [ 'orange', 'pine', 'watermelon' ]
console.log(d)