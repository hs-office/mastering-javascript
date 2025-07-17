// useful because real-world data (API, JSON) often looks like this
/*
 What are Nested Arrays / Nested Objects?
 Nested means:
 * An array inside an object
 * Or an object inside an array
 * Or more layers deep (object inside object, array inside array)
 */

// eg: array inside object
let user = {
    name: 'Alice',
    hobbies: ['reading', 'gaming', 'hiking']
}
console.log(user.hobbies[0])        // reading
console.log(user.hobbies)           // print all
console.log(user.hobbies.length)

// eg: object inside array
let users = [
    { name: 'Bob', skills: ['JavaScript', 'Python'] },
    { name: 'Eve', skills: ['Java', 'C++'] }
]
console.log(users[0].skills[1])                 // Python
console.log(users[1].name, users[1].skills)     // Eve [ 'Java', 'C++' ]

// eg: nested object inside object
let person = {
    name: 'Charlie',
    address: {
        city: 'New York',
        zip: '10001'
    }
}
console.log(person.address.city) // New York

