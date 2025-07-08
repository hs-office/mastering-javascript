let a = 3, n = 0, c = -1,d= 'a'
let b = a => isNaN(a)? 'invalid' : a>0? 'positive' : a<0? 'negative': 'zero'
console.log(b(a))       //positive
console.log(b(n))       //zero
console.log(b(c))       //negative
console.log(b(d))       //invalid