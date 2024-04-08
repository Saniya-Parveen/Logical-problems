// JavaScript Program to Remove Duplicates From Array

function removeDuplicate(arr){
    let uniqueArr = [];
    for(let i of arr){
        if(uniqueArr.indexOf(i) === -1){
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}
const arr = [1, 2, 3, 2, 3];
console.log(removeDuplicate(arr));

