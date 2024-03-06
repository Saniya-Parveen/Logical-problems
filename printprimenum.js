//JavaScript Program to Print All Prime Numbers in an Interval

function printPrimeNumber(num){
    let prime = [];
    for(let i = 2; i <=num; i++){
        let isPrime = true;
        for(let j = 2; j<=Math.sqrt(i); j++){
            if(i % j===0){
                let isPrime = false;
                break;
            }
        }
        if(isPrime){
            prime.push(i);
        }
    }
    return prime;
}
const num = 20;
console.log(printPrimeNumber(num));
