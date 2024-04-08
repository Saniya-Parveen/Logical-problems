//JavaScript Program to Convert Objects to Strings

const person = {
    name: 'john',
    age: 30
}
const result = JSON.stringify(person);
console.log(result);
console.log(typeof result);