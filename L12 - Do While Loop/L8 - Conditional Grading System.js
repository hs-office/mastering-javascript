let a =require('prompt-sync')()
let b, n = 0
do{
    b = Number(a('Score: '))


}while( ( b > 100 || b < 0 ) || isNaN(b))
if(b >= 80){
    console.log('A')
}else if(b >=  60){
    console.log('B')
}else if(b >= 50){
    console.log('C')
}else if(b >= 40){
    console.log('D')
}else{
    console.log('F')
}