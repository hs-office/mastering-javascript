let products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Coffee Mug', price: 15, category: 'Kitchen' },
    { name: 'Notebook', price: 10, category: 'Stationery' },
    { name: 'Pen', price: 2, category: 'Stationery' }
]

// Q1: find the object where name is 'Phone'
let Q1 = products.find(p => p.name === 'Phone')
console.log(Q1)                     // { name: 'Phone', price: 800, category: 'Electronics' }

// Q2: filter only products from 'Stationery' category
let Q2 = products.filter(p => p.category === 'Stationery')
console.log(Q2)

// Q3: is there any product price > 1000?
let Q3 = products.some(p => p.price > 1000)
console.log(Q3)

// Q4: Do all products include the letter 'o' in their name?
let Q4 = products.every(p => p.name.includes('o'))
console.log(Q4)