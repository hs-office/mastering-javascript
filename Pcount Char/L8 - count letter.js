const a = 'aaabbc';
const b = { a: 0, b: 0, c: 0 };

for (const c of a) if (b[c] !== undefined) b[c]++;

for (const d in b)
    console.log(`${d} : ${b[d]}`);