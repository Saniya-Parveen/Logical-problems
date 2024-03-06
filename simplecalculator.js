function calculator(num1, num2, operator){
    if (operator == "+"){
        return num1 + num2;
    }
    else if(operator == "-"){
        return num1 - num2;
    }
    else if(operator == "/"){
        return num1 / num2;
    }
    else{
        return num1 * num2;
    }
}
const num1 = 3;
const num2 = 6;
const operator = "+";
console.log(calculator(num1, num2, operator));



















