//Create an object using Constructor Function

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person);   

console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);