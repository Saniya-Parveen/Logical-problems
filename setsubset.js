// set subset operation

function subSet(setA, setB){
    for(let i of setB){
        if(!setA.has(i)){
            return false;
        }
    }
    return true;
}
const setA = new Set(['apple', 'grapes', 'banana']);
const setB = new Set(['banana', 'apple']);
const result = subSet(setA, setB);
console.log(result);