/*
 push() → Add item to the end of an array
 What it does:
 * Adds a new value at the end of the array.
 */

let colors = ['red', 'green']
colors.push('blue')
console.log(colors)                 // [ 'red', 'green', 'blue' ]

// push more than one item
colors.push('purple', 'pink')
console.log(colors)

// push() also returns the new length of the array:
let n = colors.push('indigo')
console.log(n)
