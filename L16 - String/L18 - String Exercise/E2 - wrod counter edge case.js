// to fix the edge case from E1
function a(b){
    let trim_something = b.trim()        // remove extra space
    if (trim_something == '')return 0
    return trim_something.split(' ').length

    let c = trim_something.split(' ')
    let d = c.length
    console.log(`Num of word: [${d}]`)
    console.log('\n')
}
console.log(a("Hello World JavaScript")); // 3
console.log(a(""));                      // 0
console.log(a("   "));                   // 0