/*
What .trim() Does
It removes whitespaces from the beginning and end of a string
NOT remove whitespaces in the middle
whitespaces:
 * Spaces: " "
 * Tabs: \t
 * New lines: \n
 * Any other invisible spacing characters
*/
// let says a-messy word/sentence, b-clean word/sentence
// so how to transform a to b?

// messy word
function n(a){
    let b = a.trim()
    let c = a.length, d =b.length
    console.log(`Trim\t: [${a}] | [${b}]`)          // hello
    console.log(`length\t: \t[${c}] | [${d}]`)
    console.log('\n')
}
// call a function
n('     hello       ')
n('     hello, world!       ')
n(' Javscript is    awesome!')      /* output: Javscript is    awesome! as trim only remove at start & last not middle */
