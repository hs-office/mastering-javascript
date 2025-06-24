let a = ['Mosh', 'Sara', 'Bucky', 'Methy']
let b = Math.random()
let c = a.length-1, d = 0
let n = Math.floor(b*( c - d + 1 ) + 0)
console.log(n)
console.log(`Random array: ${a[n]}`)