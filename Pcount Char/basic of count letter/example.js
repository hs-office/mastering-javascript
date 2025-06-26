const word = 'hi';
const letterCount = {}; // step 1

for (const letter of word) {       // step 2
    if (letterCount[letter] === undefined) {
        letterCount[letter] = 1;       // step 3
    } else {
        letterCount[letter] = letterCount[letter] + 1; // step 4
    }
}

console.log(letterCount);
