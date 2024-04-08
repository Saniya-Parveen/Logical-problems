// JavaScript Program to Check Whether a String Contains a Substring

const str = 'JavaString is fun';
const subStr = 'fun';
if(str.includes(subStr)){
    console.log(`the string contains ${subStr}`);
}else{
    console.log(`The string does not contain ${subStr}`);
}