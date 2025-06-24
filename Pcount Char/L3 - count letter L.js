let a = 'hello', b = a.length-1, c = 0, d = []
a = a.toLowerCase()
while(c <= b){
    d.push(a[c])
    c++
}console.log(d)
let n = 'l', m = 0, e = 0
while(e <= d.length-1){
    if(d[e] == n){
        m ++
    }
    e++
}console.log(`${n} : ${m}`)
console.log()