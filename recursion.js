//JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sum(num){
    if(num > 0){
        return num + sum(num - 1);
    }else{
        return num;
    }
}
const num = 5;
console.log(sum(num));