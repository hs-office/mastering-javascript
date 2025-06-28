function grade(b) {
    if(!isNaN(b)  && b >= 0 && b < 100){
        if(b < 40) return 'F'
        else if(b < 50) return 'D'
        else if(b < 60) return 'C'
        else if(b < 80) return 'B'
        else return 'A'

    }else return 'invalid'
}

console.log(grade(-1))
console.log(grade('a'))
console.log(grade(80))
console.log(grade(54))
console.log(grade(870))
console.log(grade(35))