/*
 Task:
 Write a function that:
    Takes a number
    Returns "Big Even" if number is even and greater than 100
    Returns "Small Even" if number is even and 100 or less
    Returns "Odd" if number is odd
 */
let a = n => {
    if( n % 2 === 0 && n > 100 ) return 'Big Even'
    if( n % 2 === 0 && n < 100 ) return 'Small Even'
    if( n % 2 !== 0) return 'Odd'
    else return n
}
console.log(a(1344444444333333333333))
console.log(a(124))
console.log(a(42))
console.log(a(77))