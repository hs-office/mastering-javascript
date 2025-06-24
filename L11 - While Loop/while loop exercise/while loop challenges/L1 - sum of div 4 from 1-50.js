// calculate the sum of all numbers
// between 1 and 50 that are divisible by 4.
let a = 1, b = 0
while(a <= 50){
    if(a%4 === 0){
        b += a
    }
    a++
}console.log(b)