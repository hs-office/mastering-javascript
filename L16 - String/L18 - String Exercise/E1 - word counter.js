// declare the sentence
let a = 'Hello World JavaScript'
// write a function
function b(a){
    let c = a.split(' ')
    let d = c.length
    console.log(`Num of word: ${d}`)
}

// call the function
b(a)
// edge case: should be 0 but the system still counts
b('')
b('  ')
b(' hello ')

// try to fix that in E2