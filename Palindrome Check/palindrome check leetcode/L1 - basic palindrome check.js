/*Write a function that checks if a given string
is a palindrome (reads the same backward as forward,
ignoring case and non-alphanumeric characters).*/

let a = n =>{
    let b = n.length - 1, c =''
    while(b >= 0){
        c += a[b]
        b--
    }console.log(c)

}
//a('madam')
console.log(a('madam'))