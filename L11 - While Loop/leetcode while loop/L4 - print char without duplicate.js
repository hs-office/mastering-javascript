// banana --> ban
let a = 'banana'
let b = ''           // to store characters already printed
let c = 0

while (c < a.length) {
    if (!b.includes(a[c])) {
        console.log(a[c])   // print if not already printed
        b += a[c]           // add to "printed" list
    }
    c++
}
