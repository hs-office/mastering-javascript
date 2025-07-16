/*
 includes() → Checks if an array contains a specific value
 What it does:
 * Checks if the array includes a specific value
 * Returns true if found
 * Returns false if not found
 * Does not check conditions (just exact value)
 */
// eg 1
let colors = ['red', 'green', 'blue']
console.log(colors.includes('green'))        // true
console.log(colors.includes('yellow'))       // false

// eg 2
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(3))             // true
console.log(numbers.includes(10))            // false


// e1: check if 'dog' is inside
let animals = ['cat', 'dog', 'rabbit']
let ca = animals.includes('dog')
console.log(ca)                 // true

// e2: check if 400 exists
let nums = [100, 200, 300]
let cn = nums.includes(400)
console.log(cn)                 // false
