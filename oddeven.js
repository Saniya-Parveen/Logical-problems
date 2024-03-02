//Javascript Program to Check if a Number is Odd or Even
function oddorEven(num){
    if(num % 2 == 0){
        return "The number is even";
    }else{
        return "The number is odd";
    }
}
const num = 6;
console.log(oddorEven(num))