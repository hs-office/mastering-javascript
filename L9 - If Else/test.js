let a = 76, b = 'a'//1.78
let c = 0
// convert to num
a = Number(a)
b = Number(b)

// check input
if( ((typeof a == 'number' || !isNaN(a)) && a<=0 ) && (typeof b == 'number' || !isNaN(b) && b<=0) ){
    c = a / (b*b)
    console.log(c)
}else{
    console.log('try again')
}
