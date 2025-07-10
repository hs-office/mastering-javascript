/*
 pop() → Removes the last item from an array
 What it does:
 Removes the last item in the array and returns that item
 */
let colors = ['red', 'green', 'blue']
let removed = colors.pop()

console.log(colors)          // ['red', 'green']
console.log(removed)         // 'blue'

// if an array is empty, it returns undefiend
let a = ['hello']
console.log(a.pop())        // hello it returns that item
let b = a.pop()
console.log(b)              // undefined