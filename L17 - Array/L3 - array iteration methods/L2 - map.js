/*
 * map() → Creates a new array by changing each item
 * What it does:
  * Loops through the array (like forEach)
  * Transforms each item
  * Returns a new array with the results
 */

let a = [1,2,3]
let b = a.map( n => n*2)
console.log(a)
console.log(b)

// use maps to return a new array where each price has +5 added
let prices = [10, 20, 30]
let c = prices.map(n => n+5)
console.log(c)

// change it to lowercase
let d = ['APPLE', 'BANANA', 'WATERMELON']
let e = d.map(n => n.toLowerCase())
console.log(e)