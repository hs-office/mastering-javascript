let b = 0
let a = n => {
    b = n*n
    return `${n}^2 = ${b}`
}
console.log(a(4))

/*
can make it shorter:
const a = n => `${n}^2 = ${n*n}`
console.log(a(4))  // 4^2 = 16

if only return or have 1 line in function, then can shorten
 */