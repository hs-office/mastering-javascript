// Q1 : check if there is any age < 18
let ages = [17, 20, 25, 16]
let a = ages.some(n => n > 18)              // true
let b = ages.some(n => n < 10)              // false
console.log(a)
console.log(b)

// Q2 : check if any color is 'yellow'
let colors = ['red', 'green', 'blue']
let c = colors.some(n => n === 'yellow')       // false
console.log(c)