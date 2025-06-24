let a = 'a man, a plan, a canal, Panama', b = a.length-1, c = '', d =  ''
let i = 0
a = a.toLowerCase()
// create new word
while( i <= b){
    // a ~ ignoring space and comma
    if(a[i] >= 'a' && a[i] <= 'z'){
        d += a[i]
    }
    i++
}console.log(`New word: ${d}`) // new a
// reverse the word
while(b >= 0){
    // c ~ reverse
    if(a[b] >= 'a' && a[b] <= 'z'){
        c += a[b]
    }

    b--
}console.log(`Reverse word: ${c}`)

if(d == c){
    console.log('Palindrome')
}else{
    console.log('Not a palindrome')
}