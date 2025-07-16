/*
 every() → Checks if all items match the condition
 What it does:
 * Loops through the array
 * Returns true if every item matches the condition
 * Returns false if even one item fails the condition
 * Stops immediately when it finds the first false
 */

// are all numbers positive?
let n = [5, 10, 15]
let pn = n.every(i => i > 0)
console.log(pn)             // true

// is every word length > 3?
let w = ['apple', 'banana', 'cat']
let wl = w.every( n => n.length > 3)
console.log(wl)             // false ~ cat is 3

// check if all numbers > 5
let a = [10, 20, 30, 40]
let b = a.every(n => n > 5)
console.log(b)          // true

// check if all fruits include the letter 'a'
let c = ['apple', 'banana', 'kiwi']
let d = c.every(n => n.includes('a'))
console.log(d)          // false
