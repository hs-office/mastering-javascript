/*
 forEach() → Runs a function for each item in an array
 What it does:
  * Goes through every item in the array
  * Runs a function (your custom code) for each one
  * Doesn't return anything — just performs an action
 */
let colors = ['red', 'green', 'blue']

// print 1 by 1
colors.forEach(n => {
    console.log(n)
})

// modi
colors.forEach(a => {
    console.log(a.toUpperCase())
})

// logic
colors.forEach(n => {
    if (n === 'green') {
        console.log(`found ${n}`)
    }

})


