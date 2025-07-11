let animals = ['cat', 'dog', 'rabbit', 'hamster', 'parrot'];
// Remove 'rabbit' and 'hamster' using splice
animals.splice(2, 2)
console.log(animals)

// Add 'tiger'
animals.splice(animals.length, 0, 'tiger')
console.log(animals)

// Replace 'dog' with fish
animals.splice(1, 1, 'fish')
console.log(animals)