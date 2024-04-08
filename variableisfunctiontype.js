// JavaScript Program to Check If a Variable is of Function Type

function testVariable(variable){
    if(variable instanceof Function ) {
        console.log('the variable is of function type');
    }else{
        console.log('the variable is not function type ');
    }
}

const count = true;
const x = function(){
    console.log('hello world');
}
testVariable(count);
testVariable(x);