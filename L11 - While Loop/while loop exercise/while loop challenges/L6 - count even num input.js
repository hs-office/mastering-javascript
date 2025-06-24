/*
If users enter 4825, the even digits are 4, 8, and 2 →
total: 3 even digits
If user enters 123, only 2 is even → total: 1 even digit
 */

let a = '4825', b = 0, c =0
while(b < a.length) {
    //a = Number(a)
    if(a[b]%2 == 0 ){
        c++
    }
    b++
}console.log(c)