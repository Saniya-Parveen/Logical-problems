// JavaScript Program to Append an Object to An Array

function appendObject(array, obj){
    array.push(obj);
    console.log(array);
}
let arr = [1, 2, 3];
let object = {x:12, y:8};
appendObject(arr, object);