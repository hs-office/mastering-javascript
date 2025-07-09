/*
let colors = ["red", "green", "blue"]
 // Print first color
 // Change "green" to "yellow"
 // Print all colors using a loop
 */
let colors = ['red', 'green', 'blue']
console.log(colors[0])      // print 1st color
console.log(colors[1] = 'yellow')

console.log('\nprint all colors:')
let a = colors.length, i = 0
while (i < a) {
    console.log(colors[i])
    i++
}