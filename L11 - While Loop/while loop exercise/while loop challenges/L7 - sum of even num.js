/*
Enter a number: 4825
Even digits: 4, 8, 2
Sum of even digits = 4 + 8 + 2 = 14
 */
let a = '4825', b = 0, c =0
while(b < a.length) {
    if(Number(a[b])%2 === 0 ){
        c += Number(a[b])
    }
    b++
}console.log(`The sum of ${a} is ${c}`)