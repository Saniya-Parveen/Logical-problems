//JavaScript Program to Guess a Random Number

function randomNumber(){
    const random = Math.floor(Math.random() * 20)+1;
    return random;
}
console.log(randomNumber());
