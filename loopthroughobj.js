// JavaScript Program to Loop Through an Object

function loopthroughObject(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
loopthroughObject(person);