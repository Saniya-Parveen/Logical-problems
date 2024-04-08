// JavaScript Program to Split Array into Smaller Chunks

function splitIntoChunk(arr, chunk){
    let result = [];
    for(let i = 0; i < arr.length; i += chunk){
        let tempArr = arr.slice(i, i + chunk);
        result.push(tempArr);
    }
    return result;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8,];
const chunk = 2;
console.log(splitIntoChunk(arr, chunk));