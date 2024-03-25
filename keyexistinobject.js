// JavaScript Program to Check if a Key Exists in an Object

const person = {
    id: 1,
    name: 'john',
    city: 'bangalore'
}
const hasKey = 'age' in person;
if(hasKey){
    console.log('the key exists');
}else{
    console.log('the key does not exist');
}