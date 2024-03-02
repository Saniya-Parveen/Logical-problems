/*let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(a,b);*/

function swap(a,b){
    return [a,b] = [b,a];
}
const a = 5;
const b = 10;
console.log(swap(a,b));