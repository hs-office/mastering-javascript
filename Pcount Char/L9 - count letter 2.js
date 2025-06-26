const a = 'Hello, World!';
const b = {};

for (const c of a.toLowerCase()) {
    if (c >= 'a' && c <= 'z') {
        b[c] = (b[c] || 0) + 1;
    }
}

for (const [n, m] of Object.entries(b)) {
    console.log(`${n} : ${m}`);
}
