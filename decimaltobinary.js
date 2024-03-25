//JavaScript Program to Convert Decimal to Binary

function decimalToBinary(decimal){
    if(decimal === 0){
        return 0;
    }
    let binary = '';
    while(decimal > 0){
        const remainder = decimal % 2;
        binary = remainder + binary;
        decimal = Math.floor(decimal/2);
    }
    return binary;
}
const decimalNum = 9;
const binaryNum = decimalToBinary(decimalNum);
console.log(binaryNum);