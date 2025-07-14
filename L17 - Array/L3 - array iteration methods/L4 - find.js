/*
 find() → Returns the first matching item only
 What it does:
 * Loops through the array
 * Stops at the first item that matches the condition
 * Returns the item itself, not an array
 * If no item matches, returns undefined
 */

// find n
let n = [5, 10, 20, 30]
let f = n.find(n => n === 20)
console.log(f)          // 20

// find name start with b
let m = ['alice', 'bob', 'brian', 'carol']
let x = m.find(n => n.startsWith('b'))
console.log(x)          // bob - return first found

//  find to return the first score > 60
let scores = [45, 70, 85, 60]
let c = scores.find(n => n > 60)
console.log(c)

//  find to return the first word with length > 3
let i = ['ant', 'bee', 'cat', 'dog']
let b = i.find(n => n.length >3)
console.log(b)          // undefined  (because none are > 3)
