// Q1: Write a function that takes a number.
// If it's divisible by 3, return "Fizz".
// If divisible by 5, return "Buzz".
// If divisible by both, return "FizzBuzz".
// Else return the number itself.

function a(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}
console.log(a(165))
