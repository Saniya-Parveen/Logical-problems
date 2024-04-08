// JavaScript Program to Replace All Occurrences of a String

function replaceOccurrences(str, ch1, ch2){
    let newStr = str.split(ch1).join(ch2)
    return newStr;
}
const str = "hello world";
const ch1 = 'o';
const ch2 = 'a';
console.log(replaceOccurrences(str, ch1, ch2));