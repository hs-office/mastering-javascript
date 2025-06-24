/*
input  : hello
Should log: h:1, e:1, l:2, o:1
 */
let a = 'hello'
let b = {}      // to store counts
let c = 0       // index

while (c < a.length) {
    let d = a[c]     // current character

    if (b[d]) {
        b[d] += 1
    } else {
        b[d] = 1
    }

    c++
}

// build final string
let e = ''
for (let f in b) {
    e += `${f}:${b[f]}, `
}

console.log(e.slice(0, -2))   // remove last comma and space
