// JavaScript Program to Get Random Item From an Array

function getRandomItem(arr){
    const randomItem = Math.floor(Math.random()* arr.length);
    const item = arr[randomItem];
    return item;
}
const arr =[1, 'hello', 3, 5];
console.log(getRandomItem(arr));