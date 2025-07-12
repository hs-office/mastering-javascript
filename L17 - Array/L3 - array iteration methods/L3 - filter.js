/*
 filter() → Keeps only items that match a condition
 What it does:
 * Loops through every item
 * Only keeps items that return true in your condition
 * Returns a new array with matching items
 */

let a = [ 1, 2, 3, 4, 5, 6, 8, 9, 10]
let b = a.filter(n => n % 2 === 0)
let c = a.filter(n => n%2 !== 0)
console.log(b)
console.log(c)

let d = ['cat', 'fish', 'bird']
let e = d.filter(n => n.includes('a'))
console.log(e)

let scores = [55, 70, 82, 40, 99]
let f = scores.filter(n => n > 60)      //filter to keep only scores 60 and above
console.log(f)

let fruits = ['apple', 'banana', 'cherry', 'kiwi']
let g = fruits.filter(n => n.length > 5)
console.log(g)