//JavaScript Program to Find ASCII Value of Character

function asciiValue(character){
    const ascii = character.charCodeAt(0);
    return ascii;
}
const character = 'a';
console.log(asciiValue(character));