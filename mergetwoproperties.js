// JavaScript Program to Merge Property of Two Objects

function mergeObject(obj1, obj2){
    return Object.assign({}, obj1, obj2);
}
const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
console.log(mergeObject(obj1, obj2));

