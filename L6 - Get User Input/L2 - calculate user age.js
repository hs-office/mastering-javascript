const a = require('prompt-sync')()

let b = Number(a('what year you are born? ')), c = 2025, d = 0
d = (2025 - b) + 1
console.log(`Next year, you will be: ${d}`)