let a = 0, b = 0
for (let i = 1; i <= 100; i++) {
    if( i%3 === 0 || i%5 === 0 ) {
        a += i
        b++
    }

}
console.log(`Total: ${b}`)
console.log(`Sum: ${a}`)