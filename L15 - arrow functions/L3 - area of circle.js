/*
Write an arrow function that:
 * takes one input: the radius of a circle
 * returns the area of the circle
 * area formula: π * r^2 (use Math.PI)
 */
let a = require('prompt-sync')()
let b = Number(a('Enter radius(cm): '))
let c = b => (Math.PI*(b**2)).toFixed(2)
console.log(c(b))

