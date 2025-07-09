let fruits = ['apple', 'banana', 'orange']
let a = fruits.length
// loops to print all items one by one

console.log('\nfor loops:')
for  (let i = 0; i < a; i++) {
    console.log(fruits[i])
}

console.log('\nwhile loops:')
let i = 0
while ( i !== a) {
    console.log(fruits[i])
    i++
}
