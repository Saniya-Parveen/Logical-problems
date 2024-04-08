// JavaScript Program to Create Two Dimensional Array

function twoDimentionArray(a, b){
    let arr = [];
    for(let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            arr[i] = [];
        }
    }
    for(let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            arr[i][j] = j;
        }
    }
    return arr;
}

const a = 2;
const b = 3;
console.log(twoDimentionArray(a, b));