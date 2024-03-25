// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

function checkStr(str){
    if(str.startsWith('S') && str.endsWith('g')){
        return('string starts with S and ends with g');
    }
    else if(str.startsWith('S')){
        return('string starts with S does not end with g');
    }
    else if(str.endsWith('g')){
        return('string does not start with S but ends with g');
    }else{
        return('does not start with S and does not end with g');
    }
   
}
const str = 'String';
console.log(checkStr(str));