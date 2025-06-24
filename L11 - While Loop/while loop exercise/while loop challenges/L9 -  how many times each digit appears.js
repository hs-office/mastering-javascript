/*
 how many times each digit appears
 * Enter a number: 44225
 * Digit 2 appears 2 times
 * Digit 4 appears 2 times
 * Digit 5 appears 1 time
 */
let a = '44225'
let b = 0
let c = {}

while (b < a.length) {
    let d = a[b]
    if (c[d]) {
        c[d] += 1
    } else {
        c[d] = 1
    }
    b++
}

for (let d in c) {
    console.log(`Digit ${d} appears ${c[d]} time${c[d] > 1 ? 's' : ''}`)
}

