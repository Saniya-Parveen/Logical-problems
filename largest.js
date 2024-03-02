//JavaScript Program to Find the Largest Among Three Numbers
function lagrestNumber(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return "num1 is largest";
    }
    else if(num2>num1 && num2>num3){
        return "num2 is largest";
    }
    else{
        return "num3 is largest";
    }

}
const num1 = 4;
const num2 = 7;
const num3 = 1;
console.log(lagrestNumber(num1, num2, num3));