// difference operation

function difference(setA, setB){
    let differenceSet = new Set(setA);
    for(let i of setB){
        differenceSet.delete(i)
    }
    return differenceSet;
}
const setA = new Set(['apple', 'grapes', 'banana']);
const setB = new Set(['mango', 'orange', 'apple']);
const result = difference(setA, setB);
console.log(result);
