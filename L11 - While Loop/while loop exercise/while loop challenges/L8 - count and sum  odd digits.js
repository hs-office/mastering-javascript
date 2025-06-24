let a = '48253', b = 0, c = 0, d = 0
while(b < a.length) {
    if(a[b]%2 != 0){
        c += Number(a[b])
        d ++
    }
    b++
}console.log(`Num of Odd: ${d}\nSum: ${c}`)