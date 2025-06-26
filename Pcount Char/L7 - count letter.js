const a = 'hello';
const b = {};

for (const c of a) b[c] = (b[c] || 0) + 1;

for (const [n, m] of Object.entries(b))
    console.log(`${n} : ${m}`)