/*
 splice() → Add, remove, or replace items anywhere in an array
 splice() can:
 * Remove items from any position
 * Insert items at any position
 * Replace items by removing and adding at once
 */

// remove
let a = ['a', 'b', 'c', 'd']
a.splice(1, 2)      // start at index 1, remove 2 items ('b', 'c')
console.log(a)                      // ['a', 'd']

// add items (without deleting)
let b = ['a', 'c']
b.splice(1, 0, 'b')     // at index 1, remove 0, insert 'b'
console.log(b)                              // ['a', 'b', 'c']

// replace items
let c = ['a', 'x', 'c']
c.splice(1, 1, 'b')     // at index 1, remove 1 item ('x'), insert 'b'
console.log(c)                              // ['a', 'b', 'c']

