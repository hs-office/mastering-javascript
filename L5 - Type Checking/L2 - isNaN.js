let a = 'hello', b = 12, c = '34'
console.log(isNaN(a))       // true - hello is str
console.log(isNaN(b))       // false - 12 is a num
console.log(!isNaN(b))      // true - not isNaN
console.log(isNaN(c))      // false - 34 is num
console.log(!isNaN(c))      // true - not isNaN
console.log(typeof b)