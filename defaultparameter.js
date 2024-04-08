// JavaScript Program to Set a Default Parameter Value For a Function

function sum(x = 3, y = 6){
    return x + y;
}
console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());


// using previous parameter in default value expression

// let calculate = function(x = 15, y = x + 2) {
//     return x + y;
// }

// const result1 = calculate(10);
// console.log(result1);

// const result2 = calculate();
// console.log(result2);