//Javascript Program to Check if a number is Positive, Negative, or Zero

function number(num){
    if(num > 0){
        return "positive";
    }
    else if(num === 0){
        return "zero";
    }
    else{
        return "negetive";
    }
    
}
const num = -2;
console.log(number(num));