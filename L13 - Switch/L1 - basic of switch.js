/*
🧠 What is a switch statement?
The switch statement is used to perform different actions based on different conditions.
It’s a cleaner alternative to writing many if...else if...else
statements when checking the same variable.
 */
let a = 'blue'
switch(a) {
    case 'red':
        console.log('Red means courage')
        break
    case 'blue':
        console.log('Blue means powerfull')
        break
    case 'white':
        console.log('White means pure')
        break
    default:
        console.log('Interesthing info')
}
/*
🧩 What happens here?
 * The switch looks at the value of color.
 * If it's 'red', 'blue', or 'green', it runs the matching case.
 * If it doesn’t match any case, the default block runs.
 * break tells JavaScript to stop checking other cases after
   a match is found.
 */