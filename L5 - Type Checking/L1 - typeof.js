let a = 12, b = 'Mosh', c = true, d = null
// basic typeof
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

/*
 more on typeof
 * typeof 123        // "number"
 * typeof "hello"    // "string"
 * typeof true       // "boolean"
 *  typeof undefined  // "undefined"
 *  typeof null       // ❗ "object" (this is a bug in JS, known issue)
 * typeof [1, 2, 3]  // "object"
 * typeof {a:1}      // "object"
 * typeof function(){} // "function"
 */