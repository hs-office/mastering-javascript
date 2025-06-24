let a = 0;
let count = 0;

for (let i = 0; ; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        console.log(`Found: ${i}`);
        a += i;
        count++;
    }

    if (count === 5) break;
}

console.log(`Sum: ${a}`);