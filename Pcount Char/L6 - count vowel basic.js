let a = 'education', b = a.length-1, c = 0, d= 0, e = ['a','e', 'i']
while (c <= b) {
    if(a[c] == 'a' || a[c] == 'e' || a[c] == 'i' || a[c] == 'o'|| a[c] == 'u'){
        d++
    }
    c++
}console.log(d)