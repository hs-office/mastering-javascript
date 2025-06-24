const a = require('prompt-sync')();

let b = Number(a('What year were you born? '));
let c = 2025;
let d = 0;

if (!isNaN(b)) {
    d = (c - b) + 1;
    console.log(`Next year, you will be: ${d}`);
} else {
    console.log("Not applicable");
}
