//JavaScript Program to Find the Sum of Natural Numbers

function naturalNum(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}
const num = 10;
console.log(naturalNum(num));