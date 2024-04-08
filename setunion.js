// JavaScript Program to Illustrate Different Set Operations
// union operation

function union(a, b){
    let unionSet = new Set(a);
    for(let i of b){
        unionSet.add(i);
    }
    return unionSet;
}
const setA = new Set(['apple', 'grapes', 'banana']);
const setB = new Set(['mango', 'orange', 'apple']);
const result = union(setA, setB);
console.log(result);

