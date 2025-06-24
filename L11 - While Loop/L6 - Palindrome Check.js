// Palindrome Check: madam if reverse is madam
let a = 'madam'
let b = 0
let c = a.length - 1
let d = true

while (b < c) {
    if (a[b] !== a[c]) {
        d = false
        break
    }
    b++
    c--
}

if (d) {
    console.log(`${a} is a palindrome`)
} else {
    console.log(`${a} is not a palindrome`)
}
// for simple one go for leetcode while loop folder