
let a = 'education', b = /[aeiou]/i, c = 0, d = 0;
while (c < a.length) {
    if (b.test(a[c])) {
        d++
    }
    c++
}
console.log(d) // Output: 5