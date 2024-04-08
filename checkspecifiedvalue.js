// JavaScript Program to Check if An Array Contains a Specified Value

function specifiedValue(array, n){
    let hasValue = false;
    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            hasValue = true;
        }
    }
    return hasValue;
}
const array = ['I am', 'learning', 'javascript'];
const n = 'I am';
console.log(specifiedValue(array, n))





// const array = ['you', 'will', 'learn', 'javascript'];
// const hasValue = array.includes('javascript');
// if(hasValue) {
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contain a value.');
// }


