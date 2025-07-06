let a = 'madam', b = a.length-1, c = ''
while (b >= 0) {
    c += a[b]
    b--
}console.log(`reverse of ${a}: ${c}`)
if(c == a){
    console.log(`${c} is a palindrome of ${a}`)
}else{
    console.log(`${c} is not palindrome of ${a}`)
}