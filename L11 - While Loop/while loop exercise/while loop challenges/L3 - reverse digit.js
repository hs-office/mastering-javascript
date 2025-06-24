/*
 input  : 123
 output : 321
*/
let a = '123', i = a.length - 1, b = ''
while (i >= 0) {
    b += a[i]
    i--
}
console.log(b)   // Output: 321
