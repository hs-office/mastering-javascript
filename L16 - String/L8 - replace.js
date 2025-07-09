/*
 What .replace() Does
 * It replaces part of a string with something else
 * but only the first match (unless you use a special trick)
 * formula:  a.replace(b,c)
             * b - what do you want to find
             * c - something new to replace with
 */

let a = 'Javascript is awesome!'
let update_a = a.replace('awesome', 'fun')
console.log(update_a)

// rules:

// it only replaces the first thing it found
let b = 'apple, apple, apple'
let update_b = b.replace('apple', 'orange')
console.log(update_b)       // orange, apple, apple
// to fix this use repalceAll
update_b = b.replaceAll('apple', 'berry')
console.log(update_b)       // berry, berry, berry

// repalces char
let c = 'J@vascript'
let update_c = c.replace('@', 'a')
console.log(update_c)       // Javascript

// case sensitives
let d = 'J@vascript'
let update_d = d.replace('@', 'A')
console.log(update_d)       // Javascript


