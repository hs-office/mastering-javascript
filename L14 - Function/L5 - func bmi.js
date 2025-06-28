function bmi(w,h){
    let d = w/((h/100)**2)
    if(d < 18.5) return 'underweight'
    else if (d < 24.9) return 'normal'
    else if (d < 29.9) return 'overweight'
    else return 'obese'
}

console.log(bmi(67, 160))