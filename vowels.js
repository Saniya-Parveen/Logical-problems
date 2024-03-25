//JavaScript Program to Count the Number of Vowels in a String

function vowels(str, vowel){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
        
    }
    return count;
}
const str = 'hello world';
const vowel = ['a','e','i','o','u'];
console.log(vowels(str, vowel));