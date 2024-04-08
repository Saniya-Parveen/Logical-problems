// intersection opereation

function intersection(setA, SetB){
    let intersectionSet = new Set();
    for(let i of setB){
        if(setA.has(i)){
            intersectionSet.add(i);
        }
       
    }
    return intersectionSet;
}
const setA = new Set(['apple', 'grapes', 'banana']);
const setB = new Set(['mango', 'orange', 'apple']);
const result = intersection(setA, setB);
console.log(result);
