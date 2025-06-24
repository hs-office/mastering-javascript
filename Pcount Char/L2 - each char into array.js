let a = 'hello', b = a.length - 1, c = 0, d = []

while (c <= b) {
    console.log(a[c])
    d.push(a[c])
    c++
}console.log(d)