/*
 Array of Objects: Basic
 Instead of storing simple values like 'apple' or 100,
 you store objects inside an array.
 */

// eg:
let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
]

// access data
console.log(users[0].name) // Alice
console.log(users[1].age)  // 30

// finds user named bob
let found = users.find(user => user.name === 'Bob')
console.log(found)                  // { name: 'Bob', age: 30 }

// filter users under 30
let uage = users.filter( n => n.age < 30 )
console.log(uage)                   // [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 22 } ]

// check if some of them age > 25
let sage = users.some(n => n.age > 25 )
console.log(sage)                   // true

// every user has e
let eu = users.every(n => n.name.includes('e'))
console.log(eu)                     // false ~ Bob doesnt hv e

