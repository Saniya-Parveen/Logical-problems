// JavaScript Program to Extract Given Property Values from Objects as Array

function extractValue(arr, prop){
    let extractedValue = [];
    for(let i = 0; i < arr.length; i++){
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}
const objArray = [{a: 1, b: 2}, {a: 3, b:4}, {a: 8, b: 9}];

const result = extractValue(objArray, 'a');
console.log(result);