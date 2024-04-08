// JavaScript Program to Remove Specific Item From an Array

function removeSpecificItem(array, n){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== n){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = removeSpecificItem([1, 2, 3, 4, 5], 2);
console.log(result);