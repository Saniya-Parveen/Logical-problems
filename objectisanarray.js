// JavaScript Program to Check if An Object is An Array

function checkObj(arr){
    const result = Array.isArray(arr);
    if(result){
        console.log(`[${arr}] is an Array`);
    }else{
        console.log(`[${arr}] not an Array`);
    }
}
const arr = [1, 2, 3];
checkObj(arr);