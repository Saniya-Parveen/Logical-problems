// JavaScript Program to Remove a Property from an Object

function object(){
    const person = {
        name: 'john',
        age: 26,
        city: 'södertälje',
        hobbies: ['cricket', 'cooking']
    
    };
    return person;
}
const personObject = object();
delete personObject.hobbies[0];
console.log(personObject);