/*
Print all numbers from 1 to 50 that are divisible by both 3 and 5.
In other words, numbers that can be divided by 3 and 5 with no remainder.
 */
for (i = 1 ; i <= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i)
    }
}