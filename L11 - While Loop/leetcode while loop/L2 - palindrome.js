let a = 'madam', b = '', c = a.length - 1
while(c >= 0){
    b += `${a[c]}`
    c--
}
if(a == b){
    console.log(`${a} is palindrome`)
}else{
    console.log(`${a} is not palindrome`)
}