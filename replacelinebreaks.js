// JavaScript Program to Replace All Line Breaks with <br></br>

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;
const newString = string.split("\n").join("<br>");
console.log(newString);