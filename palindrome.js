//JavaScript Program to Check Whether a String is Palindrome or Not

function isPalindrome(str){
    let reverse = '';
    for(let i = str.length -1; i >= 0; i--){
        reverse += str[i];
    }
    return str === reverse;
}
const str = "racecar";
console.log(isPalindrome(str));