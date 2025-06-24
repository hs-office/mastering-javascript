let a = 0, b = 0
// for loop without upper limit
for (let i = 1; ; i++){
    if(i % 7 === 0 && i%11 === 0){
        console.log(`Found: ${i}`)
        a += i
        b++
    }
    if(b === 5) break
}console.log(`Sum: ${a}`)