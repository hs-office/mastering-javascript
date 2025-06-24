let a = n => {
    if( n % 2 === 0 && n >= 100 ) return 'Big Even'
    if( n % 2 === 0 && n <= 100 ) return 'Small Even'
    if( n % 2 !== 0 ) return 'Odd'
    else return 'invalid input'
}
console.log(a(16))
console.log(a(200));    // "Big Even"
console.log(a(48));     // "Small Even"
console.log(a(77));     // "Odd"
console.log(a("hi"));   // "Invalid input"
console.log(a(true));   // "Invalid input"
