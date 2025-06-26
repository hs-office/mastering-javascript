const a = require('prompt-sync')()
let b = a('Interesting fact about animal:\n' +
    '1. sea elephant\n' +
    '2. sea leopard\n' +
    '3. polar bear\n' +
    'Which one do you want to know? ')

switch (b.toLowerCase()) {
    case '1':
    case 'sea elephant':
        console.log('Did you know? Sea elephant is the largest animal on land in Arctic\n' +
            'and bigger than a polar bear.')
        break
    case '2':
    case 'sea leopard':
        console.log('Did you know? Sea leopard is a great aquatic predator.')
        break
    case '3':
    case 'polar bear':
        console.log('Did you know? Polar bear can stand on two feet.')
        break
    default:
        console.log('Hmm.. that\'s interesting!')
        break
}
