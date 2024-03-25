// JavaScript Program to Count the Number of Keys/Properties in an Object
function numberOfKeys(obj){
    return Object.keys(obj).length;
}
const person ={
    name: 'John',
    age: 30,
    id: 1
};
console.log(numberOfKeys(person));