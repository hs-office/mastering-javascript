/*
 convert usd to rm
 1 usd = rm 4.7
 */

let a = [5, 10, 15]
let b = a.map(n => n*4.7)
b.forEach((n, m) => {
    console.log(`${a[m]} usd\t:\t rm ${n}`)
    m++
})

b. map(n => console.log(`--\n${n} %`))  // if dont add -- line will gone
console.log(b)