//JavaScript Program to Print the Fibonacci Sequence

// function fibonacci(n){
//     if(n===0){
//         return 0;
//     }
//     else if(n===1){
//         return 1;
//     }
//     let prevNum = 0;
//     let currNum = 1;
//     for(let i = 2; i <= n; i++){
//         let nextNum = prevNum + currNum;
//         prevNum = currNum;
//         currNum = nextNum;
//     }
//     return currNum;
// }
// const n = 5;
// console.log(fibonacci(n));


let prevNum = 0;
let currNum = 1;

console.log(prevNum); // Print the first Fibonacci number (0)
console.log(currNum); // Print the second Fibonacci number (1)

for (let i = 2; i <= 5; i++) {
    let nextNum = prevNum + currNum;
    console.log(nextNum); // Print the next Fibonacci number
    prevNum = currNum;
    currNum = nextNum;
}
