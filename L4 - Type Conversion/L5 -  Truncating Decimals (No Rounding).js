// Math.trunc() (Remove Decimals)
let a = 2.4567;
let m = Math.trunc(a * 100) / 100; // 2.45 (number)
console.log(m)

// Bitwise OR Trick (Fast but Limited)
let b = 2.4567;
let n = (b * 100) | 0 / 100; // 2.45 (number)
console.log(n)
