let a = 'apple', b = '', c = a.length - 1
while(c >= 0 ){
    b += `${a[c]}`
    //console.log(a[c])
    c--
}console.log(b)