let a = 'banana', b = '', c = a.length - 1, d = 0
while(c >= 0){
    //console.log(a[c])
    if(a[c] == 'a'){
        d++
    }
    c--
}console.log(`a in ${a} : ${d}`)