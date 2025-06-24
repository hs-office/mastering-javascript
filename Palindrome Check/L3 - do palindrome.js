let a = 'kayak', b = a.length-1, c = 0, d =''
while (b >= c) {
    console.log(a[b])
    d += a[b]
    b--
}console.log(d)
if(a == d){
    console.log(`${d} is a palindrome`)
}else{
    console.log(`${d} not a palindrome`)
}