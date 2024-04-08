// JavaScript Program To Perform Intersection Between Two Arrays

function Intersection(arr1, arr2){
    let newArray = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            newArray.push(arr1[i]);

        }
       
    }
    return newArray;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
console.log(Intersection(arr1, arr2));