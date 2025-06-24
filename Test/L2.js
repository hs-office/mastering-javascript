/*
 Task:
    Write a function that takes a number.
    If divisible by 2 and 7, return "FooBar"
    If divisible by 2 only, return "Foo"
    If divisible by 7 only, return "Bar"
    Else, return the number itself
 */
let a = n => {
    if( n % 2 === 0 &&  n % 7 === 0  ) return 'FooBar'
    if( n % 2 === 0 ) return 'Foo'
    if( n % 7 === 0  ) return 'Bar'
    else return n
}
console.log(a(543))