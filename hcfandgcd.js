//JavaScript Program to Find HCF or GCD

function HCF(num1, num2){
    let hcf = 1;
    for(let i = 1; i<=num1 && i<=num2; i++){
        if(num1 % i===0 && num2 % i===0){
            hcf = i;
        }
    }
    return hcf;
}
const num1 = 50;
const num2 = 30;
console.log(HCF(num1, num2));