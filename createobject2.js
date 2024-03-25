//Create an Object using Instance of Object Directly

function createObject(){
    const person = new Object({
        name: 'john',
        age: 20,
        city: 'Mysore',
        hobbies: ['cricket', 'music', 'food'],
        greet: function(){
            console.log('hello world');
        },
        score: {
            maths: 90,
            science: 70
        }
    });
    return person;
}
const personObject = createObject();
console.log(personObject.hobbies);
personObject.greet;
console.log(personObject.score);