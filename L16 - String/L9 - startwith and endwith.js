/*
What They Do
 * These methods check if a string:
 * starts with a specific value → .startsWith()
 * ends with a specific value → .endsWith()
They return true or false.
 */

// basic
let a = "JavaScript"
console.log(a.startsWith('Java'))        // true
console.log(a.endsWith('Script'))        // true

// case-sensitive
let b = 'Hello, World!'
console.log(b.startsWith('hello'))      // false
console.log(b.endsWith('world'))        // false
console.log(b.endsWith('World'))        // true: case-sensitive

// position argument
let c = 'Learning JavaScript'
console.log(c.startsWith('JavaScript', 9))      // true:
// it skips the first 9 chars, then checks if it starts with 'JavaScript'
