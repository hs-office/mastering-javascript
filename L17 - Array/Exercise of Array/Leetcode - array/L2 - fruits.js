/*
 Use forEach to print:
 * apple
 * banana (my favorite)
 * mango
 */
let fruits = ['apple', 'banana', 'mango']

fruits.forEach((a) => {
    // console.log(a)
    if (a === 'banana') {
        console.log(`${a} (my favorite)`)
    }else{
        console.log(a)
    }
})

