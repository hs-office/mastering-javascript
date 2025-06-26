let a = 'commitment', b = {}

for (let c of a) {
    b[c] = (b[c] || 0) + 1
}

for (let [n, m] of Object.entries(b)){
    console.log(`${n} : ${m}`)
}