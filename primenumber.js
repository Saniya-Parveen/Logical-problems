//javaScript Program to Check Prime Number

function primeNumber(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){

        }
    }
    return true;
} 
const num = 1;
if(primeNumber(num)){
    console.log("it is Prime number");
} else{
    console.log("it is not Prime number");
}
