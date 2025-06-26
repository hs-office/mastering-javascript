let a = 'madam', b = a.length - 1, c = ''
while(b >= 0){
    console.log(a[b])
    c += a[b]
    b--
}
console.log(`Reverse str: ${c}`)
if(c === a){
    console.log(`${a} is a palindrome`)
}else{
    console.log(`${a} not a palindrome`)
}