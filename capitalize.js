//JavaScript Program to Convert the First Letter of a String into UpperCase

// function upperCase(str){
//     let newStr = '';
//     for(let i = 0; i < str.length; i++){
//         if(i === 0){
//             newStr += str[i].toUpperCase();
//         }else{
//             newStr += str[i];
//         }
//     }
//     return newStr

// }
// const str = "hello world";
// console.log(upperCase(str));

function capitalizeFirstLetter(str){
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}
const str = "hello";
console.log(capitalizeFirstLetter(str));