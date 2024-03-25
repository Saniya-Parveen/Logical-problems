// JavaScript Program to Clone a JS Object

function cloneObject(obj){
    return {...obj };
}

const orgobject = {name: 'john', age: 30};
const cloneObj = cloneObject(orgobject);

console.log(orgobject);
console.log(cloneObj);