//JavaScript Program to Find the Factors of a Number

function factorsofNumber(num){
    let factors = [];
    for ( let i = 1; i <= num; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}
const num = 12;
console.log(factorsofNumber(num));