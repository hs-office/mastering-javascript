/*
 What includes() Does
 * It checks if a string contains a certain piece of text (substring).
 * It returns true or false.
 */

// basic usages
let a = 'JavaScript is fun!'
console.log(a.includes('fun'))          // true
console.log(a.includes('boring'))       // false

// case sensitives
let b = 'hello World'
console.log(b.includes('World'))        // true
console.log(b.includes('world'))        // false

// can fix that by
b = b.toLowerCase()
console.log(b.includes('world'))        // true

// check for space
console.log(b.includes(' '))            // true


