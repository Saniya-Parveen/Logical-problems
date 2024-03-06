//JavaScript Program to Check if the Numbers Have Same Last Digit
function sameLastDigit(num1, num2, num3){
    const result1 = num1 % 10;
    const result2 = num2 % 10;
    const result3 = num3 % 10;
    if(result1 === result2 && result1 === result3){
        return `${result1},${result2}, and ${result3} have same last digit`;
    }else{
        return `${result1},${result2}, and ${result3} have different last digit`;
    }
}
const num1 = 35;
const num2 = 5;
const num3 = 56;
console.log(sameLastDigit(num1, num2, num3)); 