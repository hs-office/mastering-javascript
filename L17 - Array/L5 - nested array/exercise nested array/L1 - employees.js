let employees = [
    {
        name: 'John',
        address: { city: 'KL', zip: '50000' },
        skills: ['JavaScript', 'SQL']
    },
    {
        name: 'Jane',
        address: { city: 'Penang', zip: '10000' },
        skills: ['Python', 'Cypress']
    }
]

// print John's city (Expected: 'KL')
let jc = employees.find(n => n.name === 'John')
console.log(jc.address.city)            // KL

// print Jane's 2nd skill (Expected: 'Cypress')
let js = employees.find(n => n.name === 'Jane')
console.log(js.skills[1])                   // Cypress
console.log(employees[1].skills[1])         // Cypress

// filter employees who have 'SQL' skill (Expected: John)
let hs = employees.filter(n => n.skills.includes('SQL'))
console.log(hs)                 // joh info
let hsa = employees.find(n => n.skills.includes('SQL'))
console.log(hsa.name)             //John

// find employee who lives in 'Penang' (Expected: Jane)
let ep = employees.find(n => n.address.city.includes('Penang'))
console.log(ep.name)                // Jane


