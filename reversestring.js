//JavaScript Program to Reverse a String

function reverse(str){
    let newStr = '';
    for(let i = str.length -1 ; i >= 0; i--){
       newStr += str[i]
    }
    return newStr;
}
const str = "hello";
console.log(reverse(str));