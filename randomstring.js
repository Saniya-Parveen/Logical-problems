//JavaScript Program to Generate Random String

const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789';
function generateString(length){
    let result = '';
    const characterLength = character.length;
    for(let i = 0; i < length; i++){
        result += character.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
} 
console.log(generateString(5));