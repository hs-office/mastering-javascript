/*
 some() → Checks if any item matches the condition
 What it does:
 * Loops through the array
 * Returns true if at least one item matches the condition
 * Returns false if none match
 * Stops immediately when it finds the first true
 */

let n = [1, 5, 20, 30]
let a = n.some(n => n > 10)
console.log(a)                  // true

let na = ['alice', 'bob', 'brian', 'carol']
let b = na.some(n => n.includes('o'))
let c = na.some(n => n === 'blue')
console.log(b)                  // true
console.log(c)                  // false
