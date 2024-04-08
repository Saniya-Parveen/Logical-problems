// JavaScript Program to Insert Item in an Array

function insertItem(array, item, position){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(i === position){
            newArray.push(item);
        }
        newArray.push(array[i])
    }
    return newArray;
}
const array = ['rose', 'lily', 'jasmine'];
const item = 'sunflower';
const position = 0;
console.log(insertItem(array, item, position));