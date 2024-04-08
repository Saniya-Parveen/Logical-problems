// Javascript Program to Generate a Random Number Between Two Numbers

// function randomNum(){
//     let randomNumber = Math.floor(Math.random()*(20-1))+1;
//     console.log(randomNumber);
// }    
// randomNum();


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let minNumber = 1;
let maxNumber = 20;
let randomNumber = generateRandomNumber(minNumber, maxNumber);
console.log("Random number between", minNumber, "and", maxNumber, ":", randomNumber);

