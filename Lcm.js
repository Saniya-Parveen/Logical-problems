//JavaScript Program to Find LCM

function gcd(a,b){
    if(b === 0){
        return a;
    }
    return gcd(b, a % b);
}
function lcm(a,b){
    return (a*b) /gcd(a,b)
}
const num1 = 14;
const num2 = 16;
console.log(lcm(num1,num2));