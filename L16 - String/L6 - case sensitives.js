/*
 What They Do
 * These methods change the case of letters in a string:
 * toLowerCase() → changes all letters to lowercase
 * toUpperCase() → changes all letters to UPPERCASE
 */

let a = 'hElLO WoRlD'
console.log(a.toLocaleLowerCase())                      // hello world
console.log(a.toLocaleLowerCase() == 'hello world')     // true
console.log(a.toLocaleUpperCase())                      // HELLO WORLD
console.log(a.toLocaleUpperCase() == 'HELLO WORLD')     // true
