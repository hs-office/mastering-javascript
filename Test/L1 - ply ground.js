let a = 'a man, a plan, a canal, Panama', b = a.length-1, c = '', d =  ''
let i = 0
a = a.toLowerCase()
// prepare new word without, or space
while( i <= b){
    // a ~ ignoring space and comma
    if(a[i] >= 'a' && a[i] <= 'z'){
        d += a[i]
    }
    i++
}console.log(d)
let e = isNaN(d)
console.log(e)
let f = ['a', 'b', 'c'], g = f.length
console.log(g)