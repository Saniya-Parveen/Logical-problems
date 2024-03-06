//JavaScript Program to Check Armstrong Number
function Armstrong(number){
    let sum = 0;
    let temp = number;
    const originalNumber = number;
    while(temp > 0){
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp /10);
    }
    if(sum == originalNumber){
        return `${originalNumber} is a Armstrong number`;
        }else{
            return `${originalNumber} is not Armstrong number`;
        }
}
const number = 153;
console.log(Armstrong(number));
