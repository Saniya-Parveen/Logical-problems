//JavaScript Program to Find Factorial of Number Using Recursion

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

const number = 4;
const result = factorial(number);
console.log(result);