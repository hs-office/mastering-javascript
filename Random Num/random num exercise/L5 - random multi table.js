let a = Math.random(), min = 1, max = 100
let b = Math.floor(a*(max - min+1) +  min)
let n = 0, m = 0
while(n <= 12){
    m = n*b
    console.log(`${n} x ${b} = ${m}`)
    n++
}