// Rounding to N Decimal Places (as Number)
// Math.round() (Standard Rounding)
let a = 2.4567;
let rounded = Math.round(a* 100) / 100; // 2.46 (number)

// Math.floor() (Round Down)
let b = 2.4567;
let floored = Math.floor(b * 100) / 100; // 2.45 (number)

// Math.ceil() (Round Up)
let c = 2.4567;
let ceiled = Math.ceil(c * 100) / 100; // 2.46 (number)

// Number.EPSILON (Precision Fix)
let num = 0.1 + 0.2; // 0.30000000000000004
let rounded = Math.round((num + Number.EPSILON) * 100) / 100; // 0.3