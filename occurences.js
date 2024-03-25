//JavaScript Program to Check the Number of Occurrences of a Character in the String

function numberOfOccurrences(str, ch){
    for(let i = 0; i < str.length; i++){
        if(str[i] === ch){
            ch = i;
        }
    }
    return ch;

}
const str = 'hello';
const ch = 'e';
console.log(numberOfOccurrences(str, ch));