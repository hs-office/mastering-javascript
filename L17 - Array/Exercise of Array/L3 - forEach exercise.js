let drinks = ['coffee', 'tea', 'juice'], i = 0

drinks.forEach((a) => {
        // print all
        console.log(a)
})

drinks.forEach((a, i) => {
    // print index + item
    console.log(`${i} : ${a}`)
})

drinks.forEach((a) => {
    // print all + I like
    console.log(`I like ${a}`)
})
