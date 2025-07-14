// Q1: filter to keep only numbers > 100
let n = [50, 150, 200, 75, 300]
let a = n.filter(n => n > 100)
console.log(a)              // [ 150, 200, 300 ]

// Q2: filter to keep only words that start with 'b'
let w = ['ball', 'cat', 'bat', 'apple', 'banana']
let b = w.filter(n => n.startsWith('b'))
console.log(b)          // [ 'ball', 'bat', 'banana' ]

// Q3: filter to keep only strings with exactly 3 letters
let s = ['abc', 'de', 'fgh', 'ijk', 'lm']
let c = s.filter(n => n.length === 3)
console.log(c)          // [ 'abc', 'fgh', 'ijk' ]


