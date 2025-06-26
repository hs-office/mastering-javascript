let a = 'hello', b = {}
for(let c of a) b[c] = (b[c] || 0) + 1      // Count each letter

for (const [n, m] of Object.entries(b))     // Print each letter and its coun
    console.log(`${n} : ${m}`)