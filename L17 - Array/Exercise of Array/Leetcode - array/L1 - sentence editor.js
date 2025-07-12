const a = 'hello world javascript'
let b = a.split(' ')
console.log(b)              // change to array
b.shift()                   // remove first
console.log('Remove-first :' , b)

b.push('is fun')            // add last
console.log('add-last :', b)

b.splice(0, 1, 'code')      // replace
console.log('Replace-first :', b)