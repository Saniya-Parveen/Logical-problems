// JavaScript Program to Compare Elements of Two Arrays

// function compareElements(arr1, arr2){
//     const result = JSON.stringify(arr1) === JSON.stringify(arr2);
//     if(result){
//         console.log("the two arrays are same");
//     }else{
//         console.log("the two arrays are different");
//     }
// }
// const arr1 = [1, 3, 5, 7];
// const arr2 = [1, 3, 5, 7];
// console.log(compareElements(arr1, arr2));

let arr1 = [1, 3, 4, 6];
let arr2 = [1, 3, 4, 6];
let areEqual = true;

if (arr1.length !== arr2.length) {
    areEqual = false;
} else {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            areEqual = false;
            break; 
        }
    }
}

if (areEqual) {
    console.log("The arrays are the same.");
} else {
    console.log("The arrays are different.");
}

