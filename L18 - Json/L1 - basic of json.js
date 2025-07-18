// eg: js object
let user = {
    name: 'Alice',
    age: 25
}

// convert to json '{"name": "Alice", "age": 25}'
let a = JSON.stringify(user)
console.log(a)          // {"name":"Alice","age":25}

// convert back to js object
let cb = JSON.parse(a)
console.log(cb)          // { name: 'Alice', age: 25 }

